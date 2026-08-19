const {chromium}=require(process.env.PW||'playwright');
const B='file:///home/claude/site/';
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
let fail=0; const ok=(c,m)=>{console.log((c?'  ✅ ':'  ✗ ')+m);if(!c)fail++};
for(const [url,first,startSel] of [['practice.html?d=pulse','.srow'],['sort.html?s=five_elements','.srow'],
                          ['yinyang.html','.srow'],['wuqinxi.html','.srow','#go1']]){
  const p=await b.newPage({viewport:{width:390,height:800}});
  await p.goto(B+url); await p.waitForTimeout(400);
  await p.click(startSel||'#go'); await p.waitForTimeout(350);
  const r=await p.evaluate(sel=>{
    const c=document.querySelector('.chapline').getBoundingClientRect();
    const h=document.querySelector('.screen.on '+sel).getBoundingClientRect();
    return {chapBottom:Math.round(c.bottom), hudTop:Math.round(h.top)};
  }, first);
  ok(r.hudTop>=r.chapBottom, url.padEnd(30)+'chapter line ends at '+r.chapBottom+', content starts at '+r.hudTop);
  await p.close();
}
await b.close(); process.exit(fail?1:0);})();
