/* The needle stage is the only place a chapter's body plate is used, so drive
   straight to it rather than clicking through the whole encounter.

   Data-driven on purpose: the expected plate and window are read out of
   data/chapters.js, so a chapter added tomorrow is covered today. The earlier
   version listed chapters by hand and quietly stopped testing new ones. */
const { chromium } = require(process.env.PW||'playwright');
const fs = require('fs'), vm = require('vm');

const sandbox = { window:{} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('/home/claude/site/data/chapters.js','utf8'), sandbox);
const CH = sandbox.window.AG_CHAPTERS;

const cases = Object.keys(CH).sort().map(id=>{
  const t = CH[id].target || {};
  if (!t.img) return { ch:id, href:'data', vb:'0 0 434 930' };      // built-in forearm
  const v = t.view;
  return { ch:id, href:t.img,
           vb: v ? `${v.x} ${v.y} ${v.w} ${v.h}` : `0 0 ${t.w} ${t.h}` };
});

(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const bad=[];
async function check({ch, href:expectHref, vb:expectVB}){
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
  await p.close();
}
for (const c of cases) await check(c);
await b.close();
if(bad.length){ bad.forEach(x=>console.log('  ✗ '+x)); process.exitCode=1; }
else console.log(`  ✅ every chapter plate loads with the right window and a target marker (${cases.length} chapters)`);
})();
