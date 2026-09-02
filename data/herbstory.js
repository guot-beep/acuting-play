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

,

/* ── 白朮 ───────────────────────────────────────────────── */
{ id:"baizhu",
  beats:[
    {en:"A pale, solid rhizome sets itself down on the counter like a sack of grain finding its place in a storeroom.<br><b>Bai Zhu:</b> \"You met the Rice Shop ledger. I am what came after.\"",
     zh:"一塊色白而結實的根莖落在櫃檯上，像一袋穀子在倉裡找到了位置。<br><b>白朮：</b>「米行的帳簿你見過了。後來開的，就是我。」"},
    {en:"<b>Bai Zhu:</b> \"Bitter, sweet, warm. Spleen and Stomach. I strengthen the Spleen and dry damp — and I do both in the same movement, which is why I suit the pattern where a weak Spleen has let damp collect.\"",
     zh:"<b>白朮：</b>「苦、甘、溫，歸脾胃。健脾與燥濕，我一手同做。故脾虛而生濕者，最合我用。」"},
    {en:"<b>Bai Zhu:</b> \"Build the earth first. Damp is what happens when the earth cannot move water — drain it without rebuilding and it simply comes back.\"",
     zh:"<b>白朮：</b>「先培其土。濕者，土不運水之所致。徒利其濕而不建其土，濕必復來。」"},
    {en:"It pauses.<br><b>Bai Zhu:</b> \"But I am drying. Put me in someone whose fluids are already short and you will make a dry mouth drier.\"",
     zh:"它停了停。<br><b>白朮：</b>「然我性燥。津液本虧者用我，口乾者更乾。」"}
  ],
  qs:[
    {q:"What are Bai Zhu's two actions, and why do they belong together?",
     cq:"白朮二功為何？何以並行？",
     opts:[
      {t:"Tonifies the Spleen and dries damp — because in this pattern the damp exists <i>because</i> the Spleen is weak",
       c:"健脾、燥濕。本證之濕，正因脾虛而生",ok:1,
       note:"<b>Correct.</b> The Spleen transforms and transports fluids. When it is too weak to do that, fluid stalls and becomes damp. Strengthening the organ and drying the accumulation at once treats cause and consequence together.<span class=\"zh\">脾主運化水濕。脾虛不運，則水停為濕。健其脾而燥其濕，因果同治。</span>"},
      {t:"Clears heat and drains fire",
       c:"清熱瀉火",ok:0,
       note:"Bai Zhu is warm and tonifying. Nothing about it clears heat.<span class=\"zh\">白朮性溫而補，無清熱之能。</span>"},
      {t:"Moves blood and breaks stasis",
       c:"活血破瘀",ok:0,
       note:"That is a different family of herbs entirely — Chuan Xiong and Hong Hua live in that drawer.<span class=\"zh\">此另一類藥：川芎、紅花屬之。</span>"}]},
    {q:"A patient has poor appetite, loose stools, heavy limbs and a swollen tongue with tooth marks. Does Bai Zhu fit?",
     cq:"納呆、便溏、肢重、舌胖有齒痕，白朮合否？",
     opts:[
      {t:"Yes — that is Spleen deficiency with damp, exactly the pattern it was made for",
       c:"合。此脾虛濕困，正其所主",ok:1,
       note:"<b>Correct.</b> Every finding lines up: the appetite and stool are the Spleen, the heaviness and the swollen tongue are the damp. This is the pattern of chapter four.<span class=\"zh\">諸症相合：納便屬脾，重與舌胖屬濕。即第四章之證。</span>"},
      {t:"No — loose stools mean you must never use a warm herb",
       c:"不合。便溏者忌溫藥",ok:0,
       note:"The opposite: loose stools from a cold, weak Spleen are exactly what a warm tonifying herb addresses.<span class=\"zh\">適反。脾虛而寒之便溏，正宜溫補。</span>"},
      {t:"No — a swollen tongue always means heat",
       c:"不合。舌胖必主熱",ok:0,
       note:"A pale swollen tongue with tooth marks is Spleen deficiency with damp. Heat would show as a red body.<span class=\"zh\">舌淡胖有齒痕者，脾虛濕盛。熱則舌質當紅。</span>"}]},
    {q:"When should Bai Zhu be used with caution?",
     cq:"白朮何時當慎？",
     opts:[
      {t:"When yin and fluids are already depleted — it is drying, and it can make dryness worse",
       c:"陰虛津虧者當慎。其性燥，能助其燥",ok:1,
       note:"<b>Correct, and this is the half beginners skip.</b> Dry mouth, a red tongue with scant coat, night sweats — that patient needs moistening, not drying. Herbs are prescribed by a qualified practitioner who weighs this against everything else the patient is taking.<span class=\"zh\">口乾、舌紅少苔、盜汗者，當潤而非燥。用藥須由合格醫者，並權衡其所服他藥。</span>"},
      {t:"Never — it is safe for everyone",
       c:"無所忌，人人可用",ok:0,
       note:"No herb is. Bai Zhu's warmth and dryness are its strength in one pattern and its problem in another.<span class=\"zh\">無藥無忌。溫燥者，於此為長，於彼為短。</span>"},
      {t:"Only in winter",
       c:"惟冬令當慎",ok:0,
       note:"The caution follows the patient's pattern, not the season.<span class=\"zh\">忌從其證，不從其時。</span>"}]}
  ],
  card:{en:"Strengthens the Spleen and dries damp in one movement — build the earth before you drain the water. Drying, so it needs care where fluids are already short.",
        zh:"健脾燥濕一手同做：先培土而後利水。性燥，津虧者當慎。"} },

/* ── 黨參 ───────────────────────────────────────────────── */
{ id:"dangshen",
  beats:[
    {en:"A long, mild-looking root leans against the Ginseng jar, entirely unbothered by the comparison.<br><b>Dang Shen:</b> \"Everyone asks the same thing. Yes — I do most of what Ginseng does. No, not as strongly.\"",
     zh:"一根細長溫和的根倚在人參罐旁，全不在意這比較。<br><b>黨參：</b>「人人都問同一句。是，人參做的事我大半也做；不錯，力沒有它大。」"},
    {en:"<b>Dang Shen:</b> \"Sweet, neutral. Spleen and Lung. I tonify the Spleen and the Lung qi, and I nourish fluids while I do it — Ginseng does not do that second part.\"",
     zh:"<b>黨參：</b>「甘、平，歸脾肺。補脾肺之氣，兼能生津——這後半，人參不做。」"},
    {en:"<b>Dang Shen:</b> \"Neutral means I can stay in a formula longer without heating anyone up. For ordinary daily depletion, that matters more than raw force.\"",
     zh:"<b>黨參：</b>「性平，故久用而不助火。尋常之虛，貴在能久，不在力猛。」"}
  ],
  qs:[
    {q:"How does Dang Shen differ from Ren Shen in practice?",
     cq:"黨參與人參，臨床何異？",
     opts:[
      {t:"Milder and neutral rather than warm, it also generates fluids, and it suits ordinary chronic qi deficiency rather than collapse",
       c:"力較緩，性平不溫，兼能生津。宜於尋常氣虛久病，不宜於暴脫",ok:1,
       note:"<b>Correct.</b> Ginseng is reserved for severe depletion and can be too warming for long use. Dang Shen is the everyday substitute — which is why it appears in so many modern formulas where classical texts wrote Ren Shen.<span class=\"zh\">人參力峻，主大虛，久服嫌溫。黨參為其常代，故今方多以黨參易古方之人參。</span>"},
      {t:"It is simply a cheaper name for the same root",
       c:"不過人參之賤名耳",ok:0,
       note:"They are different plants with different strengths and a different temperature.<span class=\"zh\">二者原非一物，力與性皆異。</span>"},
      {t:"It cools heat where Ginseng warms",
       c:"人參溫而黨參涼",ok:0,
       note:"Dang Shen is neutral, not cooling.<span class=\"zh\">黨參性平，非涼。</span>"}]},
    {q:"A patient tires easily, is short of breath on exertion, sweats in the daytime and has a weak pulse. Which action is being asked for?",
     cq:"倦怠、動則氣短、日間自汗、脈弱。所求何功？",
     opts:[
      {t:"Tonifying Spleen and Lung qi",
       c:"補脾肺之氣",ok:1,
       note:"<b>Correct.</b> Fatigue and a weak pulse are the Spleen's qi; breathlessness and daytime sweating are the Lung's. One herb reaching both channels covers the picture.<span class=\"zh\">倦怠脈弱屬脾氣，氣短自汗屬肺氣。一藥兼歸二經，正合其證。</span>"},
      {t:"Nourishing yin and clearing empty heat",
       c:"滋陰清虛熱",ok:0,
       note:"That would be the picture with night sweats, afternoon warmth and a red tongue with scant coat — a different pattern.<span class=\"zh\">彼當見盜汗、午後潮熱、舌紅少苔，證自不同。</span>"},
      {t:"Moving Liver qi",
       c:"疏肝理氣",ok:0,
       note:"Nothing here points at constraint — no irritability, no rib-side fullness, no wiry pulse.<span class=\"zh\">本案無鬱象：不煩躁、脅不脹、脈不弦。</span>"}]},
    {q:"When is Dang Shen not appropriate?",
     cq:"黨參何時不宜？",
     opts:[
      {t:"When a substantial pathogen is still lodged and unresolved — tonifying then traps it inside",
       c:"邪實未去者不宜。補之則閉門留寇",ok:1,
       note:"<b>Correct.</b> 閉門留寇 — shutting the door with the thief inside. Clear or release first, then rebuild. This applies to every qi tonic, not only this one.<span class=\"zh\">此謂閉門留寇。當先祛邪或解表，而後補之。凡補氣之品皆然，非獨黨參。</span>"},
      {t:"Whenever the patient is tired",
       c:"凡倦者皆不宜",ok:0,
       note:"Fatigue from qi deficiency is its main indication.<span class=\"zh\">氣虛之倦，正其所主。</span>"},
      {t:"In any formula with more than four herbs",
       c:"方逾四味則不宜",ok:0,
       note:"Formula size has nothing to do with it.<span class=\"zh\">方之大小，於此無涉。</span>"}]}
  ],
  card:{en:"The everyday qi tonic — milder and neutral where Ginseng is strong and warm, and it generates fluids as it builds. Not while a pathogen is still lodged.",
        zh:"補氣之常用者。人參力峻性溫，黨參力緩性平，且兼生津。邪實未去者不用。"} },

/* ── 白芍 ───────────────────────────────────────────────── */
{ id:"baishao",
  beats:[
    {en:"A pale sliced root lies flat and still, and speaks quietly enough that you lean in.<br><b>Bai Shao:</b> \"You met the cloth merchant. His Liver yang was rising and nothing beneath it was holding him down.\"",
     zh:"一片色白的根靜靜臥著，聲音輕得要湊近才聽得見。<br><b>白芍：</b>「錢掌櫃你見過了。他肝陽上亢，而其下無物可鎮。」"},
    {en:"<b>Bai Shao:</b> \"Bitter, sour, slightly cold. Liver and Spleen. I nourish blood, soften the Liver, and stop pain — especially cramping pain that grips and releases.\"",
     zh:"<b>白芍：</b>「苦、酸、微寒，歸肝脾。養血、柔肝、止痛——尤主拘攣掣痛。」"},
    {en:"<b>Bai Shao:</b> \"Sour gathers inward. A Liver that is straining upward is a Liver that has nothing holding it — so I do not push it down. I give it something to hold on to.\"",
     zh:"<b>白芍：</b>「酸主收斂。肝之升動無制者，非無力壓之，乃無物斂之。我不壓其上，我與其所守。」"}
  ],
  qs:[
    {q:"What does \"softening the Liver\" 柔肝 actually mean?",
     cq:"「柔肝」何謂？",
     opts:[
      {t:"Nourishing Liver blood and yin so the Liver has substance to draw on, which settles its tendency to rise and strain",
       c:"養肝血肝陰，使肝有所養，其升動自平",ok:1,
       note:"<b>Correct, and it is a different mechanism from sedating.</b> The Liver rises when its blood and yin are too thin to anchor it. Fill the substance and the rising settles on its own — which is why Bai Shao pairs so naturally with heavy anchoring herbs rather than replacing them.<span class=\"zh\">肝血肝陰不足則陽無所潛而上亢。滋其體則其用自平。故白芍多與重鎮之品相配，而非代之。</span>"},
      {t:"Forcefully sedating the Liver with heavy minerals",
       c:"以重鎮之品強壓其肝",ok:0,
       note:"That is a different strategy — useful, but not what softening means.<span class=\"zh\">此為重鎮之法，別為一途，非柔肝之義。</span>"},
      {t:"Draining Liver fire with bitter cold herbs",
       c:"以苦寒瀉其肝火",ok:0,
       note:"Draining fire suits a full excess Liver. Softening suits a Liver that is under-nourished.<span class=\"zh\">瀉火宜於肝實火盛；柔肝宜於肝體不足。</span>"}]},
    {q:"A patient has cramping abdominal pain that comes in waves, and calf cramps at night. Where does Bai Shao fit?",
     cq:"腹中攣痛陣作，夜間腿抽筋。白芍何以入之？",
     opts:[
      {t:"The Liver governs the sinews, and Bai Shao relaxes cramping and stops that kind of pain — classically paired with Gan Cao for exactly this",
       c:"肝主筋。白芍緩急止痛，古與甘草相配，正治此症",ok:1,
       note:"<b>Correct.</b> Sour plus sweet 酸甘 relaxes urgency — the classical pairing for cramping pain in the abdomen or the calves. Two herbs, one of the tidiest ideas in the whole materia medica.<span class=\"zh\">酸甘化陰、緩急止痛。腹中攣急、腓腸拘攣者，古法用之。二味之配，最為簡切。</span>"},
      {t:"It has no role in pain",
       c:"於痛證無所用",ok:0,
       note:"Stopping pain is one of its three headline actions.<span class=\"zh\">止痛為其三大功之一。</span>"},
      {t:"It treats cramps by warming the interior",
       c:"以溫裡而解其攣",ok:0,
       note:"Bai Shao is slightly cold. Warming the interior is a different approach for a cold cramping pattern.<span class=\"zh\">白芍微寒。溫裡者，寒證攣急之別法。</span>"}]},
    {q:"What is the standard caution with Bai Shao?",
     cq:"白芍之常忌為何？",
     opts:[
      {t:"It is slightly cold and astringing, so it is used with care in cold patterns with diarrhoea — and it is one of the classical incompatibles with Li Lu",
       c:"性微寒而收，虛寒泄瀉者當慎；又古列反藜蘆",ok:1,
       note:"<b>Correct.</b> The Eighteen Incompatibles 十八反 list peony against Li Lu 藜蘆. More practically: a cold, loose-bowelled patient does not want a cold astringing herb without warming company. As always, formulas are a practitioner's job.<span class=\"zh\">十八反有「諸參辛芍叛藜蘆」之語。臨證則虛寒便溏者，不宜獨用寒收之品，當佐以溫。組方須由合格醫者。</span>"},
      {t:"It must never be combined with other herbs",
       c:"不可與他藥同用",ok:0,
       note:"It is one of the most frequently combined herbs there is.<span class=\"zh\">白芍最常入複方，配伍極廣。</span>"},
      {t:"It is only for men",
       c:"惟男子可用",ok:0,
       note:"It is a mainstay of gynaecological formulas.<span class=\"zh\">婦科諸方多用之。</span>"}]}
  ],
  card:{en:"Nourishes blood, softens the Liver, relaxes cramping pain. Sour gathers inward — it settles a rising Liver by giving it substance, not by pushing it down.",
        zh:"養血、柔肝、緩急止痛。酸主收斂：不壓其陽，而滋其體，陽自潛藏。"} },

/* ── 川芎 ───────────────────────────────────────────────── */
{ id:"chuanxiong",
  beats:[
    {en:"A knobbly rhizome rolls forward fast and stops dead, as if it had somewhere to be.<br><b>Chuan Xiong:</b> \"Acrid, warm. Liver, Gallbladder, Pericardium. I move — that is the whole of me.\"",
     zh:"一塊多節的根莖滾得飛快，忽然停住，像趕著要去哪裡。<br><b>川芎：</b>「辛、溫，歸肝膽心包。我主行——如此而已。」"},
    {en:"<b>Chuan Xiong:</b> \"I move blood and I move qi at the same time. Blood does not travel on its own; qi carries it. Move only the blood and you are pushing a cart with the horse still tied up.\"",
     zh:"<b>川芎：</b>「我行血亦行氣。血不自行，氣以帥之。徒活其血而不行其氣，猶推車而馬猶繫。」"},
    {en:"<b>Chuan Xiong:</b> \"They call me the qi within the blood. And I rise — I reach the head, which is why I turn up in every headache formula you will ever read.\"",
     zh:"<b>川芎：</b>「人稱我為『血中之氣藥』。其性上行，能達巔頂，故凡治頭痛之方，鮮有無我者。」"},
    {en:"It slows for once.<br><b>Chuan Xiong:</b> \"Which also means I am not for someone who is already rising, already bleeding, or already too dry.\"",
     zh:"它難得緩了下來。<br><b>川芎：</b>「反過來說：陽已上亢者、血已妄行者、陰已虧燥者，我皆非所宜。」"}
  ],
  qs:[
    {q:"Why is Chuan Xiong called \"the qi within the blood\" 血中之氣藥?",
     cq:"川芎何以稱「血中之氣藥」？",
     opts:[
      {t:"Because it moves blood and moves qi at once — and blood only moves when qi moves it",
       c:"以其活血兼行氣。氣行則血行",ok:1,
       note:"<b>Correct.</b> \"Qi is the commander of blood; blood is the mother of qi\" 氣為血之帥，血為氣之母. A blood-moving herb that also moves qi treats the mechanism rather than only the consequence.<span class=\"zh\">氣為血之帥，血為氣之母。活血而兼行氣者，治其機而不徒治其果。</span>"},
      {t:"Because it is used only for bleeding",
       c:"以其專治出血",ok:0,
       note:"It is the opposite — it moves blood, so it is used with care where there is bleeding.<span class=\"zh\">適反。其性活血，故有出血者當慎。</span>"},
      {t:"Because it tonifies blood",
       c:"以其補血",ok:0,
       note:"Moving and building are different jobs. Dang Gui builds and moves; Chuan Xiong mostly moves.<span class=\"zh\">行與補不同。當歸能補能行，川芎主行。</span>"}]},
    {q:"Why does Chuan Xiong appear in so many headache formulas?",
     cq:"治頭痛之方，何以多用川芎？",
     opts:[
      {t:"Because it is acrid, ascending and able to reach the head, and it moves stagnant blood and qi that are causing the pain",
       c:"辛散上行，能達巔頂，且行其瘀滯之氣血",ok:1,
       note:"<b>Correct.</b> Direction of action is a real property of an herb — ascending, descending, floating, sinking 升降浮沉. Chuan Xiong rises, which is why it is a guiding herb for the head as well as a blood mover.<span class=\"zh\">升降浮沉者，藥性之一端。川芎性升，故既為活血之品，亦為頭部之引經藥。</span>"},
      {t:"Because it is a sedative",
       c:"以其能鎮靜安神",ok:0,
       note:"It moves; it does not sedate.<span class=\"zh\">其性行走，非鎮靜。</span>"},
      {t:"Because all warm herbs treat headache",
       c:"凡溫藥皆治頭痛",ok:0,
       note:"Headache has many patterns, and several of them are made worse by warmth.<span class=\"zh\">頭痛有諸證，其中數者遇溫反甚。</span>"}]},
    {q:"Which patient should not be given Chuan Xiong?",
     cq:"何等病人不宜川芎？",
     opts:[
      {t:"Someone with rising Liver yang, heavy bleeding, or marked yin deficiency — it is acrid, drying and ascending",
       c:"肝陽上亢、出血過多、陰虛甚者。其性辛燥而上行",ok:1,
       note:"<b>Correct.</b> Its three cautions come straight from its three properties: ascending is wrong for rising yang, blood-moving is wrong for active bleeding, acrid-drying is wrong for depleted fluids. Standard practice also treats it with caution in pregnancy. A practitioner weighs all of this.<span class=\"zh\">三忌出於三性：升則忌陽亢，行血則忌出血，辛燥則忌陰虧。妊娠亦當慎用。凡此皆須醫者權衡。</span>"},
      {t:"Anyone with a headache",
       c:"凡頭痛者",ok:0,
       note:"Headache is its best-known indication.<span class=\"zh\">頭痛正其所長。</span>"},
      {t:"Anyone over sixty",
       c:"凡年逾六旬者",ok:0,
       note:"Age is not the criterion; the pattern is.<span class=\"zh\">不以年論，以證論。</span>"}]}
  ],
  card:{en:"The qi within the blood — moves blood and qi together, rises to the head. Wrong where yang is already rising, blood is already moving out, or fluids are already short.",
        zh:"血中之氣藥：活血兼行氣，性升能達巔頂。陽亢、出血、陰虧者非其所宜。"} },

/* ── 甘草 ───────────────────────────────────────────────── */
{ id:"gancao",
  beats:[
    {en:"A plain yellow slice arrives last, after every other herb has spoken.<br><b>Gan Cao:</b> \"I am in most formulas and I am the star of almost none. That is the job.\"",
     zh:"一片淡黃的飲片最後才到，等所有藥都說完了才開口。<br><b>甘草：</b>「多數方裡都有我，幾乎沒有一方以我為主。這就是我的差事。」"},
    {en:"<b>Gan Cao:</b> \"Sweet, neutral. It is said I enter all twelve channels. I tonify the Spleen, I moisten the Lung, I relax urgency and stop pain, and I harmonise whatever else is in the pot.\"",
     zh:"<b>甘草：</b>「甘、平，通行十二經。補脾益氣、潤肺、緩急止痛，並調和諸藥。」"},
    {en:"<b>Gan Cao:</b> \"Harmonising is not decoration. Put two herbs together that pull in different directions and I keep the formula from griping the stomach or fighting itself.\"",
     zh:"<b>甘草：</b>「調和非虛設。二藥性相牴牾者，賴我而不傷胃、不相攻。」"},
    {en:"<b>Gan Cao:</b> \"And I am the one herb people take casually, which is exactly why my cautions matter more than most.\"",
     zh:"<b>甘草：</b>「偏偏我又是人人隨手拿來泡的。正因如此，我的禁忌比別人更要緊。」"}
  ],
  qs:[
    {q:"What is Gan Cao usually doing in a formula?",
     cq:"甘草在方中，其職為何？",
     opts:[
      {t:"Acting as envoy — harmonising the other herbs and guiding the formula — while also mildly tonifying and relaxing urgency",
       c:"為使藥：調和諸藥、引和其方，兼緩補、緩急",ok:1,
       note:"<b>Correct.</b> Envoy 使藥 is a real office, not a courtesy. Gan Cao smooths interactions, protects the stomach, and moderates harsh herbs. Prepared with honey 炙甘草 it tonifies more; used raw 生甘草 it leans toward clearing heat and toxicity.<span class=\"zh\">使藥者，實有其職。調和、護胃、緩他藥之峻。炙者偏補，生者偏清熱解毒。</span>"},
      {t:"Acting as sovereign in nearly every formula",
       c:"幾為諸方之君",ok:0,
       note:"Rarely — the sovereign is the herb that treats the main pattern. Gan Cao serves.<span class=\"zh\">罕為君。君者針對主證，甘草多為佐使。</span>"},
      {t:"Adding sweetness for taste only",
       c:"惟取其甘以調味",ok:0,
       note:"Palatability is a bonus. The role is pharmacological and structural.<span class=\"zh\">適口為餘事。其職在藥性與配伍。</span>"}]},
    {q:"Gan Cao and Bai Shao together — what is that pairing for?",
     cq:"甘草配白芍，所主為何？",
     opts:[
      {t:"Cramping pain — sour plus sweet relaxes urgency, classically for abdominal cramps and calf cramps",
       c:"攣急疼痛。酸甘化陰、緩急，古主腹中攣痛與腓腸拘攣",ok:1,
       note:"<b>Correct.</b> Two herbs, one principle: sour gathers, sweet relaxes, and together they release a cramp. It is one of the smallest complete formulas in the classical literature and worth remembering as a unit.<span class=\"zh\">二味一理：酸收甘緩，合而解其急。此為古方中最簡之全方，宜整體記之。</span>"},
      {t:"Clearing summer heat",
       c:"清暑熱",ok:0,
       note:"Different pairing, different herbs.<span class=\"zh\">此另有其配。</span>"},
      {t:"Breaking blood stasis",
       c:"破血逐瘀",ok:0,
       note:"Neither herb does that.<span class=\"zh\">二者皆無此功。</span>"}]},
    {q:"What is the caution with Gan Cao that people most often miss?",
     cq:"甘草之忌，人最易忽者為何？",
     opts:[
      {t:"Large doses over long periods can cause fluid retention, swelling and raised blood pressure, and it interacts with several medications — it is not a casual daily tea",
       c:"大量久服可致水腫、血壓升高，且與多種藥物相互作用。非可日日隨意飲之",ok:1,
       note:"<b>Correct, and this is the most practically important caution in the whole drawer</b> — because Gan Cao is sweet, pleasant and widely available, so it is the herb people self-prescribe. It is also classically incompatible with Gan Sui, Da Ji, Yuan Hua and Hai Zao 十八反. Anyone taking medication, pregnant, or managing blood pressure should speak with a qualified practitioner before using it.<span class=\"zh\">此為諸忌中最切於實用者——甘草味甘易得，人多自服。古亦列反甘遂、大戟、芫花、海藻。凡服藥者、妊娠者、血壓有恙者，用前當諮詢合格醫者。</span>"},
      {t:"It cannot be combined with sweet herbs",
       c:"不可與甘味藥同用",ok:0,
       note:"No such rule exists.<span class=\"zh\">無此例。</span>"},
      {t:"It loses all effect after one year",
       c:"逾年則失其效",ok:0,
       note:"Storage matters for every herb, but that is not the caution here.<span class=\"zh\">貯藏各藥皆當講究，然非本條所指。</span>"}]}
  ],
  card:{en:"In most formulas, the star of almost none — harmonises, protects the stomach, moderates harsh herbs, relaxes cramping. Sweet and easy to reach for, which is why its dose cautions matter.",
        zh:"多入諸方而罕為君：調和、護胃、緩他藥之峻、緩急止痛。味甘易服，故用量之忌尤當留意。"} },

/* ── 陳皮 ───────────────────────────────────────────────── */
{ id:"chenpi",
  beats:[
    {en:"A curl of dried peel, dark and fragrant, unrolls itself slowly.<br><b>Chen Pi:</b> \"Older is better with me. That is not a boast — the name means aged peel.\"",
     zh:"一卷曬乾的橘皮，色深而香，緩緩舒展開來。<br><b>陳皮：</b>「我是愈陳愈好。這不是自誇——「陳皮」二字，本就是陳久之皮。」"},
    {en:"<b>Chen Pi:</b> \"Acrid, bitter, warm. Spleen and Lung. I regulate qi, strengthen the middle, dry damp and transform phlegm — four jobs, one peel.\"",
     zh:"<b>陳皮：</b>「辛、苦、溫，歸脾肺。理氣、健脾、燥濕、化痰——一皮四事。」"},
    {en:"<b>Chen Pi:</b> \"You met me at the ferryman's chest. Heat had cooked his fluids into phlegm. I move the phlegm; cooling herbs handle the heat. Neither of us does the other's work.\"",
     zh:"<b>陳皮：</b>「船家胸中之痰，你見過了。熱煉其津而成痰。痰由我行，熱由寒涼之品清之。彼此不相代。」"}
  ],
  qs:[
    {q:"Why is Chen Pi so often added to tonifying formulas?",
     cq:"補益之方，何以多佐陳皮？",
     opts:[
      {t:"Tonics are rich and can clog the middle burner — Chen Pi keeps the qi moving so the tonic can actually be digested",
       c:"補藥滋膩易滯中焦。陳皮理氣，使補而不滯",ok:1,
       note:"<b>Correct — 補而不滯.</b> A tonic the patient cannot digest is not a tonic. A small amount of a qi-moving herb inside a rich formula is one of the commonest and most elegant pieces of formula design.<span class=\"zh\">此謂補而不滯。補藥不能運化，則補猶不補。厚味之方少佐行氣之品，配伍之常法，亦其巧處。</span>"},
      {t:"For the flavour",
       c:"取其香味",ok:0,
       note:"Aroma is real but the reason is functional.<span class=\"zh\">其香固有，然所取者在其功。</span>"},
      {t:"To make the formula stronger",
       c:"以增其方之力",ok:0,
       note:"It makes the formula <i>usable</i>, which is not the same as stronger.<span class=\"zh\">使方可行，非使方力增。</span>"}]},
    {q:"A patient has a full, distended stomach after meals, belching, a thick greasy tongue coat and copious white phlegm. Does Chen Pi fit?",
     cq:"食後脘腹脹滿、噯氣、苔厚膩、痰多色白。陳皮合否？",
     opts:[
      {t:"Yes — qi stagnation in the middle with damp and phlegm is exactly its territory",
       c:"合。中焦氣滯兼濕痰，正其所主",ok:1,
       note:"<b>Correct.</b> Four findings, four of its actions: distension and belching are stuck qi, the greasy coat is damp, the phlegm is phlegm, and the middle burner is where all of it sits.<span class=\"zh\">四症應其四功：脹噯為氣滯，苔膩為濕，痰即痰，而其位皆在中焦。</span>"},
      {t:"No — belching means the Liver, never the Stomach",
       c:"不合。噯氣專屬肝，不屬胃",ok:0,
       note:"Belching is Stomach qi rising. The Liver can cause it, but the symptom itself sits in the middle burner.<span class=\"zh\">噯氣者胃氣上逆。肝可致之，然其症在中焦。</span>"},
      {t:"No — white phlegm means the herb must be cooling",
       c:"不合。痰白者當用涼藥",ok:0,
       note:"White phlegm is cold or damp phlegm — a warm drying herb is right for it. Yellow thick phlegm would be the one calling for cooling company.<span class=\"zh\">痰白者屬寒屬濕，正宜溫燥。痰黃稠者方須佐以清熱。</span>"}]},
    {q:"When should Chen Pi be used carefully?",
     cq:"陳皮何時當慎？",
     opts:[
      {t:"Where fluids are already short or there is dry cough with little phlegm — it is warm, acrid and drying",
       c:"津虧、乾咳少痰者當慎。其性辛溫而燥",ok:1,
       note:"<b>Correct.</b> The kiln master in chapter seven — dry cough, scanty sticky phlegm, a peeling tongue — is precisely the patient this herb would make drier. Same herb, opposite verdict, because the pattern changed.<span class=\"zh\">第七章窯場之乾咳：痰少而黏、舌苔剝落，正此藥所忌。藥同而斷異，以其證異也。</span>"},
      {t:"Whenever there is any phlegm",
       c:"凡有痰者",ok:0,
       note:"Transforming phlegm is one of its main actions.<span class=\"zh\">化痰為其主功之一。</span>"},
      {t:"Only in children",
       c:"惟小兒當慎",ok:0,
       note:"The caution follows the pattern, not the age.<span class=\"zh\">忌從其證，不從其年。</span>"}]}
  ],
  card:{en:"Regulates qi, strengthens the middle, dries damp, transforms phlegm. Added to rich tonics so they can be digested — 補而不滯. Warm and drying, so not for a dry patient.",
        zh:"理氣、健脾、燥濕、化痰。佐入補劑則補而不滯。性溫而燥，燥證者不宜。"} }

,

/* ── 百合 ───────────────────────────────────────────────── */
{ id:"baihe",
  beats:[
    {en:"A cluster of pale overlapping scales opens like a small white hand.<br><b>Bai He:</b> \"The kiln master. Two years of a dry cough with almost nothing to bring up. You remember what he needed.\"",
     zh:"一叢層層相疊的白色鱗片舒展開來，像一隻小白手。<br><b>百合：</b>「窯場的吳嬸。乾咳兩年，幾乎無痰可出。她所需者，你當記得。」"},
    {en:"<b>Bai He:</b> \"Sweet, slightly cold. Heart and Lung. I moisten the Lung and stop cough, and I nourish yin and quiet the spirit.\"",
     zh:"<b>百合：</b>「甘、微寒，歸心肺。潤肺止咳，養陰清心安神。」"},
    {en:"<b>Bai He:</b> \"Two organs, one substance. Dryness in the Lung and restlessness in the Heart both come from yin that is too thin — so one herb can answer both.\"",
     zh:"<b>百合：</b>「病涉二臟，所虧者一物。肺燥與心煩，皆陰不足之所致，故一藥可兼之。」"}
  ],
  qs:[
    {q:"What kind of cough is Bai He for?",
     cq:"百合所主，何等咳嗽？",
     opts:[
      {t:"A dry cough with little or no phlegm, from Lung yin deficiency or dryness",
       c:"乾咳無痰或痰少，屬肺陰虛或燥",ok:1,
       note:"<b>Correct.</b> Match the herb's nature to the cough's nature. Moistening for a dry cough; drying and transforming for a wet one. Reading the phlegm is how you choose.<span class=\"zh\">以藥性應咳性：燥咳宜潤，痰咳宜燥宜化。辨痰即所以擇藥。</span>"},
      {t:"A loud wet cough with copious white phlegm",
       c:"咳聲重濁、痰多色白",ok:0,
       note:"That wants a drying, phlegm-transforming herb such as Chen Pi. Moistening it would add to the load.<span class=\"zh\">彼宜燥濕化痰之品，如陳皮。潤之則益其痰。</span>"},
      {t:"A cough from an exterior wind-cold pattern on day one",
       c:"風寒表證初起之咳",ok:0,
       note:"An exterior pattern wants releasing, not enriching — enriching too early can keep the pathogen in.<span class=\"zh\">表證當解，不當滋。早用滋膩，反致留邪。</span>"}]},
    {q:"Why does the same herb treat both the Lung and the Heart here?",
     cq:"一藥何以兼治肺與心？",
     opts:[
      {t:"Because both symptom sets arise from yin deficiency — the mechanism is shared even though the organs differ",
       c:"二者之症俱由陰虛而生。臟雖異而機則一",ok:1,
       note:"<b>Correct, and it is a habit worth building.</b> Ask what mechanism the symptoms share before you ask which organ they belong to. One herb can cover two organs when the underlying shortage is the same.<span class=\"zh\">此當養成之思路：先問諸症同出何機，後問其屬何臟。所虧者同，則一藥可兼二臟。</span>"},
      {t:"Because the Heart and Lung are the same organ in TCM",
       c:"中醫以心肺為一臟",ok:0,
       note:"They are distinct organs with distinct functions. They sit together in the upper burner and share this particular vulnerability.<span class=\"zh\">二者為別臟，各有所主。惟同居上焦，於此一端相通。</span>"},
      {t:"Because all cold herbs treat every organ",
       c:"凡寒藥皆通治諸臟",ok:0,
       note:"Channel entry is specific to each herb.<span class=\"zh\">歸經各藥不同。</span>"}]},
    {q:"When is Bai He unsuitable?",
     cq:"百合何時不宜？",
     opts:[
      {t:"In cold patterns with copious phlegm, or loose stools from a cold weak Spleen — it is cold and enriching",
       c:"寒痰多者、脾虛便溏者不宜。其性寒而滋膩",ok:1,
       note:"<b>Correct.</b> Rich moistening herbs sit heavily on a weak middle burner and can loosen the bowel further. Every enriching herb carries some version of this caution.<span class=\"zh\">滋膩之品困中焦，脾弱者服之便更溏。凡滋膩者，多有此忌。</span>"},
      {t:"Whenever the patient has a cough",
       c:"凡咳者",ok:0,
       note:"Cough is its main indication — the dry kind.<span class=\"zh\">咳為其所主，惟主燥咳。</span>"},
      {t:"In summer only",
       c:"惟夏令不宜",ok:0,
       note:"The caution follows the pattern.<span class=\"zh\">忌從其證。</span>"}]}
  ],
  card:{en:"Moistens the Lung and stops a dry cough; nourishes yin and quiets the spirit. Two organs, one shortage. Cold and enriching — not for a cold, phlegmy or loose-bowelled patient.",
        zh:"潤肺止咳、養陰清心安神。病涉二臟而所虧者一。性寒滋膩，寒痰、便溏者不宜。"} },

/* ── 蓮子 ───────────────────────────────────────────────── */
{ id:"lianzi",
  beats:[
    {en:"A pale oval seed settles quietly, unhurried.<br><b>Lian Zi:</b> \"The tea stall keeper. Eleven years alone, three years of worry, and a Spleen that stopped making blood.\"",
     zh:"一顆淡色的橢圓種子靜靜落下，不慌不忙。<br><b>蓮子：</b>「茶攤的杜大娘。獨撐十一年，憂思三年，脾遂不生血。」"},
    {en:"<b>Lian Zi:</b> \"Sweet, astringent, neutral. Spleen, Kidney, Heart. I strengthen the Spleen and stop diarrhoea, hold the Kidney's essence, and quiet the Heart's spirit.\"",
     zh:"<b>蓮子：</b>「甘、澀、平，歸脾腎心。健脾止瀉、益腎固精、養心安神。」"},
    {en:"<b>Lian Zi:</b> \"Three organs is unusual for one seed. It is why I sit in congee and sweet soups rather than only in prescriptions — neutral, gentle, and safe to eat often.\"",
     zh:"<b>蓮子：</b>「一子而歸三臟，本不多見。故我常入粥羹，不止於湯藥——性平和緩，可常食。」"}
  ],
  qs:[
    {q:"Which two of Lian Zi's actions make it fit the Heart-and-Spleen pattern?",
     cq:"心脾兩虛之證，蓮子取其何功？",
     opts:[
      {t:"Strengthening the Spleen and quieting the Heart spirit — the far end and the near end of the same chain",
       c:"健脾與養心安神：一在其鏈之遠端，一在其近端",ok:1,
       note:"<b>Correct.</b> Worry knots the Spleen, the Spleen stops making blood, the Heart loses what settles the spirit. An herb that reaches both ends treats the source and the symptom in one.<span class=\"zh\">思鬱傷脾，脾不生血，心失所養而神不安。一藥兼及首尾，標本同治。</span>"},
      {t:"Clearing heat and draining fire",
       c:"清熱瀉火",ok:0,
       note:"Lian Zi is neutral and gentle, not a heat-clearing herb. (The green plumule inside the seed, Lian Zi Xin 蓮子心, is the bitter cold part that clears Heart fire — a different medicinal.)<span class=\"zh\">蓮子性平和緩，非清熱之品。其中之綠心（蓮子心）苦寒，能清心火，別為一藥。</span>"},
      {t:"Moving blood and breaking stasis",
       c:"活血破瘀",ok:0,
       note:"That is Hong Hua and Chuan Xiong territory, and the wrong direction for an empty patient.<span class=\"zh\">此紅花、川芎之屬，於虛證為逆。</span>"}]},
    {q:"Lian Zi is astringent 澀. What does that add?",
     cq:"蓮子味澀，其義何在？",
     opts:[
      {t:"It holds things in — which is why it stops chronic diarrhoea and secures the Kidney's essence",
       c:"澀能收固，故止久瀉、固腎精",ok:1,
       note:"<b>Correct.</b> Astringent herbs stop leakage: chronic loose stools, sweating, spermatorrhoea, excessive discharge. The important rule is that leakage from a lodged pathogen must be cleared first — astringing a patient who still has something to expel traps it.<span class=\"zh\">澀藥主固脫：久瀉、汗出、遺精、帶下。惟邪實所致之洩，當先祛邪；邪未去而澀之，是閉其邪。</span>"},
      {t:"It makes the herb taste better",
       c:"以其味佳",ok:0,
       note:"Flavour in TCM describes direction of action, not palatability.<span class=\"zh\">五味者言其趨向，非言其適口。</span>"},
      {t:"It means the herb is cold",
       c:"謂其性寒",ok:0,
       note:"Flavour and temperature are two separate properties. Lian Zi is neutral.<span class=\"zh\">味與氣為二事。蓮子性平。</span>"}]},
    {q:"What is the practical caution with Lian Zi?",
     cq:"蓮子之忌何在？",
     opts:[
      {t:"Because it is astringent, it is unsuitable where there is constipation or an unresolved pathogen that still needs to come out",
       c:"性澀，故便秘者、邪實未去者不宜",ok:1,
       note:"<b>Correct.</b> Gentle does not mean universal. An astringent herb given to someone who needs to expel something works against the treatment. It is a food-grade herb, but food-grade still means matching it to the pattern.<span class=\"zh\">和緩非謂通用。當出者未出而澀之，適與治則相反。雖為藥食之品，仍當因證而施。</span>"},
      {t:"It must never be eaten as food",
       c:"不可作食用",ok:0,
       note:"It is eaten in congee and sweet soups routinely.<span class=\"zh\">粥羹常用之。</span>"},
      {t:"It is only for the elderly",
       c:"惟老年可用",ok:0,
       note:"It is used across ages according to pattern.<span class=\"zh\">各年齡隨證而用。</span>"}]}
  ],
  card:{en:"Strengthens the Spleen, holds the Kidney's essence, quiets the Heart's spirit — three organs in one gentle neutral seed. Astringent, so not where something still needs to come out.",
        zh:"健脾止瀉、益腎固精、養心安神：一子而歸三臟，性平和緩。味澀主收，邪實未去者不宜。"} },

/* ── 薏苡仁 ─────────────────────────────────────────────── */
{ id:"yiyiren",
  beats:[
    {en:"A small hard pearl-white grain rolls to a stop.<br><b>Yi Yi Ren:</b> \"Damp is my whole subject. Heavy limbs, a greasy tongue coat, that sodden feeling that arrives with the rain.\"",
     zh:"一粒堅實如珠的白色穀物滾了過來，停住。<br><b>薏苡仁：</b>「濕，是我唯一的題目。肢體困重、苔膩、遇雨則身如裹。」"},
    {en:"<b>Yi Yi Ren:</b> \"Sweet, bland, slightly cold. Spleen, Stomach, Lung. Bland drains — that is the mechanism. I leach damp out through the water passages rather than drying it up.\"",
     zh:"<b>薏苡仁：</b>「甘、淡、微寒，歸脾胃肺。淡能滲泄——此即其理。我從水道滲利其濕，而非燥之。」"},
    {en:"<b>Yi Yi Ren:</b> \"I also strengthen the Spleen a little, clear heat, and drain pus. Gentle enough for a daily congee, which is where most people meet me.\"",
     zh:"<b>薏苡仁：</b>「兼能健脾、清熱、排膿。性和緩可日食，多數人是在粥裡遇見我的。」"}
  ],
  qs:[
    {q:"\"Bland drains\" 淡滲 — what does that mean?",
     cq:"「淡能滲泄」何謂？",
     opts:[
      {t:"Bland-flavoured herbs move fluid out through the urine rather than drying it in place",
       c:"淡味之藥，導水從小便而去，非燥之於原處",ok:1,
       note:"<b>Correct, and it distinguishes two whole families.</b> Drying herbs 燥濕 such as Bai Zhu evaporate damp with warmth; leaching herbs 滲濕 such as Yi Yi Ren and Fu Ling carry it out through the water passages. Which you choose depends on where the damp is and how dry the patient can afford to be.<span class=\"zh\">此分二類：燥濕者如白朮，以溫燥之；滲濕者如薏苡仁、茯苓，導之從水道出。擇之視濕之所在，與其人可否再燥。</span>"},
      {t:"It means the herb has no effect",
       c:"謂其藥力薄弱",ok:0,
       note:"Bland is a flavour category with a specific action, not an absence.<span class=\"zh\">淡為五味之一，自有其能，非謂無力。</span>"},
      {t:"It means the herb must be taken with salt",
       c:"謂當佐以鹹味",ok:0,
       note:"No such rule.<span class=\"zh\">無此例。</span>"}]},
    {q:"How does Yi Yi Ren differ from Bai Zhu for damp?",
     cq:"治濕，薏苡仁與白朮何異？",
     opts:[
      {t:"Yi Yi Ren is slightly cold and leaches damp out; Bai Zhu is warm and dries it while tonifying the Spleen more strongly",
       c:"薏苡仁微寒而滲利，白朮性溫而燥濕，且健脾之力較強",ok:1,
       note:"<b>Correct.</b> Same target, opposite temperature, different mechanism — so damp with heat leans toward Yi Yi Ren, and damp with a cold weak Spleen leans toward Bai Zhu. They are also frequently used together.<span class=\"zh\">所治同而寒溫異、機轉亦異：濕兼熱者偏取薏苡仁，濕兼脾虛而寒者偏取白朮。二者亦常同用。</span>"},
      {t:"They are interchangeable",
       c:"二者可互代",ok:0,
       note:"One is cold, one is warm. In a cold patient that difference decides the outcome.<span class=\"zh\">一寒一溫。於寒證，此別即定其成敗。</span>"},
      {t:"Yi Yi Ren warms the interior",
       c:"薏苡仁能溫裡",ok:0,
       note:"It is slightly cold.<span class=\"zh\">其性微寒。</span>"}]},
    {q:"What is the standard caution?",
     cq:"其常忌為何？",
     opts:[
      {t:"It is draining, so it is used with care where fluids are already short, and it is traditionally avoided in pregnancy",
       c:"性滲利，津虧者當慎；傳統上妊娠忌用",ok:1,
       note:"<b>Correct.</b> The pregnancy caution is standard in the classical literature and worth knowing precisely because Yi Yi Ren is a common food. Anyone pregnant, or eating it medicinally rather than occasionally, should check with a qualified practitioner.<span class=\"zh\">妊娠慎用，古籍有明文。薏苡仁為常食之物，故此忌尤當知之。妊娠者、或以藥量常服者，宜先諮詢合格醫者。</span>"},
      {t:"It cannot be cooked",
       c:"不可烹煮",ok:0,
       note:"It is nearly always cooked, usually in congee or soup.<span class=\"zh\">多入粥羹，必經烹煮。</span>"},
      {t:"It must be taken alone",
       c:"必當單用",ok:0,
       note:"It appears in many formulas alongside other herbs.<span class=\"zh\">諸方多與他藥同用。</span>"}]}
  ],
  card:{en:"Bland drains: leaches damp out through the water passages rather than drying it in place. Also mildly strengthens the Spleen, clears heat and drains pus. Traditionally avoided in pregnancy.",
        zh:"淡能滲泄：導濕從水道出，不以燥勝之。兼健脾、清熱、排膿。傳統妊娠忌用。"} },

/* ── 玫瑰花 ─────────────────────────────────────────────── */
{ id:"meiguihua",
  beats:[
    {en:"A small dried bud opens just enough to be recognised, and the room smells faintly of a garden.<br><b>Mei Gui Hua:</b> \"Liu Sanniang, at the teahouse. Sighing all day, tight under the ribs, and nothing wrong with her that anyone could name.\"",
     zh:"一朵乾燥的小花苞微微張開，室中頓有園中之氣。<br><b>玫瑰花：</b>「茶館的柳三娘。終日太息，脅下滿悶，而人皆說不出她哪裡有病。」"},
    {en:"<b>Mei Gui Hua:</b> \"Sweet, slightly bitter, warm. Liver and Spleen. I move Liver qi, harmonise blood, and settle the mood — gently.\"",
     zh:"<b>玫瑰花：</b>「甘、微苦、溫，歸肝脾。行氣解鬱、和血、調暢情志——其力和緩。」"},
    {en:"<b>Mei Gui Hua:</b> \"Gently is the point. Constraint that has been building for years does not want to be forced open. Aromatic herbs move it without draining anything.\"",
     zh:"<b>玫瑰花：</b>「和緩正是要義。積年之鬱，不宜強攻。芳香之品行其滯而不耗其氣。」"}
  ],
  qs:[
    {q:"What pattern is Mei Gui Hua best suited to?",
     cq:"玫瑰花最宜何證？",
     opts:[
      {t:"Liver qi constraint with a low or tight mood, rib-side fullness, sighing, and menstrual irregularity",
       c:"肝鬱氣滯：情志不舒、脅脹、善太息、月經不調",ok:1,
       note:"<b>Correct.</b> This is chapter three's pattern. Aromatic qi-moving herbs are the light end of that family — enough to move constraint without the drying force of stronger movers.<span class=\"zh\">此即第三章之證。芳香行氣者，此類之輕劑：能行其鬱而無峻藥之燥。</span>"},
      {t:"Blazing Liver fire with red eyes and a bitter mouth",
       c:"肝火上炎、目赤口苦",ok:0,
       note:"That wants bitter cold herbs to drain fire. Rose is warm and moving, not cooling.<span class=\"zh\">彼宜苦寒瀉火。玫瑰花性溫主行，非清降之品。</span>"},
      {t:"Kidney yang deficiency with cold low back",
       c:"腎陽虛、腰冷",ok:0,
       note:"Wrong organ and wrong action entirely.<span class=\"zh\">臟與功皆不合。</span>"}]},
    {q:"Why does an aromatic herb suit long-standing constraint particularly well?",
     cq:"久鬱之證，何以宜芳香之品？",
     opts:[
      {t:"Because it moves qi without strongly draining, so it can be used over time without depleting the patient",
       c:"行氣而不峻瀉，故可久用而不耗其正",ok:1,
       note:"<b>Correct.</b> Strong qi-movers are acrid and drying; used for months they can consume qi and yin. A gentle aromatic can stay in a long treatment. Duration is a real design constraint in formulas, not an afterthought.<span class=\"zh\">峻行之品辛燥，久服耗氣傷陰。芳香和緩者可久任其職。療程之久暫，實為組方所當計，非餘事。</span>"},
      {t:"Because aroma has no pharmacological effect",
       c:"以其香無藥效",ok:0,
       note:"Aromatic 芳香 is a recognised functional category in the materia medica.<span class=\"zh\">芳香為本草功能之一類。</span>"},
      {t:"Because constraint always resolves on its own",
       c:"以鬱自解",ok:0,
       note:"Chapter three exists because it does not.<span class=\"zh\">第三章之設，正為其不自解。</span>"}]},
    {q:"What is the caution?",
     cq:"其忌為何？",
     opts:[
      {t:"It moves qi and blood, so it is used with care in yin deficiency with heat, and traditionally with caution in pregnancy",
       c:"行氣活血，故陰虛有熱者當慎，妊娠亦當慎",ok:1,
       note:"<b>Correct.</b> Even a gentle mover is still a mover. Rose tea is widely drunk and mostly well tolerated, but anyone pregnant, on medication, or with a heat pattern should ask a qualified practitioner rather than assume a flower is inert.<span class=\"zh\">雖為輕劑，其性仍主行。玫瑰花茶流行而多可受，然妊娠者、服藥者、有熱者，宜諮詢合格醫者，不可以其為花而視作無力。</span>"},
      {t:"None — it is a flower",
       c:"花也，無所忌",ok:0,
       note:"Being a flower is not a safety category.<span class=\"zh\">花非安否之憑。</span>"},
      {t:"It cannot be taken as tea",
       c:"不可泡飲",ok:0,
       note:"Tea is its commonest preparation.<span class=\"zh\">泡飲為其最常之用法。</span>"}]}
  ],
  card:{en:"Moves Liver qi and settles the mood without draining — the light end of the qi-moving family, which is why it can be used over time. Still a mover: care in heat patterns and pregnancy.",
        zh:"行氣解鬱、調暢情志而不耗正：行氣類中之輕劑，故可久用。然其性仍行，有熱者、妊娠者當慎。"} },

/* ── 淡竹葉 ─────────────────────────────────────────────── */
{ id:"danzhuye",
  beats:[
    {en:"A thin green leaf lies flat and cool, and the air around it feels a degree lighter.<br><b>Dan Zhu Ye:</b> \"Restless at night, mouth ulcers, dark scanty urine that stings. Have you seen those three together?\"",
     zh:"一片薄綠的葉子平平躺著，其旁之氣似乎清了一分。<br><b>淡竹葉：</b>「夜臥不寧、口舌生瘡、小便短赤而澀痛。此三者你可曾同見？」"},
    {en:"<b>Dan Zhu Ye:</b> \"Sweet, bland, cold. Heart, Stomach, Small Intestine. I clear heat and I promote urination — and those two are one action, not two.\"",
     zh:"<b>淡竹葉：</b>「甘、淡、寒，歸心胃小腸。清熱、利尿——此二者實為一事，非二事。」"},
    {en:"<b>Dan Zhu Ye:</b> \"Heart and Small Intestine are an interior-exterior pair. Heat in the Heart passes down to the Small Intestine, and the Small Intestine's road out is the urine. So I lead the heat down and out.\"",
     zh:"<b>淡竹葉：</b>「心與小腸相表裡。心熱下移小腸，小腸之出路在小便。故我引熱下行而出。」"}
  ],
  qs:[
    {q:"Why does clearing Heart heat involve the urine at all?",
     cq:"清心熱何以與小便有涉？",
     opts:[
      {t:"Because the Heart and Small Intestine are an interior-exterior pair, so Heart heat can be led down and out through urination",
       c:"心與小腸相表裡，故心熱可從小便而導出",ok:1,
       note:"<b>Correct, and it is a lovely demonstration of paired channels doing real work.</b> The pairing is not a filing system — it is a route. Knowing it turns \"clear heat\" into \"clear heat by giving it somewhere to go\".<span class=\"zh\">表裡之配非徒分類，乃通路也。知其路，則「清熱」轉為「使熱有出路」。</span>"},
      {t:"Because all cold herbs cause urination",
       c:"凡寒藥皆利小便",ok:0,
       note:"They do not — many clear heat without any diuretic action at all.<span class=\"zh\">不然。清熱之品多無利尿之能。</span>"},
      {t:"Because the Heart governs water",
       c:"以心主水",ok:0,
       note:"The Kidney governs water. The Heart governs blood and houses the spirit.<span class=\"zh\">腎主水。心主血脈而藏神。</span>"}]},
    {q:"A patient has mouth ulcers, a red tongue tip, restless sleep and dark burning urine. Does Dan Zhu Ye fit?",
     cq:"口舌生瘡、舌尖紅、夜寐不安、小便短赤灼痛。淡竹葉合否？",
     opts:[
      {t:"Yes — that is the Heart-fire-descending-to-the-Small-Intestine picture, exactly its territory",
       c:"合。此心火下移小腸之證，正其所主",ok:1,
       note:"<b>Correct.</b> Four findings, one mechanism, one route out. The red tongue tip is the giveaway — the tip corresponds to the Heart and upper burner.<span class=\"zh\">四症一機，一路而出。舌尖紅為其顯憑：尖候心與上焦。</span>"},
      {t:"No — mouth ulcers are always Stomach fire",
       c:"不合。口瘡必屬胃火",ok:0,
       note:"Stomach fire also causes them, but the location matters: ulcers on the tongue tip with restless sleep point at the Heart.<span class=\"zh\">胃火固亦致之，然當辨其部：瘡在舌尖而兼不寐者，責之於心。</span>"},
      {t:"No — the patient must be cold",
       c:"不合。其人當屬寒",ok:0,
       note:"Every finding here is heat.<span class=\"zh\">諸症皆熱。</span>"}]},
    {q:"When should Dan Zhu Ye be avoided?",
     cq:"淡竹葉何時當避？",
     opts:[
      {t:"In cold or deficient patterns, and traditionally in pregnancy — it is cold and it drains downward",
       c:"虛寒者不宜，妊娠傳統上亦忌。其性寒而下泄",ok:1,
       note:"<b>Correct.</b> Cold-draining herbs in an already cold, empty patient take what little warmth and fluid there is. The pregnancy caution is standard for downward-draining cold herbs.<span class=\"zh\">寒瀉之品，於本虛本寒者，反奪其溫與津。寒而下行者，妊娠多有此忌。</span>"},
      {t:"Whenever the patient cannot sleep",
       c:"凡不寐者",ok:0,
       note:"Restless sleep from Heart heat is one of its indications — but sleeplessness from deficiency is a different pattern needing a different herb.<span class=\"zh\">心熱不寐正其所主；虛煩不眠則另為一證，當用他藥。</span>"},
      {t:"Only when combined with sweet herbs",
       c:"惟與甘藥同用時",ok:0,
       note:"No such restriction.<span class=\"zh\">無此限。</span>"}]}
  ],
  card:{en:"Clears Heart heat and leads it out through the urine — because Heart and Small Intestine are paired, and the pairing is a route, not a label. Cold and draining: not for a cold or empty patient.",
        zh:"清心熱而導之從小便出——心與小腸相表裡，其配為路而非為名。性寒下泄，虛寒者不宜。"} },

/* ── 紅花 ───────────────────────────────────────────────── */
{ id:"honghua",
  beats:[
    {en:"A tangle of thin red threads glows against the counter.<br><b>Hong Hua:</b> \"Fixed stabbing pain that does not move. Worse at night. Purple tongue, dark clots. You know this one.\"",
     zh:"一撮細紅的花絲在櫃上泛著光。<br><b>紅花：</b>「刺痛有定處而不移，入夜尤甚，舌紫、血塊色黑。此證你認得。」"},
    {en:"<b>Hong Hua:</b> \"Acrid, warm. Heart and Liver. I invigorate blood and dispel stasis. That is a strong action, and strong actions cut both ways.\"",
     zh:"<b>紅花：</b>「辛、溫，歸心肝。活血通經、祛瘀止痛。其力頗峻，峻者利害兼之。」"},
    {en:"<b>Hong Hua:</b> \"Dose changes what I do. A little harmonises and nourishes blood; more of me breaks stasis. That is not a detail — it is the difference between two treatments.\"",
     zh:"<b>紅花：</b>「用量異則所為異。少用和血養血，多用破血逐瘀。此非細節，乃二治之分。」"},
    {en:"<b>Hong Hua:</b> \"And I am contraindicated in pregnancy. Say that one out loud every time.\"",
     zh:"<b>紅花：</b>「孕婦禁用。這一句，每次都要說出聲。」"}
  ],
  qs:[
    {q:"Which findings point toward blood stasis?",
     cq:"何症指向血瘀？",
     opts:[
      {t:"Fixed stabbing pain worse at night, a purple or dusky tongue, dark clotted bleeding, and engorged sublingual veins",
       c:"刺痛有定處、入夜加重、舌紫暗、血塊色黑、舌下絡脈怒張",ok:1,
       note:"<b>Correct.</b> Fixed and stabbing is the signature — qi stagnation wanders and feels distending; blood stasis stays put and stabs. Night worsening fits because yang is quieter and circulation slower.<span class=\"zh\">定處而刺痛，其憑也。氣滯者走竄而脹，血瘀者不移而刺。夜甚者，陽靜而血行遲故也。</span>"},
      {t:"Wandering distending pain that changes place with mood",
       c:"痛無定處、脹而隨情志遷移",ok:0,
       note:"That is qi stagnation. It often precedes stasis, but it is a different stage.<span class=\"zh\">此氣滯之象。氣滯多為血瘀之先，然階段不同。</span>"},
      {t:"Dull pain relieved by pressure and warmth",
       c:"隱痛喜按得溫則減",ok:0,
       note:"That is deficiency, usually with cold — the opposite direction of treatment.<span class=\"zh\">此虛證，多兼寒。治法適反。</span>"}]},
    {q:"What does it mean that Hong Hua acts differently at different doses?",
     cq:"紅花用量異則功異，何謂也？",
     opts:[
      {t:"A small dose harmonises and nourishes blood; a larger dose breaks stasis — so the dose is part of the prescription, not an afterthought",
       c:"少用和血養血，多用破血逐瘀。故用量即處方之一環，非餘事",ok:1,
       note:"<b>Correct, and it generalises.</b> Dose changes an herb's role in a formula and sometimes its direction of action. This is one of several reasons herbal prescribing belongs with a qualified practitioner rather than a recipe.<span class=\"zh\">此理可推：用量既定其於方中之職，亦可易其趨向。此為方藥必由合格醫者處方、而不可徒憑成方之一由。</span>"},
      {t:"It means the herb is unreliable",
       c:"謂其藥效不定",ok:0,
       note:"It is entirely predictable — it just depends on dose.<span class=\"zh\">其效可期，惟隨量而異。</span>"},
      {t:"It means dose does not matter",
       c:"謂用量無關緊要",ok:0,
       note:"The opposite.<span class=\"zh\">適反。</span>"}]},
    {q:"What is the absolute caution with Hong Hua?",
     cq:"紅花之絕對禁忌為何？",
     opts:[
      {t:"Contraindicated in pregnancy, and used with care where there is active bleeding or a tendency to bleed",
       c:"孕婦禁用；出血或易出血者亦當慎",ok:1,
       note:"<b>Correct, and it is not a soft caution.</b> Strong blood-movers are classically contraindicated in pregnancy. They also interact with anticoagulant medication. This herb belongs with a qualified practitioner who knows the full medication list — it is not a self-prescribing herb.<span class=\"zh\">此非泛泛之慎。峻行血之品，古來妊娠禁用；且與抗凝之藥相涉。用之必由合格醫者，且須知其所服諸藥，非可自服之品。</span>"},
      {t:"It must not be used in winter",
       c:"冬令不可用",ok:0,
       note:"Season is not the issue.<span class=\"zh\">非關時令。</span>"},
      {t:"It cannot be used with warm herbs",
       c:"不可與溫藥同用",ok:0,
       note:"It is warm itself and combines widely.<span class=\"zh\">其性本溫，配伍甚廣。</span>"}]}
  ],
  card:{en:"Invigorates blood and dispels stasis — fixed stabbing pain, purple tongue, dark clots. Small dose harmonises, larger dose breaks. Contraindicated in pregnancy; care with bleeding and anticoagulants.",
        zh:"活血祛瘀：刺痛有定處、舌紫、血塊色黑。少用和血，多用破血。孕婦禁用；出血或服抗凝藥者當慎。"} }

,

  /* ══════ 黃耆 · the qi tonic that also works at the surface ══════ */
  { id:"huangqi",
    beats:[
      {en:"A tall dry slice of root is leaning against the drawer like a gate-guard on a slow afternoon. It does not swagger. It simply does not move.<br><b>Astragalus:</b> \"Sweet, slightly warm. Spleen and Lung.\"",
       zh:"一片瘦長乾燥的根倚在藥櫃邊，像午後守門的老兵。它不張揚，只是不動。<br><b>黃耆：</b>「甘、微溫，歸脾肺。」"},
      {en:"<b>Astragalus:</b> \"Ginseng fills the deep reserve. I do something narrower and more useful day to day — I tonify qi and I <i>raise</i> it. Things that have sagged: the middle, the voice, an organ that has dropped, a wound that will not close.\"",
       zh:"<b>黃耆：</b>「人參補的是元氣那一層。我做的事更窄，卻更日常——我補氣，而且<i>升</i>氣。凡是垂下去的：中氣、聲音、下陷之臟、久不收口之瘡。」"},
      {en:"<b>Astragalus:</b> \"And I hold the border. Sweating all day without moving, catching every wind that passes — that is a surface with no guard on it. Most qi tonics cannot reach out that far. I can.\"",
       zh:"<b>黃耆：</b>「我還守邊。整天不動也汗出、風一過就病——那是衛表無人把守。多數補氣藥達不到那麼外面，我可以。」"},
      {en:"It tips its head toward the door.<br><b>Astragalus:</b> \"But if the enemy is already inside the gate, do not reinforce the gate. An exterior pathogen that has not been released yet — send it out first. Shut me in with it and I keep it in.\"",
       zh:"它朝門口偏了偏頭。<br><b>黃耆：</b>「可是敵人若已進門，就別再加固門閂。表邪未解者，先解其表。把我和邪一起關在裡面，我只會替它留門。」"}
    ],
    qs:[
      {q:"Astragalus and Ginseng are both qi tonics. What does Astragalus do that Ginseng does not?",
       cq:"黃耆與人參同為補氣藥，黃耆能而人參不專者為何？",
       opts:[
        {t:"It raises sunken yang qi and secures the exterior", c:"升舉下陷之陽氣，並能固表",
         ok:1, note:"<b>Correct.</b> Tonify <i>and</i> raise, tonify <i>and</i> guard the surface — that pairing is what makes Astragalus the chief in Buzhong Yiqi Tang and in Yu Ping Feng San.<span class=\"zh\">補而能升、補而能固表。此其所以為補中益氣湯與玉屏風散之君。</span>"},
        {t:"It greatly tonifies original qi in collapse", c:"大補元氣，救脫",
         ok:0, note:"That is Ginseng's territory, and the distinction matters in an emergency.<span class=\"zh\">此人參之長，危急之際不可混。</span>"},
        {t:"It nourishes yin and generates fluids", c:"滋陰生津",
         ok:0, note:"Astragalus is warm and moves upward and outward. It is not a yin herb.<span class=\"zh\">黃耆性溫升散，非滋陰之品。</span>"}]},
      {q:"A clerk sweats through his robe sitting still at his desk, catches cold four times a winter, and has a pale tongue with a weak pulse. Which reading fits?",
       cq:"文書終日靜坐而汗透衣衫，一冬感冒四次，舌淡脈弱。當作何解？",
       opts:[
        {t:"Qi deficiency failing to secure the exterior — wei qi is not holding the border",
         c:"氣虛不固表，衛氣不能司開闔", ok:1,
         note:"<b>Correct.</b> Sweating at rest 自汗 plus repeated invasions is the classic picture; Yu Ping Feng San is built for exactly it.<span class=\"zh\">自汗而反覆外感，正玉屏風散所主。</span>"},
        {t:"Yin deficiency with heat pushing fluids out at night",
         c:"陰虛內熱，迫津外泄而盜汗", ok:0,
         note:"Night sweating 盜汗 with heat signs would say yin deficiency. This man sweats in the daytime, at rest, and is pale.<span class=\"zh\">盜汗兼熱象方屬陰虛。此人晝日靜而汗出，舌淡，非是。</span>"},
        {t:"Damp-heat steaming outward through the skin",
         c:"濕熱蒸騰外達肌表", ok:0,
         note:"There is no heat and no damp here — only weakness.<span class=\"zh\">本案無熱無濕，惟虛而已。</span>"}]},
      {q:"When should Astragalus not be used alone?",
       cq:"何時不宜單用黃耆？",
       opts:[
        {t:"While an exterior pathogen is still unresolved, or where there is excess heat",
         c:"表邪未解，或實熱內盛", ok:1,
         note:"<b>Correct.</b> Securing the exterior before the pathogen has left traps it inside — 閉門留寇. It is also warm, so it feeds excess heat.<span class=\"zh\">邪未去而先固表，是謂閉門留寇。其性又溫，實熱者益甚。</span>"},
        {t:"In anyone over sixty", c:"年過六十者", ok:0,
         note:"Age is not a contraindication. The pattern is.<span class=\"zh\">禁忌在證不在年。</span>"},
        {t:"Whenever the patient is sweating", c:"凡見汗出者", ok:0,
         note:"The opposite — sweating from qi deficiency is one of its main indications. What matters is <i>why</i> the sweat is there.<span class=\"zh\">正相反。氣虛自汗本為其主治。當辨汗之所由。</span>"}]}
    ],
    card:{en:"Tonifies qi and raises the yang; secures the exterior and stops spontaneous sweating. Withheld while an exterior pathogen is unresolved, or where heat is from excess.",
          zh:"補氣升陽、固表止汗。表邪未解、實熱者不宜單用。"} },

  /* ══════ 梔子 · heat with a direction ══════ */
  { id:"zhizi",
    beats:[
      {en:"A small hard fruit the colour of a lantern rolls forward and stops.<br><b>Gardenia:</b> \"Bitter. Cold. Heart, Lung, Stomach, and all three Burners — which is a way of saying: top to bottom.\"",
       zh:"一枚燈籠色的小硬果滾了過來，停住。<br><b>梔子：</b>「苦、寒，歸心肺胃與三焦——說得白些，就是從上到下。」"},
      {en:"<b>Gardenia:</b> \"Most cooling herbs simply lower the temperature. My work has a direction. I take heat <i>downward</i>, and out through the urine. You will see the urine change colour. That is not a side effect; that is the mechanism.\"",
       zh:"<b>梔子：</b>「多數寒藥只是降其溫。我行事有方向：導熱<i>下行</i>，從小便而出。小便會變色——那不是副作用，那正是機轉。」"},
      {en:"<b>Gardenia:</b> \"Which is why, when a body turns yellow, they send for me. Yinchenhao leads, I follow, and rhubarb closes the door behind us.\"",
       zh:"<b>梔子：</b>「所以身黃者召我。茵陳為君，我為臣，大黃殿後。」"},
      {en:"It cools a degree further.<br><b>Gardenia:</b> \"Bitter and cold injures the middle. A person whose stools are already loose and whose belly is already cold does not need me. Fire is my business. Emptiness is not.\"",
       zh:"它又冷了一分。<br><b>梔子：</b>「苦寒傷中。便已溏、腹已冷者，不須用我。我治火，不治虛。」"}
    ],
    qs:[
      {q:"What is distinctive about how Gardenia clears heat?",
       cq:"梔子清熱，特異在何處？",
       opts:[
        {t:"It drains fire downward and out through the urine", c:"導熱下行，從小便而出",
         ok:1, note:"<b>Correct.</b> Direction, not just temperature — this is why it treats jaundice and why it is a chief herb for damp-heat in the lower burner.<span class=\"zh\">重在導引之向而非徒清其溫，故能退黃，亦主下焦濕熱。</span>"},
        {t:"It pushes heat out through the surface as sweat", c:"發汗解表以散熱",
         ok:0, note:"That is an exterior-releasing herb. Gardenia works from the inside downward.<span class=\"zh\">此解表藥之事。梔子由內下行。</span>"},
        {t:"It cools blood only, and does not touch qi-level heat", c:"專涼血分，不及氣分",
         ok:0, note:"It does cool blood and stop bleeding, but relieving restlessness 除煩 is qi-level work.<span class=\"zh\">梔子固能涼血止血，然除煩即氣分之功。</span>"}]},
      {q:"A patient after a febrile illness cannot sleep, tosses, feels a hot vexation in the chest, and has a red tongue tip. Which classical formula names Gardenia as chief?",
       cq:"熱病後不寐、輾轉、胸中煩熱、舌尖紅。何方以梔子為君？",
       opts:[
        {t:"Zhi Zi Chi Tang 梔子豉湯", c:"梔子豉湯", ok:1,
         note:"<b>Correct.</b> Gardenia with prepared soybean for the lingering vexation in the chest after a fever — 虛煩不得眠.<span class=\"zh\">梔子配淡豆豉，主熱病後虛煩不得眠、心中懊憹。</span>"},
        {t:"Si Wu Tang 四物湯", c:"四物湯", ok:0,
         note:"That is the blood-nourishing base formula, a different axis entirely.<span class=\"zh\">四物湯為補血基礎方，與此無涉。</span>"},
        {t:"Li Zhong Wan 理中丸", c:"理中丸", ok:0,
         note:"That warms a cold middle burner — the opposite direction.<span class=\"zh\">理中丸溫中焦虛寒，方向相反。</span>"}]},
      {q:"Who should not be given Gardenia?",
       cq:"何人不宜服梔子？",
       opts:[
        {t:"Someone with Spleen deficiency and loose stools", c:"脾虛便溏者",
         ok:1, note:"<b>Correct.</b> Bitter and cold herbs injure the middle burner; in a cold, loose, weak digestion they make the problem worse.<span class=\"zh\">苦寒之品傷中。中焦虛寒便溏者，服之更甚。</span>"},
        {t:"Someone with a red tongue and a rapid pulse", c:"舌紅脈數者", ok:0,
         note:"That is a heat picture — which is exactly when it is indicated.<span class=\"zh\">此正熱象，乃其所主。</span>"},
        {t:"Someone with dark scanty urine", c:"小便短赤者", ok:0,
         note:"Also an indication, not a contraindication.<span class=\"zh\">亦其主治，非禁忌。</span>"}]}
    ],
    card:{en:"Drains fire and relieves restlessness; clears damp-heat and moves it out through the urine; cools blood. Bitter and cold — avoided in Spleen deficiency with loose stools.",
          zh:"瀉火除煩、清利濕熱從小便出、涼血。苦寒，脾虛便溏者忌。"} },

  /* ══════ 熟地黃 · the herb that is deliberately heavy ══════ */
  { id:"shudihuang",
    beats:[
      {en:"Something dark and glossy and unexpectedly heavy is set on the counter. It smells of wine and long steaming.<br><b>Prepared Rehmannia:</b> \"Sweet. Slightly warm. Liver and Kidney. I was steamed nine times to become this.\"",
       zh:"一塊黝黑油亮、沉得出乎意料的東西被放上檯面，帶著酒氣與久蒸之味。<br><b>熟地黃：</b>「甘、微溫，歸肝腎。我是九蒸九曬才成這樣的。」"},
      {en:"<b>Prepared Rehmannia:</b> \"Raw, I was cold, and I cooled blood. Cooked, I am warm, and I <i>fill</i>. Blood, yin, essence, marrow — the deep stores that empty slowly and refill slowly.\"",
       zh:"<b>熟地黃：</b>「生時性寒，主涼血；熟則性溫，主<i>填補</i>。血、陰、精、髓——那些慢慢空掉、也只能慢慢補回的東西。」"},
      {en:"<b>Prepared Rehmannia:</b> \"I am the chief in Liu Wei Di Huang Wan and in Si Wu Tang. When a formula needs to reach the Kidney and stay there, it sends me.\"",
       zh:"<b>熟地黃：</b>「六味地黃丸、四物湯，皆以我為君。方欲入腎而留，則遣我去。」"},
      {en:"It settles, and does not apologise.<br><b>Prepared Rehmannia:</b> \"I am cloying. I know. A weak Spleen finds me hard work — fullness, poor appetite, loose stools. So the old formulas never send me alone. Chenpi, or Sharen, walks beside me and keeps me moving.\"",
       zh:"它沉下來，並不致歉。<br><b>熟地黃：</b>「我滋膩，我知道。脾弱者受我不動——脘悶、納差、便溏。故古方從不使我獨行，必以陳皮或砂仁佐之，使補而不滯。」"}
    ],
    qs:[
      {q:"What changes when raw Rehmannia is prepared into Shu Di Huang?",
       cq:"生地黃製為熟地黃，所變者何？",
       opts:[
        {t:"Cold turns to slightly warm; cooling blood turns to nourishing blood and filling essence",
         c:"由寒轉微溫，由涼血轉為養血填精", ok:1,
         note:"<b>Correct.</b> Same plant, opposite job — this pair is a standard exam contrast.<span class=\"zh\">同物異用，生熟功異，考試常辨。</span>"},
        {t:"It becomes an exterior-releasing herb", c:"轉為解表之藥", ok:0,
         note:"Neither form releases the exterior.<span class=\"zh\">生熟俱不解表。</span>"},
        {t:"It becomes stronger at draining damp", c:"利濕之力更強", ok:0,
         note:"The opposite — preparation makes it richer and more cloying, not more draining.<span class=\"zh\">正相反。製後益滋膩，非增其利。</span>"}]},
      {q:"Why is Prepared Rehmannia so often paired with Chenpi or Sharen?",
       cq:"熟地黃何以每配陳皮、砂仁？",
       opts:[
        {t:"Because it is rich and cloying and can stagnate the middle burner",
         c:"因其滋膩，易礙中焦運化", ok:1,
         note:"<b>Correct.</b> 補而不滯 — supplement without clogging. The aromatic moving herb is insurance, not decoration.<span class=\"zh\">補而不滯。佐以芳香行氣之品，非為妝點。</span>"},
        {t:"Because it is toxic without them", c:"因其有毒，非此不解", ok:0,
         note:"It is not toxic. The pairing is about digestion, not safety from poisoning.<span class=\"zh\">熟地無毒，配伍為運化計，非解毒。</span>"},
        {t:"Because they make it taste acceptable", c:"為改其味", ok:0,
         note:"Taste is not the reason a classical pairing survives a thousand years.<span class=\"zh\">古方配伍傳世千年，不為口味。</span>"}]},
      {q:"In which patient is Prepared Rehmannia used with caution?",
       cq:"何等病人用熟地黃當慎？",
       opts:[
        {t:"Spleen weak with damp — epigastric fullness, poor appetite, loose stools",
         c:"脾虛濕滯：脘悶、納差、便溏", ok:1,
         note:"<b>Correct.</b> The middle burner has to process it. If it cannot, a tonic becomes a burden.<span class=\"zh\">補藥須賴中焦運化。中焦不運，補反為累。</span>"},
        {t:"Anyone with a pale tongue", c:"凡舌淡者", ok:0,
         note:"A pale tongue often points toward blood deficiency — an indication.<span class=\"zh\">舌淡多屬血虛，正其所主。</span>"},
        {t:"Anyone with low back soreness", c:"凡腰痠者", ok:0,
         note:"Also frequently an indication, when it comes from Kidney depletion.<span class=\"zh\">腰痠屬腎虛者，亦其所主。</span>"}]}
    ],
    card:{en:"Nourishes blood and enriches yin; supplements essence and fills marrow. Rich and cloying — paired with a moving herb, and used cautiously in Spleen weakness with damp.",
          zh:"養血滋陰、補精填髓。性滋膩，宜配行氣之品；脾虛濕滯者慎用。"} },

  /* ══════ 麥門冬 · moisture without heaviness ══════ */
  { id:"maidong",
    beats:[
      {en:"A pale translucent tuber, plump as a small bead, rests on the cloth. It has the look of something that is holding water.<br><b>Ophiopogon:</b> \"Sweet, slightly bitter, slightly cold. Heart, Lung, Stomach.\"",
       zh:"一枚淡而半透明的塊根，飽滿如小珠，臥於布上，像含著水。<br><b>麥門冬：</b>「甘、微苦、微寒，歸心肺胃。」"},
      {en:"<b>Ophiopogon:</b> \"Three dry places, three jobs. A Lung that is dry coughs without producing anything, or brings up a little sticky phlegm it cannot part with. A Stomach that is dry after a fever leaves the mouth parched and the tongue bare.\"",
       zh:"<b>麥門冬：</b>「三處乾，三事做。肺燥則乾咳無痰，或痰少而黏難出；胃燥於熱病之後，則口乾舌光少苔。」"},
      {en:"<b>Ophiopogon:</b> \"And a Heart that is dry cannot rest. Thin, restless, four-in-the-morning sleeplessness — not the racing kind, the parched kind. I moisten it and the restlessness settles.\"",
       zh:"<b>麥門冬：</b>「心燥則不寧。那種淺薄、四更即醒的煩，不是躁動，是乾。潤之，則煩自定。」"},
      {en:"It draws back a little from the door, where the wind comes in.<br><b>Ophiopogon:</b> \"I moisten. So keep me away from a cough that is wet — wind-cold with clear phlegm, or damp-phlegm with a thick greasy coat. Adding water to those is not kindness.\"",
       zh:"它從有風的門邊退開一些。<br><b>麥門冬：</b>「我主潤。故濕痰之咳勿用我——風寒痰清，或痰濕苔厚膩者，加水非仁也。」"}
    ],
    qs:[
      {q:"Which cough is Ophiopogon for?",
       cq:"麥門冬主何種咳嗽？",
       opts:[
        {t:"A dry cough with little sticky phlegm, from Lung yin depletion",
         c:"肺陰不足之乾咳，痰少而黏", ok:1,
         note:"<b>Correct.</b> Dry mouth, dry throat, a red tongue with scant coat — moisten, do not disperse.<span class=\"zh\">口乾咽燥、舌紅少苔。當潤而不當散。</span>"},
        {t:"A loud wet cough with copious clear phlegm", c:"痰多清稀之咳", ok:0,
         note:"That is damp or cold. Moistening it makes it worse.<span class=\"zh\">此屬寒濕，潤之更甚。</span>"},
        {t:"A new cough with chills and no sweating", c:"新咳惡寒無汗", ok:0,
         note:"That is an exterior wind-cold pattern, which needs releasing, not moistening.<span class=\"zh\">此表寒證，當解表而非滋潤。</span>"}]},
      {q:"Ophiopogon enters the Heart as well as the Lung and Stomach. What does it do there?",
       cq:"麥門冬兼入心經，其功為何？",
       opts:[
        {t:"Clears Heart heat and settles the restlessness of depleted yin",
         c:"清心除煩，安陰虛之不寧", ok:1,
         note:"<b>Correct.</b> It appears in Sheng Mai San and in Tian Wang Bu Xin Dan for exactly this.<span class=\"zh\">生脈散、天王補心丹皆用之，正取此意。</span>"},
        {t:"Strongly sedates the spirit with heavy mineral weight",
         c:"重鎮安神", ok:0,
         note:"That is the job of heavy minerals such as Long Gu or Ci Shi. Ophiopogon works by moistening.<span class=\"zh\">重鎮乃龍骨、磁石之屬。麥冬以潤取效。</span>"},
        {t:"Warms Heart yang", c:"溫通心陽", ok:0,
         note:"It is slightly cold. Warming Heart yang is a different family of herbs.<span class=\"zh\">麥冬微寒，溫心陽者非其類。</span>"}]},
      {q:"When is Ophiopogon inappropriate?",
       cq:"何時不宜用麥門冬？",
       opts:[
        {t:"In cough from wind-cold or from damp-phlegm", c:"風寒咳嗽或痰濕壅盛",
         ok:1, note:"<b>Correct.</b> A moistening, slightly cold herb in a wet or cold pattern deepens the problem.<span class=\"zh\">潤而微寒之品，投於寒濕，反助其邪。</span>"},
        {t:"In dry mouth after a fever", c:"熱病後口乾", ok:0,
         note:"That is one of its clearest indications.<span class=\"zh\">此其正治。</span>"},
        {t:"In a red tongue with scant coating", c:"舌紅少苔", ok:0,
         note:"Also an indication — that tongue is asking for fluids.<span class=\"zh\">亦其所主。此舌正求津液。</span>"}]}
    ],
    card:{en:"Moistens the Lung, benefits the Stomach and generates fluids, clears Heart heat and settles restlessness. Not for cough from wind-cold or damp-phlegm.",
          zh:"潤肺養陰、益胃生津、清心除煩。風寒或痰濕咳嗽不宜。"} },

  /* ══════ 肉桂 · fire returned to its own hearth ══════ */
  { id:"rougui",
    beats:[
      {en:"A curl of thick bark, oily and dark, gives off a warmth you can feel before you touch it.<br><b>Cinnamon Bark:</b> \"Acrid, sweet, and very hot. Kidney, Spleen, Heart, Liver.\"",
       zh:"一卷厚實油亮的樹皮，未觸手已覺其熱。<br><b>肉桂：</b>「辛、甘、大熱，歸腎脾心肝。」"},
      {en:"<b>Cinnamon Bark:</b> \"First, know which part of the tree I am. Guizhi is the twig — thin, outward, it releases the exterior. I am the bark of the trunk — thick, inward, downward. I warm the interior. Students lose marks on this every year.\"",
       zh:"<b>肉桂：</b>「先辨我是樹之何處。桂枝為枝，細而外達，主解表；我為幹皮，厚而內沉，主溫裡。此處年年有人失分。」"},
      {en:"<b>Cinnamon Bark:</b> \"I supplement the fire of the gate of vitality. Cold limbs that will not warm, a low back and knees that ache and give way, a pulse that is deep and slow. Not tiredness — coldness from the root.\"",
       zh:"<b>肉桂：</b>「我補命門之火。手足冷而不溫、腰膝痠軟無力、脈沉而遲。此非倦，乃根本之寒。」"},
      {en:"<b>Cinnamon Bark:</b> \"And one strange trick: when the root is so cold that fire is driven upward — a flushed face and a cold body at once — a small dose of me leads that fire back down to where it belongs. 引火歸元. Used wrongly, in real yin deficiency with heat, I am simply pouring oil. Not in pregnancy, and not where there is bleeding.\"",
       zh:"<b>肉桂：</b>「另有一奇：下元虛冷而虛陽上浮者——面赤而身反冷——少用我，可引此火歸於本位，是謂引火歸元。若誤用於真陰虛火旺，則如以油澆火。孕婦忌，出血者忌。」"}
    ],
    qs:[
      {q:"What is the difference between Rou Gui and Gui Zhi?",
       cq:"肉桂與桂枝有何分別？",
       opts:[
        {t:"Rou Gui is the trunk bark and warms the interior; Gui Zhi is the twig and releases the exterior",
         c:"肉桂為幹皮，溫裡；桂枝為嫩枝，解表", ok:1,
         note:"<b>Correct.</b> Same tree, different part, different direction — thick and downward versus thin and outward.<span class=\"zh\">同樹異部，趨向亦異：厚而下沉，細而外達。</span>"},
        {t:"They are the same herb under two names", c:"一物二名", ok:0,
         note:"They are not interchangeable, and substituting one for the other changes what a formula does.<span class=\"zh\">二者不可互代，易之則方義全變。</span>"},
        {t:"Rou Gui is the leaf and Gui Zhi is the root", c:"肉桂為葉，桂枝為根", ok:0,
         note:"Neither. Bark of the trunk, and young twig.<span class=\"zh\">皆非。一為幹皮，一為嫩枝。</span>"}]},
      {q:"A man has a flushed face but a cold body, cold feet, a deep weak pulse at the third position, and worsens with cooling herbs. What is happening?",
       cq:"面赤而身冷、足冷、尺脈沉弱，服寒藥反劇。此何故？",
       opts:[
        {t:"Deficient yang floating upward from a cold root — treat by leading fire back to its source",
         c:"下元虛冷，虛陽上浮，當引火歸元", ok:1,
         note:"<b>Correct.</b> True cold with a false heat sign 真寒假熱. The face misleads; the feet and the deep pulse tell the truth.<span class=\"zh\">真寒假熱。面赤者假，足冷尺沉者真。</span>"},
        {t:"Excess fire in the Stomach channel", c:"胃經實火", ok:0,
         note:"Excess fire does not come with cold feet and a deep weak pulse, and it would not worsen with cooling herbs.<span class=\"zh\">實火不當見足冷、尺脈沉弱，亦不當服寒藥而劇。</span>"},
        {t:"Wind-heat in the exterior", c:"風熱表證", ok:0,
         note:"An exterior pattern is new, floating and short-lived. This is a root pattern.<span class=\"zh\">表證新起、脈浮而暫。此屬本虛。</span>"}]},
      {q:"Who must not take Cinnamon Bark?",
       cq:"何人忌服肉桂？",
       opts:[
        {t:"Someone pregnant, someone bleeding, and anyone with yin deficiency and heat",
         c:"孕婦、出血者、陰虛火旺者", ok:1,
         note:"<b>Correct.</b> Very hot and moving — it stirs blood, and it feeds a fire that is already burning in an empty vessel.<span class=\"zh\">大熱而行，動血助火。虛熱者益燥，孕者當禁。</span>"},
        {t:"Anyone who feels cold", c:"凡畏寒者", ok:0,
         note:"That is the pattern it is for.<span class=\"zh\">此正其所主。</span>"},
        {t:"Anyone with a deep slow pulse", c:"凡脈沉遲者", ok:0,
         note:"Also an indication — deep and slow is a cold pulse.<span class=\"zh\">沉遲為寒脈，亦其所主。</span>"}]}
    ],
    card:{en:"Supplements the fire of the gate of vitality, warms the channels and stops cold pain, and leads floating fire back to its source. The bark, not the twig. Contraindicated in pregnancy, in bleeding, and in yin deficiency with heat.",
          zh:"補火助陽、溫經散寒止痛、引火歸元。是皮非枝。孕婦、出血、陰虛火旺者忌。"} }


,

  /* ══════ 竹茹 · the cool green shaving that quiets a rattling mind ══════ */
  { id:"zhuru",
    beats:[
      {en:"A curl of pale green shaving unrolls itself on the counter, light as a ribbon.<br><b>Bamboo Shavings:</b> \"Sweet, slightly cold. Lung, Stomach, Gallbladder. I am the inner skin of the bamboo, scraped off the culm.\"",
       zh:"一卷淡青色的刨屑在檯上舒展開來，輕如絲帶。<br><b>竹茹：</b>「甘、微寒，歸肺胃膽。我是竹之中皮，自竿上刮下來的。」"},
      {en:"<b>Bamboo Shavings:</b> \"I clear heat and I transform phlegm — but the pairing is the point. Phlegm alone is heavy and dull. Heat alone is loud and dry. Phlegm <i>with</i> heat in it is sticky and agitated at the same time, and it goes upward and disturbs the spirit.\"",
       zh:"<b>竹茹：</b>「我清熱、化痰——而所貴在其合。單痰者重濁而昏；單熱者躁而燥。痰中有熱者，既黏且擾，其性上逆而動神。」"},
      {en:"<b>Bamboo Shavings:</b> \"That patient cannot sleep, startles at a door closing, tastes bitter in the morning, and has a greasy yellow coat. Wen Dan Tang is where they send for me.\"",
       zh:"<b>竹茹：</b>「其人不寐，聞門聲即驚，晨起口苦，苔黃而膩。溫膽湯者，召我之方也。」"},
      {en:"<b>Bamboo Shavings:</b> \"I also settle a stomach that keeps sending things back up — but only when the reason is heat. A cold stomach vomiting clear fluid does not want me; give it ginger and leave me on the shelf.\"",
       zh:"<b>竹茹：</b>「我亦能降胃之上逆——然惟其因於熱者。胃寒而嘔清水者不須我；與之生薑，而置我於架上可也。」"}
    ],
    qs:[
      {q:"What is Bamboo Shavings' core action?",
       cq:"竹茹之核心功效為何？",
       opts:[
        {t:"Clears heat and transforms phlegm, and settles restlessness", c:"清熱化痰、除煩",
         ok:1, note:"<b>Correct.</b> Both halves at once — which is why it suits phlegm-heat rather than phlegm alone or heat alone.<span class=\"zh\">清熱與化痰並行，故所主為痰熱，而非單痰或單熱。</span>"},
        {t:"Warms the middle and disperses cold", c:"溫中散寒",
         ok:0, note:"That is the opposite direction. Bamboo Shavings is cool.<span class=\"zh\">其向適反。竹茹性涼。</span>"},
        {t:"Supplements qi and raises the yang", c:"補氣升陽",
         ok:0, note:"It clears and descends; it does not fill and lift.<span class=\"zh\">其功在清在降，不在補在升。</span>"}]},
      {q:"A man sleeps badly, startles easily, tastes bitter on waking, and has a red tongue with a greasy yellow coat and a slippery rapid pulse. Which reading fits?",
       cq:"其人寐差、易驚、晨起口苦，舌紅苔黃膩，脈滑數。當作何解？",
       opts:[
        {t:"Phlegm-fire harassing the Heart 痰火擾心", c:"痰火擾心", ok:1,
         note:"<b>Correct.</b> Greasy coat says phlegm, yellow and rapid say heat, and the spirit symptoms say where the two of them have gone.<span class=\"zh\">苔膩主痰，苔黃脈數主熱，而神志之證言其所擾之處。</span>"},
        {t:"Heart blood deficiency 心血虛", c:"心血虛", ok:0,
         note:"That patient is pale with a thin pulse and a tongue with no thick coat at all — the sleeplessness of an empty vessel, not a rattling one.<span class=\"zh\">彼者面白、脈細、苔不厚膩。其不寐由於空，非由於擾。</span>"},
        {t:"Kidney yang deficiency 腎陽虛", c:"腎陽虛", ok:0,
         note:"Cold limbs, a pale wet tongue and a deep slow pulse. Nothing here is cold.<span class=\"zh\">彼者肢冷、舌淡滑、脈沉遲。本案無一寒候。</span>"}]},
      {q:"When should Bamboo Shavings not be used?",
       cq:"何時不宜用竹茹？",
       opts:[
        {t:"In vomiting or nausea that comes from cold in the stomach", c:"胃寒作嘔者",
         ok:1, note:"<b>Correct.</b> It stops vomiting by cooling and descending, so in a cold stomach it deepens the cold. Ginger is the herb for that patient.<span class=\"zh\">其止嘔以清以降，投於胃寒則益其寒。彼當與生薑。</span>"},
        {t:"In a bitter mouth with a greasy yellow coat", c:"口苦苔黃膩者", ok:0,
         note:"That is exactly what it is for.<span class=\"zh\">此正其所主。</span>"},
        {t:"In anyone who cannot sleep", c:"凡不寐者", ok:0,
         note:"Sleeplessness has many causes; this herb is for the phlegm-heat kind. Ask what the tongue coat looks like before deciding.<span class=\"zh\">不寐之因非一，此藥所主為痰熱者。當先察其苔而後定。</span>"}]}
    ],
    card:{en:"Clears heat, transforms phlegm and settles restlessness; descends rebellious Stomach qi to stop vomiting. Not for vomiting from cold in the stomach.",
          zh:"清熱化痰除煩、降逆止嘔。胃寒作嘔者不宜。"} }


,

  /* ══════ 柴胡 · one root, three jobs, three famous formulas ══════ */
  { id:"chaihu",
    beats:[
      {en:"A thin, tough, pale root stands up on the counter and waits, like someone who has been asked the same question in three different rooms.<br><b>Bupleurum:</b> \"Bitter, acrid, slightly cold. Liver, Gallbladder, Triple Burner, Pericardium.\"",
       zh:"一條瘦硬色淡的根立於檯上而待，像個在三個房間裡被問過同一句話的人。<br><b>柴胡：</b>「苦、辛、微寒，歸肝膽三焦心包。」"},
      {en:"<b>Bupleurum:</b> \"Ask what I do and you will get three answers, and all three are true. First: I harmonise Shaoyang. Alternating chills and fever, bitter mouth, dry throat, fullness under the ribs — that is Xiao Chai Hu Tang, and I am its chief.\"",
       zh:"<b>柴胡：</b>「問我何功，得三答，而三者俱真。其一：和解少陽。寒熱往來、口苦、咽乾、胸脅苦滿——小柴胡湯是也，我為其君。」"},
      {en:"<b>Bupleurum:</b> \"Second: I course the Liver and loosen constraint. Rib-side fullness, sighing, a chest that will not open, a wiry pulse. Xiao Yao San.\"",
       zh:"<b>柴胡：</b>「其二：疏肝解鬱。脅脹、太息、胸中不開、脈弦。逍遙散是也。」"},
      {en:"<b>Bupleurum:</b> \"Third, and the one students forget: I <i>lift</i>. Where things have sunk — a middle that has dropped, a prolapse, a diarrhoea that has run for years — I rise, and Sheng Ma rises with me. But note the arrangement in Buzhong Yiqi Tang: Astragalus and Ginseng do the filling, and we two only give the direction. Lifting an empty sack lifts nothing.\"",
       zh:"<b>柴胡：</b>「其三，學者每忘之：我能<i>升</i>。凡有下陷者——中氣下墜、臟器脫垂、久瀉不止——我升，升麻與我同升。然當察補中益氣湯之布置：黃耆、人參主其填，我二者惟予其向耳。舉一空囊，無所舉也。」"},
      {en:"It leans back a fraction.<br><b>Bupleurum:</b> \"And because I rise and I am acrid — keep me away from yang that is already rising. A red face, a throbbing head, a wiry forceful pulse: I would only push it higher.\"",
       zh:"它稍稍後傾。<br><b>柴胡：</b>「且我性升而辛——陽已上亢者，勿近我。面赤、頭脹痛、脈弦有力者，我惟益其升耳。」"}
    ],
    qs:[
      {q:"Which formula uses Bupleurum as its chief herb for alternating chills and fever?",
       cq:"寒熱往來，何方以柴胡為君？",
       opts:[
        {t:"Xiao Chai Hu Tang 小柴胡湯", c:"小柴胡湯", ok:1,
         note:"<b>Correct.</b> The Shaoyang formula: alternating chills and fever, bitter mouth, dry throat, dizzy vision, fullness under the ribs, no appetite, nausea, a wiry pulse.<span class=\"zh\">少陽之方：寒熱往來、口苦、咽乾、目眩、胸脅苦滿、默默不欲飲食、心煩喜嘔、脈弦。</span>"},
        {t:"Si Wu Tang 四物湯", c:"四物湯", ok:0,
         note:"The blood-nourishing base formula — no Bupleurum in it at all.<span class=\"zh\">補血之基礎方，方中無柴胡。</span>"},
        {t:"Liu Wei Di Huang Wan 六味地黃丸", c:"六味地黃丸", ok:0,
         note:"Liver and Kidney yin — the opposite kind of formula, and Bupleurum would be wrong in it.<span class=\"zh\">滋補肝腎之陰，其方之性與此相反，柴胡不當在其中。</span>"}]},
      {q:"In Buzhong Yiqi Tang, what is Bupleurum actually doing?",
       cq:"補中益氣湯中，柴胡所司為何？",
       opts:[
        {t:"Raising sunken yang qi, alongside Sheng Ma — while Astragalus and Ginseng do the supplementing",
         c:"與升麻同升下陷之陽氣；其補則在黃耆、人參", ok:1,
         note:"<b>Correct, and the division of labour is the lesson.</b> Lifting and filling are two different jobs. A formula that only lifts has nothing to lift; a formula that only fills leaves the qi where it fell.<span class=\"zh\">升與補，二事也。徒升則無所舉，徒補則氣仍在下。此方之布置，正在其分工。</span>"},
        {t:"Harmonising Shaoyang", c:"和解少陽", ok:0,
         note:"That is its job in a different formula. The same herb serves different roles depending on what it is put beside.<span class=\"zh\">此其在他方之職。一藥所任，隨其所配而異。</span>"},
        {t:"Clearing heat from the blood", c:"清熱涼血", ok:0,
         note:"Not one of its functions.<span class=\"zh\">非其功。</span>"}]},
      {q:"When should Bupleurum be used with caution?",
       cq:"何時當慎用柴胡？",
       opts:[
        {t:"Where Liver yang is already rising, or yin is depleted with heat", c:"肝陽上亢，或陰虛火旺者",
         ok:1, note:"<b>Correct.</b> It is acrid and it ascends. In a patient whose yang is already pushing upward — red face, throbbing headache, wiry forceful pulse — it adds to exactly the wrong thing.<span class=\"zh\">其性辛而升。陽方上迫者——面赤、頭脹痛、脈弦有力——投之則益其所不當益。</span>"},
        {t:"Where there is rib-side fullness and sighing", c:"脅脹太息者", ok:0,
         note:"That is one of its clearest indications.<span class=\"zh\">此正其主治。</span>"},
        {t:"Where chills and fever alternate", c:"寒熱往來者", ok:0,
         note:"Also an indication — this is the Shaoyang pattern it is famous for.<span class=\"zh\">亦其主治：少陽證，柴胡之所以名者。</span>"}]}
    ],
    card:{en:"Harmonises Shaoyang and resolves alternating chills and fever; courses the Liver and relieves constraint; raises sunken yang qi. Acrid and ascending — cautious where Liver yang rises or yin is depleted with heat.",
          zh:"和解少陽、疏肝解鬱、升舉陽氣。辛升之品，肝陽上亢、陰虛火旺者慎用。"} }


];
