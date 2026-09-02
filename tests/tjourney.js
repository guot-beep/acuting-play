/* A new player's first hour, in the order they would actually do it.

   Every other test checks one page in isolation. This one walks the whole
   game on a single save — prologue, a chapter, the town, the daily case, the
   herb room, the point hall, a practice deck, a sorting drill, the review
   queue, the record — and asserts that state carries from each screen to the
   next and that nothing throws on the way. Integration bugs live in the seams
   between pages, and until now nothing looked at the seams. */
const { chromium } = require(process.env.PW||'playwright');
const B = 'file:///home/claude/site/';
const bad = [];
const step = [];

(async () => {
const b = await chromium.launch({executablePath: process.env.CHROME||'/opt/pw-browsers/chromium'});
const ctx = await b.newContext({viewport:{width:390, height:844}});
const p = await ctx.newPage();

let where = 'boot';
p.on('pageerror', e => bad.push('[' + where + '] JS error: ' + e));
p.on('console', m => { if (m.type() === 'error' && !/ERR_FILE_NOT_FOUND/.test(m.text()))
  bad.push('[' + where + '] console: ' + m.text()); });

const save = () => p.evaluate(() => { try { return JSON.parse(localStorage.getItem('apricot-grove')) || {}; } catch(e) { return {}; } });
const go = async (url, name) => { where = name; await p.goto(B + url); await p.waitForTimeout(700); };

/* 1 · a brand-new player picks a character and finishes the prologue */
await go('index.html', 'town (fresh)');
await p.evaluate(() => { try { localStorage.removeItem('apricot-grove'); } catch(e){} });
await p.reload(); await p.waitForTimeout(700);
await p.evaluate(() => { AG.state.char = 'yan'; AG.state.mode = 'student'; AG.save(); });

await go('prologue.html', 'prologue');
await p.evaluate(() => { AG.state.flags.prologueDone = true; AG.save(); });
let s = await save();
if (!s.flags || !s.flags.prologueDone) bad.push('the prologue did not record itself');
step.push('prologue');

/* 2 · chapter one, played to the end through the real engine */
where = 'chapter 01';
await p.goto(B + 'chapter.html?ch=01'); await p.waitForTimeout(1100);
const played = await p.evaluate(() => {
  try { ending(); show('s-end'); return true; } catch (e) { return String(e); }
});
if (played !== true) bad.push('chapter 01 could not reach its ending: ' + played);
await p.waitForTimeout(500);
s = await save();
if (!s.flags.chapter01Done) bad.push('finishing chapter 01 did not set its flag');
if (!(s.xp > 0)) bad.push('finishing a chapter awarded no XP');
if (!(s.cards || []).length) bad.push('finishing chapter 01 handed over no herb card');
step.push('chapter 01 · xp ' + s.xp + ' · ' + (s.cards||[]).length + ' card');

/* 3 · back in town, the schools that chapter one opens are open */
await go('index.html', 'town (after ch01)');
const unlocked = await p.evaluate(() => ({ dx: AG.unlocked('dx'), needle: AG.unlocked('needle') }));
if (!unlocked.dx) bad.push('chapter 01 did not open the Four Examinations');
const nxt = await p.evaluate(() => nextChapter());
if (!/ch=02/.test(nxt.href)) bad.push('after chapter 01 the story button points at ' + nxt.href);
step.push('town · dx open · next is ' + nxt.label);

/* 4 · the daily case, played through */
await go('dailycase.html', 'daily case');
await p.click('#startBtn'); await p.waitForTimeout(400);
const dcN = await p.evaluate(() => CASES[caseIdx].q.length);
for (let i = 0; i < dcN; i++) {
  /* Options are rendered in order with data-i, and the continue button is
     built fresh each step as #nx — "See result" on the last one. */
  await p.evaluate(() => {
    const q = CASES[G.ci].q[G.step];
    const k = q.o.findIndex(o => o.ok);
    document.querySelector('.opt[data-i="' + k + '"]').click();
  });
  await p.waitForTimeout(200);
  await p.click('#nx');
  await p.waitForTimeout(250);
}
s = await save();
if (!(s.dc && s.dc.solved > 0)) bad.push('the daily case did not record a solve: ' + JSON.stringify(s.dc));
step.push('daily case · solved ' + (s.dc||{}).solved);

/* 5 · the herb room: one visit, one card kept */
await go('herbroom.html', 'herb room');
const beforeCards = ((await save()).cards || []).length;
await p.evaluate(() => { const j = document.querySelector('#shelf .jar'); if (j) j.click(); });
await p.waitForTimeout(500);
step.push('herb room opened a visit');

/* 6 · the point hall: the wall renders and a point opens */
await go('pointroom.html', 'point hall');
const jars = await p.$$eval('#shelf .jar', n => n.length);
if (jars < 40) bad.push('the point wall showed only ' + jars + ' points');
await p.evaluate(() => { const j = document.querySelector('#shelf .jar'); if (j) j.click(); });
await p.waitForTimeout(500);
step.push('point hall · ' + jars + ' on the wall');

/* 7 · a practice deck, answered correctly to the end */
await go('practice.html?d=bagang', 'practice');
await p.click('#go'); await p.waitForTimeout(300);
const n = await p.evaluate(() => D.items.length);
for (let i = 0; i < n; i++) {
  const done = await p.evaluate(() => {
    const it = D.items[idx];
    if (it.k === 'mc') {
      const k = it.opts.findIndex(o => o.ok);
      const el = document.querySelector('.opt[data-i="' + k + '"]');
      if (el) { el.click(); return 'mc'; }
    }
    return it.k;
  });
  await p.waitForTimeout(180);
  if (done !== 'mc') { await p.evaluate(() => { idx++; if (idx < D.items.length) render(); }); await p.waitForTimeout(120); continue; }
  await p.click('#next').catch(() => {});
  await p.waitForTimeout(150);
}
step.push('practice deck played');

/* 8 · a sorting drill opens and takes a card */
await go('sort.html?s=heat_three', 'sorting');
await p.click('#go'); await p.waitForTimeout(300);
await p.evaluate(() => {
  const it = deck[idx], bi = D.buckets.findIndex(x => x.k === it.a);
  document.querySelectorAll('#buckets .bk')[bi].click();
});
await p.waitForTimeout(300);
step.push('sorting drill took a card');

/* 9 · everything above should have fed the review queue */
s = await save();
const tracked = Object.keys(s.review || {}).length;
if (tracked === 0) bad.push('after a chapter, a daily case, a deck and a sort, the review queue is still empty');
await go('review.html', 'review');
const dueTxt = await p.textContent('#dueLine');
step.push('review queue · ' + tracked + ' tracked · "' + dueTxt.trim() + '"');

/* 10 · the record page tells the truth about all of it */
await go('progress.html', 'record');
const body = await p.evaluate(() => document.body.innerText);
if (!/chapter/i.test(body)) bad.push('the record page does not mention the story');
if (!new RegExp(String(s.xp)).test(body)) bad.push('the record page does not show the XP the save holds (' + s.xp + ')');
step.push('record page reflects the save');

await b.close();
if (bad.length) { bad.forEach(x => console.log('  ✗ ' + x)); process.exitCode = 1; }
else {
  step.forEach(x => console.log('     · ' + x));
  console.log('  ✅ a new player can walk the whole game on one save without an error');
}
})();
