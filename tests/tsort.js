const {chromium}=require(process.env.PW||'playwright');
const BASE='file:///home/claude/site/';
(async()=>{
  const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
  const ctx=await b.newContext({viewport:{width:390,height:780}});
  const pg=await ctx.newPage();
  const errs=[]; pg.on('pageerror',e=>errs.push(String(e)));
  pg.on('console',m=>{if(m.type()==='error')errs.push('console: '+m.text())});
  let fail=0; const ok=(c,m)=>{console.log((c?'  ✅ ':'  ✗ ')+m);if(!c)fail++};
  /* Read the set list from the data, never from a list typed here. A
     hand-written list does not go red when a new drill is added — it
     quietly stops testing it, which is the worst failure a test has. */
  const fs=require('fs'), vm=require('vm');
  const sb={window:{}}; vm.runInNewContext(fs.readFileSync('/home/claude/site/data/sorts.js','utf8'), sb);
  const sets=Object.keys(sb.window.AG_SORTS);
  for(const s of sets){
    errs.length=0;
    await pg.goto(BASE+'sort.html?s='+s); await pg.waitForTimeout(220);
    const title=await pg.$eval('#dTitle',e=>e.textContent.trim().replace(/\s+/g,' '));
    await pg.click('#go'); await pg.waitForTimeout(120);
    const n=await pg.evaluate(()=>deck.length);
    for(let i=0;i<n;i++){
      await pg.evaluate(()=>{
        const it=deck[idx], bi=D.buckets.findIndex(b=>b.k===it.a);
        document.querySelectorAll('#buckets .bk')[bi].click();
      });
      await pg.waitForTimeout(25);
      if(await pg.$eval('#fb',e=>e.hidden)){console.log('  ✗ '+s+' card '+i+' no feedback');fail++;break}
      await pg.click('#next'); await pg.waitForTimeout(25);
    }
    const done=await pg.$eval('#s3',e=>e.classList.contains('on'));
    const stars=done?await pg.$eval('#stars',e=>e.textContent.replace(/\s/g,'')):'';
    ok(done&&stars==='★★★'&&!errs.length, s.padEnd(15)+title.slice(0,32).padEnd(34)+n+' cards'+(errs[0]?'  ERR '+errs[0]:''));
  }
  // wrong answer path
  await pg.goto(BASE+'sort.html?s=five_elements'); await pg.click('#go'); await pg.waitForTimeout(150);
  await pg.evaluate(()=>{const bi=D.buckets.findIndex(b=>b.k!==deck[idx].a);
    document.querySelectorAll('#buckets .bk')[bi].click()});
  await pg.waitForTimeout(60);
  ok(await pg.$eval('#fb',e=>e.className.includes('warn')),'a wrong card flags red');
  ok(await pg.$$eval('#buckets .bk.hit',n=>n.length===1),'the right family is highlighted');
  // unknown set
  errs.length=0;
  await pg.goto(BASE+'sort.html?s=nope'); await pg.waitForTimeout(150);
  ok(await pg.$eval('#dTitle',e=>e.textContent.includes('not found'))&&!errs.length,'unknown set degrades gracefully');
  await b.close();
  console.log(fail?('\n'+fail+' FAILURES'):'\nsorting engine clean');
  process.exit(fail?1:0);
})();
