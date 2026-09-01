const {chromium}=require(process.env.PW||'playwright');
const BASE='file:///home/claude/site/';
/* Read the deck list from the data, not from a list kept by hand — the hand-
   written one silently stopped covering decks added after it was written. */
const fs=require('fs'), vm=require('vm');
const box={window:{}}; vm.createContext(box);
vm.runInContext(fs.readFileSync('/home/claude/site/data/practice.js','utf8'), box);
const DECKS=Object.keys(box.window.AG_PRACTICE).sort();
(async()=>{
  const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
  const ctx=await b.newContext({viewport:{width:390,height:780}});
  const pg=await ctx.newPage();
  const errs=[]; pg.on('pageerror',e=>errs.push(String(e)));
  pg.on('console',m=>{if(m.type()==='error')errs.push('console: '+m.text())});
  let fail=0;
  for(const d of DECKS){
    errs.length=0;
    await pg.goto(BASE+'practice.html?d='+d);
    await pg.waitForTimeout(250);
    const title=await pg.$eval('#dTitle',e=>e.textContent.trim());
    await pg.click('#go');
    await pg.waitForTimeout(120);
    // play through: always pick the correct answer via the data
    const total=await pg.evaluate(()=>TOTAL);
    for(let i=0;i<total;i++){
      const kind=await pg.evaluate(()=>D.items[idx].k);
      if(kind==='mc'){
        await pg.evaluate(()=>{
          const ci=D.items[idx].opts.findIndex(o=>o.ok);
          document.querySelector('.opt[data-i="'+ci+'"]').click();
        });
      } else if(kind==='order'){
        const n=await pg.evaluate(()=>D.items[idx].seq.length);
        for(let k=0;k<n;k++){
          await pg.evaluate(()=>{
            const it=D.items[idx];
            const want=it.seq[document.querySelectorAll('.slot.filled').length].t;
            [...document.querySelectorAll('#body .chips .chip')]
              .find(c=>!c.classList.contains('done') && c.childNodes[0].textContent===want).click();
          });
        }
      } else {
        const n=await pg.evaluate(()=>D.items[idx].pairs.length);
        for(let k=0;k<n;k++){
          await pg.evaluate(()=>{
            const cols=document.querySelectorAll('#body .mcol');
            const L=[...cols[0].querySelectorAll('.chip')].find(c=>!c.classList.contains('done'));
            L.click();
            const R=[...cols[1].querySelectorAll('.chip')].find(c=>c.dataset.i===L.dataset.i);
            R.click();
          });
        }
      }
      await pg.waitForTimeout(40);
      const shown=await pg.$eval('#fb',e=>!e.hidden);
      if(!shown){console.log('  ✗ '+d+' item '+i+' ('+kind+') gave no feedback');fail++;break}
      await pg.click('#next');
      await pg.waitForTimeout(40);
    }
    const done=await pg.$eval('#s3',e=>e.classList.contains('on'));
    const stars=done?await pg.$eval('#stars',e=>e.textContent.replace(/\s/g,'')):'';
    const score=done?await pg.$eval('#rx',e=>(e.textContent.match(/(\d+) \/ (\d+) correct/)||[])[0]):'';
    console.log((done&&stars==='★★★'?'  ✅ ':'  ✗ ')+d.padEnd(11)+title.replace(/\s+/g,' ').slice(0,28).padEnd(30)+score+(errs.length?'  ERR '+errs[0]:''));
    if(!done||stars!=='★★★'||errs.length)fail++;
  }
  await b.close();
  console.log(fail?('\n'+fail+' FAILURES'):'\nall decks play clean, all correct answers reachable');
  process.exit(fail?1:0);
})();
