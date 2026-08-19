/* every story must land on a shelf — a region with no matching REGIONS entry
   silently drops its points off the wall */
const {chromium}=require(process.env.PW||'playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:390,height:800}});
const bad=[];p.on('pageerror',e=>bad.push(String(e)));
await p.goto('file:///home/claude/site/pointroom.html'); await p.waitForTimeout(700);
const r=await p.evaluate(()=>({
  stories:STORY.length,
  onWall:document.querySelectorAll('#shelf .jar').length,
  shelves:[...document.querySelectorAll('#shelf .shelfhead')].map(e=>e.textContent.trim()),
  regions:REGIONS.map(x=>x.key),
  used:[...new Set(STORY.map(s=>s.region))],
  noArt:document.querySelectorAll('#shelf .noart').length
}));
const orphan=r.used.filter(x=>r.regions.indexOf(x)<0);
if(orphan.length) bad.push('regions with no shelf: '+orphan.join(', '));
if(r.onWall!==r.stories) bad.push(r.stories+' stories but only '+r.onWall+' jars on the wall');
if(bad.length){bad.forEach(x=>console.log('  ✗ '+x));process.exitCode=1}
else console.log('  ✅ all '+r.onWall+' points on the wall across '+r.shelves.length+' shelves ('+r.shelves.join(' · ')+') · '+r.noArt+' marked plate-needed');
await b.close();})();
