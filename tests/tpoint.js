/* Point Hall integrity. A point card that teaches the wrong category, or an
   answer key with no correct option, is worse than no card at all — so this
   fails loudly rather than rendering something plausible. */
const { chromium } = require(process.env.PW||'playwright');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const p=await b.newPage();
const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
await p.goto('file:///home/claude/site/pointroom.html'); await p.waitForTimeout(600);

const r=await p.evaluate(()=>{
  const P=window.AG_POINTS||[], S=window.AG_POINTSTORY||[];
  const byId={}; P.forEach(x=>byId[x.id]=x);
  const bad=[];
  /* read the shelves from the page, so adding a region is a one-place edit */
  const REG=(typeof REGIONS!=="undefined"?REGIONS.map(r=>r.key):["hand","leg","back","head"]);
  S.forEach(s=>{
    if(!byId[s.id]) bad.push(`story "${s.id}" has no entry in data/points.js`);
    if(REG.indexOf(s.region)<0) bad.push(`${s.id}: region "${s.region}" is not one of ${REG}`);
    if(!s.beats||s.beats.length<2) bad.push(`${s.id}: needs at least 2 beats`);
    (s.beats||[]).forEach((bt,i)=>{ if(!bt.en||!bt.zh) bad.push(`${s.id} beat${i+1}: missing en or zh`); });
    if(!s.qs||s.qs.length!==3) bad.push(`${s.id}: expected 3 questions, got ${(s.qs||[]).length}`);
    (s.qs||[]).forEach((q,i)=>{
      const tag=`${s.id} q${i+1}`;
      if(!q.q||!q.cq) bad.push(`${tag}: missing question text in one language`);
      const ok=(q.opts||[]).filter(o=>o.ok).length;
      if(ok!==1) bad.push(`${tag}: ${ok} correct options (must be exactly 1)`);
      if((q.opts||[]).length<3) bad.push(`${tag}: fewer than 3 options`);
      (q.opts||[]).forEach((o,n)=>{
        if(!o.t) bad.push(`${tag} opt${n+1}: no English text`);
        if(!o.note) bad.push(`${tag} opt${n+1}: no feedback note — a wrong answer must teach`);
      });
    });
    if(!s.card||!s.card.en||!s.card.zh) bad.push(`${s.id}: card line missing a language`);
  });
  /* the shelf must render every story, grouped */
  const jars=document.querySelectorAll('.jar').length;
  if(jars!==S.length) bad.push(`shelf rendered ${jars} points but there are ${S.length} stories`);
  return {bad, stories:S.length, points:P.length, jars,
          imgs:[...new Set(S.map(s=>(byId[s.id]||{}).img).filter(Boolean))]};
});
console.log(`points=${r.points} · stories=${r.stories} · shelf tiles=${r.jars}`);

/* every anatomy image a story will show must actually load */
const missing=await p.evaluate(async(srcs)=>{
  const out=[]; await Promise.all(srcs.map(s=>new Promise(res=>{
    const i=new Image(); i.onload=()=>res(); i.onerror=()=>{out.push(s);res()}; i.src=s;
  }))); return out;
}, r.imgs);

/* play one full visit end to end, so the engine is exercised, not just the data */
await p.click('.jar');
for(let i=0;i<6;i++){ if(await p.$('#s-talk.on')) await p.click('#bubble'); else break; }
await p.waitForTimeout(200);
const inQ = !!(await p.$('#s-q.on'));
for(let n=0;n<3;n++){ await p.click('.opt'); await p.waitForTimeout(120); await p.click('#qNext'); await p.waitForTimeout(150); }
const gotCard = !!(await p.$('#s-card.on'));
const factRows = await p.$$eval('.fact', n=>n.length).catch(()=>0);
const emptyBox = await p.evaluate(()=>{
  const i=document.getElementById('cardImg');
  return (!i.hidden && !(i.complete&&i.naturalWidth)) ? 'card image slot is visible but nothing loaded' : '';
});

const problems=[...r.bad, ...missing.map(m=>`anatomy image missing: ${m}`),
  inQ?'':'never reached the questions', gotCard?'':'never reached the point card',
  factRows>2?'':`point card rendered only ${factRows} fact rows`, emptyBox,
  ...errs.map(e=>'JS error: '+e)].filter(Boolean);

if(problems.length){ problems.forEach(x=>console.log('  ✗ '+x)); process.exitCode=1; }
else console.log('  ✅ every story resolves, one answer key each, full visit plays through');
await b.close();})();
