/* 旬考 — the ten-day examination. It reuses the review engine, so the thing
   worth testing is what is different: the selection is deterministic and
   worldwide, the grade is right, the first attempt is recorded and later ones
   are not, and none of it disturbs the ordinary review queue. */
const { chromium } = require(process.env.PW||'playwright');
const R = 'file:///home/claude/site/';
const bad = [];

const seed = `(() => { const rev={};
  for(let i=1;i<=8;i++){ const id=String(i).padStart(2,'0');
    ['dx1','dx2','dx3','look','pulse','tech'].forEach(k=>{ rev['c:'+id+':'+k]={n:1,d:0,lbl:'Chapter '+id}; }); }
  try{ localStorage.setItem('apricot-grove', JSON.stringify(
    {v:2,char:'yan',mode:'student',review:rev,rounds:{},flags:{prologueDone:true,chapter01Done:true}})); }catch(e){}
})()`;

/* Options are shuffled on render — as they should be — so play by matching the
   text of the correct option rather than by its index in the model. */
const playThrough = async (p, howToAnswer) => {
  const n = await p.evaluate(() => QUEUE.length);
  for (let i = 0; i < n; i++) {
    await p.evaluate(({ i, howToAnswer }) => {
      const it = QUEUE[idx];
      const want = howToAnswer === 'right'
        ? it.opts.find(o => o.ok)
        : (i === 0 ? it.opts.find(o => o.ok) : it.opts.find(o => !o.ok) || it.opts[0]);
      const els = [...document.querySelectorAll('#opts .opt')];
      const hit = els.find(e => e.textContent.trim().indexOf(String(want.t).trim().slice(0, 24)) === 0) || els[0];
      hit.click();
    }, { i, howToAnswer });
    await p.waitForTimeout(120);
    await p.click('#next'); await p.waitForTimeout(140);
  }
};

(async () => {
  const b = await chromium.launch({executablePath: process.env.CHROME||'/opt/pw-browsers/chromium'});

  /* 1 · a fresh round: ten questions, deterministic, gradeable */
  let p = await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror', e => bad.push('JS error: ' + e));
  await p.addInitScript(seed);
  await p.goto(R + 'review.html?m=rounds'); await p.waitForTimeout(1500);

  const len = await p.evaluate(() => QUEUE.length);
  if (len !== 10) bad.push('a round drew ' + len + ' questions, expected 10');
  const a = await p.evaluate(() => QUEUE.map(q => q.q));
  await p.reload(); await p.waitForTimeout(1500);
  const a2 = await p.evaluate(() => QUEUE.map(q => q.q));
  if (JSON.stringify(a) !== JSON.stringify(a2))
    bad.push('the same round produced different questions on reload — it is not deterministic');

  await p.click('#go'); await p.waitForTimeout(250);
  await playThrough(p, 'right');
  const mark = (await p.textContent('#doneN')).trim();
  const line = (await p.textContent('#doneLine')).trim();
  if (mark !== '甲上') bad.push('a clean sheet graded ' + mark + ', expected 甲上');
  if (!/10 \/ 10/.test(line)) bad.push('a clean sheet reported "' + line + '"');
  const rec = await p.evaluate(() => JSON.parse(localStorage.getItem('apricot-grove')).rounds);
  if (!rec || rec.best !== 10 || rec.done !== 1)
    bad.push('the round was not recorded correctly: ' + JSON.stringify(rec));
  await p.close();

  /* 2 · a round already sat says so, and a second attempt is not recorded */
  p = await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror', e => bad.push('JS error: ' + e));
  /* addInitScript re-runs on every navigation, so a value written into
     localStorage between loads is wiped by the next one. Read the round number
     first, then seed a page whose init script already contains it. */
  await p.addInitScript(seed);
  await p.goto(R + 'review.html?m=rounds'); await p.waitForTimeout(900);
  const rn = await p.evaluate(() => ROUND_N);
  await p.close();
  p = await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror', e => bad.push('JS error: ' + e));
  await p.addInitScript(seed.replace('rounds:{}', 'rounds:{last:' + rn + ',done:1,best:9}'));
  await p.goto(R + 'review.html?m=rounds'); await p.waitForTimeout(1500);
  const how = await p.textContent('#how');
  if (!/already sat/i.test(how)) bad.push('a round already sat did not say so: "' + how.trim().slice(0,60) + '"');
  await p.click('#go'); await p.waitForTimeout(250);
  await playThrough(p, 'wrong');
  const note = await p.textContent('#doneNote');
  if (!/was not recorded/i.test(note)) bad.push('a repeat attempt did not say it was practice only');
  const rec2 = await p.evaluate(() => JSON.parse(localStorage.getItem('apricot-grove')).rounds);
  if (rec2.best !== 9 || rec2.done !== 1)
    bad.push('a repeat attempt overwrote the record: ' + JSON.stringify(rec2));
  await p.close();

  /* 3 · the ordinary review queue is untouched */
  p = await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror', e => bad.push('JS error: ' + e));
  await p.addInitScript(seed);
  await p.goto(R + 'review.html'); await p.waitForTimeout(1400);
  if (!/due/i.test(await p.textContent('#dueLine'))) bad.push('review mode no longer reports what is due');
  if (await p.$eval('#go', n => n.hidden)) bad.push('review mode has nothing to begin');
  await p.close();

  /* 4 · a player with nothing studied is told why, not shown an empty exam */
  p = await b.newPage({viewport:{width:390,height:844}});
  await p.addInitScript(`try{localStorage.setItem('apricot-grove',JSON.stringify({v:2,char:'yan',mode:'student'}))}catch(e){}`);
  await p.goto(R + 'review.html?m=rounds'); await p.waitForTimeout(900);
  if (!(await p.$eval('#go', n => n.hidden))) bad.push('an empty round still offered a Begin button');
  if (!/Not enough studied/i.test(await p.textContent('#how'))) bad.push('an empty round did not explain itself');
  await p.close();

  /* 5 · the town button follows the same rule as Review: it appears only when
        a round is genuinely open, and goes away once it has been sat. */
  const townButton = async (seedStr) => {
    const q = await b.newPage({viewport:{width:390,height:844}});
    q.on('pageerror', e => bad.push('JS error: ' + e));
    await q.addInitScript(seedStr);
    await q.goto(R + 'index.html'); await q.waitForTimeout(700);
    const hidden = await q.$eval('#rdBtn', n => n.hidden);
    const text = hidden ? '' : (await q.textContent('#rdBtn')).replace(/\s+/g, ' ').trim();
    await q.close();
    return { hidden, text };
  };
  const bare = `try{localStorage.setItem('apricot-grove',JSON.stringify({v:2,char:'yan',mode:'student',flags:{prologueDone:true}}))}catch(e){}`;
  const fresh = await townButton(bare);
  if (!fresh.hidden) bad.push('the Rounds button showed for a player who has studied nothing');

  const studied = await townButton(seed);
  if (studied.hidden) bad.push('the Rounds button stayed hidden with a round open and plenty studied');
  else if (!/Rounds are open/.test(studied.text)) bad.push('the Rounds button says "' + studied.text + '"');

  const sat = await townButton(seed.replace('rounds:{}', 'rounds:{last:' + rn + ',done:1,best:7}'));
  if (!sat.hidden) bad.push('the Rounds button was still offered after the round had been sat');

  /* 6 · the endgame. With every chapter finished the story button must point at
        something live — a round, a due review, today's case — not at a replay. */
  /* Read the chapter count from the index rather than typing it. A hardcoded
     26 stopped being true the moment chapter 27 shipped, and a stale number in
     a test does not fail honestly — it fails as if the product broke. */
  const fs = require('fs'), vm = require('vm');
  const sbx = {window:{}};
  vm.runInNewContext(fs.readFileSync('/home/claude/site/data/chapter-index.js','utf8'), sbx);
  const ALL_CH = sbx.window.AG_CHAPTER_INDEX.map(c => c.id);

  const finished = (roundsJson, dcLast, revJson) => `(() => {
    const flags={prologueDone:true};
    ${JSON.stringify(ALL_CH)}.forEach(id => flags['chapter'+id+'Done']=true);
    try{ localStorage.setItem('apricot-grove', JSON.stringify(
      {v:2,char:'yan',mode:'student',flags,review:${revJson},rounds:${roundsJson},
       dc:{last:'${dcLast}',streak:0,solved:0,results:{}}})); }catch(e){}
  })()`;
  const retired = JSON.stringify(Object.fromEntries(
    Array.from({length: 30}, (_, i) => ['c:' + String(i+1).padStart(2,'0') + ':dx1', {n:4, d:999999}])));
  const storyStep = async (seedStr) => {
    const q = await b.newPage({viewport:{width:390,height:844}});
    q.on('pageerror', e => bad.push('JS error: ' + e));
    await q.addInitScript(seedStr);
    await q.goto(R + 'index.html'); await q.waitForTimeout(700);
    const step = await q.evaluate(() => nextChapter());
    await q.close();
    return step;
  };
  const openRound = await storyStep(finished('{}', '', retired));
  if (!/rounds/.test(openRound.href)) bad.push('with a round open the story button went to ' + openRound.href);

  const noRound = await storyStep(finished('{last:' + rn + ',done:1,best:9}', '', retired));
  if (!/dailycase/.test(noRound.href))
    bad.push('with the round sat and nothing due the story button went to ' + noRound.href + ', expected the daily case');

  const dueRev = JSON.stringify({'c:01:dx1': {n:1, d:0}, 'c:02:dx1': {n:1, d:0}});
  const withDue = await storyStep(finished('{last:' + rn + ',done:1,best:9}', '', dueRev));
  if (!/review\.html$/.test(withDue.href))
    bad.push('with questions due the story button went to ' + withDue.href + ', expected review');

  await b.close();
  if (bad.length) { bad.forEach(x => console.log('  ✗ ' + x)); process.exitCode = 1; }
  else console.log('  ✅ 旬考: 10 deterministic questions · 甲上 on a clean sheet · first attempt recorded, '
    + 'repeats are practice · review queue untouched · empty state explained · town button opens and closes · the endgame points somewhere live');
})();
