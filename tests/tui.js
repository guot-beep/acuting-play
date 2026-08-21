const {chromium}=require(process.env.PW||'playwright');
const BASE='file:///home/claude/site/';
(async()=>{
  const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
  const ctx=await b.newContext({viewport:{width:390,height:780}});
  const pg=await ctx.newPage();
  const errs=[]; pg.on('pageerror',e=>errs.push(String(e)));
  /* A deliberately bad deck id is *meant* to miss data/practice/<id>.js — that
     404 is the fallback firing, not a fault. Everything else still counts. */
  const expected404=/net::ERR_FILE_NOT_FOUND|Failed to load resource/;
  pg.on('console',m=>{if(m.type()==='error' && !(ignore404 && expected404.test(m.text())))
    errs.push('console: '+m.text())});
  let ignore404=false;
  let fail=0;
  const ok=(c,m)=>{console.log((c?'  ✅ ':'  ✗ ')+m); if(!c)fail++;};

  /* ── 1 · wrong answer path shows the right answer ── */
  await pg.goto(BASE+'practice.html?d=wuxing');
  await pg.click('#go'); await pg.waitForTimeout(120);
  // find first mc item
  await pg.evaluate(()=>{while(D.items[idx].k!=='mc'){idx++;render()}});
  await pg.evaluate(()=>{const wi=D.items[idx].opts.findIndex(o=>!o.ok);
    document.querySelector('.opt[data-i="'+wi+'"]').click()});
  await pg.waitForTimeout(80);
  ok(await pg.$eval('#fb',e=>e.className.includes('warn')),'wrong answer flags the feedback red');
  ok(await pg.$eval('#fb',e=>e.textContent.includes('The answer:')),'wrong answer reveals the correct one');
  ok(await pg.$$eval('.opt.right',n=>n.length===1),'exactly one option is highlighted as right');

  /* ── 2 · unknown deck degrades gracefully ── */
  errs.length=0;
  ignore404=true;
  await pg.goto(BASE+'practice.html?d=nosuchdeck'); await pg.waitForTimeout(400);
  ok(await pg.$eval('#dTitle',e=>e.textContent.includes('not found')),'unknown deck shows a message, not a crash');
  ok(await pg.$eval('#go',e=>e.hidden),'unknown deck hides the Begin button');
  ok(errs.length===0,'unknown deck throws nothing'+(errs[0]?' ('+errs[0]+')':''));
  ignore404=false;

  /* ── 3 · index: chapter index lists every chapter in data ── */
  errs.length=0;
  await pg.goto(BASE+'index.html'); await pg.waitForTimeout(200);
  await pg.evaluate(()=>{AG.state.char='he';AG.state.flags.prologueDone=true;AG.save();enterHub()});
  await pg.waitForTimeout(150);
  await pg.click('#chapBtn'); await pg.waitForTimeout(200);
  const rows=await pg.$$eval('#mGames .gitem',n=>n.map(x=>({ch:x.dataset.ch,locked:x.classList.contains('locked')})));
  const want=await pg.evaluate(()=>window.AG_CHAPTER_INDEX.map(c=>c.id));
  ok(rows.length===want.length,'chapter index lists all '+want.length+' chapters (got '+rows.length+')');
  ok(rows.map(r=>r.ch).join(',')===want.join(','),'chapters are in numeric order: '+rows.map(r=>r.ch).join(','));
  ok(rows[0].locked===false && rows[1].locked===true,'only the first unfinished chapter is open');

  /* ── 4 · with everything done, all chapters replayable ── */
  await pg.evaluate(()=>{window.AG_CHAPTER_INDEX.forEach(c=>AG.state.flags["chapter"+c.id+"Done"]=true);AG.save()});
  await pg.reload(); await pg.waitForTimeout(200);
  await pg.evaluate(()=>enterHub()); await pg.waitForTimeout(120);
  await pg.click('#chapBtn'); await pg.waitForTimeout(150);
  ok(await pg.$$eval('#mGames .gitem.locked',n=>n.length===0),'finished chapters are all replayable');
  ok(await pg.$eval('#storyLabel',e=>e.textContent.startsWith('Replay')),'story button offers a replay once finished');

  /* ── 5 · every school offers 3+ playable items ── */
  const counts=await pg.evaluate(()=>{const o={};
    for(const k in SCHOOLS)o[k]=SCHOOLS[k].games.filter(g=>g.open&&g.file).length; return o});
  for(const k in counts) ok(counts[k]>=3, 'school "'+k+'" has '+counts[k]+' playable items');

  /* ── 6 · every game file the town links to actually exists ── */
  const files=await pg.evaluate(()=>{const s=new Set();
    for(const k in SCHOOLS)SCHOOLS[k].games.forEach(g=>{if(g.file)s.add(g.file)});return [...s]});
  const fs=require('fs');
  const bad=files.filter(f=>!fs.existsSync('/home/claude/site/'+f.split('?')[0]));
  ok(bad.length===0,'every linked game page exists'+(bad.length?': missing '+bad.join(', '):''));
  const drillIds=await pg.evaluate(()=>Object.keys(window.AG_PRACTICE||{}));
  const linked=files.filter(f=>f.startsWith('practice.html')).map(f=>f.split('d=')[1]);
  const unlinked=drillIds.filter(id=>linked.indexOf(id)<0);
  ok(unlinked.length===0,'every practice deck is reachable from the town'+(unlinked.length?': orphaned '+unlinked.join(', '):''));
  const vm=require('vm'); const sbox={window:{}};
  vm.runInNewContext(fs.readFileSync('/home/claude/site/data/sorts.js','utf8'),sbox);
  const sortIds=Object.keys(sbox.window.AG_SORTS||{});
  const slinked=files.filter(f=>f.startsWith('sort.html')).map(f=>f.split('s=')[1]);
  const sorphan=sortIds.filter(id=>slinked.indexOf(id)<0);
  ok(sorphan.length===0,'every sorting set is reachable from the town'+(sorphan.length?': orphaned '+sorphan.join(', '):''));

  ok(errs.length===0,'town page throws nothing'+(errs[0]?' ('+errs[0]+')':''));
  await b.close();
  console.log(fail?('\n'+fail+' FAILURES'):'\nUI wiring clean');
  process.exit(fail?1:0);
})();
