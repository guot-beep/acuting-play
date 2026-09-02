/* A level-up or a school opening must produce a visible moment, on any page,
   without the page opting in — and must never block the button underneath it. */
const {chromium}=require(process.env.PW||'playwright');
const B='file:///home/claude/site/';
const BASE=B;
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
let fail=0; const ok=(c,m)=>{console.log((c?'  ✅ ':'  ✗ ')+m);if(!c)fail++};

const page=async u=>{const p=await b.newPage({viewport:{width:390,height:844}});
  const errs=[];p.on('pageerror',e=>errs.push(String(e)));
  await p.goto(B+u); await p.waitForTimeout(500); return {p,errs};};

/* 1 · a level-up shows on an ordinary practice page */
let {p,errs}=await page('practice.html?d=pulse');
await p.evaluate(()=>{AG.state.skillXp.dx=0;AG.state.stats.dx=0;AG.save();
  AG.complete({activity:"t_demo",completed:true,score:1,stars:3,xpEarned:10,skillXp:{dx:200}});});
await p.waitForTimeout(500);
let r=await p.evaluate(()=>{const e=document.querySelector('.ag-cel');
  return e?{on:e.classList.contains('on'),txt:e.textContent.replace(/\s+/g,' ').trim(),
    pips:e.querySelectorAll('.pips i.on').length}:null;});
ok(!!r&&r.on,'a level-up puts a card on screen');
ok(!!r&&/Four Examinations/.test(r.txt),'it names the axis that levelled: "'+(r?r.txt.slice(0,52):'')+'"');
ok(!!r&&r.pips>0,'the pips show the new level ('+(r?r.pips:0)+' filled)');
ok(errs.length===0,'no errors'+(errs[0]?': '+errs[0]:''));

/* 2 · it must not sit on top of anything tappable */
const blocks=await p.evaluate(()=>{
  const e=document.querySelector('.ag-cel'); const r=e.getBoundingClientRect();
  return [...document.querySelectorAll('button:not(.ag-cel), a')].filter(x=>{
    const s=getComputedStyle(x); if(s.display==='none'||s.visibility==='hidden')return false;
    const b=x.getBoundingClientRect(); if(!b.width||!b.height)return false;
    return !(b.right<r.left||b.left>r.right||b.bottom<r.top||b.top>r.bottom);}).length;});
ok(blocks===0,'it covers no button ('+blocks+' overlapped)');

/* 3 · it clears itself */
await p.waitForTimeout(4600);
r=await p.evaluate(()=>document.querySelector('.ag-cel').classList.contains('on'));
ok(!r,'it dismisses itself without a tap');
await p.close();

/* 4 · two events queue instead of stacking on top of each other */
({p,errs}=await page('pointroom.html'));
await p.evaluate(()=>{AG.state.unlocks.dx=false;AG.state.skillXp.needle=0;AG.state.stats.needle=0;AG.save();
  AG.complete({activity:"t_demo2",completed:true,score:1,stars:3,xpEarned:10,
    skillXp:{needle:200},unlocks:["dx"]});});
await p.waitForTimeout(400);
const n=await p.evaluate(()=>document.querySelectorAll('.ag-cel').length);
ok(n===1,'two events share one card and queue (found '+n+')');
ok(errs.length===0,'no errors on a second page'+(errs[0]?': '+errs[0]:''));
await p.close();

/* 5 · completing something with no level-up shows nothing */
({p,errs}=await page('herbroom.html'));
await p.evaluate(()=>{AG.state.stats.herb=4;AG.state.skillXp.herb=9999;AG.save();
  AG.complete({activity:"t_demo3",completed:true,score:1,stars:1,xpEarned:5,skillXp:{herb:1}});});
await p.waitForTimeout(400);
r=await p.evaluate(()=>{const e=document.querySelector('.ag-cel');return e?e.classList.contains('on'):false;});
ok(!r,'an ordinary completion stays quiet');
await p.close();

/* 6 · collection milestones fire once, and only once */
({p,errs}=await page('pointroom.html'));
await p.evaluate(()=>{const S=AG.state;S.points=[];S.cards=[];S.flags={};AG.save();
  S.points=window.AG_POINTS.slice(0,12).map(x=>x.id);AG.save();
  AG.complete({activity:"m1",completed:true,score:1,stars:1,xpEarned:5});});
await p.waitForTimeout(400);
r=await p.evaluate(()=>{const e=document.querySelector('.ag-cel');
  return {on:e?e.classList.contains('on'):false, txt:e?e.textContent:'',
          flag:!!AG.state.flags.mile_pts10};});
ok(r.on && /Ten points/.test(r.txt),'passing ten points fires a milestone');
ok(r.flag,'the milestone is written into the save so it cannot repeat');
/* fire another completion — the same milestone must not come back */
await p.evaluate(()=>{document.querySelector('.ag-cel').classList.remove('on');
  AG.complete({activity:"m2",completed:true,score:1,stars:1,xpEarned:5});});
await p.waitForTimeout(400);
r=await p.evaluate(()=>{const e=document.querySelector('.ag-cel');return e?e.classList.contains('on'):false;});
ok(!r,'the same milestone does not fire twice');
ok(errs.length===0,'milestones throw nothing'+(errs[0]?': '+errs[0]:''));
await p.close();

/* 7 · finishing the collection fires the completion milestone */
({p,errs}=await page('pointroom.html'));
await p.evaluate(()=>{const S=AG.state;S.flags={};S.points=window.AG_POINTS.map(x=>x.id);AG.save();
  AG.complete({activity:"m3",completed:true,score:1,stars:1,xpEarned:5});});
await p.waitForTimeout(500);
r=await p.evaluate(()=>document.querySelector('.ag-cel').textContent);
ok(/point/i.test(r),'completing the Point Hall is marked: "'+r.replace(/\s+/g,' ').slice(0,60)+'"');
await p.close();



/* 8 · coming back is celebrated too, and a completion milestone may never fire
       early. The totals used to be hardcoded (20 herbs, 39 points); the roster
       grew past both, so "you have them all" would have fired at 20 of 27. */
{
  const pg2 = await b.newPage({viewport:{width:390,height:844}});
  const e2 = []; pg2.on('pageerror', e => e2.push(String(e)));
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  await pg2.addInitScript(y => { try { localStorage.setItem('apricot-grove', JSON.stringify(
    {v:2, char:'yan', mode:'student', streak:6, lastDay:y, flags:{prologueDone:true}})); } catch(e){} }, yesterday);
  await pg2.goto(BASE + 'index.html'); await pg2.waitForTimeout(400);
  const fired = await pg2.evaluate(() => {
    AG.complete({activity:'t_streak', completed:false, xpEarned:1});
    return Object.keys(AG.state.flags).filter(k => k.indexOf('mile_streak') === 0);
  });
  ok(fired.indexOf('mile_streak7') >= 0, 'a seven-day streak is celebrated (' + fired.join(', ') + ')');

  /* herbroom.html loads the herb roster, so the total is real there */
  await pg2.goto(BASE + 'herbroom.html'); await pg2.waitForTimeout(500);
  const early = await pg2.evaluate(() => {
    const total = (window.AG_HERBS || []).length;
    AG.state.cards = Array.from({length: Math.max(0, total - 1)}, (_, i) => ({id: 'x' + i}));
    delete AG.state.flags.mile_herbAll;
    AG.complete({activity:'t_herb', completed:false, xpEarned:1});
    return {total, fired: !!AG.state.flags.mile_herbAll};
  });
  ok(early.total > 0 && !early.fired,
     'one short of the full codex does not fire "the whole materia medica" (' + (early.total - 1) + ' of ' + early.total + ')');
  const done = await pg2.evaluate(() => {
    const total = (window.AG_HERBS || []).length;
    AG.state.cards = Array.from({length: total}, (_, i) => ({id: 'y' + i}));
    delete AG.state.flags.mile_herbAll;
    AG.complete({activity:'t_herb2', completed:false, xpEarned:1});
    return !!AG.state.flags.mile_herbAll;
  });
  ok(done, 'the full codex does fire it');
  ok(e2.length === 0, 'streak and completion milestones throw nothing' + (e2[0] ? ': ' + e2[0] : ''));
  await pg2.close();
}

await b.close();
console.log(fail?('\n'+fail+' FAILURES'):'\nprogress is visible when it happens and silent when it does not');
process.exit(fail?1:0);})();
