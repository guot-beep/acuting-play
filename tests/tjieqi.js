/* The solar terms are the only content that changes on its own, which makes
   them the easiest place for a wrong claim to sit unread for a year. Two jobs
   here: the calendar has to resolve correctly on every day of the year, and
   nothing in twenty-four entries may promise a cure. */
const { chromium } = require(process.env.PW||'playwright');
const fs = require('fs'), vm = require('vm');
const R = '/home/claude/site/';
const sb = {window:{}, Date};
vm.runInNewContext(fs.readFileSync(R+'data/jieqi.js','utf8'), sb);
const L = sb.window.AG_JIEQI, AT = sb.window.AG_JIEQI_AT, NEXT = sb.window.AG_JIEQI_NEXT;
const bad = [];

/* 1 · twenty-four complete, bilingual entries */
if (L.length !== 24) bad.push('expected 24 terms, found ' + L.length);
L.forEach(t => {
  ['note','eat','care','caution'].forEach(k => {
    if (!t[k] || !t[k].en || !t[k].zh) bad.push(t.zh + ' is missing ' + k + ' in one language');
  });
  if (!t.en || !t.zh || !t.organ || !t.organ.en || !t.organ.zh) bad.push(t.id + ' is missing a name or organ');
  if (t.m < 1 || t.m > 12 || t.d < 1 || t.d > 31) bad.push(t.id + ' has an impossible date');
});
const ns = L.map(t => t.n).sort((a,b) => a-b).join(',');
if (ns !== Array.from({length:24}, (_,i) => i+1).join(',')) bad.push('term numbers are not 1..24');

/* 2 · every day of the year resolves, and all 24 are reachable */
const seen = new Set();
for (let m = 1; m <= 12; m++) {
  const last = new Date(2027, m, 0).getDate();
  for (let d = 1; d <= last; d++) {
    const t = AT(new Date(2027, m-1, d, 12));
    if (!t) { bad.push('no term resolved for ' + m + '/' + d); continue; }
    seen.add(t.id);
    const n = NEXT(new Date(2027, m-1, d, 12));
    if (n.days < 0 || n.days > 20) bad.push(m + '/' + d + ' says the next term is ' + n.days + ' days away');
    if (n.term.id === t.id) bad.push(m + '/' + d + ' says the next term is the current one');
  }
}
if (seen.size !== 24) bad.push('only ' + seen.size + ' of 24 terms are ever reached across a year');

/* 3 · boundaries land on the right side */
[['2027-02-03','dahan'], ['2027-02-04','lichun'], ['2027-01-01','dongzhi'],
 ['2027-09-06','chushu'], ['2027-09-07','bailu'], ['2027-12-31','dongzhi']].forEach(([iso, want]) => {
  const got = AT(new Date(iso + 'T12:00:00')).id;
  if (got !== want) bad.push(iso + ' resolved to ' + got + ', expected ' + want);
});

/* 4 · no entry may promise an outcome. Ting's rule, enforced:
   「不說『這能治好』『保證』『根治』」 — seasonal self-care is not treatment. */
const CLAIMS = [
  /\bcures?\b/i, /\bcured\b/i, /\bheals\b/i, /\bguarantee/i, /\bwill fix\b/i,
  /\bprevents? (?:disease|illness|cancer|infection)\b/i, /\bmiracle\b/i,
  /根治/, /治癒/, /保證/, /必愈/, /藥到病除/, /包好/
];
L.forEach(t => ['note','eat','care','caution'].forEach(k => {
  ['en','zh'].forEach(lang => {
    const txt = t[k][lang];
    CLAIMS.forEach(re => { if (re.test(txt)) bad.push(t.zh + '.' + k + '.' + lang + ' makes a claim: ' + re); });
  });
}));

(async () => {
  const b = await chromium.launch({executablePath: process.env.CHROME||'/opt/pw-browsers/chromium'});
  const p = await b.newPage({viewport:{width:390,height:844}});
  p.on('pageerror', e => bad.push('JS error: ' + e));
  await p.addInitScript(() => { try { localStorage.setItem('apricot-grove', JSON.stringify(
    {v:2, char:'yan', mode:'student', flags:{prologueDone:true}})); } catch(e){} });
  await p.goto('file://' + R + 'index.html'); await p.waitForTimeout(600);
  if (await p.$eval('#seasonBand', n => n.hidden)) bad.push('the season band is hidden in the town');
  await p.click('#seasonBand'); await p.waitForTimeout(450);
  if (!(await p.$eval('#sheet', n => n.classList.contains('on')))) bad.push('tapping the band did not open the sheet');
  const heads = await p.$$eval('#mGames .jq h5', ns2 => ns2.length);
  if (heads !== 3) bad.push('the season sheet rendered ' + heads + ' sections, expected 3');
  const note = await p.textContent('#mNote');
  if (!/not treatment/i.test(note)) bad.push('the season sheet does not carry its not-treatment line');
  /* Tap the scrim where a thumb actually would — above the sheet. Clicking the
     element centre lands on the sheet, which sits over it. */
  await p.mouse.click(195, 24); await p.waitForTimeout(400);
  if (await p.$eval('#sheet', n => n.classList.contains('on'))) bad.push('the season sheet did not close');
  await b.close();

  if (bad.length) { bad.forEach(x => console.log('  ✗ ' + x)); process.exitCode = 1; }
  else console.log('  ✅ 24 solar terms, complete and bilingual · every day of the year resolves · '
    + 'boundaries correct · no entry promises a cure · band opens and closes');
})();
