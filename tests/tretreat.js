/* the in-chapter retreat drill must still fire — it is the feature the
   data/drills.js name collision quietly removed */
const {chromium}=require(process.env.PW||'playwright');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:390,height:844}});
const bad=[]; p.on('pageerror',e=>bad.push(String(e)));
await p.goto('file:///home/claude/site/chapter.html?ch=01'); await p.waitForTimeout(700);
const r=await p.evaluate(()=>({
  drills:Object.keys(window.AG_DRILLS||{}),
  used:[...new Set(Object.values(window.AG_CHAPTERS).flatMap(c=>Object.values(c.remedy||{})))]
}));
const missing=r.used.filter(k=>r.drills.indexOf(k)<0);
if(missing.length) bad.push('chapters point at retreat drills that do not exist: '+missing.join(', '));
if(!r.drills.length) bad.push('no retreat drills loaded at all');
if(bad.length){bad.forEach(x=>console.log('  ✗ '+x));process.exitCode=1}
else console.log('  ✅ retreat drills intact: '+r.drills.join(', ')+' — every chapter remedy resolves');
await b.close();})();
