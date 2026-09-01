/* Every visible control must actually receive its own clicks.

   The bug this exists for: converting the Retreat panel and the mentor sheet
   into centred desktop dialogs left them parked over the middle of the card and
   hidden with opacity:0 — invisible to the eye, solid to the mouse. On a laptop
   the entire story mode became unplayable while every screenshot looked
   perfect, because a screenshot cannot show you what is on top.

   So: at each width, on each screen, take every visible control, and ask the
   document what is actually at that control's own centre. If the answer is not
   the control, something is sitting on it. */
const { chromium } = require(process.env.PW||'playwright');
const B = 'file:///home/claude/site/';

const CONTROLS = 'button, a[href], .opt, .jar, .chip, .bk, .card, .node, [role="button"]';

/* pages, and the screens worth forcing on each. The chapter engine hides most
   of itself behind progress, so it is driven directly. */
const PAGES = [
  ['index.html',                    null],
  ['progress.html',                 null],
  ['review.html',                   null],
  ['pointroom.html',                null],
  ['herbroom.html',                 null],
  ['practice.html?d=fuhe',          '#go'],
  ['sort.html?s=five_elements',     '#go'],
  ['dailycase.html',                '#startBtn'],
  ['prologue.html',                 null],
  ['yinyang.html',                  null],
  ['wuqinxi.html',                  null],
  ['acuting-play.html',             null],
];
const CH_SCREENS = [[2,'s-look'],[3,'s-pulse'],[5,'s-dx'],[6,'s-rx']];
const SIZES = [[390,844,'phone'],[1280,800,'laptop'],[1440,900,'desktop']];

async function audit(p, where, bad) {
  const hits = await p.evaluate((sel) => {
    /* "Visible" has to mean visible after every ancestor has had its say. The
       first version only looked at the element itself and so reported controls
       on closed screens and inside faded-out dialogs — which are supposed to be
       unclickable. An ancestor that is display:none, opacity:0 or
       pointer-events:none is the page saying "not now", and that is correct. */
    const vis = el => {
      const r = el.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) return false;
      if (r.top >= innerHeight || r.bottom <= 0 || r.left >= innerWidth || r.right <= 0) return false;
      for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
        const s = getComputedStyle(n);
        if (s.display === 'none' || s.visibility === 'hidden') return false;
        if (parseFloat(s.opacity) === 0) return false;
        if (s.pointerEvents === 'none') return false;
      }
      return true;
    };
    /* Test the centre of the part you can actually see. A control half scrolled
       out of its list has its true centre below the list, which is not a bug —
       it is a scroll position. Clip to every scrolling ancestor first. */
    const visibleBox = el => {
      let r = el.getBoundingClientRect();
      let box = {l:r.left, t:r.top, rr:r.right, b:r.bottom};
      for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
        const s = getComputedStyle(n);
        if (!/auto|scroll|hidden/.test(s.overflowY + s.overflowX)) continue;
        const c = n.getBoundingClientRect();
        box.l = Math.max(box.l, c.left);   box.t = Math.max(box.t, c.top);
        box.rr = Math.min(box.rr, c.right); box.b = Math.min(box.b, c.bottom);
      }
      box.l = Math.max(box.l, 0); box.t = Math.max(box.t, 0);
      box.rr = Math.min(box.rr, innerWidth); box.b = Math.min(box.b, innerHeight);
      return box;
    };

    const out = [];
    document.querySelectorAll(sel).forEach(el => {
      if (!vis(el) || el.disabled) return;
      const box = visibleBox(el);
      const vw = box.rr - box.l, vh = box.b - box.t;
      if (vw < 8 || vh < 8) return;              // scrolled away, not covered
      const cx = box.l + vw / 2, cy = box.t + vh / 2;
      const top = document.elementFromPoint(cx, cy);
      if (top && (top === el || el.contains(top) || top.contains(el))) return;
      out.push({
        me: (el.id || el.className || el.tagName).toString().slice(0, 40),
        text: (el.textContent || '').trim().slice(0, 30),
        by: top ? (top.id || top.className || top.tagName).toString().slice(0, 40) : 'nothing'
      });
    });
    return out;
  }, CONTROLS);
  hits.forEach(h => bad.push(`${where}: "${h.text}" (${h.me}) is covered by ${h.by}`));
}

(async()=>{
const b = await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
const bad = [];
let checked = 0;

for (const [w, h, label] of SIZES) {
  for (const [url, start] of PAGES) {
    const p = await b.newPage({viewport:{width:w, height:h}});
    await p.goto(B + url);
    await p.waitForTimeout(650);
    if (start) { await p.click(start, {timeout:1500}).catch(()=>{}); await p.waitForTimeout(400); }
    await audit(p, `${label} ${url}`, bad);
    checked++;
    await p.close();
  }
  /* the chapter engine, screen by screen */
  const p = await b.newPage({viewport:{width:w, height:h}});
  await p.goto(B + 'chapter.html?ch=19');
  await p.waitForTimeout(800);
  for (const [stage, id] of CH_SCREENS) {
    await p.evaluate(([s,i]) => { setStage(s); show(i); }, [stage,id]);
    await p.waitForTimeout(300);
    await audit(p, `${label} chapter ${id}`, bad);
    checked++;
  }
  await p.close();
}
const b2 = b;

/* Hit-testing proves nothing is on top. This proves a person can finish a
   chapter with real clicks — the thing that was actually broken. */
for (const [w, h, label] of [[390,844,'phone'],[1440,900,'desktop']]) {
  const p = await b2.newPage({viewport:{width:w, height:h}});
  p.on('pageerror', e => bad.push(`${label} playthrough: JS error ${e}`));
  await p.goto(B + 'chapter.html?ch=19');
  await p.waitForTimeout(800);
  let screen = '', reachedEnd = false;
  for (let step = 0; step < 90; step++) {
    screen = await p.evaluate(() => document.querySelector('.screen.active')?.id || '?');
    if (screen === 's-end') { reachedEnd = true; break; }
    if (screen === 's-story') { await p.click('#s-story', {timeout:2000}).catch(()=>{}); await p.waitForTimeout(180); continue; }
    if (screen === 's-needle') {
      await p.evaluate(() => { const t = CH.target, v = t.view || {x:0,y:0,w:t.w,h:t.h};
        const svg = document.getElementById('arm'), r = svg.getBoundingClientRect();
        const px = (t.x-v.x)/v.w*r.width + r.left, py = (t.y-v.y)/v.h*r.height + r.top;
        svg.dispatchEvent(new PointerEvent('pointerdown', {clientX:px, clientY:py, bubbles:true}));
        svg.dispatchEvent(new PointerEvent('pointerup',   {clientX:px, clientY:py, bubbles:true})); });
      await p.waitForTimeout(320);
    }
    /* the prescription step wants three picks before it will advance */
    /* The prescription step wants three DIFFERENT points before it will let you
       through — clicking the same option three times just toggles it. */
    const want = screen === 's-rx' ? 3 : 1;
    for (let k = 0; k < want; k++) {
      const opts = p.locator('.screen.active .opt:not(.used)');
      if (await opts.count() <= k) break;
      await opts.nth(k).click({timeout:1500}).catch(()=>{});
      await p.waitForTimeout(160);
    }
    const next = p.locator('.screen.active button:visible').filter({hasText:/▸/}).last();
    if (await next.count()) { await next.click({timeout:1500}).catch(()=>{}); await p.waitForTimeout(240); }
  }
  if (!reachedEnd) bad.push(`${label}: a chapter cannot be finished with real clicks — stuck on ${screen}`);
  await p.close();
}
await b2.close();

if (bad.length) { [...new Set(bad)].forEach(x => console.log('  ✗ ' + x)); process.exitCode = 1; }
else console.log(`  ✅ every visible control takes its own clicks (${checked} screens × ${SIZES.length} widths) · a chapter finishes on phone and desktop`);
})();
