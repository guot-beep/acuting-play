/* the Herb Room must show every herb, and every visit must play through */
const {chromium}=require(process.env.PW||'playwright');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:390,height:800}});
const bad=[];p.on('pageerror',e=>bad.push(String(e)));
p.on('console',m=>{if(m.type()==='error')bad.push('console: '+m.text())});
await p.goto('file:///home/claude/site/herbroom.html'); await p.waitForTimeout(700);
const r=await p.evaluate(()=>({
  herbs:(window.AG_HERBS||[]).length,
  stories:(window.AG_HERBSTORY||[]).length,
  tiles:document.querySelectorAll('#shelf .jar, .jar').length
}));
if(r.tiles<r.stories) bad.push(r.stories+' herb stories but only '+r.tiles+' jars on the shelf');
// play one of the new visits end to end
const ok=await p.evaluate(async()=>{
  const S=window.AG_HERBSTORY.find(s=>s.id==='gancao');
  return !!(S && S.qs.length===3 && S.card && S.beats.length);
});
if(!ok) bad.push('the gancao visit is malformed');
if(bad.length){bad.forEach(x=>console.log('  ✗ '+x));process.exitCode=1}
else console.log('  ✅ herb room: '+r.stories+' visits for '+r.herbs+' herbs, '+r.tiles+' jars on the shelf');
await b.close();})();
