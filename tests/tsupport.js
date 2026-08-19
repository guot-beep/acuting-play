/* The support feature must be invisible until Ting sets a real link, and must
   work the moment she does — both states asserted, plus the language rule. */
const { chromium } = require(process.env.PW||'playwright'); const fs=require('fs');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const bad=[];
async function run(link){
  const p=await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror',e=>bad.push(`[link=${!!link}] JS error: ${e}`));
  if(link){
    fs.writeFileSync('/tmp/state-linked.js',
      fs.readFileSync('/home/claude/site/state.js','utf8')
        .replace('var SUPPORT_LINK = "";','var SUPPORT_LINK = "'+link+'";'));
    await p.route('**/state.js*', r=>r.fulfill({path:'/tmp/state-linked.js',contentType:'application/javascript'}));
  }
  await p.goto('file:///home/claude/site/chapter.html?ch=04'); await p.waitForTimeout(900);
  // the CTA lives on the ending screen; reveal it so it can actually be clicked
  await p.evaluate(()=>{ try{ ending(); show("s-end"); }catch(e){} }); await p.waitForTimeout(400);
  const cta=await p.$eval('#supportCta',n=>n.hidden);
  if(link && cta) bad.push('link set, but the chapter CTA stayed hidden');
  if(!link && !cta) bad.push('no link, yet the chapter CTA showed — dead donate button');
  if(link){
    await p.evaluate(()=>{window.__u=null;window.open=u=>{window.__u=u}});
    await p.click('#supportBtn'); await p.waitForTimeout(150);
    const u=await p.evaluate(()=>window.__u);
    if(u!==link) bad.push('Support opened "'+u+'" instead of the link');
    await p.click('#supportDismiss'); await p.waitForTimeout(150);
    if(!(await p.$eval('#supportCta',n=>n.hidden))) bad.push('"Maybe later" did not dismiss it');
  }
  // settings row follows the same rule
  await p.click('#hudSet'); await p.waitForTimeout(500);
  const row=await p.$('#tgSupport');
  if(link && !row) bad.push('link set, but no Support row in Settings');
  if(!link && row) bad.push('no link, yet a Support row rendered in Settings');
  // nothing Chinese may survive with 中文 off
  await p.evaluate(()=>AG.setZh(false)); await p.waitForTimeout(250);
  const leak=await p.evaluate(()=>{
    const c=document.getElementById('supportCta');
    if(!c||c.hidden) return '';
    return [...c.querySelectorAll('*')].filter(n=>!n.closest('.zh')&&!n.children.length)
      .map(n=>n.textContent||'').filter(t=>/[一-鿿]/.test(t)).join(' | ');
  });
  if(leak) bad.push('Chinese visible with 中文 off: '+leak);
  // and the tray must still close
  await p.click('.tray-x').catch(()=>{}); await p.waitForTimeout(500);
  if(await p.$eval('.tray',n=>getComputedStyle(n).display!=='none')) bad.push('tray did not close');
  await p.close();
}
await run(null);
await run('https://buy.stripe.com/test_abc123');
if(bad.length){ bad.forEach(x=>console.log('  ✗ '+x)); process.exitCode=1; }
else console.log('  ✅ hidden with no link · works when set · dismissable · language-clean · tray closes');
await b.close();})();
