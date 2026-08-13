/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/herbstory.js
   藥草間 · The Herb Room

   One short scene per herb. The herb speaks for itself: who it is,
   what it is good at, and — always — when it should NOT be used.
   Three questions follow, and the third is always the caution.
   That ordering is deliberate: a beginner who only learns what an
   herb is "good for" has learned the dangerous half.

   Names, pinyin, nature and pictures come from data/herbs.js — this
   file only carries the story. Adding an herb is a data edit.

   LANGUAGE RULE — every field is English-first:
     t     English label only          c     the Chinese term only
     note  English sentences, then ONE <span class="zh">…</span>
           holding Chinese only.
   Nothing English may sit inside a .zh span, because .zh is hidden
   whenever the player turns 中文 off — anything in there disappears.

   Contract per entry:
     id      matches an id in AG_HERBS
     beats[] {en, zh} — tap-through dialogue, 2–4 of them
     qs[]    {q, cq, opts:[{t, c, ok, note}]}  exactly 3
     card    {en, zh} — the line kept on the collected card
   ═══════════════════════════════════════════════════════════════ */
window.AG_HERBSTORY = [

/* ── 人參 ───────────────────────────────────────────────── */
{ id:"renshen",
  beats:[
    {en:"A stout little root swaggers out from behind the drawers, arms crossed, entirely pleased with itself.<br><b>Ginseng:</b> \"You have heard of me.\"",
     zh:"一根壯實的小根從藥櫃後面晃出來，抱著手，一臉得意。<br><b>人參：</b>「你聽過我。」"},
    {en:"<b>Ginseng:</b> \"Sweet, slightly bitter, slightly warm. Lung, Spleen, Heart. I greatly tonify original qi — the deep reserve, not the daily energy you get from sleeping well.\"",
     zh:"<b>人參：</b>「甘、微苦、微溫，歸肺脾心。我大補元氣——是根本那一層，不是睡飽了就有的那種精神。」"},
    {en:"It leans in, and for the first time looks serious.<br><b>Ginseng:</b> \"Which is why I am not a daily drink. Put me in a body that is full and hot, and I make it worse. Remember that part.\"",
     zh:"它靠過來，第一次收起笑臉。<br><b>人參：</b>「所以我不是每天喝的補品。放進一個實而熱的身體，只會更糟。這一句要記住。」"}
  ],
  qs:[
    {q:"What is Ginseng's core action?", cq:"人參的核心功效是什麼？",
     opts:[
      {t:"Greatly tonifies original qi", c:"大補元氣", ok:1,
       note:"<b>Correct.</b> This is the strongest qi tonic in the materia medica — reserved for genuine, deep depletion.<span class=\"zh\">大補元氣。補氣藥之最，用於真正的大虛。</span>"},
      {t:"Clears heat and drains fire", c:"清熱瀉火", ok:0,
       note:"That is the opposite direction. Ginseng is warm and tonifying, not cooling.<span class=\"zh\">人參性溫而補，非清瀉之品。</span>"},
      {t:"Moves stagnant qi", c:"行氣解鬱", ok:0,
       note:"Moving and tonifying are different jobs. Ginseng fills; it does not push things along.<span class=\"zh\">補與行不同：人參填補，不主疏通。</span>"}]},
    {q:"A patient is exhausted after a long illness, pale, with a weak pulse. Does Ginseng fit?", cq:"久病之後極度疲倦、面色蒼白、脈弱。適合人參嗎？",
     opts:[
      {t:"Yes — this is true depletion", c:"是，這是真虛", ok:1,
       note:"Pale complexion, a weak pulse and exhaustion after long illness is the classic picture of qi depletion.<span class=\"zh\">久病、面白、脈弱，正是氣虛之象。</span>"},
      {t:"No — tonics are never used after illness", c:"不，病後不能補", ok:0,
       note:"After illness is exactly when tonics are considered. The question is always whether the depletion is real.<span class=\"zh\">病後正是考慮補法之時，關鍵在於是否真虛。</span>"},
      {t:"Only if there is also a fever", c:"要有發燒才行", ok:0,
       note:"Fever would be a reason for caution, not a reason to use it.<span class=\"zh\">有熱反而要慎用。</span>"}]},
    {q:"When should Ginseng be avoided?", cq:"什麼情況忌用人參？",
     opts:[
      {t:"Excess or heat patterns with no deficiency", c:"邪實而正不虛者", ok:1,
       note:"<b>This is the caution that matters most.</b> Tonifying a body that is full and hot shuts the door on the pathogen and traps it inside.<span class=\"zh\">邪實而正不虛者忌用。實證熱證誤補，是為閉門留寇。</span>"},
      {t:"In elderly patients", c:"年長者", ok:0,
       note:"Age alone is not a contraindication — the pattern decides.<span class=\"zh\">年齡不是禁忌，辨證才是。</span>"},
      {t:"During cold weather", c:"天氣冷的時候", ok:0,
       note:"Season is not the deciding factor here.<span class=\"zh\">季節不是判斷依據。</span>"}]}
  ],
  card:{en:"Reserved for real depletion — not a daily pick-me-up.", zh:"用於真虛，非日常補品。"} },

/* ── 生薑 ───────────────────────────────────────────────── */
{ id:"shengjiang",
  beats:[
    {en:"A knobbly yellow root trots in, still faintly steaming.<br><b>Fresh Ginger:</b> \"No ceremony with me. I am in your kitchen already.\"",
     zh:"一塊帶著疙瘩的黃根小跑進來，還冒著一點熱氣。<br><b>生薑：</b>「我沒什麼架子。我本來就在你廚房裡。」"},
    {en:"<b>Fresh Ginger:</b> \"Acrid and slightly warm. Lung, Spleen, Stomach. I release the exterior and scatter cold — I work at the surface, where a chill first gets in.\"",
     zh:"<b>生薑：</b>「辛、微溫，歸肺脾胃。我發散風寒——走的是表，寒氣剛進來的那一層。」"},
    {en:"<b>Fresh Ginger:</b> \"My dried cousin stays inside and warms the middle. Same plant, different post. Do not mix us up.\"",
     zh:"<b>生薑：</b>「我那乾了的兄弟守在裡面，溫中散寒。同一株，崗位不同。別搞混了。」"}
  ],
  qs:[
    {q:"Fresh Ginger works mainly on which level?", cq:"生薑主要作用在哪一層？",
     opts:[
      {t:"The exterior — it releases the surface", c:"解表", ok:1,
       note:"<b>Correct.</b> Fresh ginger pushes an early wind-cold back out through the surface.<span class=\"zh\">發散風寒。生薑走表，散初起之風寒。</span>"},
      {t:"The deep interior — it warms the channels", c:"溫經", ok:0,
       note:"That is closer to dried ginger and mugwort.<span class=\"zh\">那較近乾薑、艾葉之用。</span>"},
      {t:"The blood level — it cools the blood", c:"涼血", ok:0,
       note:"Ginger is warm; cooling the blood is the opposite direction.<span class=\"zh\">生薑性溫，與涼血相反。</span>"}]},
    {q:"Fresh ginger and dried ginger — what is the real difference?", cq:"生薑與乾薑，差別在哪？",
     opts:[
      {t:"Fresh goes to the surface, dried stays within", c:"生薑走表，乾薑守中", ok:1,
       note:"<b>Correct.</b> One scatters cold outward, the other warms the middle inward. Same plant, two posts.<span class=\"zh\">生薑走表，乾薑守中。</span>"},
      {t:"They are interchangeable", c:"兩者可以互換", ok:0,
       note:"They are not. Processing changes where an herb goes and what it does.<span class=\"zh\">炮製改變歸經與功用，不可互代。</span>"},
      {t:"Dried ginger is simply weaker", c:"乾薑只是比較弱", ok:0,
       note:"Dried ginger is actually hot rather than slightly warm — not weaker, differently aimed.<span class=\"zh\">乾薑性熱，非弱，而是所走不同。</span>"}]},
    {q:"Someone has a red sore throat, thirst, and feels hot. Is warm ginger tea the right idea?", cq:"咽紅腫痛、口渴、身熱。此時喝溫薑茶合適嗎？",
     opts:[
      {t:"No — these are heat signs, and warming would add to them", c:"不合適，這是熱象，再溫更甚", ok:1,
       note:"<b>Correct.</b> A red sore throat with thirst points to heat, and a warm acrid herb pushes it further. Matching the temperature of the herb to the pattern is the whole skill.<span class=\"zh\">熱證忌溫。辨寒熱而後用藥。</span>"},
      {t:"Yes — ginger tea helps every sore throat", c:"合適，薑茶什麼喉嚨痛都能喝", ok:0,
       note:"A wind-cold sore throat and a wind-heat sore throat are treated in opposite directions.<span class=\"zh\">風寒與風熱，治法相反。</span>"},
      {t:"Yes, but only with honey", c:"合適，加蜂蜜就好", ok:0,
       note:"Honey does not change the direction of a warm, acrid herb.<span class=\"zh\">加蜜不改辛溫之性。</span>"}]}
  ],
  card:{en:"Works at the surface, where a chill first gets in.", zh:"走表，散初起之風寒。"} },

/* ── 艾葉 ───────────────────────────────────────────────── */
{ id:"aiye",
  beats:[
    {en:"A soft grey-green leaf drifts down and settles, smelling faintly of smoke.<br><b>Mugwort:</b> \"You have met me before. You just did not know you were burning me.\"",
     zh:"一片灰綠色的葉子飄下來，帶著淡淡的煙味。<br><b>艾葉：</b>「你見過我。只是不知道燒的就是我。」"},
    {en:"<b>Mugwort:</b> \"Bitter, acrid, warm. Liver, Spleen, Kidney. I warm the channels and stop bleeding, and I scatter cold in the lower abdomen.\"",
     zh:"<b>艾葉：</b>「苦、辛、溫，歸肝脾腎。我溫經止血，散下焦之寒。」"},
    {en:"<b>Mugwort:</b> \"Cold cramping period pain that eases with a hot water bottle — that is my territory. Rolled and lit, I become moxa.\"",
     zh:"<b>艾葉：</b>「經行冷痛、熱敷則緩，那是我的地盤。捲起來點著，我就是艾灸。」"}
  ],
  qs:[
    {q:"What are Mugwort's two signature actions?", cq:"艾葉的兩大主要功效？",
     opts:[
      {t:"Warms the channels and stops bleeding", c:"溫經止血", ok:1,
       note:"<b>Correct, and worth remembering.</b> It stops bleeding by warming — so it suits cold-type bleeding, not heat-type.<span class=\"zh\">溫經止血。溫而能止血，故宜虛寒出血。</span>"},
      {t:"Clears heat and resolves toxicity", c:"清熱解毒", ok:0,
       note:"That is a cooling category — the opposite of mugwort's warm nature.<span class=\"zh\">艾葉性溫，非清熱之品。</span>"},
      {t:"Drains damp and promotes urination", c:"利水滲濕", ok:0,
       note:"That is closer to poria.<span class=\"zh\">那近於茯苓之用。</span>"}]},
    {q:"Period pain that is cramping and cold, and eases with heat. Does mugwort fit?", cq:"經痛絞痛、怕冷、熱敷則緩。合乎艾葉之用嗎？",
     opts:[
      {t:"Yes — this points to cold in the lower abdomen", c:"是，下焦有寒", ok:1,
       note:"Pain that eases with warmth is a cold sign, and mugwort's warmth meets it directly.<span class=\"zh\">得溫則減者為寒，艾葉正對。</span>"},
      {t:"No — all period pain is blood stasis", c:"不，經痛都是血瘀", ok:0,
       note:"Cold, stasis, qi stagnation and deficiency all cause period pain, and they are treated differently.<span class=\"zh\">寒、瘀、氣滯、虛皆可致痛，治法各異。</span>"},
      {t:"Only if the bleeding is also heavy", c:"要合併經量多才行", ok:0,
       note:"Heavy bleeding is a separate consideration, not a requirement.<span class=\"zh\">經量多與否是另一回事。</span>"}]},
    {q:"Which situation calls for caution with mugwort?", cq:"艾葉何時當慎用？",
     opts:[
      {t:"Bleeding with clear heat signs", c:"血熱妄行者", ok:1,
       note:"<b>Correct.</b> A warm herb given to heat-type bleeding can drive it harder. Match the temperature to the pattern.<span class=\"zh\">血熱者慎用。熱證出血，溫藥反助其勢。</span>"},
      {t:"Any patient over forty", c:"四十歲以上", ok:0,
       note:"Age is not the deciding factor.<span class=\"zh\">年齡非辨證依據。</span>"},
      {t:"Whenever the patient feels cold", c:"只要病人怕冷", ok:0,
       note:"Feeling cold is a reason to consider mugwort, not to avoid it.<span class=\"zh\">畏寒反是適應症。</span>"}]}
  ],
  card:{en:"Warms the channels and stops bleeding — cold-type, not heat-type.", zh:"溫經止血，宜虛寒，忌血熱。"} },

/* ── 當歸 ───────────────────────────────────────────────── */
{ id:"danggui",
  beats:[
    {en:"A pale, many-tailed root steps out, white flowers nodding overhead.<br><b>Angelica:</b> \"They call me the sage of gynaecology. I did not choose the title.\"",
     zh:"一根淡色、多鬚的根走出來，頭上白花輕輕點著。<br><b>當歸：</b>「他們叫我婦科聖藥。這名字不是我取的。」"},
    {en:"<b>Angelica:</b> \"Sweet, acrid, warm. Liver, Heart, Spleen. Here is what makes me unusual: I nourish blood and move blood at the same time.\"",
     zh:"<b>當歸：</b>「甘、辛、溫，歸肝心脾。我特別的地方在於：既補血，又活血。」"},
    {en:"<b>Angelica:</b> \"Most tonics only fill. Filling without movement leaves the blood heavy and stuck. That is why I appear in so many formulas.\"",
     zh:"<b>當歸：</b>「多數補藥只填。只填不行，血反滯重。這就是我常出現在方裡的原因。」"},
    {en:"<b>Angelica:</b> \"But I am moistening. Give me to someone with loose stools and a damp middle, and I will make that worse.\"",
     zh:"<b>當歸：</b>「不過我性潤。給大便溏泄、中焦有濕的人，反而更糟。」"}
  ],
  qs:[
    {q:"What makes Angelica unusual among blood tonics?", cq:"當歸在補血藥中特別在哪？",
     opts:[
      {t:"It nourishes blood and moves blood together", c:"補血兼活血", ok:1,
       note:"<b>Correct.</b> It fills and it moves — which is why it suits patterns where the blood is both deficient and stagnant.<span class=\"zh\">血中之氣藥。補中有行，故虛而兼瘀者宜之。</span>"},
      {t:"It is the only cold blood tonic", c:"唯一性寒的補血藥", ok:0,
       note:"Angelica is warm, not cold.<span class=\"zh\">當歸性溫。</span>"},
      {t:"It works only on the Kidney", c:"只走腎經", ok:0,
       note:"Liver, Heart and Spleen — blood is stored, governed and produced across those three.<span class=\"zh\">歸肝心脾，正是藏血、主血、統血三經。</span>"}]},
    {q:"Why does nourishing and moving together matter clinically?", cq:"補而兼行，臨床意義何在？",
     opts:[
      {t:"Filling without movement leaves the blood stuck", c:"只補不行，血反壅滯", ok:1,
       note:"A tonic that only fills can create stagnation. Angelica avoids that by doing both.<span class=\"zh\">純補易滯，當歸補行並用。</span>"},
      {t:"It makes the formula taste better", c:"讓方子比較好喝", ok:0,
       note:"Taste is not the reason it appears in so many formulas.<span class=\"zh\">非因味美。</span>"},
      {t:"It shortens the cooking time", c:"可以縮短煎藥時間", ok:0,
       note:"Preparation time is unrelated to its action.<span class=\"zh\">與煎法無關。</span>"}]},
    {q:"Which patient calls for caution with Angelica?", cq:"哪種病人當慎用當歸？",
     opts:[
      {t:"Loose stools with a damp, weak middle", c:"大便溏泄、中焦濕困", ok:1,
       note:"<b>Correct.</b> Angelica is rich and moistening and can loosen the stool further. Its warmth is welcome here; its richness is not.<span class=\"zh\">濕滯中滿、大便溏泄者慎用。當歸滑潤，便溏者慎之。</span>"},
      {t:"Anyone with cold hands", c:"手腳冰冷的人", ok:0,
       note:"Cold hands may point toward blood deficiency — a reason to consider it, not to avoid it.<span class=\"zh\">手足不溫或屬血虛，反可考慮。</span>"},
      {t:"Anyone under thirty", c:"三十歲以下", ok:0,
       note:"Age is not the deciding factor.<span class=\"zh\">年齡非辨證依據。</span>"}]}
  ],
  card:{en:"Nourishes blood and moves it at once — but it is moistening.", zh:"補血活血，然性滑潤，便溏者慎。"} },

/* ── 枸杞子 ─────────────────────────────────────────────── */
{ id:"gouqi",
  beats:[
    {en:"A cheerful bundle of small orange-red berries bounces in on an arching branch, purple flowers still attached.<br><b>Goji:</b> \"People put me in everything. Most of them do not know what I actually do.\"",
     zh:"一串橘紅色的小果實掛在彎枝上蹦進來，還帶著紫色的花。<br><b>枸杞子：</b>「大家什麼都放我。多數人並不知道我實際上做什麼。」"},
    {en:"<b>Goji:</b> \"Sweet, neutral. Liver and Kidney. I nourish Liver and Kidney yin, and I brighten the eyes.\"",
     zh:"<b>枸杞子：</b>「甘、平，歸肝腎。我滋補肝腎，益精明目。」"},
    {en:"<b>Goji:</b> \"The eye connection is not decoration. The Liver opens into the eyes and Liver blood moistens them — so eyes that are dry and blurred by evening are a Liver-and-Kidney question.\"",
     zh:"<b>枸杞子：</b>「明目不是說好聽的。肝開竅於目，肝血養目——傍晚眼澀昏花，問的就是肝腎。」"}
  ],
  qs:[
    {q:"Which channels does Goji enter?", cq:"枸杞子歸何經？",
     opts:[
      {t:"Liver and Kidney", c:"肝、腎", ok:1,
       note:"<b>Correct.</b> Liver and Kidney yin together — which is exactly why it suits dry eyes, dizziness and a sore lower back.<span class=\"zh\">歸肝腎經。肝腎同源，故治目澀、眩暈、腰膝痠軟。</span>"},
      {t:"Lung and Large Intestine", c:"肺、大腸", ok:0,
       note:"That pairing belongs to the exterior-releasing and moistening herbs.<span class=\"zh\">那是肺與大腸相表裡之藥。</span>"},
      {t:"Heart and Small Intestine", c:"心、小腸", ok:0,
       note:"Goji is not primarily a Heart herb.<span class=\"zh\">枸杞非心經主藥。</span>"}]},
    {q:"Why is Goji linked with the eyes?", cq:"為什麼枸杞與眼睛有關？",
     opts:[
      {t:"The Liver opens into the eyes, and Liver blood moistens them", c:"肝開竅於目，肝血養目", ok:1,
       note:"<b>Correct.</b> Nourish Liver blood and yin, and dry, tired vision often eases. The connection is theoretical, not cosmetic.<span class=\"zh\">肝開竅於目。養肝血則目得所養。</span>"},
      {t:"Because the berries are eye-shaped", c:"因為果實長得像眼睛", ok:0,
       note:"Reasoning from resemblance is not how TCM assigns this action.<span class=\"zh\">非以形取象。</span>"},
      {t:"Because it is high in vitamin A", c:"因為富含維生素A", ok:0,
       note:"That is a biomedical framing. Within TCM the reasoning runs through Liver blood and the channels.<span class=\"zh\">此為西醫觀點；中醫從肝血論之。</span>"}]},
    {q:"Which situation calls for caution with Goji?", cq:"枸杞子何時當慎用？",
     opts:[
      {t:"A damp, weak digestion with loose stools", c:"脾虛濕盛、便溏者", ok:1,
       note:"<b>Correct.</b> Rich, moistening yin tonics burden a damp, weak middle. Even the gentlest herb has a wrong patient.<span class=\"zh\">脾虛便溏者慎服。滋膩之品，濕困者慎之。</span>"},
      {t:"Anyone who wears glasses", c:"戴眼鏡的人", ok:0,
       note:"Wearing glasses is not a TCM pattern.<span class=\"zh\">戴眼鏡不是證。</span>"},
      {t:"Anyone who drinks tea", c:"有喝茶的人", ok:0,
       note:"Goji is commonly taken as a tea itself.<span class=\"zh\">枸杞本就常作茶飲。</span>"}]}
  ],
  card:{en:"Nourishes Liver and Kidney yin; brightens the eyes.", zh:"滋補肝腎、益精明目。"} },

/* ── 紅棗 ───────────────────────────────────────────────── */
{ id:"hongzao",
  beats:[
    {en:"A round wrinkled date shuffles in, unhurried, and sits down without being asked.<br><b>Jujube:</b> \"I am usually the last name in the formula. That is not the same as the least important.\"",
     zh:"一顆皺皺的紅棗慢慢晃進來，沒人請就坐下了。<br><b>紅棗：</b>「我通常是方子裡的最後一味。最後不等於最不重要。」"},
    {en:"<b>Jujube:</b> \"Sweet, warm. Spleen and Stomach. I tonify the middle, nourish blood, and calm the spirit.\"",
     zh:"<b>紅棗：</b>「甘、溫，歸脾胃。我補中益氣、養血安神。」"},
    {en:"<b>Jujube:</b> \"And I soften the harsh ones. Put a fierce herb in a formula with me and the stomach tolerates it. Someone has to keep the peace.\"",
     zh:"<b>紅棗：</b>「我還能緩和藥性。方裡有峻烈之品，加了我，胃就受得住。總得有人打圓場。」"}
  ],
  qs:[
    {q:"Besides tonifying the middle, what is Jujube's special role in a formula?", cq:"除了補中，紅棗在方中的特殊作用是什麼？",
     opts:[
      {t:"It moderates harsh herbs so the stomach tolerates them", c:"緩和藥性，護胃氣", ok:1,
       note:"<b>Correct.</b> Jujube and licorice are the classic harmonisers — they let a strong formula be taken without injuring the middle.<span class=\"zh\">緩和藥性。大棗、甘草，方中常為緩和之用。</span>"},
      {t:"It makes the other herbs stronger", c:"讓其他藥效更強", ok:0,
       note:"Its job is to soften, not to amplify.<span class=\"zh\">其用在緩，不在增。</span>"},
      {t:"It preserves the decoction for longer", c:"讓藥湯放得比較久", ok:0,
       note:"That is not a TCM function.<span class=\"zh\">非中醫所論之功用。</span>"}]},
    {q:"Which pair of channels does Jujube enter?", cq:"紅棗歸何經？",
     opts:[
      {t:"Spleen and Stomach", c:"脾、胃", ok:1,
       note:"<b>Correct.</b> The middle burner — which is exactly why it can protect the stomach from harsher herbs.<span class=\"zh\">歸脾胃經。歸中焦，故能護胃。</span>"},
      {t:"Liver and Gallbladder", c:"肝、膽", ok:0,
       note:"Jujube's home is the middle burner.<span class=\"zh\">紅棗主入中焦。</span>"},
      {t:"Kidney and Bladder", c:"腎、膀胱", ok:0,
       note:"That is the lower burner.<span class=\"zh\">那是下焦。</span>"}]},
    {q:"Which patient calls for caution with Jujube?", cq:"哪種病人當慎用紅棗？",
     opts:[
      {t:"Damp accumulation, phlegm, or abdominal fullness", c:"濕盛、痰多、中滿者", ok:1,
       note:"<b>Correct.</b> Sweet, cloying herbs generate damp. Even a gentle food-grade herb has a wrong patient.<span class=\"zh\">濕盛中滿者忌。甘能助濕，濕滯者忌之。</span>"},
      {t:"Anyone who dislikes sweet food", c:"不喜歡甜食的人", ok:0,
       note:"Preference is not a pattern.<span class=\"zh\">口味喜惡不是辨證依據。</span>"},
      {t:"Children", c:"小孩", ok:0,
       note:"Jujube is a common food-grade herb; age alone is not a contraindication.<span class=\"zh\">紅棗為藥食同源之品，年齡非禁忌。</span>"}]}
  ],
  card:{en:"Tonifies the middle, calms the spirit, and softens harsh herbs.", zh:"補中益氣、養血安神，並能緩和藥性。"} },
/* ── 乾薑 ───────────────────────────────────────────────── */
{ id:"ganjiang",
  beats:[
    {en:"An old root with a white beard plants his feet, throws back a green cape, and gives you a thumbs up.<br><b>Dried Ginger:</b> \"You have already met my younger self. I am what he becomes.\"",
     zh:"一根白鬍子的老根站穩腳步，甩開綠色披風，對你比了個讚。<br><b>乾薑：</b>「你已經見過年輕的我。我是他後來的樣子。」"},
    {en:"<b>Dried Ginger:</b> \"Acrid and hot. Spleen, Stomach, Kidney, Heart, Lung. Fresh ginger runs to the surface. I stay inside and warm the middle.\"",
     zh:"<b>乾薑：</b>「辛、熱，歸脾胃腎心肺。生薑走表，我守中，溫裡散寒。」"},
    {en:"<b>Dried Ginger:</b> \"Cold in the belly, watery stools, a cold that has already sunk inward — that is my work. And when yang is failing, I help bring it back.\"",
     zh:"<b>乾薑：</b>「腹中冷痛、下利清穀、寒已入裡——那是我的活。陽氣將脫時，我還能回陽通脈。」"},
    {en:"He lowers the cape.<br><b>Dried Ginger:</b> \"I am hot, and hot is a blunt instrument. Give me to someone already burning and you will regret it.\"",
     zh:"他把披風放下。<br><b>乾薑：</b>「我性熱，熱是鈍器。給一個本來就燒著的人，你會後悔。」"}
  ],
  qs:[
    {q:"Where does Dried Ginger work, compared with Fresh Ginger?", cq:"與生薑相比，乾薑作用在哪？",
     opts:[
      {t:"Inside — it warms the middle and the interior", c:"守中，溫裡散寒", ok:1,
       note:"<b>Correct.</b> Fresh runs to the surface, dried stays within. Drying changes where the herb goes, not just how strong it is.<span class=\"zh\">生薑走表，乾薑守中。炮製改變歸經。</span>"},
      {t:"At the surface — it releases the exterior", c:"走表解表", ok:0,
       note:"That is fresh ginger's job.<span class=\"zh\">那是生薑之用。</span>"},
      {t:"At the blood level — it cools the blood", c:"涼血", ok:0,
       note:"Dried ginger is hot; cooling the blood is the opposite direction.<span class=\"zh\">乾薑性熱，與涼血相反。</span>"}]},
    {q:"A patient has cold cramping abdominal pain and watery, undigested stools. Does Dried Ginger fit?", cq:"腹中冷痛、下利清穀。適合乾薑嗎？",
     opts:[
      {t:"Yes — cold has already reached the interior", c:"是，寒已入裡", ok:1,
       note:"Undigested food in watery stools with cold pain points to cold in the middle burner. This is dried ginger's home ground.<span class=\"zh\">下利清穀、腹中冷痛，中焦虛寒，乾薑正對。</span>"},
      {t:"No — never warm the digestion", c:"不，脾胃不能溫", ok:0,
       note:"Warming a cold middle is a standard method.<span class=\"zh\">溫中散寒本是常法。</span>"},
      {t:"Only if there is also a fever", c:"要有發燒才行", ok:0,
       note:"Fever would argue against a hot herb, not for it.<span class=\"zh\">有熱反當忌之。</span>"}]},
    {q:"When must Dried Ginger be avoided?", cq:"乾薑何時當忌用？",
     opts:[
      {t:"Yin deficiency with heat signs, or reckless bleeding from heat", c:"陰虛內熱、血熱妄行者", ok:1,
       note:"<b>Correct.</b> A hot, drying herb given to a body already short of fluids and running hot makes both problems worse.<span class=\"zh\">陰虛內熱、血熱妄行者忌用。熱藥助熱傷陰。</span>"},
      {t:"In winter", c:"冬天", ok:0,
       note:"Season is not the deciding factor.<span class=\"zh\">季節不是判斷依據。</span>"},
      {t:"Whenever the patient feels cold", c:"病人怕冷的時候", ok:0,
       note:"Feeling cold is the reason to consider it.<span class=\"zh\">畏寒正是適應症。</span>"}]}
  ],
  card:{en:"Fresh ginger runs to the surface; dried ginger stays within.", zh:"生薑走表，乾薑守中。"} },

/* ── 茯苓 ───────────────────────────────────────────────── */
{ id:"fuling",
  beats:[
    {en:"Something lumpy and brown is dozing against a pine root. It opens one eye. A patch of its side is broken open, showing soft white inside.<br><b>Poria:</b> \"Oh. Hello. I was not expecting company.\"",
     zh:"松根旁靠著一塊褐色的東西在打盹。它睜開一隻眼。側邊裂開一角，露出裡面柔軟的白。<br><b>茯苓：</b>「喔。你好。沒想到有人來。」"},
    {en:"<b>Poria:</b> \"First thing: I am not a plant. No leaves, no flowers. I am a fungus that grows underground on pine roots. People draw me wrong all the time.\"",
     zh:"<b>茯苓：</b>「先說清楚：我不是植物。沒有葉，沒有花。我是長在松根上的菌核。大家常常畫錯我。」"},
    {en:"<b>Poria:</b> \"Sweet, bland, neutral. Heart, Spleen, Kidney. I drain damp — but bland-percolating, so I drain without draining your strength.\"",
     zh:"<b>茯苓：</b>「甘、淡、平，歸心脾腎。我利水滲濕——味淡而滲，利水而不傷正。」"},
    {en:"<b>Poria:</b> \"And I quiet the spirit. That is why I turn up in formulas for a mind that will not settle at night.\"",
     zh:"<b>茯苓：</b>「我還能寧心安神。所以夜裡心神不定的方子裡，常有我。」"}
  ],
  qs:[
    {q:"What kind of thing is Poria?", cq:"茯苓是什麼？",
     opts:[
      {t:"A fungus growing on pine roots", c:"寄生於松根的菌核", ok:1,
       note:"<b>Correct.</b> Not a leaf, root or flower — a sclerotium. Brown skin outside, soft white inside.<span class=\"zh\">茯苓為多孔菌之菌核，寄生松根，外皮褐、內色白。</span>"},
      {t:"The root of a flowering plant", c:"開花植物的根", ok:0,
       note:"Poria has no leaves and no flowers at all.<span class=\"zh\">茯苓無葉無花。</span>"},
      {t:"A dried fruit", c:"乾燥的果實", ok:0,
       note:"That describes jujube or goji, not poria.<span class=\"zh\">那是紅棗、枸杞之類。</span>"}]},
    {q:"Its taste is bland. Why does that matter?", cq:"茯苓味淡，有何意義？",
     opts:[
      {t:"Bland percolates and leaks damp out, gently enough for long use", c:"淡能滲濕，性平可久服", ok:1,
       note:"<b>Correct.</b> A bland, neutral herb drains without stripping the body, which is why poria appears in so many formulas and can be used over time.<span class=\"zh\">淡滲利水而不傷正，故可久服、方中常用。</span>"},
      {t:"Bland herbs have no action at all", c:"味淡就是沒有作用", ok:0,
       note:"Bland is a flavour category in its own right, with draining and percolating action.<span class=\"zh\">淡為一味，主滲利。</span>"},
      {t:"Bland means it must be cooked longer", c:"味淡表示要煎久一點", ok:0,
       note:"Flavour describes action, not cooking method.<span class=\"zh\">五味言功用，非言煎法。</span>"}]},
    {q:"Besides draining damp, what else does Poria do?", cq:"除了利水滲濕，茯苓還有何功？",
     opts:[
      {t:"Strengthens the Spleen and quiets the spirit", c:"健脾寧心安神", ok:1,
       note:"<b>Correct.</b> Draining damp, supporting the Spleen and settling the spirit at once — three jobs in one gentle herb.<span class=\"zh\">利水滲濕、健脾寧心，一藥三用而性平和。</span>"},
      {t:"Strongly tonifies original qi", c:"大補元氣", ok:0,
       note:"That is ginseng's territory.<span class=\"zh\">那是人參之功。</span>"},
      {t:"Stops bleeding by warming", c:"溫經止血", ok:0,
       note:"That is mugwort.<span class=\"zh\">那是艾葉之功。</span>"}]}
  ],
  card:{en:"Drains damp without draining strength, and quiets the spirit.", zh:"利水滲濕、健脾寧心，性平可久服。"} }

];
