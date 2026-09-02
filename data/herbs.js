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
    plate:"art/card-gouqi.jpg",
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
    plate:"art/card-fuling.jpg",
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
    factZh:"活血通經、祛瘀止痛。行血力強，孕婦忌用，有出血傾向者慎用。" },

  /* ── third batch. These five are the building blocks of 四君子湯 and
     四物湯, so they are worth learning as a group rather than one by one.
     Identified from each card's printed title — the first pass mis-read
     Chuan Xiong as Bai Zhu, which is why the title is the only source. */
  { id:"baizhu", en:"Atractylodes Rhizome", py:"Bái Zhú", zh:"白朮",
    img:"art/herb-baizhu.jpg",
    plate:"art/card-baizhu.jpg",
    nature:"Bitter, sweet, warm · Spleen, Stomach",
    natureZh:"苦、甘、溫 · 歸脾胃經",
    fact:"Tonifies the Spleen and dries damp at the same time — it builds and it dries, which is why it anchors so many digestive formulas. Better suited to damp with deficiency than to dryness.",
    factZh:"健脾益氣、燥濕利水，補中兼燥，故為健脾諸方之主藥。宜於脾虛濕困，陰虛燥渴者不宜。" },

  { id:"baishao", en:"White Peony Root", py:"Bái Sháo", zh:"白芍",
    img:"art/herb-baishao.jpg",
    plate:"art/card-baishao.jpg",
    nature:"Bitter, sour, slightly cold · Liver, Spleen",
    natureZh:"苦、酸、微寒 · 歸肝脾經",
    fact:"Nourishes blood and softens the Liver, so it eases cramping and spasm. Sour and inward-moving — the counterweight to herbs that push outward.",
    factZh:"養血柔肝、緩急止痛。味酸主收，與辛散之品相反相成。" },

  { id:"chuanxiong", en:"Chuanxiong Rhizome", py:"Chuān Xiōng", zh:"川芎",
    img:"art/herb-chuanxiong.jpg",
    plate:"art/card-chuanxiong.jpg",
    nature:"Acrid, warm · Liver, Gallbladder, Pericardium",
    natureZh:"辛、溫 · 歸肝膽心包經",
    fact:"Moves blood and moves qi, and rises to the head — the classic choice for headache with stasis. Because it moves so strongly, it is used with care in pregnancy and where there is bleeding.",
    factZh:"活血行氣、祛風止痛，上行頭目，為治頭痛要藥。行散力強，孕婦及出血者慎用。" },

  { id:"gancao", en:"Licorice Root", py:"Gān Cǎo", zh:"甘草",
    img:"art/herb-gancao.jpg",
    plate:"art/card-gancao.jpg",
    nature:"Sweet, neutral · all twelve channels, especially Heart, Lung, Spleen, Stomach",
    natureZh:"甘、平 · 通行十二經，尤歸心肺脾胃",
    fact:"Supplements qi, moistens the Lung, eases spasm, and harmonises the other herbs so a formula works as one thing. Long or high-dose use can cause water retention and raise blood pressure, so it is not a herb to take casually forever.",
    factZh:"補氣潤肺、緩急止痛、調和諸藥。久服或大量可致水腫、血壓升高，不宜長期濫用。" },

  { id:"chenpi", en:"Aged Tangerine Peel", py:"Chén Pí", zh:"陳皮",
    img:"art/herb-chenpi.jpg",
    plate:"art/card-chenpi.jpg",
    nature:"Acrid, bitter, warm · Spleen, Lung",
    natureZh:"辛、苦、溫 · 歸脾肺經",
    fact:"Regulates qi in the middle burner, dries damp and transforms phlegm. Added to tonifying formulas so that supplementing does not turn into stagnation — the older the peel, the better it is said to be.",
    factZh:"理氣健脾、燥濕化痰。補方中常佐之，使補而不滯。陳久者良。" },

  /* ── added with chapters 21–25 ─────────────────────────────────────
     Portraits for these five are printed drawer-labels, not paintings:
     art/herb-<id>.jpg comes from tools/mkherbseal.py until a real
     portrait replaces it. Ting's rule, kept literally —
     「寧可先用文字印版，也不要教錯本草。」 Dropping a painted portrait
     in at the same filename and re-running mkherbcard.py is the whole
     upgrade path; no data changes, no code changes. */

  { id:"huangqi", en:"Astragalus Root", py:"Huáng Qí", zh:"黃耆",
    img:"art/herb-huangqi.jpg",
    plate:"art/card-huangqi.jpg",
    nature:"Sweet, slightly warm · Spleen, Lung",
    natureZh:"甘、微溫 · 歸脾肺經",
    fact:"Tonifies qi and raises the yang, secures the exterior and stops sweating, moves water and reduces swelling, and supports the closing of chronic sores. Unusual among qi tonics in that it works at the surface as well as the centre — which is why it appears in formulas for spontaneous daytime sweating. Not used alone while an exterior pathogen is still unresolved, or where heat is from excess.",
    factZh:"補氣升陽、固表止汗、利水消腫、托毒生肌。補氣藥中兼能達表者，故治自汗。表邪未解、實熱者不宜單用。" },

  { id:"zhizi", en:"Gardenia Fruit", py:"Zhī Zǐ", zh:"梔子",
    img:"art/herb-zhizi.jpg",
    plate:"art/card-zhizi.jpg",
    nature:"Bitter, cold · Heart, Lung, Stomach, Triple Burner",
    natureZh:"苦、寒 · 歸心肺胃三焦經",
    fact:"Drains fire and relieves restlessness, clears heat and drains damp, cools blood and stops bleeding. Its particular talent is direction: it carries heat downward and out through the urine, which is why it colours the urine and why it sits beside Yinchenhao in the classic jaundice formula. Bitter and cold, so it is avoided where the Spleen is cold with loose stools.",
    factZh:"瀉火除煩、清熱利濕、涼血止血。善導熱下行，從小便而出，故能退黃，為茵陳蒿湯之臣。苦寒傷中，脾虛便溏者忌。" },

  { id:"shudihuang", en:"Prepared Rehmannia", py:"Shú Dì Huáng", zh:"熟地黃",
    img:"art/herb-shudihuang.jpg",
    plate:"art/card-shudihuang.jpg",
    nature:"Sweet, slightly warm · Liver, Kidney",
    natureZh:"甘、微溫 · 歸肝腎經",
    fact:"Nourishes blood and enriches yin, supplements essence and fills the marrow. The anchor of both Liu Wei Di Huang Wan and Si Wu Tang, and the reason those formulas reach as deep as they do. Rich and cloying by nature, so it is habitually paired with a moving herb such as Chenpi or Sharen; used cautiously where the Spleen is weak with damp, epigastric fullness or loose stools.",
    factZh:"養血滋陰、補精填髓。六味地黃丸、四物湯之君藥。其性滋膩，每配陳皮、砂仁以行之；脾虛濕滯、脘悶便溏者慎用。" },

  { id:"maidong", en:"Ophiopogon Tuber", py:"Mài Mén Dōng", zh:"麥門冬",
    img:"art/herb-maidong.jpg",
    plate:"art/card-maidong.jpg",
    nature:"Sweet, slightly bitter, slightly cold · Heart, Lung, Stomach",
    natureZh:"甘、微苦、微寒 · 歸心肺胃經",
    fact:"Moistens the Lung and nourishes yin, benefits the Stomach and generates fluids, clears Heart heat and settles restlessness. For the dry cough with a little sticky phlegm, the parched mouth left behind by a fever, and the thin sleeplessness of depleted yin. Being moistening and slightly cold, it is not the herb for a cough from wind-cold or from damp-phlegm.",
    factZh:"潤肺養陰、益胃生津、清心除煩。主燥咳痰少而黏、熱病後津傷口乾、陰虛心煩不寐。性潤微寒，風寒咳嗽、痰濕者不宜。" },

  { id:"rougui", en:"Cinnamon Bark", py:"Ròu Guì", zh:"肉桂",
    img:"art/herb-rougui.jpg",
    plate:"art/card-rougui.jpg",
    nature:"Acrid, sweet, very hot · Kidney, Spleen, Heart, Liver",
    natureZh:"辛、甘、大熱 · 歸腎脾心肝經",
    fact:"Supplements the fire of the gate of vitality, warms the channels and disperses cold, stops cold pain, and leads fire back down to its source. For deep yang depletion: cold limbs, a weak aching low back and knees, a deep slow pulse. Note that it is the bark and not the twig — Guizhi releases the exterior, Rougui warms the interior. Very hot and dispersing, so it is contraindicated in yin deficiency with heat, in active bleeding, and in pregnancy.",
    factZh:"補火助陽、溫經散寒、散寒止痛、引火歸元。主腎陽虛衰：畏寒肢冷、腰膝痠軟、脈沉遲。桂枝為枝以解表，肉桂為皮以溫裡，勿混。大熱之品，陰虛火旺、出血、孕婦忌用。" },

  { id:"zhuru", en:"Bamboo Shavings", py:"Zhú Rú", zh:"竹茹",
    img:"art/herb-zhuru.jpg",
    plate:"art/card-zhuru.jpg",
    nature:"Sweet, slightly cold · Lung, Stomach, Gallbladder",
    natureZh:"甘、微寒 · 歸肺胃膽經",
    fact:"Clears heat and transforms phlegm, settles restlessness, and descends rebellious Stomach qi to stop vomiting. It is the herb of Wen Dan Tang, for a mind that cannot settle when phlegm and heat are tangled together — sleeplessness, palpitations, being easily startled, a bitter mouth and a greasy yellow coat. Being cool and descending, it is not the herb for vomiting that comes from cold in the stomach.",
    factZh:"清熱化痰、除煩止嘔。溫膽湯之要藥，主痰熱互結、心神不寧：不寐、心悸、易驚、口苦、苔黃膩。性涼而降，胃寒作嘔者不宜。" }
];
