/* With Chinese support off (the default), no screen may be left showing only
   Chinese — that was the state the sorting card shipped in for one build. */
const {chromium}=require(process.env.PW||'playwright');
const B='file:///home/claude/site/';
const HAN=/[一-鿿]/;
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
let fail=0; const ok=(c,m)=>{console.log((c?'  ✅ ':'  ✗ ')+m);if(!c)fail++};
const pages=[['sort.html?s=five_elements','#go','#card'],['sort.html?s=zangfu_match','#go','#card'],
             ['sort.html?s=herb_nature','#go','#card'],['sort.html?s=formula_roles','#go','#card'],
             ['practice.html?d=wuxing','#go','#q'],['practice.html?d=tongue','#go','#q']];
for(const [url,start,sel] of pages){
  const p=await b.newPage({viewport:{width:390,height:800}});
  await p.goto(B+url); await p.waitForTimeout(300);
  await p.evaluate(()=>{AG.setZh(false)});
  await p.click(start); await p.waitForTimeout(250);
  // walk a few cards and check the visible text is never Chinese-only
  let bad=null;
  for(let i=0;i<4 && !bad;i++){
    const t=await p.$eval(sel,e=>{
      const vis=n=>{const s=getComputedStyle(n);return s.display!=='none'&&s.visibility!=='hidden'};
      let out='';(function walk(n){ if(n.nodeType===3){out+=n.textContent;return}
        if(n.nodeType===1&&vis(n))[...n.childNodes].forEach(walk)})(e); return out.trim();
    });
    if(!t) bad='empty prompt';
    else if(HAN.test(t) && !/[A-Za-z]/.test(t)) bad='Chinese-only: '+t;
    // advance
    const moved=await p.evaluate(()=>{
      const bk=document.querySelector('#buckets .bk'); if(bk){bk.click();return true}
      const op=document.querySelector('.opt'); if(op){op.click();return true} return false});
    if(!moved) break;
    await p.waitForTimeout(60);
    await p.evaluate(()=>{const n=document.getElementById('next'); if(n&&!n.hidden)n.click()});
    await p.waitForTimeout(80);
    if(await p.$eval('#s3',e=>e.classList.contains('on'))) break;
  }
  ok(!bad, url.padEnd(32)+(bad||'reads in English with 中文 off'));
  await p.close();
}
await b.close(); console.log(fail?('\n'+fail+' FAILURES'):'\nEnglish-first contract holds');
process.exit(fail?1:0);})();
