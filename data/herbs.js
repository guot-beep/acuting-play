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
    img:"art/mascot-jiang-run.jpg",
    nature:"Acrid, slightly warm · Lung, Spleen, Stomach",
    natureZh:"辛、微溫 · 歸肺脾胃經",
    fact:"Releases the exterior and disperses cold; warms the middle and stops nausea. The everyday kitchen ally for an early wind-cold.",
    factZh:"發散風寒、溫中止嘔。風寒初起最尋常的廚房之藥。" },

  { id:"ganjiang", en:"Dried Ginger", py:"Gān Jiāng", zh:"乾薑",
    img:"art/mascot-hongzao-warrior.jpg",
    nature:"Acrid, hot · Spleen, Stomach, Kidney, Heart, Lung",
    natureZh:"辛、熱 · 歸脾胃腎心肺經",
    fact:"Warms the middle and expels cold from the interior. Where fresh ginger works on the surface, dried ginger works within.",
    factZh:"溫中散寒，回陽通脈。生薑走表，乾薑守中。" },

  { id:"renshen", en:"Ginseng", py:"Rén Shēn", zh:"人參",
    img:"art/herb-renshen.jpg",
    nature:"Sweet, slightly bitter, slightly warm · Lung, Spleen, Heart",
    natureZh:"甘、微苦、微溫 · 歸肺脾心經",
    fact:"Strongly tonifies original qi. Reserved for real depletion — not a daily pick-me-up.",
    factZh:"大補元氣。用於真虛，非日常補品。" },

  { id:"aiye", en:"Mugwort Leaf", py:"Ài Yè", zh:"艾葉",
    img:"art/herb-aiye.jpg",
    nature:"Bitter, acrid, warm · Liver, Spleen, Kidney",
    natureZh:"苦、辛、溫 · 歸肝脾腎經",
    fact:"Warms the channels and stops bleeding; disperses cold in the lower abdomen. This is the leaf that becomes moxa.",
    factZh:"溫經止血、散寒止痛。艾灸之艾，即此葉。" },

  { id:"danggui", en:"Angelica Root", py:"Dāng Guī", zh:"當歸",
    img:"",
    nature:"Sweet, acrid, warm · Liver, Heart, Spleen",
    natureZh:"甘、辛、溫 · 歸肝心脾經",
    fact:"Nourishes blood and moves blood at the same time — which is why it appears in so many gynaecological formulas.",
    factZh:"補血活血，血中之氣藥。婦科方中常見之由。" },

  { id:"hongzao", en:"Jujube", py:"Hóng Zǎo", zh:"紅棗",
    img:"",
    nature:"Sweet, warm · Spleen, Stomach",
    natureZh:"甘、溫 · 歸脾胃經",
    fact:"Tonifies the middle and calms the spirit; softens harsh herbs in a formula so the stomach tolerates them.",
    factZh:"補中益氣、養血安神，並能緩和藥性。" },

  { id:"gouqi", en:"Goji Berry", py:"Gǒu Qǐ Zǐ", zh:"枸杞子",
    img:"",
    nature:"Sweet, neutral · Liver, Kidney",
    natureZh:"甘、平 · 歸肝腎經",
    fact:"Nourishes Liver and Kidney yin and brightens the eyes — the classic pairing for tired vision.",
    factZh:"滋補肝腎、益精明目。目澀昏花之常用。" },

  { id:"fuling", en:"Poria", py:"Fú Líng", zh:"茯苓",
    img:"",
    nature:"Sweet, bland, neutral · Heart, Spleen, Kidney",
    natureZh:"甘、淡、平 · 歸心脾腎經",
    fact:"Drains damp without draining strength, and quiets the spirit. Bland-percolating, so gentle enough for long use.",
    factZh:"利水滲濕、健脾寧心。性平味淡，可久服。" }
];
