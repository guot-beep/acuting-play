/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/calib.js
   定位校正清單 · the point-calibration worklist

   Every needling coordinate the game uses, with the textbook
   definition beside it, so Ting can check each one against her own
   book and tap the true location on calibrate.html.

   WHY THIS FILE EXISTS
   Heights can be computed — three cun above a malleolus is arithmetic.
   Anterior versus posterior cannot: it is read off an anatomy plate by
   eye, and an eye that is not holding a textbook gets it wrong. Two
   points shipped wrong that way (SP6 and GB39, both correct in height
   and both on the wrong side of the bone). This is the fix: nothing is
   trusted until a person with the book has confirmed it.

   verified:true  — Ting has checked this position against her textbook
   verified:false — my placement, not yet checked; treat as provisional
   ═══════════════════════════════════════════════════════════════ */

/* ── the cun ruler ────────────────────────────────────────────────
   Height along a limb is arithmetic, not opinion: three cun above the
   medial malleolus is a number once you know where the malleolus and
   the knee are. So each plate gets two bony landmarks and the standard
   proportional distance between them, Ting marks those two once, and
   every point on that plate gets its height computed instead of guessed.
   What is left for her eye is only anterior-versus-posterior — which is
   exactly the half that went wrong, and the half a ruler cannot decide. */
window.AG_CALIB_PLATES = {
  "art/body-leg-medial.jpg": {
    a:{zh:"內踝尖", en:"tip of the medial malleolus"},
    b:{zh:"陰陵泉 SP9", en:"depression on the lower border of the medial condyle of the tibia"},
    cun:13, note:"內踝尖至陰陵泉，十三寸。" },
  "art/body-leg-lateral.jpg": {
    a:{zh:"外踝尖", en:"tip of the lateral malleolus"},
    b:{zh:"膝中（犢鼻水平）", en:"the knee joint line, level with ST35 Dubi"},
    cun:16, note:"外踝尖至膝中，十六寸。" },
  "art/body-leg-anterior.jpg": {
    a:{zh:"外踝尖", en:"tip of the lateral malleolus"},
    b:{zh:"犢鼻 ST35", en:"the hollow below the kneecap, lateral to the patellar ligament"},
    cun:16, note:"外踝尖至犢鼻，十六寸。" },
  "art/body-forearm-palmar.jpg": {
    a:{zh:"腕橫紋", en:"the wrist crease"},
    b:{zh:"肘橫紋", en:"the cubital (elbow) crease"},
    cun:12, note:"腕橫紋至肘橫紋，十二寸。" },
  "art/body-arm-default.jpg": {
    a:{zh:"腕橫紋", en:"the wrist crease"},
    b:{zh:"肘橫紋", en:"the cubital (elbow) crease"},
    cun:12, note:"腕橫紋至肘橫紋，十二寸。" }
  /* head-lateral has no proportional pair worth measuring this way —
     GB20 and GB8 are found off the hairline and the ear, so they stay
     fully manual. Better an honest gap than a ruler that lies. */
};

window.AG_CALIB = [
  { id:"LU7", cun:1.5, zh:"列缺", py:"Lièquē", img:"art/body-arm-default.jpg", w:434, h:930,
    x:262, y:497, chs:["01","02"], verified:false,
    where:{en:"1.5 cun above the wrist crease, superior to the styloid process of the radius.",
           zh:"腕橫紋上一寸五分，橈骨莖突上方。"} },

  { id:"PC6", cun:2, zh:"內關", py:"Nèiguān", img:"art/body-arm-default.jpg", w:434, h:930,
    x:288, y:478, chs:["03"], verified:false,
    where:{en:"2 cun above the wrist crease, between the tendons of palmaris longus and flexor carpi radialis.",
           zh:"腕橫紋上二寸，掌長肌腱與橈側腕屈肌腱之間。"} },

  { id:"ST36", cun:13, zh:"足三里", py:"Zúsānlǐ", img:"art/body-leg-anterior.jpg", w:434, h:1159,
    x:180, y:337, chs:["04"], verified:false,
    where:{en:"3 cun below ST35 Dubi, one middle-finger breadth lateral to the anterior crest of the tibia.",
           zh:"犢鼻下三寸，脛骨前緣外一橫指（中指）。"} },

  { id:"SP6", cun:3, zh:"三陰交", py:"Sānyīnjiāo", img:"art/body-leg-medial.jpg", w:434, h:1159,
    x:178, y:722, chs:["05"], verified:false, flagged:true,
    where:{en:"3 cun above the tip of the medial malleolus, POSTERIOR to the medial border of the tibia.",
           zh:"內踝尖上三寸，脛骨內側緣<b>後方</b>。"} },

  { id:"GB20", zh:"風池", py:"Fēngchí", img:"art/body-head-lateral.jpg", w:434, h:1159,
    x:278, y:578, chs:["06"], verified:false,
    where:{en:"In the depression between the upper end of sternocleidomastoid and trapezius, level with GV16.",
           zh:"胸鎖乳突肌與斜方肌上端之間凹陷中，平風府。"} },

  { id:"LU9", cun:0, zh:"太淵", py:"Tàiyuān", img:"art/body-forearm-palmar.jpg", w:434, h:1159,
    x:140, y:652, chs:["07","21"], verified:false,
    where:{en:"At the radial end of the wrist crease, in the depression lateral to the radial artery.",
           zh:"腕橫紋橈側端，橈動脈搏動處外側凹陷中。"} },

  { id:"LU5", cun:12, zh:"尺澤", py:"Chǐzé", img:"art/body-forearm-palmar.jpg", w:434, h:1159,
    x:160, y:158, chs:["08"], verified:false,
    where:{en:"On the cubital crease, in the depression on the radial side of the biceps brachii tendon.",
           zh:"肘橫紋中，肱二頭肌腱橈側凹陷中。"} },

  { id:"SP3", zh:"太白", py:"Tàibái", img:"art/body-leg-medial.jpg", w:434, h:1159,
    x:325, y:966, chs:["09"], verified:false,
    where:{en:"Proximal and inferior to the head of the first metatarsal, at the border of red and white flesh.",
           zh:"第一蹠骨小頭後下方，赤白肉際凹陷中。"} },

  { id:"KI3", cun:0, zh:"太谿", py:"Tàixī", img:"art/body-leg-medial.jpg", w:434, h:1159,
    x:113, y:868, chs:["10","13","25"], verified:false,
    where:{en:"In the depression midway between the tip of the medial malleolus and the Achilles tendon.",
           zh:"內踝尖與跟腱之間凹陷中，與內踝尖平齊。"} },

  { id:"LR3", zh:"太衝", py:"Tàichōng", img:"art/body-leg-anterior.jpg", w:434, h:1159,
    x:176, y:962, chs:["11"], verified:false,
    where:{en:"On the dorsum of the foot, in the depression distal to the junction of the 1st and 2nd metatarsal bones.",
           zh:"足背，第一、二蹠骨結合部之前凹陷中。"} },

  { id:"ST40", cun:8, zh:"豐隆", py:"Fēnglóng", img:"art/body-leg-anterior.jpg", w:434, h:1159,
    x:162, y:552, chs:["12"], verified:false,
    where:{en:"8 cun below ST35 Dubi, two finger-breadths lateral to the anterior crest of the tibia.",
           zh:"犢鼻下八寸，脛骨前緣外二橫指。"} },

  { id:"PC6b", cun:2, zh:"內關", py:"Nèiguān", img:"art/body-forearm-palmar.jpg", w:434, h:1159,
    x:201, y:570, chs:["14"], verified:false,
    where:{en:"2 cun above the wrist crease, between the tendons of palmaris longus and flexor carpi radialis.",
           zh:"腕橫紋上二寸，掌長肌腱與橈側腕屈肌腱之間。"} },

  { id:"KI7", cun:2, zh:"復溜", py:"Fùliū", img:"art/body-leg-medial.jpg", w:434, h:1159,
    x:102, y:780, chs:["15"], verified:false,
    where:{en:"2 cun directly above KI3, on the ANTERIOR border of the Achilles tendon.",
           zh:"太谿直上二寸，跟腱<b>前緣</b>。"} },

  { id:"LU6", cun:7, zh:"孔最", py:"Kǒngzuì", img:"art/body-forearm-palmar.jpg", w:434, h:1159,
    x:152, y:364, chs:["16"], verified:false,
    where:{en:"7 cun above the wrist crease, on the line joining LU5 Chize and LU9 Taiyuan.",
           zh:"尺澤與太淵連線上，腕橫紋上七寸。"} },

  { id:"HT7", cun:0, zh:"神門", py:"Shénmén", img:"art/body-forearm-palmar.jpg", w:434, h:1159,
    x:236, y:656, chs:["17"], verified:false,
    where:{en:"At the ulnar end of the wrist crease, radial to the flexor carpi ulnaris tendon, at the proximal border of the pisiform.",
           zh:"腕橫紋尺側端，尺側腕屈肌腱橈側凹陷中，豌豆骨近端。"} },

  { id:"PC4", cun:5, zh:"郄門", py:"Xìmén", img:"art/body-forearm-palmar.jpg", w:434, h:1159,
    x:199, y:447, chs:["18"], verified:false,
    where:{en:"5 cun above the wrist crease on the PC3–PC7 line, between the two tendons.",
           zh:"曲澤與大陵連線上，腕橫紋上五寸，兩筋之間。"} },

  { id:"SP9", cun:13, zh:"陰陵泉", py:"Yīnlíngquán", img:"art/body-leg-medial.jpg", w:434, h:1159,
    x:193, y:289, chs:["19"], verified:false,
    where:{en:"In the depression on the lower border of the medial condyle of the tibia.",
           zh:"脛骨內側髁下緣與脛骨內側緣之間凹陷中。"} },

  { id:"GB8", zh:"率谷", py:"Shuàigǔ", img:"art/body-head-lateral.jpg", w:434, h:1159,
    x:232, y:340, chs:["20"], verified:false,
    where:{en:"1.5 cun directly above the apex of the auricle, within the hairline.",
           zh:"耳尖直上，入髮際一寸五分。"} },

  { id:"GB34", zh:"陽陵泉", py:"Yánglíngquán", img:"art/body-leg-lateral.jpg", w:434, h:1159,
    x:240, y:262, chs:["22"], verified:false, isNew:true,
    where:{en:"In the depression ANTERIOR and INFERIOR to the head of the fibula.",
           zh:"腓骨小頭<b>前下方</b>凹陷中。"} },

  { id:"GB39", cun:3, zh:"懸鐘", py:"Xuánzhōng", img:"art/body-leg-lateral.jpg", w:434, h:1159,
    x:238, y:733, chs:["23"], verified:false, isNew:true, flagged:true,
    where:{en:"3 cun above the tip of the lateral malleolus, on the ANTERIOR border of the fibula.",
           zh:"外踝尖上三寸，腓骨<b>前緣</b>。"} },

  { id:"KI6", cun:-1, zh:"照海", py:"Zhàohǎi", img:"art/body-leg-medial.jpg", w:434, h:1159,
    x:146, y:890, chs:["24"], verified:false, isNew:true,
    where:{en:"1 cun below the tip of the medial malleolus, in the depression.",
           zh:"內踝尖下一寸凹陷中。"} }
];
