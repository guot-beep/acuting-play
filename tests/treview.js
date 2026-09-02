/* The review queue 溫故 — spaced repetition over reasoning questions.

   Four things have to hold or the feature is worse than not having it:
     1. the schedule behaves     wrong → tomorrow, right → 1,3,7,16, then retire
     2. every engine records     chapter, practice, Point Hall, sorting, daily case
     3. the page rebuilds items  from a key alone, loading only what it needs
     4. nothing can break        a bad key, an empty queue, a deleted deck */
const { chromium } = require(process.env.PW||'playwright');
const B='file:///home/claude/site/';
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const bad=[];
const page=async(url)=>{ const p=await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror',e=>bad.push(url+': JS error '+e));
  await p.goto(B+url); await p.waitForTimeout(600); return p; };

/* ── 1 · the schedule ── */
{
  const p=await page('review.html');
  const r=await p.evaluate(()=>{
    const out={};
    AG.state.review={}; AG.save();
    AG.review.mark('t:x:1', false, {lbl:'T'});
    out.afterWrong = AG.state.review['t:x:1'].d - AG.review.dayNumber();
    const steps=[];
    for(let i=0;i<5;i++){ AG.review.mark('t:x:1', true, {}); const e=AG.state.review['t:x:1'];
      steps.push([e.n, e.d - AG.review.dayNumber()]); }
    out.steps=steps;
    out.retiredHidden = AG.review.due().filter(x=>x.key==='t:x:1').length;
    AG.review.mark('t:x:1', false, {});
    const e=AG.state.review['t:x:1'];
    out.backAfterMiss = (e.n===0 && e.d - AG.review.dayNumber() === 1) ? 1 : 0;
    return out;
  });
  if(r.afterWrong!==1) bad.push(`a missed question should return tomorrow, got day+${r.afterWrong}`);
  const want=[[1,1],[2,3],[3,7],[4,16],[4,16]];
  JSON.stringify(r.steps)===JSON.stringify(want) ||
    bad.push('spacing should be 1,3,7,16 then hold — got '+JSON.stringify(r.steps));
  if(r.retiredHidden!==0) bad.push('a retired item should not be offered again');
  if(r.backAfterMiss!==1) bad.push('missing a retired item should reset it and return it tomorrow');
  await p.close();
}

/* ── 2 · every engine records ── */
{
  const c=await page('chapter.html?ch=15');
  await c.evaluate(()=>{ AG.state.review={}; AG.save(); setStage(2); show('s-look'); });
  await c.waitForTimeout(300);
  await c.evaluate(()=>{ const o=document.querySelector('#lookOpts .opt'); if(o) o.click(); });
  await c.waitForTimeout(250);
  const ck=await c.evaluate(()=>Object.keys(AG.state.review));
  if(!ck.some(k=>k==='c:15:look')) bad.push('chapter tongue answer was not recorded, got '+JSON.stringify(ck));
  await c.close();

  const pr=await page('practice.html?d=pulse');
  await pr.evaluate(()=>{ AG.state.review={}; AG.save(); document.getElementById('go').click(); });
  await pr.waitForTimeout(350);
  await pr.evaluate(()=>{ const o=document.querySelector('#body .opt'); if(o) o.click(); });
  await pr.waitForTimeout(250);
  const pk=await pr.evaluate(()=>Object.keys(AG.state.review));
  if(!pk.some(k=>k.startsWith('p:pulse:'))) bad.push('practice answer was not recorded, got '+JSON.stringify(pk));
  await pr.close();

  const ph=await page('pointroom.html?p=LI4');
  await ph.evaluate(()=>{ AG.state.review={}; AG.save(); });
  for(let i=0;i<5;i++){ await ph.click('#bubble').catch(()=>{}); await ph.waitForTimeout(180);
    if(await ph.evaluate(()=>document.querySelector('.screen.on')?.id)==='s-q') break; }
  await ph.evaluate(()=>{ const o=document.querySelector('#qOpts .opt'); if(o) o.click(); });
  await ph.waitForTimeout(250);
  const hk=await ph.evaluate(()=>Object.keys(AG.state.review));
  if(!hk.some(k=>k.startsWith('h:LI4:'))) bad.push('Point Hall answer was not recorded, got '+JSON.stringify(hk));
  await ph.close();

  const dc=await page('dailycase.html');
  await dc.evaluate(()=>{ AG.state.review={}; AG.state.dc={streak:0,last:'',solved:0,results:{}}; AG.save(); });
  await dc.reload(); await dc.waitForTimeout(600);
  await dc.evaluate(()=>{ const s=document.getElementById('startBtn'); if(s) s.click(); });
  await dc.waitForTimeout(300);
  await dc.evaluate(()=>{ const o=document.querySelector('#opts .opt'); if(o) o.click(); });
  await dc.waitForTimeout(250);
  const dk=await dc.evaluate(()=>Object.keys(AG.state.review));
  if(!dk.some(k=>k.startsWith('d:'))) bad.push('daily case answer was not recorded, got '+JSON.stringify(dk));
  await dc.close();

  const so=await page('sort.html?s=five_elements');
  await so.evaluate(()=>{ AG.state.review={}; AG.save(); const g=document.getElementById('go'); if(g) g.click(); });
  await so.waitForTimeout(350);
  await so.evaluate(()=>{ const o=document.querySelector('.bk'); if(o) o.click(); });
  await so.waitForTimeout(250);
  const sk=await so.evaluate(()=>Object.keys(AG.state.review));
  if(!sk.some(k=>k.startsWith('s:five_elements:'))) bad.push('sorting answer was not recorded, got '+JSON.stringify(sk));
  await so.close();
}

/* ── 3 · the page rebuilds what it can and links out the rest ── */
{
  const p=await page('practice.html?d=pulse');
  const slot=await p.evaluate(()=>AG.review.slot(D.items.filter(x=>x.k==='mc')[0].q));
  await p.close();

  const d0=await page('review.html');
  const dkey=await d0.evaluate(async ()=>{
    await new Promise(res=>{const s=document.createElement('script');s.src='data/daily-cases.js';s.onload=res;document.head.appendChild(s);});
    const c=window.AG_CASES[2], q=c.q[1];
    return 'd:'+AG.review.slot(c.p)+':'+AG.review.slot(q.t);
  });
  await d0.close();

  const r=await page('review.html');
  await r.evaluate(([slot,dkey])=>{
    const d=AG.review.dayNumber();
    AG.state.review={
      'c:15:look'   :{n:0,d:d,miss:1,lbl:'Chapter 15 · Tongue',sub:'x',href:'chapter.html?ch=15'},
      'c:16:dx1'    :{n:0,d:d,miss:1,lbl:'Chapter 16 · Pattern',sub:'x',href:'chapter.html?ch=16'},
      'c:18:safety' :{n:0,d:d,miss:1,lbl:'Chapter 18 · Screening',sub:'x',href:'chapter.html?ch=18'},
      'c:12:rx'     :{n:0,d:d,miss:1,lbl:'Chapter 12 · Points',sub:'x',href:'chapter.html?ch=12'},
      'h:LI4:1aadw7q':{n:0,d:d,miss:1,lbl:'Point Hall · LI4',sub:'x',href:'pointroom.html?p=LI4'},
      's:five_elements:zzz':{n:0,d:d,miss:1,lbl:'Sorting',sub:'x',href:'sort.html?s=five_elements'},
      'nonsense'    :{n:0,d:d,miss:1,lbl:'Broken',sub:'',href:''},
      ['p:pulse:'+slot]:{n:0,d:d,miss:1,lbl:'Practice · Pulse',sub:'',href:'practice.html?d=pulse'},
      [dkey]:{n:0,d:d,miss:1,lbl:'Daily Case',sub:'',href:'dailycase.html'}
    };
    AG.save();
  },[slot,dkey]);
  await r.reload(); await r.waitForTimeout(1600);
  const seen=await r.evaluate(()=>({
    due:document.getElementById('dueN').textContent,
    queue:QUEUE.map(q=>q.key),
    links:LINKS.map(l=>l.key)
  }));
  if(seen.due!=='9') bad.push('review page should show 9 due, showed '+seen.due);
  ['c:15:look','c:16:dx1','c:18:safety','h:LI4:1aadw7q','p:pulse:'+slot,dkey].forEach(k=>{
    if(!seen.queue.includes(k)) bad.push('review page could not rebuild '+k);
  });
  ['c:12:rx','s:five_elements:zzz','nonsense'].forEach(k=>{
    if(!seen.links.includes(k)) bad.push(k+' should be offered as a link, not faked into a question');
  });

  /* answering pushes the item out of the queue */
  await r.evaluate(()=>document.getElementById('go').click());
  await r.waitForTimeout(300);
  const before=await r.evaluate(()=>AG.state.review[QUEUE[0].key].n);
  await r.evaluate(()=>{
    const it=QUEUE[idx], correct=it.opts.filter(o=>o.ok)[0];
    const el=[...document.querySelectorAll('#opts .opt')].find(x=>x.textContent.indexOf(correct.t)===0);
    (el||document.querySelector('#opts .opt')).click();
  });
  await r.waitForTimeout(250);
  const after=await r.evaluate(()=>AG.state.review[QUEUE[0].key].n);
  if(!(after>before)) bad.push('a correct answer in the review page did not advance the item');
  await r.close();
}

/* ── 4 · empty queue is calm, not broken ── */
{
  const p=await page('review.html');
  await p.evaluate(()=>{ AG.state.review={}; AG.save(); });
  await p.reload(); await p.waitForTimeout(900);
  const s=await p.evaluate(()=>({due:document.getElementById('dueN').textContent,
                                go:document.getElementById('go').hidden,
                                text:document.getElementById('how').innerText.length}));
  if(s.due!=='0') bad.push('an empty queue should show 0 due');
  if(!s.go) bad.push('the Begin button should be hidden with nothing to review');
  if(!s.text) bad.push('an empty queue should still explain itself');
  await p.close();
}

await b.close();
if(bad.length){ bad.forEach(x=>console.log('  ✗ '+x)); process.exitCode=1; }
else console.log('  ✅ review queue: schedule, five engines recording, rebuild, link-outs, empty state');
})();
