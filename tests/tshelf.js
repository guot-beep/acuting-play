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
/* Every point a chapter actually prescribes must have somewhere to be looked
   up. Fifteen of them did not, which meant a student reading "GV20 raises what
   has descended" inside a chapter and going to find it met nothing at all.
   ASHI 阿是穴 is exempt: it is a way of choosing a point, not a located one. */
{
  const fs2 = require('fs'), vm2 = require('vm');
  const box = {window:{}};
  vm2.runInNewContext(fs2.readFileSync('/home/claude/site/data/points.js','utf8'), box);
  vm2.runInNewContext(fs2.readFileSync('/home/claude/site/data/chapters.js','utf8'), box);
  const have = new Set(box.window.AG_POINTS.map(p => p.id));
  const missing = {};
  Object.entries(box.window.AG_CHAPTERS).forEach(([id, c]) => {
    (c.rx || []).forEach(o => {
      if (o.id && o.id !== 'ASHI' && !have.has(o.id)) (missing[o.id] = missing[o.id] || []).push(id);
    });
    if (c.target && !have.has(c.target.id)) (missing[c.target.id] = missing[c.target.id] || []).push('target ' + id);
  });
  const orphans = Object.keys(missing).sort();
  if (orphans.length) {
    orphans.forEach(id => console.log('  ✗ ' + id + ' is prescribed in chapter '
      + missing[id].join(', ') + ' but has no Point Hall entry'));
    process.exitCode = 1;
  } else {
    console.log('  ✅ every point prescribed in a chapter can be looked up in the hall');
  }
}

await b.close();})();
