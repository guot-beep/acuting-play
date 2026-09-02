/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/sorts.js
   Sorting drills — one engine (sort.html), many subjects.

   Every set is: some buckets, and a pile of items that belong in
   exactly one of them. Adding a new drill is a data edit.

   Sources: Ting's own FOM-04 Five Element Correspondence Chart and
   FOM/DX master notes. Her flagged confusions (涎 vs 唾, 毛 vs 髮,
   悲 vs 思) are deliberately included as near-miss pairs.
   ═══════════════════════════════════════════════════════════════ */
window.AG_SORTS = {

/* ─────────────────────────── FOUNDATIONS ─────────────────────── */

  five_elements: {
    id:"five_elements", axis:"theory", school:"theory",
    title:{en:"Five Element Array", zh:"五行陣"},
    blurb:{en:"Every organ, tissue, fluid, colour, taste and emotion belongs to one of five families. Sort the world.",
           zh:"臟腑、五體、五液、五色、五味、五志，各歸一行。將天地萬物歸位。"},
    intro:{en:"\"This chart is the floor everything else stands on,\" says Shu Chi. \"Learn it once and half of diagnosis becomes reading.\"",
           zh:"「這張表是一切的地基。」書癡說，「背熟一次，往後半部診斷就只是閱讀。」"},
    buckets:[
      {k:"wood",  en:"Wood",  zh:"木", sub:"Liver 肝",   c:"#566F44"},
      {k:"fire",  en:"Fire",  zh:"火", sub:"Heart 心",   c:"#A6291D"},
      {k:"earth", en:"Earth", zh:"土", sub:"Spleen 脾",  c:"#8C7031"},
      {k:"metal", en:"Metal", zh:"金", sub:"Lung 肺",    c:"#6C7268"},
      {k:"water", en:"Water", zh:"水", sub:"Kidney 腎",  c:"#4A5560"}
    ],
    items:[
      /* 開竅 orifices — her notes mark these a giveaway question */
      {en:"Opens into the eyes",  zh:"開竅於目", a:"wood",  why:{en:"Liver blood nourishes vision.", zh:"肝血養目。"}},
      {en:"Opens into the tongue",zh:"開竅於舌", a:"fire",  why:{en:"Heart opens to the tongue — speech and tongue-tip colour.", zh:"心開竅於舌，主言，舌尖候心。"}},
      {en:"Opens into the mouth", zh:"開竅於口", a:"earth", why:{en:"Spleen opens to the mouth and manifests on the lips.", zh:"脾開竅於口，其華在唇。"}},
      {en:"Opens into the nose",  zh:"開竅於鼻", a:"metal", why:{en:"Lung governs qi and the exterior; the nose is its gate.", zh:"肺主氣司呼吸，鼻為肺竅。"}},
      {en:"Opens into the ears",  zh:"開竅於耳", a:"water", why:{en:"Kidney opens into the ears and the two lower yin.", zh:"腎開竅於耳及二陰。"}},
      /* 五液 — the mnemonic 汗淚涎涕唾 = 心肝脾肺腎 */
      {en:"Tears",            zh:"淚", a:"wood",  why:{en:"Tears are the fluid of the Liver.", zh:"淚為肝之液。"}},
      {en:"Sweat",            zh:"汗", a:"fire",  why:{en:"\"Sweat is the fluid of the Heart\" — heavy sweating can injure Heart yang.", zh:"汗為心之液；大汗可傷心陽。"}},
      {en:"Thin saliva (drool)", zh:"涎", a:"earth", why:{en:"<b>Thin</b> saliva is Spleen. Thick spittle 唾 is Kidney — the classic confusion.", zh:"涎稀屬脾；唾稠屬腎。此為易混之處。"}},
      {en:"Nasal mucus",      zh:"涕", a:"metal", why:{en:"Nasal mucus is the fluid of the Lung.", zh:"涕為肺之液。"}},
      {en:"Thick spittle",    zh:"唾", a:"water", why:{en:"<b>Thick</b> spittle is Kidney. Compare thin drool 涎, which is Spleen.", zh:"唾稠屬腎；涎稀屬脾。"}},
      /* 五體 tissues */
      {en:"Governs the sinews", zh:"主筋",   a:"wood",  why:{en:"Liver rules the sinews and manifests in the nails.", zh:"肝主筋，其華在爪。"}},
      {en:"Governs the vessels",zh:"主脈",   a:"fire",  why:{en:"Heart governs blood and the vessels; it shows on the face.", zh:"心主血脈，其華在面。"}},
      {en:"Governs the flesh and four limbs", zh:"主肌肉四肢", a:"earth", why:{en:"Weak limbs point to Spleen qi deficiency.", zh:"四肢無力，多屬脾氣虛。"}},
      {en:"Governs the skin and body hair", zh:"主皮毛", a:"metal", why:{en:"Lung rules the exterior and the defensive layer. Note: <b>body</b> hair 毛 is Lung; <b>head</b> hair 髮 is Kidney.", zh:"肺主皮毛、主衛外。毛屬肺，髮屬腎。"}},
      {en:"Governs the bones",  zh:"主骨",   a:"water", why:{en:"Kidney stores essence, rules bone and marrow, and manifests in head hair.", zh:"腎藏精，主骨生髓，其華在髮。"}},
      /* 五志 emotions — grief vs pensiveness is her flagged pair */
      {en:"Anger",       zh:"怒", a:"wood",  why:{en:"Anger makes Liver qi rise.", zh:"怒則氣上。"}},
      {en:"Joy",         zh:"喜", a:"fire",  why:{en:"Over-joy scatters Heart qi.", zh:"喜則氣緩，過喜傷心。"}},
      {en:"Pensiveness / overthinking", zh:"思", a:"earth", why:{en:"Overthinking knots Spleen qi. Do not confuse with grief 悲, which is Lung.", zh:"思則氣結，傷脾。勿與屬肺之悲混淆。"}},
      {en:"Grief",       zh:"悲", a:"metal", why:{en:"Grief depletes Lung qi. Compare pensiveness 思, which is Spleen.", zh:"悲則氣消，傷肺。對比屬脾之思。"}},
      {en:"Fear",        zh:"恐", a:"water", why:{en:"Fear makes qi descend.", zh:"恐則氣下。"}},
      /* 五味 tastes */
      {en:"Sour",    zh:"酸", a:"wood",  why:{en:"Sour enters the Liver; it astringes and gathers.", zh:"酸入肝，能收能澀。"}},
      {en:"Bitter",  zh:"苦", a:"fire",  why:{en:"Bitter enters the Heart; it drains fire and dries damp.", zh:"苦入心，能瀉能燥。"}},
      {en:"Sweet",   zh:"甘", a:"earth", why:{en:"Sweet enters the Spleen; it tonifies and harmonises.", zh:"甘入脾，能補能和能緩。"}},
      {en:"Pungent", zh:"辛", a:"metal", why:{en:"Pungent enters the Lung; it disperses and moves.", zh:"辛入肺，能散能行。"}},
      {en:"Salty",   zh:"鹹", a:"water", why:{en:"Salty enters the Kidney; it softens hardness and descends.", zh:"鹹入腎，能軟堅能下。"}},
      /* 五色 · 五季 · 五氣 */
      {en:"Green-blue", zh:"青", a:"wood",  why:{en:"A greenish complexion suggests Liver, cold, pain or stasis.", zh:"面青多主肝病、寒證、痛證、瘀血。"}},
      {en:"Red",        zh:"赤", a:"fire",  why:{en:"A red complexion suggests heat.", zh:"面赤主熱。"}},
      {en:"Yellow",     zh:"黃", a:"earth", why:{en:"A sallow yellow complexion suggests Spleen deficiency or damp.", zh:"面黃主脾虛、主濕。"}},
      {en:"White",      zh:"白", a:"metal", why:{en:"A pale white complexion suggests deficiency, cold or blood loss.", zh:"面白主虛、主寒、主失血。"}},
      {en:"Black",      zh:"黑", a:"water", why:{en:"A dark complexion suggests Kidney deficiency, cold, water or stasis.", zh:"面黑主腎虛、寒證、水飲、瘀血。"}},
      {en:"Spring · Wind",       zh:"春 · 風", a:"wood",  why:{en:"Wind is the qi of spring; it is Wood's climate.", zh:"風為春之氣，屬木。"}},
      {en:"Summer · Heat",       zh:"夏 · 暑熱", a:"fire", why:{en:"Heat is the climate of summer.", zh:"暑熱為夏之氣，屬火。"}},
      {en:"Late Summer · Damp",  zh:"長夏 · 濕", a:"earth", why:{en:"The Spleen hates damp — and damp is the climate of late summer.", zh:"脾惡濕；濕為長夏之氣。"}},
      {en:"Autumn · Dryness",    zh:"秋 · 燥", a:"metal", why:{en:"Dryness injures Lung yin.", zh:"燥易傷肺陰。"}},
      {en:"Winter · Cold",       zh:"冬 · 寒", a:"water", why:{en:"Winter is storing; cold is its climate.", zh:"冬主藏，寒為冬之氣。"}}
    ]
  },

  zangfu_match: {
    id:"zangfu_match", axis:"theory", school:"theory",
    title:{en:"What Each Organ Governs", zh:"臟腑所主"},
    blurb:{en:"Not what an organ is — what it does. Sort each function to its organ.",
           zh:"不問臟腑為何物，只問其所主為何。將功能歸於其臟。"},
    intro:{en:"\"A student who knows where the Spleen is has learned anatomy,\" says Shu Chi. \"A physician knows what it does.\"",
           zh:"「知道脾在哪裡的，學的是解剖。」書癡說，「知道脾在做什麼的，才是醫者。」"},
    buckets:[
      {k:"heart",  en:"Heart",  zh:"心", sub:"Monarch 君主",     c:"#A6291D"},
      {k:"spleen", en:"Spleen", zh:"脾", sub:"Acquired Root 後天之本", c:"#8C7031"},
      {k:"lung",   en:"Lung",   zh:"肺", sub:"Canopy 華蓋",      c:"#6C7268"},
      {k:"kidney", en:"Kidney", zh:"腎", sub:"Congenital Root 先天之本", c:"#4A5560"},
      {k:"liver",  en:"Liver",  zh:"肝", sub:"General 將軍",     c:"#566F44"}
    ],
    items:[
      {en:"Governs blood and houses the spirit", zh:"主血脈、藏神", a:"heart", why:{en:"Palpitations, insomnia and dream-disturbed sleep follow from this.", zh:"故心病見心悸、失眠、多夢。"}},
      {en:"Governs transformation and transport", zh:"主運化", a:"spleen", why:{en:"Poor appetite, loose stools and fatigue after eating follow from this.", zh:"故脾病見納少、便溏、食後倦怠。"}},
      {en:"Governs qi and respiration", zh:"主氣、司呼吸", a:"lung", why:{en:"The Lung also governs the exterior and the defensive layer.", zh:"肺並主宣發肅降、外合皮毛、主衛外。"}},
      {en:"Stores essence and governs growth and reproduction", zh:"藏精、主生長發育與生殖", a:"kidney", why:{en:"The Kidney is the only organ that can be essence-deficient.", zh:"腎為唯一可見精虛之臟。"}},
      {en:"Governs the free flow of qi", zh:"主疏泄", a:"liver", why:{en:"When it fails: rib distension, sighing, irritability, irregular menses.", zh:"失疏泄則見脅脹、太息、煩躁、月經不調。"}},
      {en:"Holds the blood inside the vessels", zh:"主統血", a:"spleen", why:{en:"Spleen failing to govern blood gives chronic pale bleeding.", zh:"脾不統血則見慢性出血、血色淡。"}},
      {en:"Stores the blood", zh:"藏血", a:"liver", why:{en:"Storing is Liver; holding it in the vessels is Spleen. A classic exam pair.", zh:"肝藏血、脾統血。此為考試常見對比。"}},
      {en:"Governs the water passages, upper source of water", zh:"通調水道、水之上源", a:"lung", why:{en:"The Lung disperses and descends fluids to the Kidney and Bladder.", zh:"肺宣發肅降，通調水道，下輸膀胱。"}},
      {en:"Governs water and grasps qi", zh:"主水、主納氣", a:"kidney", why:{en:"Failure to grasp qi gives shallow breathing — much out, little in.", zh:"腎不納氣則呼多吸少。"}},
      {en:"Raises the clear, holds the organs in place", zh:"主升清、升舉內臟", a:"spleen", why:{en:"Sinking Spleen qi gives prolapse — of stomach, uterus or rectum.", zh:"脾氣下陷則見胃下垂、子宮脫垂、脫肛。"}},
      {en:"Its lustre shows on the face", zh:"其華在面", a:"heart", why:{en:"A red, lustrous face means Heart blood is ample.", zh:"面色紅潤有光，心血充足。"}},
      {en:"Its lustre shows in the nails", zh:"其華在爪", a:"liver", why:{en:"Brittle, ridged nails suggest Liver blood deficiency.", zh:"爪甲枯脆，多屬肝血不足。"}},
      {en:"Its lustre shows in the head hair", zh:"其華在髮", a:"kidney", why:{en:"Premature grey or hair loss points to Kidney essence.", zh:"早白、脫髮，多責之腎精。"}},
      {en:"Its lustre shows on the lips", zh:"其華在唇", a:"spleen", why:{en:"Pale lips suggest Spleen blood is weak.", zh:"唇色淡白，脾血不足。"}},
      {en:"Its lustre shows in the body hair", zh:"其華在毛", a:"lung", why:{en:"<b>Body</b> hair is Lung; <b>head</b> hair is Kidney.", zh:"毛屬肺，髮屬腎。"}}
    ]
  },

/* ─────────────────────────── HERBS ───────────────────────────── */

  herb_nature: {
    id:"herb_nature", axis:"herb", school:"herb",
    title:{en:"Warm or Cool?", zh:"藥性寒溫"},
    blurb:{en:"Before anything else, an herb has a temperature. Sort each one by its nature.",
           zh:"論藥先論性。將每味藥依其寒熱溫涼歸位。"},
    intro:{en:"\"Function comes later,\" says Yao Weng. \"First tell me whether it warms or cools. Get that wrong and everything after it is wrong.\"",
           zh:"「功效以後再說。」藥翁道，「先告訴我它是溫的還是涼的。這一步錯了，後面全錯。」"},
    buckets:[
      {k:"warm", en:"Warm / Hot", zh:"溫熱", sub:"warms, moves, disperses cold", c:"#A2523A"},
      {k:"cool", en:"Cool / Cold", zh:"寒涼", sub:"clears, drains, cools heat", c:"#4B5C71"},
      {k:"neutral", en:"Neutral", zh:"平", sub:"neither — safe for long use", c:"#8E9E82"}
    ],
    items:[
      {en:"Sheng Jiang · Fresh Ginger", zh:"生薑", a:"warm", why:{en:"Acrid and slightly warm — releases the exterior and disperses cold.", zh:"辛、微溫。發散風寒、溫中止嘔。"}},
      {en:"Gan Jiang · Dried Ginger",   zh:"乾薑", a:"warm", why:{en:"Acrid and <b>hot</b> — warms the interior. Drier and stronger than fresh.", zh:"辛、熱。溫中散寒，較生薑更燥更烈。"}},
      {en:"Rou Gui · Cinnamon Bark",    zh:"肉桂", a:"warm", why:{en:"Acrid, sweet and hot — warms the Kidney and returns fire to its source.", zh:"辛甘大熱。補火助陽、引火歸元。"}},
      {en:"Ai Ye · Mugwort Leaf",       zh:"艾葉", a:"warm", why:{en:"Bitter, acrid, warm — warms the channels and stops bleeding. This is the leaf that becomes moxa.", zh:"苦辛溫。溫經止血。艾灸之艾即此。"}},
      {en:"Huang Lian · Coptis",        zh:"黃連", a:"cool", why:{en:"Bitter and <b>cold</b> — drains fire and dries damp, especially in the Heart and Stomach.", zh:"苦寒。清熱燥濕、瀉火解毒，尤善清心胃之火。"}},
      {en:"Jin Yin Hua · Honeysuckle",  zh:"金銀花", a:"cool", why:{en:"Sweet and cold — clears heat and resolves toxicity.", zh:"甘寒。清熱解毒、疏散風熱。"}},
      {en:"Bo He · Field Mint",         zh:"薄荷", a:"cool", why:{en:"Acrid and cool — releases wind-<b>heat</b> from the exterior. Compare fresh ginger, which releases wind-cold.", zh:"辛涼。疏散風熱。與生薑之散風寒相對。"}},
      {en:"Shi Gao · Gypsum",           zh:"石膏", a:"cool", why:{en:"Acrid, sweet and very cold — clears blazing heat in the qi level.", zh:"辛甘大寒。清氣分大熱。"}},
      {en:"Fu Ling · Poria",            zh:"茯苓", a:"neutral", why:{en:"Sweet, bland and neutral — drains damp without draining strength. Gentle enough for long use.", zh:"甘淡平。利水滲濕而不傷正，可久服。"}},
      {en:"Gan Cao · Licorice",         zh:"甘草", a:"neutral", why:{en:"Sweet and neutral — tonifies the middle and harmonises the other herbs in a formula.", zh:"甘平。補中益氣、調和諸藥。"}},
      {en:"Gou Qi Zi · Goji Berry",     zh:"枸杞子", a:"neutral", why:{en:"Sweet and neutral — nourishes Liver and Kidney yin and brightens the eyes.", zh:"甘平。滋補肝腎、益精明目。"}},
      {en:"Shan Yao · Chinese Yam",     zh:"山藥", a:"neutral", why:{en:"Sweet and neutral — tonifies Spleen, Lung and Kidney at once, without being cloying.", zh:"甘平。補脾肺腎三臟而不滋膩。"}}
    ]
  },

  formula_roles: {
    id:"formula_roles", axis:"herb", school:"herb",
    title:{en:"Sovereign, Minister, Assistant, Envoy", zh:"君臣佐使"},
    blurb:{en:"A formula is not a list of herbs. It is a court, and every herb holds an office.",
           zh:"方非藥之堆疊，乃一朝廷；每味藥各有其職。"},
    intro:{en:"\"Anyone can throw eight herbs in a pot,\" says Yao Weng. \"Tell me which one is in charge.\"",
           zh:"「誰都能把八味藥丟進鍋裡。」藥翁說，「你告訴我哪一味說了算。」"},
    buckets:[
      {k:"jun",  en:"Sovereign", zh:"君", sub:"treats the main pattern", c:"#A6291D"},
      {k:"chen", en:"Minister",  zh:"臣", sub:"assists the sovereign",   c:"#8C7031"},
      {k:"zuo",  en:"Assistant", zh:"佐", sub:"treats branches · restrains harshness", c:"#566F44"},
      {k:"shi",  en:"Envoy",     zh:"使", sub:"guides · harmonises",     c:"#4B5C71"}
    ],
    items:[
      {en:"The herb that directly treats the main pattern, in the largest dose", zh:"針對主證、用量最重者", a:"jun",
       why:{en:"The sovereign defines what the formula is <i>for</i>. Change it and you have a different formula.", zh:"君藥定一方之主治。易君則易方。"}},
      {en:"Strengthens the action of the chief herb", zh:"輔助君藥，加強其力", a:"chen",
       why:{en:"The minister serves the same goal as the sovereign, or treats an important coexisting pattern.", zh:"臣藥助君，或治兼病兼證。"}},
      {en:"Treats an accompanying symptom that is not the main pattern", zh:"治兼症，非主證", a:"zuo",
       why:{en:"This is 佐助 — the assistant handles the branch while the sovereign handles the root.", zh:"此為佐助藥：君治其本，佐治其標。"}},
      {en:"Moderates the harshness or toxicity of the chief herb", zh:"制約君藥之峻烈或毒性", a:"zuo",
       why:{en:"This is 佐制 — the assistant restrains, so a strong formula stays safe.", zh:"此為佐制藥：制其偏性，使方峻而不傷。"}},
      {en:"Opposes the formula in nature, to prevent rejection by the body", zh:"性味與方相反，以防格拒", a:"zuo",
       why:{en:"This is 反佐 — a small opposing herb so a very cold or very hot formula is tolerated.", zh:"此為反佐：大寒大熱之方中反用少量相反之品，以免格拒。"}},
      {en:"Leads the other herbs to a particular channel or region", zh:"引諸藥至特定經絡部位", a:"shi",
       why:{en:"This is 引經藥 — the envoy is the guide.", zh:"此為引經報使之藥。"}},
      {en:"Harmonises the whole formula so the stomach tolerates it", zh:"調和諸藥，使不相爭", a:"shi",
       why:{en:"Licorice 甘草 most often plays this role.", zh:"甘草最常任此職。"}},
      {en:"Present in the largest dose and named in the formula's title", zh:"用量最大，且多以之名方", a:"jun",
       why:{en:"Ma Huang Tang is named for its sovereign; so is Gui Zhi Tang.", zh:"如麻黃湯、桂枝湯，皆以君藥名方。"}}
    ]
  },

/* ─────────────────────────── THREE KINDS OF HEAT ──────────────────
   Eight chapters turn on this distinction and students collapse it
   constantly: heat is not one thing, and the three kinds want three
   different prescriptions. Full heat is drained. Empty heat is filled.
   Damp-heat is given a way out. Cool an empty patient as if the fire
   were full and you take away what was already short. */

  heat_three: {
    id:"heat_three", axis:"dx", school:"dx",
    title:{en:"Three Kinds of Heat", zh:"三種熱"},
    blurb:{en:"Full heat, empty heat, damp-heat. Same word, three patterns, three opposite prescriptions. Sort each finding.",
           zh:"實熱、虛熱、濕熱。同名一「熱」，而證有三、方相反。將每一見證歸位。"},
    intro:{en:"\"Anyone can say a patient is hot,\" says Jing Niang. \"Tell me which kind, and I will know what you are about to prescribe — and whether it will help.\"",
           zh:"「說病人有熱，誰都會說。」靜娘道，「說出是哪一種，我就知道你要開什麼方——也知道那方管不管用。」"},
    buckets:[
      {k:"shi",  en:"Full heat", zh:"實熱", sub:"a fire that is lit — drain it", c:"#A6291D"},
      {k:"xu",   en:"Empty heat", zh:"虛熱", sub:"water has fallen — fill it", c:"#8C6A3E"},
      {k:"shire",en:"Damp-heat", zh:"濕熱", sub:"heat inside something sticky — give it an exit", c:"#6B7A42"}
    ],
    items:[
      {en:"Night sweating that stops the moment she wakes", zh:"盜汗：寐中汗出，醒則即止", a:"xu",
       why:{en:"盜汗. In sleep the yang gathers inward and there is not enough yin to hold it, so fluid is pushed out. Daytime sweating at rest 自汗 is the qi-deficiency counterpart.", zh:"寐則陽入於陰，陰不足以斂之，故津隨之而泄。晝日靜而汗出者為自汗，屬氣虛，二者當別。"}},
      {en:"Heat in the palms, the soles and the centre of the chest", zh:"五心煩熱", a:"xu",
       why:{en:"五心煩熱 — two palms, two soles, the chest. Local, low-grade and late in the day. Full heat is felt over the whole body.", zh:"兩手心、兩足心、心胸。其熱局而不壯，且多見於午後。實熱則遍身而壯。"}},
      {en:"Two red patches high on the cheeks, on an otherwise pale face", zh:"兩顴潮紅，而面色本白", a:"xu",
       why:{en:"顴紅. Empty fire floating upward on a body that is not hot. A whole red face is full heat — count how much of the face is red.", zh:"虛火上浮，而身不熱。滿面通紅者實熱。當察其赤者，居面之幾分。"}},
      {en:"A red tongue with the coat peeled away, or no coat at all", zh:"舌紅，苔剝或無苔", a:"xu",
       why:{en:"The coat is made by stomach qi steaming fluids upward; when yin is depleted there is not enough to make one. A missing coat means missing substance.", zh:"苔者胃氣蒸津上潮而成。陰虧則無以化苔。無苔者，形質已虧。"}},
      {en:"A pulse thin as a thread, and fast", zh:"脈細數", a:"xu",
       why:{en:"細 says the vessel is not full — substance is short. 數 says heat. The pairing is what makes it specific.", zh:"細者脈中無物以充之，數者主熱。二者相合，其指乃確。"}},
      {en:"Dry mouth all day, but wants only a few warm sips", zh:"口乾終日，而喜少飲、喜溫飲", a:"xu",
       why:{en:"Enough to wet the mouth, not enough to fill the stomach — fluids are short rather than being boiled away.", zh:"僅足潤口而不欲滿其胃：津少也，非為熱所煎。"}},
      {en:"Steady weight loss over months, with no appetite change", zh:"數月形體漸消，而納食如常", a:"xu",
       why:{en:"Substance is being spent faster than it is made. Full heat burns hard and briefly; it does not usually wear a person down over months.", zh:"耗過於生也。實熱者暴而短，鮮能歷月而漸削其形。"}},

      {en:"High fever with no aversion to cold at all", zh:"壯熱而全不惡寒", a:"shi",
       why:{en:"No chills means the pathogen is no longer on the surface. Interior heat, and full — a new exterior pattern would still bring aversion to cold.", zh:"不惡寒者，邪已離表。裡熱而實。新感在表者，猶當惡寒。"}},
      {en:"Great thirst for cold water, and a lot of it", zh:"大渴引冷，飲而量多", a:"shi",
       why:{en:"Heat is boiling fluids away and the body is replacing them in volume. Contrast the small warm sips of empty heat.", zh:"熱灼其津，故求之以量。與虛熱之喜溫少飲，適成對照。"}},
      {en:"The whole face flushed red", zh:"滿面通紅", a:"shi",
       why:{en:"General, not local. Two red cheeks on a pale face is empty fire floating; a whole red face is a fire that is lit.", zh:"其赤遍而不局。面白而獨兩顴赤者，虛火上浮；滿面赤者，實火也。"}},
      {en:"A red tongue under a thick, dry yellow coat", zh:"舌紅，苔黃厚而乾", a:"shi",
       why:{en:"Thick means there is plenty of material and it is simply hot — the opposite finding from a peeled tongue. Dry rather than greasy rules out damp.", zh:"苔厚者其中有物而但熱耳，與剝苔適反。乾而不膩，則非濕。"}},
      {en:"A pulse that overflows under the finger, fast and forceful", zh:"脈洪數有力", a:"shi",
       why:{en:"洪 — surging, coming full and going weaker. Force is the discriminator: empty heat is fast but thin and yielding.", zh:"洪者來盛去衰，滔滔滿指。決之者在有力無力：虛熱之脈，數而細軟。"}},
      {en:"Constipation with dry, hard, bound stool", zh:"大便秘結，燥硬難下", a:"shi",
       why:{en:"Heat has dried the intestines. Compare damp-heat, where the stool is sticky and unfinished rather than hard.", zh:"熱灼腸津故也。濕熱者便黏滯不爽，而非燥結，二者當別。"}},
      {en:"Restless agitation, sometimes with disordered speech", zh:"煩躁不寧，甚則譫語", a:"shi",
       why:{en:"Full heat disturbing the spirit. It is loud and it is fast — empty heat produces a thin, late restlessness instead.", zh:"實熱擾神，其勢急而躁。虛熱之煩則薄而遲，多在午後入夜。"}},

      {en:"A greasy yellow coat that cannot be scraped off", zh:"苔黃膩，刮之不去", a:"shire",
       why:{en:"Yellow is the heat, greasy is the damp — the fastest two-pathogen read on the whole tongue.", zh:"黃者其熱，膩者其濕。舌診之中，二邪並見之最捷者。"}},
      {en:"Thirsty, but no desire to actually drink", zh:"口渴而不欲飲", a:"shire",
       why:{en:"渴不欲飲. Damp is already blocking the middle and holding fluid where it is not wanted, so the mouth is dry while the body has no room for more.", zh:"濕阻中焦，水停不化，故口雖乾而身無所容。"}},
      {en:"Sticky stool that never feels finished", zh:"大便黏滯，解而不爽", a:"shire",
       why:{en:"Damp is turbid and clinging. Full heat gives hard bound stool instead; the texture is the tell.", zh:"濕性濁膩而黏著。實熱則燥結。其質即其辨。"}},
      {en:"Sweating, and the fever does not break", zh:"汗出而熱不解", a:"shire",
       why:{en:"Sweat clears heat, but damp is sticky and stays, so the heat rebuilds behind it. This single observation often names damp-heat rather than plain heat.", zh:"汗能泄熱，而濕黏滯不去，熱復生於其後。但憑此一觀，多足別濕熱與單熱。"}},
      {en:"A heavy, encumbered body and limbs, worse in humid weather", zh:"身重困倦，遇陰濕尤甚", a:"shire",
       why:{en:"Damp is heavy and sinks. Weather that makes a patient worse is diagnostic data, not superstition.", zh:"濕性重濁而下趨。病隨天時而甚者，此為據，非為誕。"}},
      {en:"A pulse that rolls smoothly like beads on a tray, and hurries", zh:"脈滑數", a:"shire",
       why:{en:"滑 says something substantial has accumulated — damp, phlegm or food. 數 says heat. Together, the standard damp-heat pulse.", zh:"滑者主有形之積：濕、痰、食。數者主熱。合之為濕熱之常脈。"}}
    ]
  }

};
