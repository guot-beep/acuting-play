/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/chapters.js
   Clinical Encounter Engine — content only. The engine lives in
   chapter.html; new chapters are new data, not new code.
   ═══════════════════════════════════════════════════════════════ */
window.AG_CHAPTERS = {
  "01": {
    id:"01", title:"A-Lian&#39;s Cough", titleZh:"阿蓮的咳嗽",
    patient:{name:"A-Lian 阿蓮", sprite:"girl"},
    scene:{img:"art/scene-treatment.jpg", key:"rain"},  // portrait clinic; key is the fallback
    pattern:"Wind-Cold invading the Lung 風寒襲肺",
    principle:"release the exterior, diffuse the Lung",
    tongue:"pale-red, thin white coating",
    pulseNote:{en:"The beat rises to meet your finger the moment you touch — and feels taut, like a stretched cord.",zh:"輕取即得，脈來繃緊如按琴弦"},
    needleAsk:{en:"Needle <b>Lièquē LU7</b>. Tap its exact location.",zh:"行針 — 點出穴位精確位置"},
    target:{id:"LU7",zh:"列缺",py:"Lièquē",x:262,y:497,
      note:"<b>列缺 Lièquē LU7</b> — 1.5 cun above the wrist crease, superior to the radial styloid. Luo-Connecting point of the Lung; confluent point opening the Ren mai.<br>腕橫紋上1.5寸，橈骨莖突上方。肺經絡穴，八脈交會通任脈。"},
    hints:{
 ask:{en:"A three-day illness on the surface asks: <b>chills or fever?</b> <b>sweating?</b> <b>what does the phlegm look like?</b>",zh:"新病三日在表，當問：惡寒發熱孰重？有汗無汗？痰之色質？"},
 look:{en:"On the tongue, a <b>thin white</b> coat means the pathogen is still outside. Yellow would mean it has turned to heat.",zh:"舌苔薄白，邪尚在表；轉黃則化熱。"},
 pulse:{en:"An exterior pattern floats. Cold makes it tight, heat makes it fast. She was caught in cold rain.",zh:"表證脈浮。寒則兼緊，熱則兼數。她淋的是冷雨。"},
 dx:{en:"Ask in order: <b>exterior or interior</b> → <b>cold or heat</b> → <b>which organ</b>. Three days is not long.",zh:"依序問：表裡 → 寒熱 → 病在何臟。三天，不算久。"},
 rx:{en:"Release the exterior and open the Lung. Think <b>distal</b> points that reach the surface and the head.",zh:"解表宣肺。想能達表、達頭項的遠端穴。"},
 tech:{en:"An exterior excess pattern is <b>drained</b>, not tonified — and it is not deep.",zh:"表實當瀉不當補，且不宜深刺。"}
},
    reactions:[
 {who:"master",en:"Master Shen does not look up. \"Go on.\"",zh:"參師父沒有抬頭。「繼續。」"},
 {who:"patient",en:"A-Lian coughs into her sleeve and waits politely.",zh:"阿蓮往袖子裡咳了一聲，客氣地等著。"},
 {who:"boy",en:"The herb boy quietly puts back the jar he had already reached for.",zh:"藥童把剛拿下的藥罐悄悄放了回去。"},
 {who:"master",en:"\"Hm.\" Master Shen sets down his brush.",zh:"「唔。」參師父擱下筆。"},
 {who:"patient",en:"\"Should I... come back another day?\" A-Lian asks.",zh:"「我⋯⋯要不要改天再來？」阿蓮問。"},
 {who:"master",en:"\"The illness is three days old,\" he says. \"It is not hiding.\"",zh:"「病才三天，」他說，「它沒有躲。」"}
],
    remedy:{ask:"cold_heat",look:"cold_heat",pulse:"cold_heat",dx:"excess_def",rx:"channel_organ",tech:"cold_heat"},
    reward:{cardEn:"Diffuse &amp; Release",cardZh:"宣肺解表",cardTxt:"For an exterior Wind-Cold pattern, open the Lung&#39;s dispersing function and push the pathogen back out through the surface.",herbId:"shengjiang",herbEn:"Fresh Ginger",herbZh:"生薑",herbImg:"art/mascot-jiang-run.jpg",sprite:"art/sprite-renshen-jump.webp",herbTxt:"Acrid and warm — in TCM food therapy it is the everyday kitchen ally for early wind-cold, taken as a warm tea."},
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
  clue:{en:"Chills stronger than fever",zh:"惡寒重發熱輕"},note:"Chills > fever points to an <b>exterior cold</b> pattern. 惡寒重發熱輕＝表寒。"},
 {q:"Are you sweating?",cq:"有沒有出汗？",good:1,
  a:"No sweat at all, even under the blanket.",ca:"完全沒汗，蓋著被子也不出汗。",
  clue:{en:"No sweating",zh:"無汗"},note:"No sweating with chills = <b>Wind-Cold</b> rather than Wind-Heat. 無汗屬風寒表實。"},
 {q:"What does the phlegm look like?",cq:"痰是什麼樣子？",good:1,
  a:"Thin and white, easy to spit out.",ca:"痰稀白，容易咳出來。",
  clue:{en:"Thin white phlegm",zh:"痰稀白"},note:"Thin white phlegm = <b>cold</b>. Thick yellow would mean heat. 痰稀白屬寒，黃稠屬熱。"},
 {q:"Does your head or neck ache?",cq:"頭項痛不痛？",good:1,
  a:"Yes — the back of my head and my neck feel stiff and sore.",ca:"後腦和脖子又緊又痛。",
  clue:{en:"Stiff head and neck",zh:"頭項強痛"},note:"Stiff occiput and neck = the <b>Taiyang</b> exterior. 頭項強痛為太陽表證。"},
 {q:"How is your appetite lately?",cq:"最近胃口如何？",good:0,
  a:"About the same as usual, I suppose.",ca:"跟平常差不多吧。",
  clue:"",note:"Reasonable to ask, but it adds nothing here — the illness is only three days old and on the surface. 問得合理，但此時無助辨證。"},
 {q:"Do you have night sweats and a dry throat at 3am?",cq:"半夜盜汗、咽乾嗎？",good:0,
  a:"No, nothing like that.",ca:"沒有這些。",
  clue:"",note:"These probe <b>Yin deficiency</b> — a chronic interior pattern, not a three-day exterior one. 此問屬陰虛內傷，與新病表證不符。"}
],
    look: [
 {t:"Pale-red body, thin white coating",c:"舌淡紅，苔薄白",ok:1,clue:{en:"Pale-red tongue, thin white coat",zh:"舌淡紅苔薄白"},
  note:"Correct. A near-normal body with a <b>thin white coat</b> = the pathogen is still on the <b>exterior</b> and has not turned to heat. 苔薄白＝病邪在表，未化熱。"},
 {t:"Red body, yellow greasy coating",c:"舌紅，苔黃膩",ok:0,
  note:"That would indicate <b>damp-heat</b> in the interior — the coating here is clearly thin and white. 黃膩苔主濕熱，與本案不符。"},
 {t:"Pale swollen body with teeth marks",c:"舌淡胖有齒痕",ok:0,
  note:"That suggests <b>Spleen Qi / Yang deficiency</b> with dampness — a chronic interior pattern. 齒痕舌主脾虛濕盛，屬內傷久病。"}
],
    pulse: [
 {t:"Floating and tight 浮緊",ok:1,clue:{en:"Floating, tight pulse",zh:"脈浮緊"},
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
    scene:{img:"art/scene-treatment.jpg", key:"river"}, // portrait clinic; key is the fallback
    pattern:"Cold-Damp obstructing the channels 寒濕痹阻經絡",
    principle:"warm the channels, dispel cold and damp, free the collaterals",
    tongue:"pale with a white moist coating",
    pulseNote:{en:"The beat is taut like a wire and does not yield under the finger; it is not fast.",zh:"脈來如按弓弦、繃緊不柔，然不數。"},
    needleAsk:{en:"The Four Command Points say: <b>for the head and neck, seek Lièquē</b>. Tap LU7.",zh:"四總穴歌云：頭項尋列缺。點出 LU7。"},
    target:{id:"LU7",zh:"列缺",py:"Lièquē",x:262,y:497,
      note:"<b>列缺 Lièquē LU7</b> — one of the Four Command Points: <i>for disorders of the head and nape, seek Lièquē</i>. A distal point for neck and upper-back stiffness.<br>四總穴之一：「頭項尋列缺」。項背強痛之遠端要穴。"},
    safety:{
      ask:{en:"Before you name a pattern — is this safe to keep evaluating in an acupuncture setting?",
           zh:"在辨證之前——這個病人適合繼續在針灸診間評估嗎？"},
      lead:{en:"You have three months of shoulder and upper-back pain in a man who works on cold water. Screen him first.",
            zh:"一位在冷水上工作的男子，肩背痛三個月。先做安全篩查。"},
      opts:[
 {t:"Ask about arm weakness, numbness, a cold or pale hand, and any loss of grip",
  c:"問手臂無力、麻木、手冷或蒼白、握力下降",ok:1,
  note:"Correct. Neurovascular change in the arm — weakness, numbness, a cold or discoloured hand, dropping things — can mean nerve root or thoracic-outlet compression, not a channel bi-syndrome. Old Wu reports none of these: strength, colour and sensation are normal.<br><b>Safe to continue.</b><br>手臂之神經血管改變（無力、麻木、手冷色變、持物脫落）提示神經根或胸廓出口受壓，非單純痹證。吳伯無此類見症，可續。"},
 {t:"Ask about fever, night sweats, unexplained weight loss, and pain that wakes him at night",
  c:"問發熱、盜汗、體重不明原因下降、夜間痛醒",ok:1,
  note:"Correct. Constant night pain that wakes a patient, with fever, sweats or weight loss, is a systemic red flag needing referral before any pattern work. Old Wu sleeps through, has no fever and his weight is steady.<br><b>Safe to continue.</b><br>夜間痛醒併發熱、盜汗、消瘦，屬全身性紅旗徵，須先轉介。吳伯夜能安睡、無熱、體重穩定，可續。"},
 {t:"Ask about chest pressure, breathlessness, sweating, or pain spreading to the jaw or left arm",
  c:"問胸悶、氣促、出汗、痛引下頜或左臂",ok:1,
  note:"Correct — and easy to forget. Left shoulder and upper-back pain can be referred cardiac pain, especially with exertion. Old Wu's pain is right-sided, purely mechanical, and unchanged by exertion of the heart. <b>Never treat a shoulder without excluding this.</b><br>左肩背痛可為心源性牽涉痛，尤其勞則加重者。吳伯痛在右側、純機械性，與心臟負荷無關。<b>肩痛必先排除此項。</b>"},
 {t:"Go straight to the tongue and pulse — the four examinations will reveal everything",
  c:"直接看舌切脈，四診自然會顯示一切",ok:0,
  note:"The four examinations are how we differentiate a <i>pattern</i>. They are not designed to catch a fracture, a tumour, a cardiac event or a nerve compression. In a licensed setting, safety screening comes first, then differentiation.<br>四診用以辨證，非用以排除骨折、腫瘤、心臟事件或神經壓迫。臨床應先安全篩查，再行辨證。"},
 {t:"He has worked three months in pain, so it is clearly chronic and clearly safe",
  c:"痛了三個月還在工作，顯然是慢性、顯然安全",ok:0,
  note:"Duration alone proves nothing. Serious pathology can smoulder for months, and people who cannot afford to stop working are exactly the people who ignore warning signs.<br>病程長短不足為據。重症可遷延數月；而無法停工者，往往正是忽略警訊的人。"}
],
      pass:{en:"No red flags. This is a musculoskeletal presentation you may differentiate and treat.",
            zh:"未見紅旗徵象。此為可辨證論治之筋骨經絡病症。"}
    },
    hints:{
 ask:{en:"A painful body asks three things: <b>where</b>, <b>what makes it better or worse</b>, and <b>how long</b>. Chase those, not the whole body.",zh:"痛症問三事：部位、緩解與加重、病程。抓這三條，別漫問全身。"},
 look:{en:"You are looking for <b>heat</b>. If it were heat, the skin would tell you before he did.",zh:"你在找熱。若真有熱，皮膚會比他先開口。"},
 pulse:{en:"Cold and pain make a pulse <b>tight</b>. Heat makes it <b>fast</b>. Emptiness makes it <b>weak</b>. Which did he describe?",zh:"寒與痛則脈緊，熱則脈數，虛則脈弱。他描述的是哪一個？"},
 dx:{en:"Ask in order: <b>hot or cold</b> → <b>channels or organ</b> → <b>which pathogen leads</b>. Do not skip a step.",zh:"依序問：寒熱 → 經絡或臟腑 → 何邪為主。不要跳。"},
 rx:{en:"A cold bi-syndrome takes <b>local</b> points where it hurts plus <b>one distal</b> point on a channel that reaches there.",zh:"寒痹取局部阿是，再配一個能達病所的遠端穴。"},
 tech:{en:"Cold and damp scatter with <b>warmth</b>. Ask which technique brings warmth.",zh:"寒濕得溫則散。想想哪一種手法帶來溫。"}
},
    reactions:[
 {who:"master",en:"Master Shen says nothing. He turns a page he has already read.",zh:"參師父沒說話。他翻了一頁早就讀過的書。"},
 {who:"patient",en:"Old Wu looks at his own hands. \"...is that what it is, then?\"",zh:"吳伯低頭看自己的手。「⋯⋯原來是這樣啊？」"},
 {who:"master",en:"\"Mm.\" Master Shen refills his tea very slowly.",zh:"「嗯。」參師父很慢地把茶添滿。"},
 {who:"boy",en:"The herb boy stops grinding. The pestle hangs in the air.",zh:"藥童停下手裡的杵。杵就那樣懸在半空。"},
 {who:"patient",en:"Old Wu shifts on the stool. \"You are the doctor,\" he says, kindly.",zh:"吳伯在凳上挪了挪。「您是大夫嘛。」他好意地說。"},
 {who:"master",en:"\"Read it again,\" Master Shen says. \"The river is not going anywhere.\"",zh:"「再讀一次。」參師父說，「河又不會跑。」"}
],
    remedy:{ask:"pain_quality",look:"cold_heat",pulse:"cold_heat",dx:"channel_organ",rx:"channel_organ",tech:"cold_heat"},
    reward:{cardEn:"The Four Command Points",cardZh:"四總穴歌",cardTxt:"For the belly, keep Zusanli. For the low back, seek Weizhong. For the head and nape, seek Lieque. For the face and mouth, Hegu will do.",herbId:"ganjiang",herbEn:"Dried Ginger",herbZh:"乾薑",herbImg:"art/herb-ganjiang.jpg",sprite:"art/sprite-renshen-jump.webp",herbTxt:"Acrid and hot — in TCM it is used to warm the interior and disperse cold. Old Wu takes it as a warm tea before the dawn crossing."},
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
  clue:{en:"Pain fixed in one place",zh:"痛處固定"},note:"Fixed pain suggests <b>cold</b> or <b>stasis</b>; wandering pain suggests <b>wind</b>. 痛處固定多屬寒或瘀；遊走不定多屬風。"},
 {q:"Is it better or worse with cold and with heat?",cq:"遇冷遇熱如何？",good:1,
  a:"Cold makes it much worse. A hot towel eases it every time.",ca:"遇冷重得多。熱毛巾一敷就鬆。",
  clue:{en:"Better with warmth",zh:"得溫則減"},note:"Relief from warmth is the single clearest sign of a <b>cold</b> pattern. 得溫則減，是辨寒證最直接的一條。"},
 {q:"Does the weather change it?",cq:"天氣會影響嗎？",good:1,
  a:"Before rain it aches deep and heavy, like the arm is full of water.",ca:"下雨前痠脹沉重，像手臂灌了水。",
  clue:{en:"Worse in wet weather, heavy feeling",zh:"陰雨加重、沉重感"},note:"Heaviness that tracks the weather is <b>damp</b>. 隨天氣加重且覺沉重者屬濕。"},
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
 {t:"Skin over the area is normal in colour, not red or swollen",c:"局部膚色如常，無紅腫",ok:1,clue:{en:"No local redness or swelling",zh:"局部無紅腫"},
  note:"Correct. No redness or swelling argues against <b>heat</b>. In a cold bi-syndrome the area looks unremarkable but feels cold and stiff. 無紅腫則非熱痹。寒痹外觀如常，然按之冷而僵。"},
 {t:"Skin is red, hot and visibly swollen",c:"局部紅腫灼熱",ok:0,
  note:"That would be a <b>heat</b> bi-syndrome — and this patient improves with a hot towel, which heat patterns do not. 此為熱痹；然本案得熱則減，熱痹不然。"},
 {t:"Muscles are visibly wasted with loose skin",c:"肌肉明顯萎縮、皮膚鬆弛",ok:0,
  note:"Long-standing deficiency would waste the muscles; three months of work-related pain has not. 久虛可見肌肉萎縮；本案病三月且仍勞作，未至於此。"}
],
    pulse:[
 {t:"Tight (wiry and tense) 弦緊",ok:1,clue:{en:"Wiry, tight pulse",zh:"脈弦緊"},
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
  ,"03": {
    id:"03", title:"The Teahouse Keeper", titleZh:"茶館的柳三娘",
    patient:{name:"Liu Sanniang 柳三娘", sprite:"girl"},
    scene:{img:"art/scene-treatment.jpg", key:"rain"},
    pattern:"Liver qi stagnation 肝鬱氣滯",
    principle:"course the Liver, move qi, and let the chest open",
    tongue:"normal body with a thin white coat",
    pulseNote:{en:"The beat is long and taut like a guitar string — you feel it press back along the whole length of your finger.",zh:"脈來端直以長，如按琴弦，指下有一路頂回之感。"},
    needleAsk:{en:"Between the two tendons, <b>2 cun above the wrist crease</b>. Tap Nèiguān PC6.",zh:"兩筋之間，腕橫紋上二寸。點出內關 PC6。"},
    target:{id:"PC6",zh:"內關",py:"Nèiguān",x:288,y:478,
      note:"<b>內關 Nèiguān PC6</b> — 2 cun proximal to the wrist crease, between the tendons of palmaris longus and flexor carpi radialis. Luo-connecting point of the Pericardium and confluent point of the Yin Wei vessel: it opens the chest, regulates qi, calms the spirit and settles nausea.<br>腕橫紋上二寸，掌長肌腱與橈側腕屈肌腱之間。心包絡穴、八脈交會通陰維：寬胸理氣、寧心安神、和胃止嘔。"},
    reward:{cardEn:"The Four Gates",cardZh:"四關穴",cardTxt:"Hegu LI4 and Taichong LR3, needled together. The classic pair for moving stagnant qi through the whole body when emotion is the cause.",
            herbId:"meiguihua",herbEn:"Rose Bud",herbZh:"玫瑰花",herbTxt:"Sweet, slightly bitter, warm. In TCM it gently courses Liver qi and harmonises the blood — light enough to drink as a daily tea."},
    reactions:[
 {who:"master",en:"Master Shen watches her hands, not her face.",zh:"參師父看的是她的手，不是她的臉。"},
 {who:"patient",en:"\"It's nothing,\" Sanniang says quickly. \"Everyone is tired.\"",zh:"「沒什麼，」三娘很快地說，「誰不累呢。」"},
 {who:"master",en:"\"Ask again,\" he says. \"She will not volunteer it.\"",zh:"「再問一次。」他說，「她不會自己講。」"},
 {who:"boy",en:"The herb boy pretends to be very busy with the scales.",zh:"藥童假裝在很忙地弄那把秤。"},
 {who:"patient",en:"Sanniang sighs — a long one — and looks faintly embarrassed about it.",zh:"三娘嘆了口長氣，又為這口氣有點不好意思。"},
 {who:"master",en:"\"You are treating the symptom she named. Find the one she did not.\"",zh:"「你在治她說出口的那個。去找她沒說的那個。」"}
],
    remedy:{ask:"excess_def",look:"cold_heat",pulse:"cold_heat",dx:"channel_organ",rx:"channel_organ",tech:"excess_def"},
    hints:{
 ask:{en:"When a complaint <b>changes with mood</b> and the patient sighs, ask about the chest, the sides of the ribs, the throat, and the cycle.",zh:"症狀隨情緒起伏、且見太息者，當問胸脅、咽喉、月經。"},
 look:{en:"In pure qi stagnation the tongue is often unremarkable. That absence is itself information.",zh:"單純氣滯，舌多無明顯變化。無變化本身即是訊息。"},
 pulse:{en:"One pulse quality is named in every textbook as the Liver's own. Feel for length and tension, not speed.",zh:"肝之本脈，各書皆同。當察其長與緊張，非察其遲數。"},
 dx:{en:"Ask in order: is it excess or deficiency → which organ governs the free flow of qi → has it moved into blood or fire yet?",zh:"依序問：虛實 → 何臟主疏泄 → 是否已及血分或化火。"},
 rx:{en:"Course the Liver and open the chest. Think of the pair that opens the four gates, plus a point that frees the ribs.",zh:"疏肝寬胸。想那對開四關的穴，再配一個能利脅肋的。"},
 tech:{en:"Stagnation is an excess of the wrong movement, not an emptiness. Move it — do not fill it.",zh:"氣滯者，行之不暢，非虛也。當行不當補。"}
},
    safety:{
      ask:{en:"Before you name a pattern — is this safe to keep evaluating in an acupuncture setting?",zh:"在辨證之前——這個病人適合繼續在針灸診間評估嗎？"},
      lead:{en:"A woman of thirty-four with three months of chest and rib tightness, a lump sensation in the throat, and a recent bereavement. Screen her first.",zh:"三十四歲女子，胸脅悶脹三月，咽中如有物，近喪父。先做安全篩查。"},
      opts:[
 {t:"Ask whether the throat sensation blocks swallowing food or water, and whether she is losing weight",
  c:"問咽中之感是否妨礙吞嚥、有無體重減輕",ok:1,
  note:"Correct, and essential. Globus (plum-pit qi) is a <b>sensation</b> with normal swallowing. True dysphagia — food or liquid actually sticking — plus weight loss requires referral before anything else. Sanniang swallows normally and her weight is steady.<br><b>Safe to continue.</b><br>梅核氣為咽中異物之感而吞嚥如常。若真見吞嚥困難併消瘦，須先轉介。三娘吞嚥自如、體重穩定，可續。"},
 {t:"Ask about chest pressure on exertion, breathlessness, palpitations at rest, or pain into the jaw or left arm",
  c:"問勞則胸悶、氣促、靜時心悸、痛引下頜或左臂",ok:1,
  note:"Correct. Chest tightness is never automatically emotional. Cardiac and respiratory causes must be excluded first — and women's cardiac presentations are more often atypical. Hers is worse with frustration, better after a sigh, and unchanged by climbing stairs.<br><b>Safe to continue.</b><br>胸悶不可徑作情志論。當先排除心肺之因，女性心臟見症尤多不典型。本案遇怒則甚、太息則舒、登樓不變。"},
 {t:"Ask directly about her mood, sleep, appetite, and whether she has had thoughts of harming herself",
  c:"直接問情緒、睡眠、食慾，以及有無自傷念頭",ok:1,
  note:"Correct — and it belongs in the safety screen, not only in the pattern. Three months of grief with somatic complaints is exactly when to ask plainly and kindly. She is grieving and exhausted, sleeps poorly, and is clear that she has no such thoughts. Asking did not plant the idea; it opened a door.<br>喪親三月而見身心症狀，正當直問而溫問。此問不會種下念頭，只是開了一扇門。"},
 {t:"The pulse is wiry, so the pattern is already clear — proceed to point selection",
  c:"脈弦即可定證，直接選穴",ok:0,
  note:"A wiry pulse appears in Liver patterns, in pain, in phlegm, and in perfectly serious biomedical disease. One pulse quality never closes a case, and it certainly never clears a safety screen.<br>弦脈見於肝病、痛證、痰飲，亦見於重症。一脈不足以定案，更不足以代替安全篩查。"},
 {t:"She is young and otherwise healthy, so serious disease is unlikely",
  c:"年輕體健，重症機率低",ok:0,
  note:"Base rates are not a screen. \"Unlikely\" is a reason to ask quickly, not a reason to skip asking.<br>機率低不等於已排除。低機率是快問的理由，不是不問的理由。"}
],
      pass:{en:"No red flags. This is a pattern you may differentiate and treat.",zh:"未見紅旗徵象。可辨證論治。"}
    },
    endings:{
      three:["A month later the teahouse has a new girl carrying trays, and Sanniang is sitting down while she works.<br>\"The tightness comes back when the accounts are due,\" she says, \"but it goes again.\"<br><b>Master Shen:</b> \"You did not tell her to stop grieving. You gave the qi somewhere to go. That is the whole art.\"","一個月後，茶館多了個端盤的小姑娘，三娘做事時會坐下來了。<br>「對帳的時候還是會悶，」她說，「但會過去。」<br><b>參師父：</b>「你沒有叫她別難過。你只是讓氣有地方可去。醫道盡於此矣。」"],
      two:["Sanniang breathes more easily, though the lump in her throat returns on bad days.<br><b>Master Shen:</b> \"Better. But you reached for the throat when the problem was in the ribs. Follow the qi upstream next time.\"","三娘呼吸鬆了些，心緒不佳時咽中仍有物感。<br><b>參師父：</b>「好些了。可你去治咽，病在脅。下次要循氣而上溯。」"],
      one:["Sanniang thanks you, pays, and goes back to the teahouse. She is still sighing at the door.<br><b>Master Shen:</b> \"She came for her chest and left with her chest. Read it again.\"","三娘道了謝，付了錢，回茶館去了。走到門口還在嘆氣。<br><b>參師父：</b>「她為胸悶而來，帶著胸悶而去。再讀一次。」"],
      titles:["Sanniang Sits Down","Sanniang Breathes Easier","Sanniang Still Sighs"]
    },
    script:[
 {w:"master",en:"The teahouse on the corner buried its old master three months ago. His daughter runs it now, and she has not stopped moving since.",cn:"街角那間茶館，三個月前送走了老掌櫃。如今是他女兒在撐，自那日起沒歇過。"},
 {w:"patient",en:"Doctor. I am Liu, the third daughter — everyone calls me Sanniang. My chest has been tight for about three months.",cn:"大夫。我姓柳，行三，人都叫我三娘。胸口悶了大概三個月。"},
 {w:"patient",en:"It is not a pain exactly. It is like something is pressing out from the inside, here, along the ribs. And there is a feeling in my throat, as if I had swallowed something small that will not go down.",cn:"也不是痛。是像有東西從裡面往外撐，就這兒，順著肋骨。喉嚨裡還有個感覺，像吞了個小東西下不去。"},
 {w:"patient",en:"It is worse when the accounts do not balance. It is better after I sigh. I know that sounds foolish.",cn:"帳對不上的時候更悶。嘆口氣就鬆些。我知道這話聽著傻。"},
 {w:"master",en:"It does not sound foolish. It sounds like a diagnosis. — Ask her properly. And remember: what a patient calls nothing is often the whole case.",cn:"這話不傻，這話是診斷。——好好問診。記住：病人說「沒什麼」的地方，往往就是整個病案。"}
],
    qa:[
 {q:"Does the tightness move about, or stay in one fixed spot?",cq:"悶脹是走動的，還是固定一處？",good:1,
  a:"It moves. Some days the ribs, some days across the chest, some days both sides.",ca:"會走。有時在肋，有時滿胸，有時兩邊都有。",
  clue:{en:"Distending pain that moves",zh:"脹痛遊走不定"},note:"<b>Distending</b> and <b>moving</b> is the signature of qi stagnation. Fixed stabbing pain would tell you blood stasis instead. 脹而走竄者，氣滯也；刺痛固定者，血瘀也。"},
 {q:"Does it change with your mood?",cq:"與情緒有關嗎？",good:1,
  a:"...Yes. When I am angry or worried it is much worse. After a good sigh it eases.",ca:"⋯⋯有。生氣或煩心時重得多，好好嘆一口就鬆。",
  clue:{en:"Worse with emotion, better after sighing",zh:"遇情志加重，太息則舒"},note:"Relief from sighing is close to pathognomonic for Liver qi constraint — the sigh is the body forcing qi to move. 善太息而舒者，肝鬱之徵；嘆息即身自行其氣。"},
 {q:"Tell me about your cycle — timing, and how you feel in the days before it.",cq:"月經如何？經前數日有何感覺？",good:1,
  a:"Irregular since the funeral. The few days before, my breasts ache and I am short with everyone.",ca:"喪事之後就不準了。經前幾天乳房脹痛，脾氣也差。",
  clue:{en:"Breast distension and irritability before menses",zh:"經前乳脹、煩躁"},note:"The Liver channel traverses the breast and the Liver governs the free flow of qi and blood; premenstrual breast distension is one of its clearest signs. 肝經布脅絡乳，主疏泄；經前乳脹為肝鬱之顯徵。"},
 {q:"Do you have burning pain in the stomach, sour reflux, and a bitter taste on waking?",cq:"胃脘灼痛、泛酸、晨起口苦？",good:0,
  a:"No. It is only tight, never burning — and there is no sour taste. I eat little, but that is grief, not my stomach.",ca:"沒有。只是悶，不燒，也不泛酸。吃得少，是心裡的事，不是胃。",
  clue:"",note:"Reasonable to screen — constrained qi does often invade the Stomach. But she reports none of it, and there is no heat anywhere in this picture yet. 篩查合理；肝鬱確可犯胃，然本案無此見症，亦未見熱象。"},
 {q:"Do you have night sweats, five-centre heat, and a dry mouth at night?",cq:"盜汗、五心煩熱、夜間口乾？",good:0,
  a:"No. I sleep badly and wake at two or three, but I do not wake wet, and my mouth is not dry.",ca:"沒有。睡不好，兩三點就醒，但不盜汗，口也不乾。",
  clue:"",note:"These probe Yin deficiency. Her problem changes hour by hour with her mood — deficiency does not behave that way. 此問屬陰虛。本案隨情緒時輕時重，虛證不如此。"},
 {q:"Is there a fixed stabbing pain, worse at night, with dark clots in the flow?",cq:"痛如針刺、固定不移、夜間加重、經有紫塊？",good:0,
  a:"It is not sharp. More like a hand pressing on me. And no — the flow is much as it always was.",ca:"不是刺痛，倒像被一隻手壓著。經血也和平常差不多。",
  clue:"",note:"That is blood stasis — often where long-standing qi stagnation ends up, but her pain still moves and there are no clots. Not yet. 此為血瘀，久鬱可致；然本案痛尚走竄、經無血塊，未及血分。"}
],
    look:[
 {t:"Tongue body normal in colour, thin white coat, nothing striking",c:"舌色如常、苔薄白，無明顯異常",ok:1,clue:{en:"Unremarkable tongue, thin white coat",zh:"舌淡紅苔薄白"},
  note:"Correct — and the absence matters. Pure qi stagnation has not yet damaged blood, fluids or yin, so the tongue stays quiet. A purple body would mean stasis; a red body with yellow coat would mean it had turned to fire. 是。純氣滯未傷血、津、陰，故舌象平平。舌紫則瘀，舌紅苔黃則化火。"},
 {t:"Tongue body dark purple with stasis spots",c:"舌質紫暗、有瘀斑",ok:0,
  note:"That is blood stasis. Her pain still moves and there are no clots — the stagnation has not gone that deep. 此為血瘀。本案痛尚走竄、經無血塊，未至於此。"},
 {t:"Red tongue with a dry yellow coat and red edges",c:"舌紅、苔黃燥、邊尖紅",ok:0,
  note:"That would be constrained qi transforming into fire — she would be openly irritable, bitter-mouthed and red-eyed. She is not, yet. 此為氣鬱化火，當見急躁、口苦、目赤。本案未然。"}
],
    pulse:[
 {t:"Wiry 弦",ok:1,clue:{en:"Wiry pulse",zh:"脈弦"},
  note:"Correct. Long, straight and taut like a pressed string — the Liver's own pulse, and the single most reliable objective sign in this case. 端直以長，如按琴弦。肝之本脈，本案最可憑之客觀徵象。"},
 {t:"Slippery and rapid 滑數",ok:0,
  note:"That is phlegm-heat. There is no heat and no phlegm signs here. 此為痰熱，本案無熱無痰。"},
 {t:"Thready and weak 細弱",ok:0,
  note:"That is deficiency. Her complaint waxes and wanes with emotion and resists pressure — an excess of blocked movement, not emptiness. 此為虛象。本案隨情志起伏、脹而拒按，屬實非虛。"}
],
    dx:[
 {ask:'Step 1 — Eight Principles. Excess or deficiency?<br><small class="zh" style="color:var(--ink-soft)">八綱：虛實何屬？</small>',
  opts:[{t:"Excess — qi is blocked, not lacking",c:"實 — 氣滯非氣虛",ok:1,
         note:"Distending pain that resists pressure, a wiry (forceful) pulse, and symptoms that surge with emotion are all excess. Deficiency would bring dull aching that welcomes pressure and worsens with exertion. 脹而拒按、脈弦有力、隨情緒而作，皆屬實。虛則隱痛喜按、動則加重。"},
        {t:"Deficiency — the Liver blood is empty",c:"虛 — 肝血不足",ok:0,note:"Liver blood deficiency gives dry eyes, blurred vision, numb limbs, scanty pale menses and a thin pulse. None of that is here. 肝血虛見目乾、視糊、肢麻、經少色淡、脈細。本案皆無。"},
        {t:"Excess heat — it has already become fire",c:"實熱 — 已化火",ok:0,note:"Fire would show: red face, red eyes, bitter mouth, headache, thirst, rapid pulse. Her tongue and pulse are quiet apart from the wiry quality. 化火當見面紅目赤、口苦、頭痛、口渴、脈數。本案除弦脈外，舌脈俱靜。"}]},
 {ask:'Step 2 — Which organ governs the free flow of qi?<br><small class="zh" style="color:var(--ink-soft)">主疏泄者，何臟？</small>',
  opts:[{t:"The Liver 肝",c:"肝主疏泄",ok:1,
         note:"Correct. The Liver governs coursing and discharge — the smooth movement of qi through the whole body, and with it the emotions. Its channel runs through the hypochondrium, the breast and the throat, which is precisely where her symptoms are. 肝主疏泄，暢達全身氣機，並司情志。其經布脅、絡乳、循喉，正合本案病位。"},
        {t:"The Lung 肺",c:"肺主氣",ok:0,note:"The Lung governs qi and respiration and does rule the chest — but there is no cough, no phlegm, no change in breathing, and the trigger is emotional, not external. 肺主氣司呼吸，然本案無咳無痰、呼吸如常，且因情志而起，非外邪。"},
        {t:"The Heart 心",c:"心主神明",ok:0,note:"The Heart houses the spirit and would give palpitations, insomnia with dream-disturbed sleep, and a flustered mind. Her spirit is grieving but her chest complaint is distending and positional along the ribs. 心藏神，當見心悸、多夢、心煩。本案胸脅脹滿，病位在脅。"}]},
 {ask:'Step 3 — Has it gone further than qi?<br><small class="zh" style="color:var(--ink-soft)">是否已及血分或化火？</small>',
  opts:[{t:"No — still qi stagnation alone 單純氣滯",c:"僅在氣分",ok:1,
         note:"Correct. Moving distension, an unremarkable tongue, no clots, no heat signs — the constraint is still at the qi level. This is the moment it is easiest to treat, and the moment patients least often come in. 脹而走竄、舌象平平、經無血塊、無熱象，病仍在氣分。此時最易治，而病人最少來。"},
        {t:"Yes — it has become blood stasis 已成血瘀",c:"已及血分",ok:0,note:"Stasis brings fixed stabbing pain, worse at night, dark clots and a purple tongue. Three months of moving distension has not yet arrived there. 血瘀當見刺痛固定、夜甚、血塊、舌紫。三月脹痛走竄，未至於此。"},
        {t:"Yes — it has transformed into fire 已化火",c:"已化火",ok:0,note:"Fire would be loud: temper, bitter mouth, red eyes, headache, rapid pulse. Hers is quiet and inward. 化火其症必顯：急躁、口苦、目赤、頭痛、脈數。本案內斂而靜。"}]}
],
    rx:[
 {id:"LR3",t:"Tàichōng LR3 太衝",ok:1,note:"Yuan-source point of the Liver. The single most direct point for coursing constrained Liver qi, and half of the Four Gates. 肝之原穴。疏肝理氣最直捷之穴，四關之一。"},
 {id:"LI4",t:"Hégǔ LI4 合谷",ok:1,note:"With LR3 this forms the Four Gates — one above and one below, one yang and one yin — the classic pairing to move qi through the whole body. 與太衝合為四關，一上一下、一陽一陰，行氣通身之經典配伍。"},
 {id:"PC6",t:"Nèiguān PC6 內關 (distal)",ok:1,note:"Opens the chest, regulates qi and calms the spirit; the point of choice for chest oppression and plum-pit qi with an emotional cause. 寬胸理氣、寧心安神。胸悶、梅核氣屬情志者首選。"},
 {id:"ST36",t:"Zúsānlǐ ST36 足三里",ok:0,note:"A superb tonifying point — which is the problem. This is an excess of blocked movement; tonifying adds to what is already stuck. 大補之穴，然本案為實滯，補之則愈壅。"},
 {id:"KI3",t:"Tàixī KI3 太溪",ok:0,note:"Nourishes Kidney yin. There is no yin deficiency here — no night sweats, no five-centre heat, no thin rapid pulse. 滋腎陰。本案無盜汗、五心煩熱、脈細數，非陰虛。"},
 {id:"LU7",t:"Lièquē LU7 列缺",ok:0,note:"Releases the exterior and benefits the head and nape. Her problem is internal and emotional, not an exterior invasion. 解表、利頭項。本案為內傷情志，非外感。"}
],
    tech:[
 {t:"Even movement, reducing method 平補平瀉偏瀉，行氣為主",ok:1,
  note:"Correct. Stagnation is moved, not filled and not violently drained. A moderate reducing technique with attention to obtaining qi lets the constraint release without exhausting a grieving, already-tired patient. 氣滯當行。用瀉法而不過，重在得氣行氣，既解其鬱，又不傷其本已疲之正。"},
 {t:"Strong reinforcing method with moxa 大補法加艾灸",ok:0,
  note:"Tonifying an excess feeds the blockage, and warmth is not what stuck qi needs — that is the treatment for cold or deficiency. 實而補之，反助其壅；且溫補非治氣滯之法，乃治寒治虛之法。"},
 {t:"Bleed the local points on the ribs 脅肋局部刺絡放血",ok:0,
  note:"Bleeding drains heat and marked blood stasis. There is neither here, and it would be an unnecessarily invasive first move in a patient who is already depleted by grief. 刺絡放血泄熱化瘀。本案無熱無瘀，且病人新喪體疲，不宜首用此峻法。"}
]
  }
};
