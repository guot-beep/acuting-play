/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · state.js
   Single source of truth for save state + progression.
   Plain vanilla JS, no build step. Load before any page script:
       <script src="state.js"></script>
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";

  var KEY = "apricot-grove";

  /* ── support link ─────────────────────────────────────────────────
     Ko-fi, set 2026-08. One place, read by hud.js and chapter.html.
     Leave it empty (or leave the REPLACE placeholder in) and every
     "Support" button hides itself — a donate button that 404s costs
     more trust than no button at all. Same rule as the 催更 form.
     If the page ever moves, change this one line and nothing else. */
  var SUPPORT_LINK = "https://ko-fi.com/acuting";
  var VERSION = 2;

  /* ── skill axes ── */
  var AXES = ["needle", "theory", "dx", "herb", "daoyin"];
  var SKILL_MAX = 4;          // radar rings
  var XP_PER_LEVEL = 400;

  function blankStats() {
    var o = {};
    AXES.forEach(function (a) { o[a] = 0; });
    return o;
  }

  function defaults() {
    return {
      v: VERSION,
      char: null,               // yan | he | zhu | hu
      mode: null,               // "beginner" | "student" — asked once, changeable any time
      zh: false,                // English first. Chinese is an opt-in helper layer
                                //  (Settings ⚙ → Chinese support), per the English-first audience.
      xp: 0,
      day: 1,
      stats: blankStats(),      // 0..4 per axis, shown on the radar
      skillXp: { needle: 0, theory: 0, dx: 0, herb: 0, daoyin: 0 },
      flags: {},                // prologueDone, chapter01Done, trainedLandmarks…
      best: {},                 // activity -> { stars, score }
      unlocks: {                // which town nodes may be entered
        needle: true, theory: true, daoyin: true,
        dx: false, herb: false
      },
      cards: [],                // herb cards collected
      points: [],               // point ids learned in the Point Hall 點穴堂
      mastery: {},              // pointId -> repetitions, for the Lung point-tap game
      review: {},               // review queue 溫故 — see the review block below
      streak: 0, lastDay: "",   // overall play streak
      dc: { streak: 0, last: "", solved: 0, results: {} }   // daily case
    };
  }

  /* ── skill xp → axis level (0..4) ── */
  var SKILL_THRESHOLDS = [0, 60, 160, 320, 560];
  function axisLevel(xp) {
    var lv = 0;
    for (var i = 1; i < SKILL_THRESHOLDS.length; i++) if (xp >= SKILL_THRESHOLDS[i]) lv = i;
    return Math.min(SKILL_MAX, lv);
  }

  /* ── load + migrate ── */
  function load() {
    var raw = {};
    try { raw = JSON.parse(global.localStorage.getItem(KEY) || "{}") || {}; } catch (e) { raw = {}; }
    var s = defaults();

    // shallow merge known top-level keys
    Object.keys(s).forEach(function (k) {
      if (raw[k] === undefined) return;
      if (k === "stats" || k === "skillXp" || k === "flags" || k === "best" || k === "unlocks" || k === "dc" || k === "review") {
        if (raw[k] && typeof raw[k] === "object") s[k] = Object.assign(s[k], raw[k]);
      } else s[k] = raw[k];
    });

    /* migrate v1 → v2: flat booleans that used to live at the root */
    ["prologueDone", "trainedLandmarks", "wuqinxiDone", "yinyangDone", "chapter1Done"]
      .forEach(function (f) { if (raw[f]) s.flags[f === "chapter1Done" ? "chapter01Done" : f] = true; });

    // legacy: point-tap kept its own store
    try {
      var legacy = JSON.parse(global.localStorage.getItem("acuting-play-v1") || "null");
      if (legacy && !s.flags.mergedPointTap) {
        s.xp += legacy.xp || 0;
        if (legacy.cards) s.cards = s.cards.concat(legacy.cards);
        if (legacy.mastery) Object.keys(legacy.mastery).forEach(function (k) {
          s.mastery[k] = Math.max(s.mastery[k] || 0, legacy.mastery[k]);
        });
        if ((legacy.streak || 0) > s.streak) { s.streak = legacy.streak; s.lastDay = legacy.lastDay || ""; }
        s.flags.mergedPointTap = true;
      }
    } catch (e) {/* ignore */}

    AXES.forEach(function (a) {
      if (typeof s.stats[a] !== "number") s.stats[a] = 0;
      if (typeof s.skillXp[a] !== "number") s.skillXp[a] = 0;
      // keep radar consistent with skill xp when xp is present
      s.stats[a] = Math.max(s.stats[a], axisLevel(s.skillXp[a]));
    });

    // story-driven unlocks: never revoke something already earned
    s.unlocks.dx = s.unlocks.dx || !!s.flags.chapter01Done;
    s.unlocks.herb = s.unlocks.herb || !!s.flags.chapter02Done;

    s.v = VERSION;
    return s;
  }

  var state = load();

  function save() {
    try { global.localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {/* private mode */}
    return state;
  }

  /* ── language (global, every page reads the same flag) ── */
  function applyLang() {
    if (global.document && global.document.body)
      global.document.body.classList.toggle("nozh", !state.zh);
  }
  function setZh(on) { state.zh = !!on; save(); applyLang(); }
  function toggleZh() { setZh(!state.zh); return state.zh; }
  function bindLangButton(el) {
    if (!el) return;
    var paint = function () { el.textContent = state.zh ? "中文 ON" : "中文 OFF"; };
    applyLang(); paint();
    el.addEventListener("click", function () { toggleZh(); paint(); });
  }

  /* ── game day: ONE definition, UTC, so the world plays the same case ── */
  var EPOCH_UTC = Date.UTC(2026, 0, 1);
  function gameDayNumber(now) {
    var d = now || new Date();
    return Math.floor((Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - EPOCH_UTC) / 864e5);
  }
  function gameDayKey(now) {
    var d = now || new Date();
    return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())).toISOString().slice(0, 10);
  }
  function bumpPlayStreak() {
    var k = gameDayKey();
    if (state.lastDay === k) return state.streak;
    var y = gameDayKey(new Date(Date.now() - 864e5));
    state.streak = (state.lastDay === y) ? (state.streak || 0) + 1 : 1;
    state.lastDay = k; save();
    return state.streak;
  }

  /* ═══ Progression contract ═══
     Every activity ends by calling:
       AG.complete({
         activity:"chapter_01", completed:true, score:87, stars:3,
         xpEarned:120, skillXp:{diagnosis:40, needle:30, theory:20},
         unlocks:["herb_school"]
       })
     Returns { levelUps:[{axis,from,to}], newUnlocks:[], newBest:bool, level, xp }
  */
  var AXIS_ALIAS = {
    diagnosis: "dx", dx: "dx", four_exam: "dx",
    needle: "needle", acupuncture: "needle",
    theory: "theory", foundations: "theory",
    herb: "herb", herbs: "herb", materia: "herb",
    daoyin: "daoyin", cultivation: "daoyin"
  };
  var UNLOCK_ALIAS = {
    dx_school: "dx", diagnosis_school: "dx", jinggu: "dx",
    herb_school: "herb", materia_school: "herb", yaoweng: "herb",
    needle_school: "needle", theory_school: "theory", daoyin_school: "daoyin"
  };

  function complete(result) {
    result = result || {};
    var out = { levelUps: [], newUnlocks: [], newBest: false, xp: state.xp, level: 1 };
    var act = result.activity || "unknown";

    if (result.completed) {
      state.flags[act.replace(/_/g, "") + "Done"] = true;   // chapter_01 -> chapter01Done
      state.flags[act + "_completed"] = true;
    }

    state.xp += Math.max(0, result.xpEarned || 0);

    var sx = result.skillXp || {};
    Object.keys(sx).forEach(function (k) {
      var axis = AXIS_ALIAS[k] || k;
      if (AXES.indexOf(axis) < 0) return;
      var before = state.stats[axis];
      state.skillXp[axis] = (state.skillXp[axis] || 0) + Math.max(0, sx[k] || 0);
      var after = axisLevel(state.skillXp[axis]);
      if (after > before) { state.stats[axis] = after; out.levelUps.push({ axis: axis, from: before, to: after }); }
    });

    var prevBest = state.best[act];
    var stars = result.stars || 0, score = result.score || 0;
    if (!prevBest || stars > prevBest.stars || (stars === prevBest.stars && score > prevBest.score)) {
      state.best[act] = { stars: stars, score: score };
      out.newBest = true;
    }

    (result.unlocks || []).forEach(function (u) {
      var key = UNLOCK_ALIAS[u] || u;
      if (state.unlocks[key] === false) { state.unlocks[key] = true; out.newUnlocks.push(key); }
    });

    // story chapters open their schools
    if (state.flags.chapter01Done && !state.unlocks.dx) { state.unlocks.dx = true; out.newUnlocks.push("dx"); }
    if (state.flags.chapter02Done && !state.unlocks.herb) { state.unlocks.herb = true; out.newUnlocks.push("herb"); }
    if (state.flags.chapter03Done && !state.unlocks.daoyin) { state.unlocks.daoyin = true; }

    bumpPlayStreak();
    save();
    out.xp = state.xp;
    out.level = Math.floor(state.xp / XP_PER_LEVEL) + 1;
    return out;
  }


  /* ══════════════════════════════════════════════════════════════
     Review queue 溫故 — spaced repetition over reasoning questions

     Why: a board student's real problem is not meeting a question once,
     it is meeting it again on the day they were about to forget it.
     Every reasoning question the player answers is scheduled here.
     A wrong answer comes back tomorrow; a right answer spaces out
     1 → 3 → 7 → 16 days, and after that the item retires.

     Key format  "<src>:<owner>:<slot>"
       c:11:dx1     chapter 11, second differentiation step
       p:zangfu:04  practice deck "zangfu", item 4
       h:LI4:2      Point Hall visit for LI4, third question
       s:wuxing:03  sorting set "wuxing", item 3

     Entry (short field names — this lives in localStorage)
       n    how many times in a row it has been answered correctly, 0..4
       d    the day number it next falls due
       miss how many times it has ever been missed
       lbl  what to show the player          e.g. "Chapter 11 · Pattern"
       sub  the smaller line under it        e.g. "肝脾不和"
       href where to go to meet it again     e.g. "chapter.html?ch=11"

     Nothing here reads or writes the page. The engines call mark();
     progress.html and review.html read due() and counts().
     ══════════════════════════════════════════════════════════════ */
  var REVIEW_STEPS = [1, 3, 7, 16];   // days until the next sighting
  var REVIEW_MAX = REVIEW_STEPS.length;

  function dayNumber(key) {
    var p = String(key || gameDayKey()).split("-");
    var t = Date.UTC(+p[0], (+p[1]) - 1, +p[2]);
    return isNaN(t) ? 0 : Math.floor(t / 864e5);
  }

  /* A stable slot id for one question, derived from its own text rather
     than its position in an array — so reordering a deck does not scramble
     the queue, and rewriting a question correctly resets it. */
  function reviewSlot(text) {
    var t = String(text || ""), h = 5381, i = 0;
    for (; i < t.length; i++) h = ((h * 33) ^ t.charCodeAt(i)) >>> 0;
    return h.toString(36).slice(0, 7);
  }

  /* record one answer. ok=false schedules it for tomorrow, ok=true pushes
     it out along REVIEW_STEPS. meta is only stored the first time and when
     it changes, so a label rewrite in the data reaches old saves too. */
  function reviewMark(key, ok, meta) {
    if (!key) return null;
    if (!state.review || typeof state.review !== "object") state.review = {};
    var e = state.review[key] || { n: 0, d: 0, miss: 0 };
    var today = dayNumber();

    if (ok) {
      e.n = Math.min(REVIEW_MAX, (e.n || 0) + 1);
      e.d = today + REVIEW_STEPS[Math.min(e.n, REVIEW_MAX) - 1];
    } else {
      e.n = 0;
      e.miss = (e.miss || 0) + 1;
      e.d = today + 1;
    }
    if (meta) {
      if (meta.lbl) e.lbl = meta.lbl;
      if (meta.sub) e.sub = meta.sub;
      if (meta.href) e.href = meta.href;
    }
    state.review[key] = e;
    save();
    return e;
  }

  /* items due today or overdue. Never-mastered items come first, then the
     ones that have waited longest — so a short session hits the weak ones. */
  function reviewDue(limit) {
    var today = dayNumber(), out = [];
    var r = state.review || {};
    Object.keys(r).forEach(function (k) {
      var e = r[k];
      if (!e || e.n >= REVIEW_MAX) return;          // retired
      if ((e.d || 0) > today) return;               // not yet
      out.push({ key: k, n: e.n || 0, d: e.d || 0, miss: e.miss || 0,
                 lbl: e.lbl || "", sub: e.sub || "", href: e.href || "" });
    });
    out.sort(function (a, b) {
      if (a.n !== b.n) return a.n - b.n;             // shakiest first
      if (a.d !== b.d) return a.d - b.d;             // then longest overdue
      return a.key < b.key ? -1 : 1;
    });
    return (limit && limit > 0) ? out.slice(0, limit) : out;
  }

  function reviewCounts() {
    var today = dayNumber(), r = state.review || {};
    var c = { tracked: 0, due: 0, shaky: 0, retired: 0, missedEver: 0 };
    Object.keys(r).forEach(function (k) {
      var e = r[k]; if (!e) return;
      c.tracked++;
      if ((e.miss || 0) > 0) c.missedEver++;
      if (e.n >= REVIEW_MAX) { c.retired++; return; }
      if ((e.n || 0) === 0) c.shaky++;
      if ((e.d || 0) <= today) c.due++;
    });
    return c;
  }

  /* when does the next item come back? null if nothing is scheduled. */
  function reviewNextDay() {
    var r = state.review || {}, best = null;
    Object.keys(r).forEach(function (k) {
      var e = r[k]; if (!e || e.n >= REVIEW_MAX) return;
      if (best === null || (e.d || 0) < best) best = (e.d || 0);
    });
    return best;
  }

  var RANKS = [
    { en: "Apprentice", zh: "學徒" }, { en: "Student", zh: "醫學生" },
    { en: "Practitioner", zh: "醫士" }, { en: "Physician", zh: "醫師" },
    { en: "Grand Physician", zh: "大醫" }
  ];
  function rank() {
    var i = Math.min(RANKS.length - 1, Math.floor(state.xp / XP_PER_LEVEL));
    return RANKS[i];
  }

  global.AG = {
    KEY: KEY, VERSION: VERSION, SUPPORT_LINK: SUPPORT_LINK, AXES: AXES, SKILL_MAX: SKILL_MAX,
    state: state, save: save, reload: function () { state = load(); global.AG.state = state; return state; },
    reset: function () { try { global.localStorage.removeItem(KEY); } catch (e) {} },
    setZh: setZh, toggleZh: toggleZh, applyLang: applyLang, bindLangButton: bindLangButton,
    mode: function(){ return state.mode || "student"; },
    setMode: function(m){ state.mode = (m==="beginner"?"beginner":"student"); save(); return state.mode; },
    isBeginner: function(){ return state.mode === "beginner"; },
    gameDayNumber: gameDayNumber, gameDayKey: gameDayKey, bumpPlayStreak: bumpPlayStreak,
    complete: complete, axisLevel: axisLevel, rank: rank,
    unlocked: function (k) { return !!state.unlocks[k]; },
    review: { mark: reviewMark, due: reviewDue, counts: reviewCounts, slot: reviewSlot,
              nextDay: reviewNextDay, dayNumber: dayNumber, STEPS: REVIEW_STEPS }
  };
})(window);
