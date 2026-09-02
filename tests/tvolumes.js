/* The chapter list is grouped by volume. The grouping code deliberately falls
   back to the last volume for a chapter outside every range, so a new chapter
   can never vanish from the list — which means a stale range would go unnoticed
   in the browser. This is where it gets noticed. */
const { chromium } = require(process.env.PW||'playwright');
const fs = require('fs'), vm = require('vm');
const R = '/home/claude/site/';
const load = f => { const s = {window:{}}; vm.runInNewContext(fs.readFileSync(R+f,'utf8'), s); return s.window; };

const C = load('data/chapters.js').AG_CHAPTERS;
const V = load('data/volumes.js').AG_VOLUMES;
const IDX = load('data/chapter-index.js').AG_CHAPTER_INDEX.map(r => r.id);
const bad = [];

/* 1 · ranges are ordered, non-overlapping, and well formed */
V.forEach((v, i) => {
  if (!(v.from <= v.to)) bad.push('volume ' + v.id + ' has from > to');
  if (!v.en || !v.zh || !v.blurb || !v.blurb.en || !v.blurb.zh)
    bad.push('volume ' + v.id + ' is missing a name or a blurb in one language');
  if (i && V[i-1].to >= v.from)
    bad.push('volumes ' + V[i-1].id + ' and ' + v.id + ' overlap or are out of order');
});

/* 2 · every shipping chapter falls inside a declared range — not the fallback */
IDX.forEach(id => {
  if (!V.some(v => id >= v.from && id <= v.to))
    bad.push('chapter ' + id + ' is in the index but outside every volume range — extend data/volumes.js');
});

/* 3 · and every written chapter too, held or not, so the range is ready when it ships */
Object.keys(C).forEach(id => {
  if (!V.some(v => id >= v.from && id <= v.to))
    bad.push('chapter ' + id + ' is written but outside every volume range');
});

(async () => {
  const b = await chromium.launch({executablePath: process.env.CHROME||'/opt/pw-browsers/chromium'});
  const p = await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror', e => bad.push('JS error: ' + e));
  await p.addInitScript(() => { try { localStorage.setItem('apricot-grove', JSON.stringify(
    {v:2, char:'yan', mode:'student', flags:{prologueDone:true, chapter01Done:true}})); } catch(e){} });
  await p.goto('file://' + R + 'index.html'); await p.waitForTimeout(600);
  await p.click('#chapBtn'); await p.waitForTimeout(500);

  const rows  = await p.$$eval('#mGames .gitem', ns => ns.map(n => n.dataset.ch));
  const heads = await p.$$eval('#mGames .vhead b', ns => ns.length);
  if (rows.join(',') !== IDX.join(','))
    bad.push('the list shows [' + rows + '] but the index has [' + IDX + ']');
  if (heads !== V.filter(v => IDX.some(id => id >= v.from && id <= v.to)).length)
    bad.push('rendered ' + heads + ' volume headers for ' + V.length + ' volumes');

  /* every row must still be clickable — headers must not swallow taps */
  const clickable = await p.$$eval('#mGames .gitem:not(.locked)', ns => ns.length);
  if (clickable < 2) bad.push('only ' + clickable + ' chapters are playable — grouping broke the unlock walk');

  await b.close();
  if (bad.length) { bad.forEach(x => console.log('  ✗ ' + x)); process.exitCode = 1; }
  else console.log('  ✅ ' + V.length + ' volumes cover all ' + Object.keys(C).length
    + ' written chapters · ' + rows.length + ' rows under ' + heads + ' headers · unlock walk intact');
})();
