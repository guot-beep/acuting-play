/* Nothing may teach a point position that no person has been asked to check.
   Two points shipped wrong (SP6 and GB39: right height, wrong side of the
   bone) because a coordinate was placed by eye and never reviewed. This test
   is the standing consequence: every needling coordinate that reaches a player
   must also appear on the calibration worklist, with the same numbers. */
const fs = require('fs');
const ROOT = '/home/claude/site';
global.window = {};
require(ROOT + '/data/chapters.js');
require(ROOT + '/data/calib.js');
require(ROOT + '/data/chapter-index.js');

const C     = window.AG_CHAPTERS || {};
const CAL   = window.AG_CALIB || [];
const RULE  = window.AG_CALIB_PLATES || {};
const INDEX = (window.AG_CHAPTER_INDEX || []).map(r => r.id);
const bad = [];

const DEFAULT_PLATE = 'art/body-arm-default.jpg';
const key = (img, x, y) => (img || DEFAULT_PLATE) + '@' + x + ',' + y;
const byKey = {};
CAL.forEach(c => { byKey[key(c.img, c.x, c.y)] = c; });

/* 1 · every shipping chapter's target is on the worklist, with the same numbers */
Object.keys(C).sort().forEach(id => {
  const ch = C[id], t = ch.target;
  if (!t) return;
  const shipping = INDEX.indexOf(id) >= 0;
  const hit = byKey[key(t.img, t.x, t.y)];
  if (hit) return;
  const sameId = CAL.filter(c => c.id.replace(/b$/, '') === t.id && c.img === (t.img || DEFAULT_PLATE));
  const where = 'ch' + id + ' ' + t.id + ' at ' + t.x + ',' + t.y;
  if (sameId.length) bad.push(where + ' disagrees with data/calib.js (' + sameId.map(c => c.x + ',' + c.y).join(' / ') + ')');
  else if (shipping)  bad.push(where + ' ships to players but is on nobody\'s list to check');
  else                bad.push(where + ' is held, but still belongs on the calibration worklist');
});

/* 2 · every plate the worklist names actually exists */
CAL.forEach(c => {
  if (!fs.existsSync(ROOT + '/' + c.img)) bad.push(c.id + ' points at a missing plate: ' + c.img);
  if (!c.where || !c.where.zh || !c.where.en) bad.push(c.id + ' has no textbook definition to check against');
});

/* 3 · a cun spec is meaningless without a ruler for that plate */
CAL.forEach(c => {
  if (c.cun !== undefined && !RULE[c.img]) bad.push(c.id + ' has a cun spec but ' + c.img + ' has no landmark pair');
});

/* 4 · a held chapter must say why it is held */
Object.keys(C).forEach(id => {
  if (C[id].hold && INDEX.indexOf(id) >= 0) bad.push('ch' + id + ' is marked hold but still appears in the index');
});

const done = CAL.filter(c => c.verified).length;
if (bad.length) { bad.forEach(x => console.log('  ✗ ' + x)); process.exitCode = 1; }
else console.log('  ✅ ' + CAL.length + ' coordinates on the worklist, all matching data/chapters.js · '
  + done + ' verified by Ting, ' + (CAL.length - done) + ' still provisional · '
  + Object.keys(C).filter(id => C[id].hold).length + ' chapter(s) held back');
