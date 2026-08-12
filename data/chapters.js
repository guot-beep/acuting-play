/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/chapters.js
   Clinical Encounter Engine — content only. The engine lives in
   chapter.html; new chapters are new data, not new code.
   ═══════════════════════════════════════════════════════════════ */
window.AG_CHAPTERS = {
  "01": {
    id:"01", title:"A-Lian&#39;s Cough", titleZh:"阿蓮的咳嗽",
    patient:{name:"A-Lian 阿蓮", sprite:"girl"},
    pattern:"Wind-Cold invading the Lung 風寒襲肺",
    principle:"release the exterior, diffuse the Lung",
    tongue:"pale-red, thin white coating",
    pulseNote:{en:"The beat rises to meet your finger the moment you touch — and feels taut, like a stretched cord.",zh:"輕取即得，脈來繃緊如按琴弦"},
    needleAsk:{en:"Needle <b>Lièquē LU7</b>. Tap its exact location.",zh:"行針 — 點出穴位精確位置"},
    target:{id:"LU7",zh:"列缺",py:"Lièquē",x:262,y:497,
      note:"<b>列缺 Lièquē LU7</b> — 1.5 cun above the wrist crease, superior to the radial styloid. Luo-Connecting point of the Lung; confluent point opening the Ren mai.<br>腕橫紋上1.5寸，橈骨莖突上方。肺經絡穴，八脈交會通任脈。"},
    reward:{cardEn:"Diffuse &amp; Release 宣肺解表",cardTxt:"For an exterior Wind-Cold pattern, open the Lung&#39;s dispersing function and push the pathogen back out through the surface.",herbEn:"Fresh Ginger 生薑",herbTxt:"Acrid and warm — in TCM food therapy it is the everyday kitchen ally for early wind-cold, taken as a warm tea."},
    endings:{
      three:["Two days later A-Lian is back at the silk shop. \"The stiffness in my neck went first,\" she says, \"then the cough.\"<br><b>Master Shen:</b> \"You read the surface correctly. Most students rush inward and miss what is right in front of them.\"","兩天後，阿蓮回到絲行。「先是脖子鬆了，然後咳嗽就好了。」<br><b>參師父：</b>「你把表證看準了。多數學生急著往裡鑽，反而錯過眼前的東西。」"],
      two:["A-Lian sleeps through the night, though the cough lingers a little.<br><b>Master Shen:</b> \"Not bad. Go back over your reasoning — one link was loose.\"","阿蓮夜裡能睡了，咳嗽還有一點。<br><b>參師父：</b>「不差。回頭把推理再走一遍，有一環鬆了。」"],
      one:["The cough is unchanged.<br><b>Master Shen:</b> \"Do not be discouraged. Go back and look again — the clues were all there.\"","咳嗽沒有起色。<br><b>參師父：</b>「別氣餒。回去再看一次，線索本來都在。」"],
      titles:["A-Lian Picks Up Her Needle","A-Lian Rests Easier","A-Lian Will Need Another Visit"]
    },
    script: [
 {w:"master",en:"You've swept this floor for a month. Today you meet a patient.",cn:"你掃了一個月的地。今天，你要見病人了。"},
 {w:"master",en:"Remember: we do not treat a cough. We treat the person who is coughing — and the pattern behind it.",cn:"記住：我們治的不是咳嗽，是咳嗽的這個人，以及背後的證。"},
 {w:"patient",en:"Doctor… I'm A-Lian, I embroider at the silk shop. I've been coughing for three days.",cn:"大夫⋯⋯我是阿蓮，在絲行做繡活。咳了三天了。"},
 {w:"patient",en:"It started after I got caught in the rain on the way home. Now I can't hold my needle steady.",cn:"那天回家路上淋了雨，之後就這樣。現在連針都拿不穩。"},
 {w:"master",en:"Rain. Cold. Wind. — A beginning is a clue, but never the whole answer. Ask her properly.",cn:"雨、寒、風。起病是線索，卻不是答案。好好問診。"}
],
    qa: [
 {q:"Do you feel cold, or feverish?",cq:"你怕冷還是發熱？",good:1,
  a:"Chills much worse than fever. I keep wanting another blanket.",ca:"惡寒重、發熱輕，一直想再蓋條被子。",
  clue:"惡寒重發熱輕",note:"Chills > fever points to an <b>exterior cold</b> pattern. 惡寒重發熱輕＝表寒。"},
 {q:"Are you sweating?",cq:"有沒有出汗？",good:1,
  a:"No sweat at all, even under the blanket.",ca:"完全沒汗，蓋著被子也不出汗。",
  clue:"無汗",note:"No sweating with chills = <b>Wind-Cold</b> rather than Wind-Heat. 無汗屬風寒表實。"},
 {q:"What does the phlegm look like?",cq:"痰是什麼樣子？",good:1,
  a:"Thin and white, easy to spit out.",ca:"痰稀白，容易咳出來。",
  clue:"痰稀白",note:"Thin white phlegm = <b>cold</b>. Thick yellow would mean heat. 痰稀白屬寒，黃稠屬熱。"},
 {q:"Does your head or neck ache?",cq:"頭項痛不痛？",good:1,
  a:"Yes — the back of my head and my neck feel stiff and sore.",ca:"後腦和脖子又緊又痛。",
  clue:"頭項強痛",note:"Stiff occiput and neck = the <b>Taiyang</b> exterior. 頭項強痛為太陽表證。"},
 {q:"How is your appetite lately?",cq:"最近胃口如何？",good:0,
  a:"About the same as usual, I suppose.",ca:"跟平常差不多吧。",
  clue:"",note:"Reasonable to ask, but it adds nothing here — the illness is only three days old and on the surface. 問得合理，但此時無助辨證。"},
 {q:"Do you have night sweats and a dry throat at 3am?",cq:"半夜盜汗、咽乾嗎？",good:0,
  a:"No, nothing like that.",ca:"沒有這些。",
  clue:"",note:"These probe <b>Yin deficiency</b> — a chronic interior pattern, not a three-day exterior one. 此問屬陰虛內傷，與新病表證不符。"}
],
    look: [
 {t:"Pale-red body, thin white coating",c:"舌淡紅，苔薄白",ok:1,clue:"舌淡紅苔薄白",
  note:"Correct. A near-normal body with a <b>thin white coat</b> = the pathogen is still on the <b>exterior</b> and has not turned to heat. 苔薄白＝病邪在表，未化熱。"},
 {t:"Red body, yellow greasy coating",c:"舌紅，苔黃膩",ok:0,
  note:"That would indicate <b>damp-heat</b> in the interior — the coating here is clearly thin and white. 黃膩苔主濕熱，與本案不符。"},
 {t:"Pale swollen body with teeth marks",c:"舌淡胖有齒痕",ok:0,
  note:"That suggests <b>Spleen Qi / Yang deficiency</b> with dampness — a chronic interior pattern. 齒痕舌主脾虛濕盛，屬內傷久病。"}
],
    pulse: [
 {t:"Floating and tight 浮緊",ok:1,clue:"脈浮緊",
  note:"Correct. <b>Floating</b> = the pathogen is on the exterior; <b>tight</b> = cold constricting the vessels. Floating-tight is the signature pulse of Wind-Cold. 浮主表，緊主寒，浮緊為風寒表實之脈。"},
 {t:"Floating and rapid 浮數",ok:0,
  note:"Floating-rapid would mean Wind-<b>Heat</b>. Nothing here is hot — no thirst, no sore throat, no yellow phlegm. 浮數主風熱，本案無熱象。"},
 {t:"Deep and thready 沉細",ok:0,
  note:"Deep-thready indicates an <b>interior deficiency</b> pattern, not a fresh exterior invasion. 沉細主裡虛，與新感表證不符。"}
],
    dx: [
 {ask:'Step 1 — Eight Principles. Where is it, and what is its nature?<br><small style="color:var(--ink-soft)">八綱辨證：病位？病性？</small>',
  opts:[{t:"Exterior · Cold · Excess",c:"表 · 寒 · 實",ok:1,
         note:"Correct. Three days old, chills>fever, no sweat, floating-tight pulse, thin white coat — <b>exterior cold excess</b>. 新病、惡寒重、無汗、脈浮緊＝表寒實證。"},
        {t:"Interior · Heat · Excess",c:"裡 · 熱 · 實",ok:0,note:"No heat signs and no interior signs are present. 無熱象、無裡證。"},
        {t:"Exterior · Cold · Deficiency",c:"表 · 寒 · 虛",ok:0,note:"Close on location and nature — but <b>no sweating</b> marks this as excess (表實), not deficiency (表虛, which sweats). 無汗屬表實；表虛則有汗。"}]},
 {ask:'Step 2 — Zang-Fu. Which organ is disturbed, and by what?<br><small style="color:var(--ink-soft)">臟腑辨證：病在何臟？何邪？</small>',
  opts:[{t:"Wind-Cold invading the Lung",c:"風寒襲肺",ok:1,
         note:"Correct. The Lung governs Qi and rules the exterior — wind-cold blocks its dispersing and descending function, so she coughs. 肺主氣、司呼吸、外合皮毛；風寒束表，肺失宣降而咳。"},
        {t:"Phlegm-Damp obstructing the Lung",c:"痰濕阻肺",ok:0,note:"That pattern brings copious sticky phlegm and a greasy coat, usually chronic. 痰濕阻肺痰多黏膩、苔膩，多屬久病。"},
        {t:"Liver Fire invading the Lung",c:"肝火犯肺",ok:0,note:"That brings irritability, bitter taste, red eyes, rapid wiry pulse. 肝火犯肺見急躁、口苦、脈弦數。"}]}
],
    rx: [
 {id:"LU7",t:"Lièquē LU7 列缺",ok:1,note:"Luo point of the Lung, confluent with the Ren mai — the classic point to diffuse the Lung and release the exterior. 肺經絡穴，宣肺解表要穴。"},
 {id:"LI4",t:"Hégǔ LI4 合谷",ok:1,note:"Yuan point of the Large Intestine, paired with LU7 as host-guest — strongly releases the exterior. 大腸原穴，與列缺原絡配穴，解表力強。"},
 {id:"BL12",t:"Fēngmén BL12 風門",ok:1,note:"\"Wind Gate\" — expels wind from the surface; excellent with moxa for wind-cold. 祛風散寒，風寒證常配灸法。"},
 {id:"KI3",t:"Tàixī KI3 太溪",ok:0,note:"Kidney Yuan point — tonifies Kidney Yin. Tonifying in a fresh exterior excess pattern risks retaining the pathogen. 補腎陰；表實新感用補法有閉門留寇之虞。"},
 {id:"SP9",t:"Yīnlíngquán SP9 陰陵泉",ok:0,note:"Drains damp — but this is cold on the exterior, not dampness. 利濕，本案非濕證。"},
 {id:"LR3",t:"Tàichōng LR3 太衝",ok:0,note:"Courses Liver Qi — no Liver signs in this case. 疏肝，本案無肝證。"}
],
    tech: [
 {t:"Reducing method, then moxa 瀉法後加灸",ok:1,
  note:"Correct. An <b>excess</b> exterior pattern calls for reducing; moxa warms and scatters the cold. 表實證用瀉法，風寒加灸溫散。"},
 {t:"Reinforcing method, retain 30 min 補法久留針",ok:0,
  note:"Reinforcing an excess exterior pattern risks trapping the pathogen inside. 表實用補法，恐閉門留寇。"},
 {t:"Bleed the well point 井穴放血",ok:0,
  note:"Bleeding well points suits <b>heat</b> patterns such as an acute sore throat, not wind-cold. 井穴放血用於熱證咽喉腫痛。"}
    ]
  }
  ,"02": {
    id:"02", title:"The Boatman&#39;s Shoulder", titleZh:"船夫的肩背",
    patient:{name:"Old Wu 吳伯", sprite:"man"},
    pattern:"Cold-Damp obstructing the channels 寒濕痹阻經絡",
    principle:"warm the channels, dispel cold and damp, free the collaterals",
    tongue:"pale with a white moist coating",
    pulseNote:{en:"The beat is taut like a wire and does not yield under the finger; it is not fast.",zh:"脈來如按弓弦、繃緊不柔，然不數。"},
    needleAsk:{en:"The Four Command Points say: <b>for the head and neck, seek Lièquē</b>. Tap LU7.",zh:"四總穴歌云：頭項尋列缺。點出 LU7。"},
    target:{id:"LU7",zh:"列缺",py:"Lièquē",x:262,y:497,
      note:"<b>列缺 Lièquē LU7</b> — one of the Four Command Points: <i>for disorders of the head and nape, seek Lièquē</i>. A distal point for neck and upper-back stiffness.<br>四總穴之一：「頭項尋列缺」。項背強痛之遠端要穴。"},
    reward:{cardEn:"The Four Command Points 四總穴歌",cardTxt:"For the belly, keep Zusanli. For the low back, seek Weizhong. For the head and nape, seek Lieque. For the face and mouth, Hegu will do.",herbEn:"Dried Ginger 乾薑",herbTxt:"Acrid and hot — in TCM it is used to warm the interior and disperse cold. Old Wu takes it as a warm tea before the dawn crossing."},
    endings:{
      three:["A week later Old Wu is poling the ferry again at dawn. \"It still aches when the rain comes,\" he says, \"but I can lift the pole.\"<br><b>Master Shen:</b> \"You did not chase an organ that was not ill. This one lived in the channels — and you found it there.\"","一週後，吳伯又在天亮時撐篙。「下雨還是會痠，」他說，「但篙我撐得起來了。」<br><b>參師父：</b>「你沒有去追一個根本沒病的臟。這病住在經絡裡——你就在那裡找到它。」"],
      two:["Old Wu moves more freely, though the cold mornings still catch him.<br><b>Master Shen:</b> \"Better. But you hesitated between the channel and the organ. Learn to tell them apart.\"","吳伯活動鬆了些，清晨受寒仍會犯。<br><b>參師父：</b>「好些了。可你在經絡與臟腑之間猶豫。要學會分清這兩者。」"],
      one:["Old Wu thanks you politely and goes back to the river, still stiff.<br><b>Master Shen:</b> \"He will come again. Read the case once more before he does.\"","吳伯客氣地道謝，回到河邊，肩背依舊僵著。<br><b>參師父：</b>「他還會再來。在那之前，把這個病案再讀一遍。」"],
      titles:["Old Wu Lifts the Pole","Old Wu Moves Easier","Old Wu Goes Back Stiff"]
    },
    script:[
 {w:"master",en:"The ferry did not run this morning. That tells you something before the patient says a word.",cn:"今早渡船沒開。病人還沒開口，這件事就先告訴了你一些東西。"},
 {w:"patient",en:"Doctor. I am Wu, I pole the ferry at the east crossing. My shoulder and upper back have hurt for three months.",cn:"大夫。我姓吳，在東渡口撐船。肩背痛了三個月。"},
 {w:"patient",en:"It is worst before dawn on the water, and worst again when the rain comes. A hot towel helps. Moving about helps a little too.",cn:"天亮前在水上最疼，下雨天又更疼。敷熱毛巾會好些，活動一下也鬆一點。"},
 {w:"patient",en:"I cannot rest it. If I do not pole, my family does not eat.",cn:"我沒法歇。不撐船，一家人就沒飯吃。"},
 {w:"master",en:"Three months. Cold water, wet air, and no rest. — Ask him properly. And remember: not every illness lives in an organ.",cn:"三個月。冷水、濕氣、又不能歇。——好好問診。記住：不是每個病都住在臟腑裡。"}
],
    qa:[
 {q:"Is the pain in one fixed place, or does it move?",cq:"痛處固定還是遊走？",good:1,
  a:"Fixed. Right here, across the shoulder blade and up the neck.",ca:"固定的。就在肩胛這一片，往上到脖子。",
  clue:"痛處固定",note:"Fixed pain suggests <b>cold</b> or <b>stasis</b>; wandering pain suggests <b>wind</b>. 痛處固定多屬寒或瘀；遊走不定多屬風。"},
 {q:"Is it better or worse with cold and with heat?",cq:"遇冷遇熱如何？",good:1,
  a:"Cold makes it much worse. A hot towel eases it every time.",ca:"遇冷重得多。熱毛巾一敷就鬆。",
  clue:"得溫則減",note:"Relief from warmth is the single clearest sign of a <b>cold</b> pattern. 得溫則減，是辨寒證最直接的一條。"},
 {q:"Does the weather change it?",cq:"天氣會影響嗎？",good:1,
  a:"Before rain it aches deep and heavy, like the arm is full of water.",ca:"下雨前痠脹沉重，像手臂灌了水。",
  clue:"陰雨加重、沉重感",note:"Heaviness that tracks the weather is <b>damp</b>. 隨天氣加重且覺沉重者屬濕。"},
 {q:"Is there any fever or aversion to cold over the whole body?",cq:"有無發熱、全身惡寒？",good:0,
  a:"No fever. I feel fine otherwise — it is just the shoulder.",ca:"沒發燒。其他都好，就是肩膀。",
  clue:"",note:"Worth excluding an exterior pattern, but three months of local pain without fever is not a new invasion of the whole body. 排除表證合理；然局部痛三月而無發熱，非新感表證。"},
 {q:"How is your appetite and digestion?",cq:"胃口與消化如何？",good:0,
  a:"Fine. I eat like a boatman.",ca:"好得很。船夫的胃口。",
  clue:"",note:"Reasonable screening, but nothing points to the Spleen or Stomach here. 篩查合理，然本案無脾胃見症。"},
 {q:"Do you have night sweats or heat in the palms?",cq:"有無盜汗、手心發熱？",good:0,
  a:"Never.",ca:"從來沒有。",
  clue:"",note:"These probe <b>Yin deficiency</b> — a very different picture from a cold, damp, painful shoulder. 此問屬陰虛，與寒濕痹痛之象不合。"}
],
    look:[
 {t:"Skin over the area is normal in colour, not red or swollen",c:"局部膚色如常，無紅腫",ok:1,clue:"局部無紅腫",
  note:"Correct. No redness or swelling argues against <b>heat</b>. In a cold bi-syndrome the area looks unremarkable but feels cold and stiff. 無紅腫則非熱痹。寒痹外觀如常，然按之冷而僵。"},
 {t:"Skin is red, hot and visibly swollen",c:"局部紅腫灼熱",ok:0,
  note:"That would be a <b>heat</b> bi-syndrome — and this patient improves with a hot towel, which heat patterns do not. 此為熱痹；然本案得熱則減，熱痹不然。"},
 {t:"Muscles are visibly wasted with loose skin",c:"肌肉明顯萎縮、皮膚鬆弛",ok:0,
  note:"Long-standing deficiency would waste the muscles; three months of work-related pain has not. 久虛可見肌肉萎縮；本案病三月且仍勞作，未至於此。"}
],
    pulse:[
 {t:"Tight (wiry and tense) 弦緊",ok:1,clue:"脈弦緊",
  note:"Correct. <b>Tight</b> is the pulse of cold and of pain; wiry adds tension in the channels. 緊主寒、主痛；弦主經脈拘急。"},
 {t:"Slippery and rapid 滑數",ok:0,
  note:"That would be damp-<b>heat</b>. Nothing here is hot. 此為濕熱之脈，本案無熱象。"},
 {t:"Thready and weak 細弱",ok:0,
  note:"That is deficiency; this pain resists pressure and the pulse has force. 細弱主虛；本案痛而拒按、脈有力。"}
],
    dx:[
 {ask:'Step 1 — Eight Principles. What is its nature?<br><small style="color:var(--ink-soft)">八綱辨證：病性為何？</small>',
  opts:[{t:"Cold · Damp · Excess",c:"寒 · 濕 · 實",ok:1,
         note:"Better with warmth = <b>cold</b>; heavy and weather-linked = <b>damp</b>; fixed pain that resists pressure with a tight pulse = <b>excess</b>. 得溫則減屬寒；沉重隨天氣屬濕；痛處固定拒按、脈緊屬實。"},
        {t:"Heat · Damp · Excess",c:"熱 · 濕 · 實",ok:0,note:"No redness, no thirst, no rapid pulse, and heat <b>relieves</b> him. 無紅腫、不渴、脈不數，且得熱反舒。"},
        {t:"Cold · Deficiency",c:"寒 · 虛",ok:0,note:"Deficiency pain is dull and <b>likes</b> pressure; his is fixed and resists it. 虛痛隱隱喜按；本案固定拒按。"}]},
 {ask:'Step 2 — Where does this illness live?<br><small style="color:var(--ink-soft)">病位何在？臟腑？經絡？</small>',
  opts:[{t:"In the channels and sinews, not in an organ",c:"病在經絡筋肉，不在臟腑",ok:1,
         note:"Correct. No organ symptoms at all — appetite, sleep, stools, urine are normal. The pathogen sits in the channels: this is <b>bi-syndrome</b> (痹證). 全無臟腑見症，邪客經絡，此為痹證。"},
        {t:"In the Lung",c:"病在肺",ok:0,note:"The upper back is near the Lung, but there is no cough, phlegm or breathing change. 上背雖近肺，然無咳痰喘。"},
        {t:"In the Kidney",c:"病在腎",ok:0,note:"Kidney patterns show at the <b>low</b> back and knees with weakness and nocturia. 腎病在腰膝，見痠軟、夜尿。"}]},
 {ask:'Step 3 — Which bi-syndrome is it?<br><small style="color:var(--ink-soft)">屬何痹？</small>',
  opts:[{t:"Painful bi with damp 痛痹兼濕（寒濕痹阻）",c:"寒重而兼濕",ok:1,
         note:"Cold dominates (severe fixed pain, relieved by warmth) with damp alongside (heaviness, worse before rain). 寒盛則痛甚而固定、得溫則減；兼濕則沉重、遇陰雨加重。"},
        {t:"Wandering bi 行痹（風勝）",c:"風勝行痹",ok:0,note:"Wind-dominant bi <b>moves</b> from joint to joint. His pain never moves. 行痹疼痛遊走；本案痛處固定不移。"},
        {t:"Heat bi 熱痹",c:"熱痹",ok:0,note:"Heat bi is red, hot, swollen and worse with warmth. 熱痹紅腫灼熱、得熱更甚。"}]}
],
    rx:[
 {id:"ASHI",t:"Ashi points 阿是穴 (local)",ok:1,note:"Where it hurts is where the channel is blocked. Local needling with moxa is the backbone of cold bi treatment. 以痛為腧；局部溫針或艾灸為寒痹主法。"},
 {id:"SI11",t:"Tiānzōng SI11 天宗",ok:1,note:"In the centre of the scapular fossa — the local point for scapular and shoulder pain. 肩胛岡下窩中央，肩背痛之局部要穴。"},
 {id:"LU7",t:"Lièquē LU7 列缺 (distal)",ok:1,note:"Four Command Points: <i>for the head and nape, seek Lièquē</i>. The distal partner for neck and upper-back stiffness. 四總穴：「頭項尋列缺」，項背強痛之遠端配穴。"},
 {id:"SP9",t:"Yīnlíngquán SP9 陰陵泉",ok:0,note:"Drains damp from the lower burner — the damp here is in the channels of the upper back. 利下焦之濕；本案濕在上背經絡。"},
 {id:"LR3",t:"Tàichōng LR3 太衝",ok:0,note:"Courses Liver qi. No Liver signs and no emotional trigger here. 疏肝理氣；本案無肝證、無情志誘因。"},
 {id:"KI3",t:"Tàixī KI3 太溪",ok:0,note:"Tonifies Kidney Yin — tonifying an excess channel blockage does not move it. 補腎陰；實邪痹阻而用補，邪不得去。"}
],
    tech:[
 {t:"Warming needle with moxa 溫針灸",ok:1,
  note:"Correct. Cold and damp respond to <b>warmth</b>: moxa on the needle warms the channel and disperses both. 寒濕得溫則散，溫針灸最為對證。"},
 {t:"Bleed the local points 局部刺絡放血",ok:0,
  note:"Bleeding drains <b>heat</b> and marked stasis; here the pattern is cold, and bleeding would cool what needs warming. 刺絡放血泄熱化瘀；本案屬寒，反奪其陽。"},
 {t:"Reinforcing method, no moxa 補法而不用灸",ok:0,
  note:"This is an excess blockage, not emptiness — and cold-damp needs warmth to move. 此為實邪痹阻，非虛；且寒濕非溫不散。"}
]
  }
};
