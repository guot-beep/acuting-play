/* The 催更 row is live now, so this asserts against the real form URL:
   the row renders, the panel opens, and the outgoing link carries the
   player's topic in the field Ting's form actually uses. */
const { chromium } = require(process.env.PW||'playwright');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:390,height:844}});
const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
const bad=[];
await p.goto('file:///home/claude/site/index.html'); await p.waitForTimeout(700);
await p.click('#hudSet'); await p.waitForTimeout(500);
if(!(await p.$('#tgWish'))) bad.push('the 催更 row did not render');
else{
  await p.click('#tgWish'); await p.waitForTimeout(350);
  if(!(await p.$eval('#wishBox',n=>n.classList.contains('on')))) bad.push('panel did not open');
  const chips=await p.$$eval('#wishChips button',n=>n.map(x=>x.textContent));
  if(chips.length!==8) bad.push('expected 8 quick picks, got '+chips.length);
  await p.evaluate(()=>{ window.__u=null; window.open=u=>{window.__u=u}; });
  await p.click('#wishChips button');            // first chip = 失眠
  await p.click('#wishSend'); await p.waitForTimeout(200);
  const u=await p.evaluate(()=>window.__u);
  if(!u) bad.push('Send opened nothing');
  else{
    if(u.indexOf('1FAIpQLSeOhOtUmwfnAj80ezCEdPlscl5gXAPp1YT86gYzhkdbT2RVVg')<0) bad.push('wrong form id in the link');
    if(u.indexOf('entry.1457921760=')<0) bad.push('the answer field is not prefilled: '+u);
    if(decodeURIComponent(u).indexOf('失眠')<0) bad.push('the chosen topic did not travel: '+decodeURIComponent(u));
    if(u.indexOf('usp=pp_url')<0) bad.push('missing usp=pp_url, so Google will ignore the prefill');
  }
}
/* with 中文 off, nothing Chinese may remain visible */
await p.evaluate(()=>{ AG.setZh(false); });
await p.waitForTimeout(300);
const leaked=await p.evaluate(()=>{
  const t=document.querySelector('#wishBox'); if(!t) return '';
  return [...t.querySelectorAll('*')].filter(n=>!n.closest('.zh')&&n.children.length===0)
    .map(n=>n.textContent||'').filter(s=>/[一-鿿]/.test(s)).join(' | ');
});
if(leaked) bad.push('Chinese visible with 中文 off: '+leaked.slice(0,120));
/* and the tray must still close */
await p.click('.tray-x').catch(()=>{}); await p.waitForTimeout(500);
if(await p.$eval('.tray',n=>getComputedStyle(n).display!=='none')) bad.push('tray did not close');
errs.forEach(e=>bad.push('JS error: '+e));
if(bad.length){ bad.forEach(x=>console.log('  ✗ '+x)); process.exitCode=1; }
else console.log('  ✅ row live · 8 picks · topic reaches entry.1457921760 · language-clean · closes');
await b.close();})();
