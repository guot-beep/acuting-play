/* chapter.html and practice.html load exactly one data file — the one the url
   asks for. If the split files drift from their source, or a page starts
   pulling the whole set again, the pages still work but the weight comes back. */
const {chromium}=require(process.env.PW||'playwright');
const fs=require('fs'), vm=require('vm');
const R='/home/claude/site/', B='file://'+R;
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
let fail=0; const ok=(c,m)=>{console.log((c?'  ✅ ':'  ✗ ')+m);if(!c)fail++};

/* 1 · the split files must match the whole-file source exactly */
const load=f=>{const s={window:{}};vm.runInNewContext(fs.readFileSync(R+f,'utf8'),s);return s.window;};
const allCh=load('data/chapters.js').AG_CHAPTERS;
let drift=[];
for(const id of Object.keys(allCh)){
  const one=load('data/chapters/'+id+'.js').AG_CHAPTERS[id];
  if(JSON.stringify(one)!==JSON.stringify(allCh[id])) drift.push('chapter '+id);
}
const allPr=load('data/practice.js').AG_PRACTICE;
for(const id of Object.keys(allPr)){
  const one=load('data/practice/'+id+'.js').AG_PRACTICE[id];
  if(JSON.stringify(one)!==JSON.stringify(allPr[id])) drift.push('deck '+id);
}
ok(drift.length===0,'every split file matches data/chapters.js and data/practice.js'
   +(drift.length?' — stale: '+drift.join(', ')+' (run tools/mkindexes.py)':''));

/* 2 · a chapter page fetches its own chapter and nothing else */
for(const [url,want,notWant] of [
      ['chapter.html?ch=07','data/chapters/07.js','data/chapters.js'],
      ['practice.html?d=tongue','data/practice/tongue.js','data/practice.js']]){
  const p=await b.newPage({viewport:{width:390,height:844}});
  const got=[]; const errs=[];
  p.on('request',r=>{const u=r.url(); if(/\/data\//.test(u)) got.push(u.split('/data/')[1].split('?')[0]);});
  p.on('pageerror',e=>errs.push(String(e)));
  await p.goto(B+url); await p.waitForTimeout(700);
  const heavy=got.filter(g=>g===notWant.replace('data/',''));
  ok(got.includes(want.replace('data/','')),url+' loads '+want);
  ok(heavy.length===0,url+' does NOT load the whole set'+(heavy.length?' (it loaded '+notWant+')':''));
  ok(errs.length===0,url+' runs clean'+(errs[0]?': '+errs[0]:''));
  await p.close();
}

/* 3 · an unknown id must still render something rather than a blank page */
for(const url of ['chapter.html?ch=99','practice.html?d=nosuch']){
  const p=await b.newPage({viewport:{width:390,height:844}});
  const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
  await p.goto(B+url); await p.waitForTimeout(700);
  const text=(await p.evaluate(()=>document.body.innerText)).trim();
  ok(text.length>40 && errs.length===0, url+' degrades gracefully'+(errs[0]?': '+errs[0]:''));
  await p.close();
}
await b.close();
console.log(fail?('\n'+fail+' FAILURES'):'\neach page ships one chapter and one deck, not the whole library');
process.exit(fail?1:0);})();
