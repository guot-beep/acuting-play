/* The needle stage is the only place the new per-chapter body plate is used,
   so drive straight to it rather than clicking through the whole encounter. */
const { chromium } = require(process.env.PW||'playwright');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const bad=[];
async function check(ch, expectHref, expectVB, shot){
  const p=await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror',e=>bad.push(`ch${ch}: JS error ${e}`));
  await p.goto(`file:///home/claude/site/chapter.html?ch=${ch}`);
  await p.waitForTimeout(900);
  const jumped = await p.evaluate(()=>{ try{ setStage(7); show("s-needle"); return true;}catch(e){ return String(e);} });
  if(jumped!==true){ bad.push(`ch${ch}: could not reach the needle stage — ${jumped}`); await p.close(); return; }
  await p.waitForTimeout(500);
  const i = await p.evaluate(()=>({
    vb:document.getElementById('arm').getAttribute('viewBox'),
    href:document.getElementById('armImg').getAttribute('href')||'',
    loupe:document.getElementById('loupeImg').getAttribute('src')||'',
    w:Math.round(document.getElementById('arm').getBoundingClientRect().width),
    dots:document.querySelectorAll('#pts circle').length }));
  if(i.vb!==expectVB) bad.push(`ch${ch}: viewBox "${i.vb}" ≠ "${expectVB}"`);
  const isData=i.href.startsWith('data:');
  if(expectHref==='data'){ if(!isData) bad.push(`ch${ch}: expected the built-in forearm`); }
  else if(i.href!==expectHref) bad.push(`ch${ch}: body is "${i.href}" ≠ "${expectHref}"`);
  if(i.loupe.slice(0,40)!==i.href.slice(0,40)) bad.push(`ch${ch}: magnifier image differs from the stage`);
  if(i.w<50) bad.push(`ch${ch}: stage rendered ${i.w}px wide`);
  if(!i.dots) bad.push(`ch${ch}: no target marker drawn`);
  if(!isData){
    const ok=await p.evaluate(s=>new Promise(r=>{const im=new Image();im.onload=()=>r(true);im.onerror=()=>r(false);im.src=s}), i.href);
    if(!ok) bad.push(`ch${ch}: body image ${i.href} failed to load`);
  }
  if(shot) await p.screenshot({path:shot});
  await p.close();
}
await check('04','art/body-leg-anterior.jpg','0 0 434 1159','/tmp/ch04-needle.png');
await check('05','art/body-leg-medial.jpg','0 0 434 1159','/tmp/ch05-needle.png');
await check('06','art/body-head-lateral.jpg','0 0 434 1159','/tmp/ch06-needle.png');
await check('07','art/body-forearm-palmar.jpg','0 0 434 1159',null);
await check('08','art/body-forearm-palmar.jpg','0 0 434 1159',null);
await check('09','art/body-leg-medial.jpg','0 560 434 599','/tmp/ch09-needle.png');
await check('10','art/body-leg-medial.jpg','0 560 434 599','/tmp/ch10-needle.png');
await check('01','data','0 0 434 930',null);
if(bad.length){ bad.forEach(x=>console.log('  ✗ '+x)); process.exitCode=1; }
else console.log('  ✅ ch04 anterior leg · ch05 medial leg · ch06 head · ch01 still the forearm');
await b.close();})();
