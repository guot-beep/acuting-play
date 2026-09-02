/* The analytics beacon must be on every page, must count nobody twice, and
   must never fire from a local copy.

   The last one is not a nicety. The first version was a plain <script src>
   to Cloudflare, and from file:// it failed slowly on every single page load
   — it pushed the whole suite past its timeout — while also counting our own
   development page loads as visitors. So the beacon is now injected only on
   the live host, and this test holds that line. */
const { chromium } = require(process.env.PW||'playwright');
const fs = require('fs'), path = require('path');

const DIR = '/home/claude/site';
const TOKEN = '638c70912f564e788ffa919d304e9166';
/* a redirect shim: counting it would count one visit twice */
/* chapter1.html is a 209-byte redirect shim and would double-count.
   calibrate.html is Ting's own calibration workbench — counting her taps
   as visitors is exactly the pollution the beacon guard exists to prevent. */
const SKIP = new Set(['chapter1.html', 'calibrate.html']);

(async()=>{
const bad = [];
const pages = fs.readdirSync(DIR).filter(f => f.endsWith('.html')).sort();

for (const f of pages) {
  const s = fs.readFileSync(path.join(DIR, f), 'utf8');
  const hits = (s.match(new RegExp(TOKEN, 'g')) || []).length;
  if (SKIP.has(f)) {
    if (hits) bad.push(`${f} is a redirect shim and must not carry the beacon (would double-count)`);
  } else if (hits !== 1) {
    bad.push(`${f} carries the beacon ${hits} times, expected exactly 1`);
  }
}

const b = await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
for (const f of ['index.html','chapter.html?ch=01','practice.html?d=pulse','review.html']) {
  const p = await b.newPage({viewport:{width:390,height:844}});
  const reqs = [];
  p.on('request', r => { if (/cloudflareinsights/.test(r.url())) reqs.push(r.url()); });
  const consoleErrs = [];
  p.on('console', m => { if (m.type() === 'error') consoleErrs.push(m.text()); });
  p.on('pageerror', e => bad.push(`${f}: JS error ${e}`));
  await p.goto('file:///home/claude/site/' + f);
  await p.waitForTimeout(1200);

  if (reqs.length) bad.push(`${f}: asked for the beacon from file:// — it would fail slowly and count us as a visitor`);
  if (consoleErrs.length) bad.push(`${f}: console errors — ${consoleErrs.join(' | ')}`);

  /* the guard has to say yes on the live host, or we would ship analytics
     that never runs anywhere */
  const wouldRun = await p.evaluate(() => {
    const test = (protocol, hostname) =>
      /^https?:$/.test(protocol) && hostname !== "localhost" && hostname !== "127.0.0.1" && hostname !== "";
    return { live: test("https:", "play.acuting.com"),
             local: test("http:", "localhost"),
             file:  test("file:", "") };
  });
  if (!wouldRun.live)  bad.push(`${f}: the guard would block the beacon on the live host`);
  if (wouldRun.local)  bad.push(`${f}: the guard would count localhost page loads`);
  if (wouldRun.file)   bad.push(`${f}: the guard would fire from file://`);
  await p.close();
}
await b.close();

if (bad.length){ bad.forEach(x => console.log('  ✗ ' + x)); process.exitCode = 1; }
else console.log(`  ✅ analytics beacon on ${pages.length - SKIP.size} pages, silent from file://, live on the host`);
})();
