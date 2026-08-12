/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/drills.js
   Retreat drills 閉關小練 — remediation, not punishment.

   A drill is a 30–60 second sorting round on ONE distinction the
   player just got wrong. It never costs XP; finishing it grants a
   small bonus and returns the player to the exact spot in the story.

   These are deliberately universal (cold vs heat, channel vs organ),
   so any chapter can point at them. A chapter names which drill
   covers which stage via its `remedy` map.
   ═══════════════════════════════════════════════════════════════ */
window.AG_DRILLS = {

  /* ── 寒 vs 熱 ───────────────────────────────────────────── */
  cold_heat: {
    key:"cold_heat", axis:"dx",
    title:{en:"Cold or Heat?", zh:"寒證？熱證？"},
    intro:{en:"Master Shen lays six slips of paper on the table. \"Before you look at another patient — sort these.\"",
           zh:"參師父在桌上擺了六張紙條。「再看下一個病人之前——先把這些分好。」"},
    sides:[{k:"cold", en:"Cold", zh:"寒"},{k:"heat", en:"Heat", zh:"熱"}],
    items:[
      {en:"The pain eases under a hot towel", zh:"敷熱毛巾則痛減", a:"cold",
       why:{en:"Relief from warmth is the single clearest sign of cold.", zh:"得溫則減，辨寒證最直接的一條。"}},
      {en:"The skin over it is red, hot and swollen", zh:"局部紅腫灼熱", a:"heat",
       why:{en:"Redness, heat and swelling are heat in the channels.", zh:"紅腫灼熱為熱在經絡。"}},
      {en:"Thin, clear, white phlegm", zh:"痰稀白清", a:"cold",
       why:{en:"Thin and white is cold; thick and yellow is heat.", zh:"稀白屬寒，黃稠屬熱。"}},
      {en:"Thirst for cold drinks", zh:"口渴喜冷飲", a:"heat",
       why:{en:"Heat consumes fluids and the body reaches for cold.", zh:"熱傷津，故渴而喜冷。"}},
      {en:"A tight pulse", zh:"脈緊", a:"cold",
       why:{en:"Tight is the pulse of cold and of pain.", zh:"緊主寒、主痛。"}},
      {en:"A rapid pulse with a yellow coating", zh:"脈數、苔黃", a:"heat",
       why:{en:"Rapid plus yellow coat points to heat.", zh:"脈數苔黃，熱象也。"}}
    ]
  },

  /* ── 病在經絡 vs 病在臟腑 ────────────────────────────────── */
  channel_organ: {
    key:"channel_organ", axis:"dx",
    title:{en:"Channels or Organ?", zh:"病在經絡？還是臟腑？"},
    intro:{en:"\"Half of all mistakes,\" Master Shen says, \"come from treating an organ that was never ill. Sort these.\"",
           zh:"「一半的錯，」參師父說，「都出在去治一個根本沒病的臟。分分看。」"},
    sides:[{k:"channel", en:"Channels", zh:"經絡"},{k:"organ", en:"Organ", zh:"臟腑"}],
    items:[
      {en:"Shoulder pain, but appetite, sleep and stools are all normal", zh:"肩痛，然納食、睡眠、二便如常", a:"channel",
       why:{en:"No organ signs at all — the pathogen sits in the channels. This is bi-syndrome.", zh:"全無臟腑見症，邪客經絡，此為痹證。"}},
      {en:"Cough with phlegm, worse on breathing in", zh:"咳嗽有痰，吸氣尤甚", a:"organ",
       why:{en:"Cough and phlegm are Lung signs.", zh:"咳而有痰，病在肺。"}},
      {en:"Pain along one line of the arm that stops at the wrist", zh:"痛沿手臂一線而止於腕", a:"channel",
       why:{en:"Pain that follows a channel's path is channel disease.", zh:"痛循經而行，病在經。"}},
      {en:"Low back and knees sore and weak, with night urination", zh:"腰膝痠軟，夜尿頻", a:"organ",
       why:{en:"Low back, knees and urination together point to the Kidney.", zh:"腰膝與小便並見，病在腎。"}},
      {en:"Stiff neck after sleeping in a draught", zh:"睡臥受風後項強", a:"channel",
       why:{en:"A local, recent, positional problem — the channel, not the organ.", zh:"新病、局部、因勢而起，在經不在臟。"}},
      {en:"Poor appetite, loose stools, tired after eating", zh:"納少、便溏、食後倦怠", a:"organ",
       why:{en:"Appetite, stools and fatigue together are the Spleen.", zh:"納、便、倦並見，病在脾。"}}
    ]
  },

  /* ── 實 vs 虛 ───────────────────────────────────────────── */
  excess_def: {
    key:"excess_def", axis:"dx",
    title:{en:"Excess or Deficiency?", zh:"實證？虛證？"},
    intro:{en:"\"Tonify an excess and you feed the thief,\" Master Shen says. \"Drain a deficiency and you rob the host.\"",
           zh:"「實而補之，是養賊；虛而瀉之，是奪主。」參師父說。"},
    sides:[{k:"excess", en:"Excess", zh:"實"},{k:"def", en:"Deficiency", zh:"虛"}],
    items:[
      {en:"The pain is sharp and refuses pressure", zh:"痛甚而拒按", a:"excess",
       why:{en:"Pain that resists pressure is excess.", zh:"拒按者實。"}},
      {en:"A dull ache that likes to be pressed and rubbed", zh:"隱隱作痛，喜按喜揉", a:"def",
       why:{en:"Pain that likes pressure is emptiness.", zh:"喜按者虛。"}},
      {en:"Loud voice, forceful pulse, recent onset", zh:"聲高氣粗，脈有力，新病", a:"excess",
       why:{en:"Force and a short history are excess.", zh:"有力而新病，屬實。"}},
      {en:"Faint voice, weak thready pulse, months of it", zh:"聲低息微，脈細弱，病已數月", a:"def",
       why:{en:"Weakness over a long course is deficiency.", zh:"久病而無力，屬虛。"}},
      {en:"Worse with activity, better after rest", zh:"動則加重，休息則減", a:"def",
       why:{en:"Exertion drains what is already empty.", zh:"勞則耗氣，本虛故動甚。"}},
      {en:"Better with movement, worse sitting still", zh:"活動則鬆，久坐反甚", a:"excess",
       why:{en:"Movement disperses a blockage.", zh:"動則氣行，滯者得散。"}}
    ]
  },

  /* ── 痛的性質：風 / 寒 / 濕 ─────────────────────────────── */
  pain_quality: {
    key:"pain_quality", axis:"dx",
    title:{en:"Read the Pain", zh:"辨痛"},
    intro:{en:"\"Pain has a grammar,\" Master Shen says. \"Learn to read it and half the case is done.\"",
           zh:"「痛是有文法的。」參師父說，「讀懂了，病案就好了一半。」"},
    sides:[{k:"wind", en:"Wind", zh:"風"},{k:"cold", en:"Cold", zh:"寒"},{k:"damp", en:"Damp", zh:"濕"}],
    items:[
      {en:"The pain wanders from joint to joint", zh:"痛處遊走不定", a:"wind",
       why:{en:"Wind moves — wandering bi 行痹.", zh:"風善行而數變，故為行痹。"}},
      {en:"Severe, fixed pain, much better with warmth", zh:"痛甚固定，得溫大減", a:"cold",
       why:{en:"Cold contracts and fixes — painful bi 痛痹.", zh:"寒性收引，痛有定處，為痛痹。"}},
      {en:"Heavy, sore limbs that get worse before rain", zh:"肢體沉重痠困，陰雨前加重", a:"damp",
       why:{en:"Damp is heavy and sticky — fixed bi 著痹.", zh:"濕性重濁黏滯，為著痹。"}},
      {en:"Numbness with a swollen, muffled feeling", zh:"麻木而覺腫脹沉悶", a:"damp",
       why:{en:"Damp obstructs and dulls sensation.", zh:"濕阻氣機，故麻木沉重。"}},
      {en:"Comes on suddenly after a windy day outdoors", zh:"當風一日後驟然發作", a:"wind",
       why:{en:"Sudden onset is wind's signature.", zh:"起病急驟，風之徵也。"}},
      {en:"Cold hands on the painful area make it much worse", zh:"以冷手觸之痛更甚", a:"cold",
       why:{en:"Cold aggravates a cold pattern.", zh:"寒證遇寒則甚。"}}
    ]
  }
};
