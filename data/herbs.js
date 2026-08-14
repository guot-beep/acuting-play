/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/herbs.js
   The Herb Codex 本草圖鑑 — one shared manifest for every herb card.

   Cards can drop from anywhere (chapters, Point Tap, Daily Case) but
   they all resolve against this list, so a card always has a name, a
   picture and something true to say. Locked entries stay visible as
   silhouettes, which is what makes a collection feel like a collection.

   Adding an herb is a data edit. No code changes.
   ═══════════════════════════════════════════════════════════════ */
window.AG_HERBS = [
  { id:"shengjiang", en:"Fresh Ginger", py:"Shēng Jiāng", zh:"生薑",
    img:"art/herb-shengjiang.jpg",
    plate:"art/card-shengjiang.jpg",
    nature:"Acrid, slightly warm · Lung, Spleen, Stomach",
    natureZh:"辛、微溫 · 歸肺脾胃經",
    fact:"Releases the exterior and disperses cold; warms the middle and stops nausea. The everyday kitchen ally for an early wind-cold.",
    factZh:"發散風寒、溫中止嘔。風寒初起最尋常的廚房之藥。" },

  { id:"ganjiang", en:"Dried Ginger", py:"Gān Jiāng", zh:"乾薑",
    img:"art/herb-ganjiang.jpg",
    /* `plate` is the full illustrated codex card. `img` is a crop of just the
       character, because baked-in text is unreadable at grid size. */
    plate:"art/card-ganjiang.jpg",
    nature:"Acrid, hot · Spleen, Stomach, Kidney, Heart, Lung",
    natureZh:"辛、熱 · 歸脾胃腎心肺經",
    fact:"Warms the middle and expels cold from the interior. Where fresh ginger works on the surface, dried ginger works within.",
    factZh:"溫中散寒，回陽通脈。生薑走表，乾薑守中。" },

  { id:"renshen", en:"Ginseng", py:"Rén Shēn", zh:"人參",
    img:"art/herb-renshen.jpg",
    plate:"art/card-renshen.jpg",
    nature:"Sweet, slightly bitter, slightly warm · Lung, Spleen, Heart",
    natureZh:"甘、微苦、微溫 · 歸肺脾心經",
    fact:"Strongly tonifies original qi. Reserved for real depletion — not a daily pick-me-up.",
    factZh:"大補元氣。用於真虛，非日常補品。" },

  { id:"aiye", en:"Mugwort Leaf", py:"Ài Yè", zh:"艾葉",
    img:"art/herb-aiye.jpg",
    plate:"art/card-aiye.jpg",
    nature:"Bitter, acrid, warm · Liver, Spleen, Kidney",
    natureZh:"苦、辛、溫 · 歸肝脾腎經",
    fact:"Warms the channels and stops bleeding; disperses cold in the lower abdomen. This is the leaf that becomes moxa.",
    factZh:"溫經止血、散寒止痛。艾灸之艾，即此葉。" },

  { id:"danggui", en:"Angelica Root", py:"Dāng Guī", zh:"當歸",
    img:"art/herb-danggui.jpg",
    plate:"art/card-danggui.jpg",
    nature:"Sweet, acrid, warm · Liver, Heart, Spleen",
    natureZh:"甘、辛、溫 · 歸肝心脾經",
    fact:"Nourishes blood and moves blood at the same time — which is why it appears in so many gynaecological formulas.",
    factZh:"補血活血，血中之氣藥。婦科方中常見之由。" },

  { id:"hongzao", en:"Jujube", py:"Hóng Zǎo", zh:"紅棗",
    img:"art/herb-hongzao.jpg",
    plate:"art/card-hongzao.jpg",
    nature:"Sweet, warm · Spleen, Stomach",
    natureZh:"甘、溫 · 歸脾胃經",
    fact:"Tonifies the middle and calms the spirit; softens harsh herbs in a formula so the stomach tolerates them.",
    factZh:"補中益氣、養血安神，並能緩和藥性。" },

  /* NOTE · art/mascot-hongzao-warrior.jpg stays unused: it reads as
     "a round red fruit" and could be either of these two. Both now have
     proper art with the right fruit shape, so the ambiguous one is retired.
     Rule for every entry: a named plate beats a confident mistake. */
  { id:"gouqi", en:"Goji Berry", py:"Gǒu Qǐ Zǐ", zh:"枸杞子",
    img:"art/herb-gouqi.jpg",
    nature:"Sweet, neutral · Liver, Kidney",
    natureZh:"甘、平 · 歸肝腎經",
    fact:"Nourishes Liver and Kidney yin and brightens the eyes — the classic pairing for tired vision.",
    factZh:"滋補肝腎、益精明目。目澀昏花之常用。" },

  { id:"meiguihua", en:"Rose Bud", py:"Méi Guī Huā", zh:"玫瑰花",
    img:"art/herb-meiguihua.jpg",
    plate:"art/card-meiguihua.jpg",
    nature:"Sweet, slightly bitter, warm · Liver, Spleen",
    natureZh:"甘、微苦、溫 · 歸肝脾經",
    fact:"Courses Liver qi and harmonises the blood, gently. Light enough for daily tea, which is why it suits stagnation that comes from feeling rather than from cold.",
    factZh:"疏肝解鬱、和血調經，藥性平和，可作日常花茶。情志所致之鬱，最為相宜。" },

  { id:"fuling", en:"Poria", py:"Fú Líng", zh:"茯苓",
    img:"art/herb-fuling.jpg",
    nature:"Sweet, bland, neutral · Heart, Spleen, Kidney",
    natureZh:"甘、淡、平 · 歸心脾腎經",
    fact:"Drains damp without draining strength, and quiets the spirit. Bland-percolating, so gentle enough for long use.",
    factZh:"利水滲濕、健脾寧心。性平味淡，可久服。" },

  /* ── added with Ting's second batch of illustrated plates ──
     Each was identified from the title printed on its own card, not from the
     order the files arrived in. A picture on the wrong herb teaches wrong
     botany, and that is the one mistake this codex must never make.
     Where an herb carries a real safety point, it goes in `fact` so it
     travels with the card and cannot be dropped. */
  { id:"dangshen", en:"Codonopsis Root", py:"Dǎng Shēn", zh:"黨參",
    img:"art/herb-dangshen.jpg",
    plate:"art/card-dangshen.jpg",
    nature:"Sweet, neutral · Spleen, Lung",
    natureZh:"甘、平 · 歸脾肺經",
    fact:"Tonifies the middle burner and strengthens Spleen and Lung qi. Gentler and more everyday than ginseng, which is why formulas often use it in ginseng's place.",
    factZh:"補中益氣、健脾益肺。性較人參平和，日常方中常代人參而用。" },

  { id:"baihe", en:"Lily Bulb", py:"Bǎi Hé", zh:"百合",
    img:"art/herb-baihe.jpg",
    plate:"art/card-baihe.jpg",
    nature:"Sweet, slightly cold · Heart, Lung",
    natureZh:"甘、微寒 · 歸心肺經",
    fact:"Moistens the Lung and stops a dry cough; clears heat from the Heart and settles a restless mind. Suits dryness and irritability, not phlegm and damp.",
    factZh:"潤肺止咳、清心安神。宜於燥證與心煩，痰濕者非其所長。" },

  { id:"yiyiren", en:"Job's Tears Seed", py:"Yì Yǐ Rén", zh:"薏苡仁",
    img:"art/herb-yiyiren.jpg",
    plate:"art/card-yiyiren.jpg",
    nature:"Sweet, bland, slightly cold · Spleen, Stomach, Lung",
    natureZh:"甘、淡、微寒 · 歸脾胃肺經",
    fact:"Drains damp and strengthens the Spleen, eases damp painful obstruction, and clears heat. Traditionally used with caution during pregnancy.",
    factZh:"利水滲濕、健脾除痺、清熱排膿。古有孕婦慎用之說。" },

  { id:"lianzi", en:"Lotus Seed", py:"Lián Zǐ", zh:"蓮子",
    img:"art/herb-lianzi.jpg",
    plate:"art/card-lianzi.jpg",
    nature:"Sweet, astringent, neutral · Spleen, Kidney, Heart",
    natureZh:"甘、澀、平 · 歸脾腎心經",
    fact:"Tonifies the Spleen and binds — so it both strengthens and holds. Also nourishes the Heart and quiets the spirit. Its astringency means it suits leakage, not constipation.",
    factZh:"補脾止瀉、益腎固精、養心安神。性澀，宜於滑脫，便秘者不宜。" },

  { id:"danzhuye", en:"Lophatherum Leaf", py:"Dàn Zhú Yè", zh:"淡竹葉",
    img:"art/herb-danzhuye.jpg",
    plate:"art/card-danzhuye.jpg",
    nature:"Sweet, bland, cold · Heart, Stomach, Small Intestine",
    natureZh:"甘、淡、寒 · 歸心胃小腸經",
    fact:"Clears heat and drains it downward through the urine. The classic choice when heat shows as restlessness, thirst, mouth sores and scanty dark urine.",
    factZh:"清熱除煩、利尿。心煩口渴、口舌生瘡、小便短赤者宜之。" },

  { id:"honghua", en:"Safflower", py:"Hóng Huā", zh:"紅花",
    img:"art/herb-honghua.jpg",
    plate:"art/card-honghua.jpg",
    nature:"Acrid, warm · Heart, Liver",
    natureZh:"辛、溫 · 歸心肝經",
    fact:"Invigorates blood and breaks stasis. Because it moves blood strongly, it is contraindicated in pregnancy and used with care where there is bleeding.",
    factZh:"活血通經、祛瘀止痛。行血力強，孕婦忌用，有出血傾向者慎用。" }
];
