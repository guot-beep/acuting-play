/* Data integrity for herb art.
   A picture on the wrong herb teaches wrong botany, so this fails loudly:
   every chapter reward must resolve to a real codex entry, the names must
   agree, and no two different herbs may share the same image file. */
const { chromium } = require(process.env.PW||'playwright');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const p=await b.newPage();
await p.goto('file:///home/claude/site/chapter.html?ch=01'); await p.waitForTimeout(500);
const r=await p.evaluate(()=>{
  const H=window.AG_HERBS||[];
  const CH=window.AG_CHAPTERS||{};
  const C=Object.keys(CH).map(k=>Object.assign({id:k},CH[k]));
  const byId={}; H.forEach(h=>byId[h.id]=h);
  const problems=[];
  // 1 · no image reused across two different herbs
  const seen={};
  H.forEach(h=>[h.img,h.plate].filter(Boolean).forEach(src=>{
    if(seen[src] && seen[src]!==h.id) problems.push(`image ${src} used by BOTH ${seen[src]} and ${h.id}`);
    seen[src]=h.id; }));
  // 2 · every chapter reward points at a real entry with a matching name
  (C||[]).forEach(ch=>{
    const rw=ch.reward||{}; const e=byId[rw.herbId];
    if(!e){ problems.push(`ch${ch.id}: herbId "${rw.herbId}" is not in the codex`); return; }
    if(e.en!==rw.herbEn) problems.push(`ch${ch.id}: reward says "${rw.herbEn}" but codex id "${rw.herbId}" is "${e.en}"`);
    if(e.zh!==rw.herbZh) problems.push(`ch${ch.id}: reward zh "${rw.herbZh}" vs codex "${e.zh}"`);
    const own=[e.img,e.plate].filter(Boolean);
    if(rw.herbImg && own.length && own.indexOf(rw.herbImg)<0)
      problems.push(`ch${ch.id}: reward image ${rw.herbImg} is not this herb's art (${own.join(' or ')})`);
    if(rw.herbImg && seen[rw.herbImg] && seen[rw.herbImg]!==rw.herbId)
      problems.push(`ch${ch.id}: reward image ${rw.herbImg} belongs to ${seen[rw.herbImg]}`);
  });
  return {problems, herbs:H.length, chapters:(C||[]).length,
          withArt:H.filter(h=>h.img).length};
});
console.log(`herbs=${r.herbs} (art on ${r.withArt}) · chapters=${r.chapters}`);
if(r.problems.length){ r.problems.forEach(x=>console.log('  ✗ '+x)); process.exitCode=1; }
else console.log('  ✅ every herb picture matches its herb');
// every referenced image actually loads
const bad=await p.evaluate(async()=>{
  const srcs=[...new Set((window.AG_HERBS||[]).map(h=>h.img).filter(Boolean))];
  const out=[];
  await Promise.all(srcs.map(s=>new Promise(res=>{
    const i=new Image(); i.onload=()=>res(); i.onerror=()=>{out.push(s);res()}; i.src=s;
  })));
  return out;
});
if(bad.length) console.log('  ✗ missing files: '+bad.join(', '));
await b.close();})();
