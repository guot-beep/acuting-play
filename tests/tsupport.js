/* The support feature must be invisible until Ting sets a real link, and must
   work the moment she does — both states asserted, plus the language rule. */
const { chromium } = require(process.env.PW||'playwright'); const fs=require('fs');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const bad=[];

/* Both states are built from the real state.js, so this test keeps working
   whether or not a link is currently shipped. Hard-coding one of the two
   states was a quiet way to stop testing half the feature. */
const SRC='/home/claude/site/state.js';
const RE=/var SUPPORT_LINK = "[^"]*";/;
const raw=fs.readFileSync(SRC,'utf8');
if(!RE.test(raw)) bad.push('state.js no longer declares SUPPORT_LINK the way this test expects');
const shipped=(raw.match(/var SUPPORT_LINK = "([^"]*)";/)||[,''])[1];
if(shipped && !/^https:\/\/[^\s"']+$/.test(shipped))
  bad.push('the shipped support link is not a plain https URL: '+shipped);
function variant(link,file){
  fs.writeFileSync(file, raw.replace(RE,'var SUPPORT_LINK = "'+link+'";'));
  return file;
}
/* A save that has already finished some chapters. The ask is deliberately
   withheld from brand-new players, so without this every assertion below
   would pass for the wrong reason. */
function seedSave(n){
  return `try{localStorage.setItem('apricot-grove',JSON.stringify(
    {v:2,char:'yan',mode:'student',flags:{prologueDone:true${
      Array.from({length:n},(_,i)=>`,chapter${String(i+1).padStart(2,'0')}Done:true`).join('')
    }}}))}catch(e){}`;
}
async function run(link,done=3){
  const p=await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror',e=>bad.push(`[link=${!!link}] JS error: ${e}`));
  const file=variant(link||'', link?'/tmp/state-linked.js':'/tmp/state-blank.js');
  await p.route('**/state.js*', r=>r.fulfill({path:file,contentType:'application/javascript'}));
  await p.addInitScript(seedSave(done));
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
await run('https://ko-fi.com/example');

/* ── the ask must know when to stay quiet ────────────────────────────── */
async function ctaShown(done, pre){
  const p=await b.newPage({viewport:{width:390,height:844}});
  await p.route('**/state.js*', r=>r.fulfill({path:variant('https://ko-fi.com/example','/tmp/state-linked.js'),contentType:'application/javascript'}));
  await p.addInitScript(seedSave(done));
  if(pre) await p.addInitScript(pre);
  await p.goto('file:///home/claude/site/chapter.html?ch=04'); await p.waitForTimeout(900);
  await p.evaluate(()=>{ try{ ending(); show("s-end"); }catch(e){} }); await p.waitForTimeout(300);
  const shown=!(await p.$eval('#supportCta',n=>n.hidden));
  await p.close(); return shown;
}
/* ending() records this chapter before the ask runs, so seed 0 = this is the
   player's first finished chapter, seed 1 = their second. */
if(await ctaShown(0)) bad.push('asked a player for money on their very first finished chapter');
if(!(await ctaShown(1))) bad.push('never asks at all — the CTA is unreachable');
const snoozed=`try{const k='apricot-grove',s=JSON.parse(localStorage.getItem(k)||'{}');
  s.flags=Object.assign(s.flags||{},{supportSnooze:Math.floor(Date.now()/864e5)+10});
  localStorage.setItem(k,JSON.stringify(s))}catch(e){}`;
if(await ctaShown(3,snoozed)) bad.push('"Maybe later" was ignored — asked again while snoozed');
if(bad.length){ bad.forEach(x=>console.log('  ✗ '+x)); process.exitCode=1; }
else console.log('  ✅ hidden with no link · works when set · dismissable · language-clean · tray closes · not on chapter one · stays quiet once snoozed');
await b.close();})();
