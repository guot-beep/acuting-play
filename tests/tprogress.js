/* The record page is the only place a player sees the whole map of what they
   have and have not done — so it must never lie, and it must never crash on a
   brand-new save (every list empty) or a finished one (every list full). */
const {chromium}=require(process.env.PW||'playwright');
const B='file:///home/claude/site/';
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
let fail=0; const ok=(c,m)=>{console.log((c?'  ✅ ':'  ✗ ')+m);if(!c)fail++};

const open=async(seed)=>{
  const p=await b.newPage({viewport:{width:390,height:844}});
  const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
  p.on('console',m=>{if(m.type()==='error')errs.push('console: '+m.text())});
  await p.goto(B+'progress.html'); await p.waitForTimeout(300);
  if(seed){ await p.evaluate(seed); await p.reload(); await p.waitForTimeout(400); }
  return {p,errs};
};

/* 1 · a brand-new save */
let {p,errs}=await open(null);
ok(errs.length===0,'fresh save renders without errors'+(errs[0]?' ('+errs[0]+')':''));
let r=await p.evaluate(()=>({next:document.querySelector('#next b').textContent.trim(),
  secs:document.querySelectorAll('.sec').length,
  counts:[...document.querySelectorAll('.sec h2 em')].map(e=>e.textContent.trim())}));
ok(/prologue/i.test(r.next),'a fresh player is sent to the prologue, not a random deck (got "'+r.next+'")');
ok(r.secs>=6,'all six record sections render (got '+r.secs+')');
ok(r.counts.every(c=>/^\d+( \/ \d+)?$/.test(c)),'every section shows a real count: '+r.counts.join(' · '));
await p.close();

/* 2 · totals must match the data, not a hardcoded number */
({p,errs}=await open(null));
r=await p.evaluate(()=>({pts:window.AG_POINTS.length, herbs:window.AG_HERBS.length,
  ch:window.AG_CHAPTER_INDEX.length, pr:window.AG_PRACTICE_INDEX.length,
  shown:[...document.querySelectorAll('.sec h2 em')].map(e=>e.textContent.trim()),
  chips:{pts:document.querySelectorAll('.sec:nth-of-type(3) .chip').length}}));
const totals=r.shown.map(s=>+(s.split('/')[1]||'').trim()).filter(n=>!isNaN(n));
ok(totals.includes(r.ch),'the story section counts '+r.ch+' chapters from the data');
ok(totals.includes(r.pts),'the point hall counts '+r.pts+' points from the data');
ok(totals.includes(r.herbs),'the herb room counts '+r.herbs+' herbs from the data');
ok(totals.includes(r.pr),'practice counts '+r.pr+' decks and sets from the data');
await p.close();

/* 3 · a finished save */
({p,errs}=await open(()=>{
  const S=AG.state;
  S.flags.prologueDone=true;
  window.AG_CHAPTER_INDEX.forEach(c=>{S.flags["chapter"+c.id+"Done"]=true;
    S.best["chapter_"+c.id]={stars:3,score:100}});
  S.points=window.AG_POINTS.map(p=>p.id);
  S.cards=window.AG_HERBS.map(h=>({id:h.id,n:h.en,d:"2026-01-01"}));
  window.AG_PRACTICE_INDEX.forEach(d=>{S.best[(d.kind==='sort'?'sort_':'drill_')+d.id]={stars:3,score:10}});
  AG.save();
}));
ok(errs.length===0,'a completed save renders without errors'+(errs[0]?' ('+errs[0]+')':''));
r=await p.evaluate(()=>({next:document.querySelector('#next b').textContent.trim(),
  off:document.querySelectorAll('.tick.off').length,
  chipsOff:[...document.querySelectorAll('.chip')].filter(c=>!c.classList.contains('on')).length}));
ok(r.chipsOff===0,'with everything learned no chip is left grey (got '+r.chipsOff+')');
ok(/case/i.test(r.next),'a finished player is pointed at the daily case (got "'+r.next+'")');
await p.close();

/* 4 · the next action always links somewhere real */
const fs=require('fs');
({p,errs}=await open(null));
const href=await p.evaluate(()=>document.querySelector('#next a').getAttribute('href'));
ok(fs.existsSync('/home/claude/site/'+href.split('?')[0]),'the next-step button links to a page that exists: '+href);
await p.close();

await b.close();
console.log(fail?('\n'+fail+' FAILURES'):'\nthe record page tells the truth on an empty and a finished save');
process.exit(fail?1:0);})();
