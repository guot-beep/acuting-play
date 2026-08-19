/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/pointstory.js
   點穴堂 · The Point Hall — one visit per point

   Companion to data/points.js. That file is the reference: name,
   channel, category, location. THIS file is the teaching: a short
   scene in which the point is actually used, then three questions.

   THE RULE THAT SHAPES EVERY ENTRY
   Ting's instruction: 「請寫故事時 考這些穴位也加深這些穴位的功效應用」
   So the questions never stop at "where is it". Each visit asks:
     q1  application — why would you reach for this point at all
     q2  differentiation — this point versus the one beside it
     q3  the caution, the classic line, or the category that explains it
   A student who can point at Hegu but cannot say why has half a fact.

   LANGUAGE RULE — English first, Chinese only inside .zh spans.

   Contract:
     id     must match an id in data/points.js
     region hand | leg | back | head   (groups the hall's shelves)
     beats  [{en,zh}]  the scene, tapped through one at a time
     qs     [{q,cq,opts:[{t,c,ok,note}]}]
     card   {en,zh}  the line the player keeps

   Adding a point is a data edit. No code changes.
   ═══════════════════════════════════════════════════════════════ */
window.AG_POINTSTORY = [

/* ══════════════ HAND & ARM 手 ══════════════ */

{ id:"LI4", region:"hand",
  beats:[
    {en:"A carter comes in holding his jaw. A back tooth has been aching since the night before, and now the whole side of his face feels hot and tight.",
     zh:"一位車夫捂著下巴進來。後槽牙從昨夜疼到現在，如今半邊臉又熱又脹。"},
    {en:"Shen Yi does not touch his face. She takes his hand instead, and presses into the web between thumb and index finger, on the second metacarpal.",
     zh:"沈醫師並不碰他的臉，反而握起他的手，按在拇指與食指之間、第二掌骨橈側。"},
    {en:"\"The face and the mouth are far from the hand,\" she says, \"and that is exactly the point. A channel carries treatment along its whole length. What I press here arrives up there.\"",
     zh:"「面口離手甚遠，」她說，「這正是道理所在。經脈通其全程，我按在此處，力達彼處。」"}
  ],
  qs:[
    {q:"The carter has toothache and facial heat. Why does Shen Yi choose Hegu rather than a point on the face?",
     cq:"車夫牙痛面熱，沈醫師為何取合谷而不取面部穴？",
     opts:[
      {t:"Because Large Intestine channel qi reaches the face, so a distal point on that channel can move stagnation and stop pain there",
       c:"因手陽明大腸經上行頭面，遠端取穴可行氣通經、止其痛",ok:true,
       note:"<b>Correct.</b> This is distal point selection 遠端取穴. Hegu is the Source point 原穴 of the Large Intestine channel, and that channel ends at the face — so it treats the face and mouth from the hand."},
      {t:"Because points on the hand are safer than points on the face",
       c:"因手上穴位比面部穴位安全",ok:false,
       note:"Safety is not the reasoning here. The choice is <b>channel logic</b>: the Large Intestine channel travels to the face, so its Source point acts there."},
      {t:"Because Hegu is a local point for the tooth",
       c:"因合谷為牙齒之局部穴",ok:false,
       note:"Hegu is the opposite of local — it is far from the complaint. That distance is the teaching."}
     ]},
    {q:"Another patient has a stiff neck and cannot turn her head. Would Hegu be your first choice?",
     cq:"另一位病人項強不能轉側，合谷是首選嗎？",
     opts:[
      {t:"No — Houxi SI3 suits that better, because it opens the Governing Vessel that runs up the back and neck",
       c:"否——當取後谿。後谿通督脈，督行於項背",ok:true,
       note:"<b>Correct.</b> Hegu governs the <b>face and mouth</b>; Houxi 後谿 opens the Du channel and governs the <b>neck and spine</b>. Same hand, different territory."},
      {t:"Yes — Hegu treats all pain anywhere in the body",
       c:"是——合谷可治全身一切痛",ok:false,
       note:"Hegu is a broad analgesic point, but \"broad\" is not \"everywhere\". The command line is specific: <b>面口合谷收</b> — the face and mouth."},
      {t:"Yes — every upper-body problem is treated on the hand",
       c:"是——上半身諸疾皆取於手",ok:false,
       note:"Too loose. Point choice follows the <b>channel</b> that reaches the complaint, not simply the half of the body."}
     ]},
    {q:"A woman who is four months pregnant asks for the same treatment. What do you do?",
     cq:"一位懷孕四月的婦人求同樣的治療，當如何？",
     opts:[
      {t:"Do not needle Hegu — it moves qi and blood strongly downward and is contraindicated in pregnancy",
       c:"不針合谷——其行氣活血力強，孕婦禁針",ok:true,
       note:"<b>Correct, and this is the half students forget.</b> Hegu is classically contraindicated in pregnancy, and is often named alongside SP6 三陰交 for the same reason. Knowing when <i>not</i> to use a point is knowing the point."},
      {t:"Needle it, but shallowly",
       c:"淺刺即可",ok:false,
       note:"Depth does not remove the contraindication. In a teaching setting the safe answer is to choose a different point entirely."},
      {t:"Needle the other hand instead",
       c:"改針對側",ok:false,
       note:"The contraindication is about the point, not the side."}
     ]}
  ],
  card:{en:"For the face and mouth, Hegu will do — and in pregnancy, Hegu you leave alone.",
        zh:"「面口合谷收」；然孕婦禁針，不可不記。"} },

{ id:"SI3", region:"hand",
  beats:[
    {en:"A scribe wakes with his neck locked to one side. He can look down, he can look up a little, but turning is impossible.",
     zh:"一位書吏晨起落枕，頭偏向一側。俯仰尚可，左右轉動則不能。"},
    {en:"\"Make a loose fist,\" Shen Yi says. She finds the crease behind the little-finger knuckle, where red flesh meets white.",
     zh:"「輕輕握拳。」沈醫師取小指掌指關節後之橫紋盡處，赤白肉際間。"},
    {en:"\"Now turn your head — slowly — while the needle is in.\" The scribe turns further than he has all morning, and looks surprised about it.",
     zh:"「留針時慢慢轉頭。」書吏一轉，竟比整個早晨都轉得遠，面露訝色。"}
  ],
  qs:[
    {q:"Why does Houxi help a neck that will not turn?",
     cq:"後谿何以能治項強不能轉側？",
     opts:[
      {t:"It is one of the Eight Confluent points and opens the Governing Vessel, which runs up the spine and neck",
       c:"為八脈交會穴，通督脈；督脈行於脊項",ok:true,
       note:"<b>Correct.</b> 後谿通督脈. Open the Du channel from the hand and you reach the whole length of the back."},
      {t:"It is the Source point of the Small Intestine channel",
       c:"為小腸經原穴",ok:false,
       note:"Houxi is the <b>Stream point 輸穴</b>. The Source point 原穴 of the Small Intestine is Wangu SI4. The Du-opening property is what matters here."},
      {t:"It is a local point for the shoulder",
       c:"為肩部局部穴",ok:false,
       note:"It is on the hand — distal, not local."}
     ]},
    {q:"Shen Yi asks the scribe to move his neck while the needle rests in place. What is this technique called, and why use it?",
     cq:"沈醫師令其留針時活動頸項，此法為何？何以用之？",
     opts:[
      {t:"Moving needle technique 動氣針法 — the movement guides qi to the affected area while the distal point is stimulated",
       c:"動氣針法——遠端行針，令患部活動，導氣至病所",ok:true,
       note:"<b>Correct.</b> With distal points on the extremities, asking the patient to move the painful region while needling is a standard way to bring the effect to the site."},
      {t:"It tests whether the needle is deep enough",
       c:"用以試針之深淺",ok:false,
       note:"No — movement is therapeutic here, not diagnostic."},
      {t:"It distracts the patient from the needle",
       c:"用以分散病人注意",ok:false,
       note:"Comfort may improve, but the reason is channel activation, not distraction."}
     ]},
    {q:"A second patient has one-sided headache with pain behind the ear and along the side of the skull. Is Houxi still your point?",
     cq:"另一病人偏頭痛，痛在耳後及頭側，仍取後谿否？",
     opts:[
      {t:"No — the side of the head is Shaoyang territory, so GB20, GB8 or Taiyang fit better",
       c:"否——頭側屬少陽，當取風池、率谷或太陽",ok:true,
       note:"<b>Correct.</b> Match the region to the channel: <b>back of head and spine → Taiyang / Du</b>; <b>side of head → Shaoyang</b>; <b>forehead → Yangming</b>."},
      {t:"Yes — Houxi treats all headaches",
       c:"是——後谿治一切頭痛",ok:false,
       note:"Houxi's reach follows the Du and Taiyang route: <b>occiput, neck, spine</b>. A temporal headache belongs to a different channel."},
      {t:"Yes — all headaches are treated distally on the hand",
       c:"是——頭痛皆遠取於手",ok:false,
       note:"Distal treatment is right in principle, but <i>which</i> distal point depends on the channel involved."}
     ]}
  ],
  card:{en:"Houxi opens the Governing Vessel — so from the hand it reaches the neck, the spine, and the whole length of the back.",
        zh:"後谿通督脈，故一穴而及項、脊、背之全程。"} },

{ id:"TE3", region:"hand",
  beats:[
    {en:"A young weaver keeps rubbing her ear. It rings, faintly and constantly, and by evening the side of her head aches with it.",
     zh:"一位年輕織婦不住揉耳。耳中細鳴不絕，入夜則頭側亦痛。"},
    {en:"Shen Yi presses in the depression just behind the knuckles of the fourth and fifth fingers, on the back of the hand.",
     zh:"沈醫師按其手背第四、五掌指關節後之凹陷處。"},
    {en:"\"The Triple Burner channel climbs the arm, circles the ear, and ends at the brow,\" she says. \"When the ear complains, ask the channel that goes there.\"",
     zh:"「三焦經上行於臂，繞耳而終於眉梢，」她說，「耳有所苦，當問行經其地之經。」"}
  ],
  qs:[
    {q:"Why is Zhongzhu chosen for ringing in the ears and one-sided head pain?",
     cq:"耳鳴與頭側痛，何以取中渚？",
     opts:[
      {t:"The Triple Burner channel travels to the ear and temple, and TE3 is its Stream point — good for clearing along that route",
       c:"手少陽三焦經行至耳、顳；中渚為輸穴，善清其經之滯",ok:true,
       note:"<b>Correct.</b> TE3 中渚 is the <b>Stream point 輸穴</b> of the Triple Burner. Classic uses: tinnitus, deafness, temporal headache, sore throat, pain along the arm."},
      {t:"Because it is the Source point of the Small Intestine channel",
       c:"因其為小腸經原穴",ok:false,
       note:"Wrong channel. TE3 belongs to the <b>Triple Burner 手少陽三焦經</b>."},
      {t:"Because all ear problems are treated on the hand",
       c:"因耳疾皆取於手",ok:false,
       note:"Not a rule. TE17 翳風, directly behind the earlobe, is the local point most often paired with it."}
     ]},
    {q:"Which point would you most naturally pair with TE3 for this ear complaint?",
     cq:"治此耳疾，最宜與中渚相配者為何？",
     opts:[
      {t:"TE17 Yifeng — the local point right behind the earlobe, on the same channel",
       c:"翳風——耳垂後之局部穴，同屬三焦經",ok:true,
       note:"<b>Correct.</b> This is <b>local plus distal 局部配遠端</b> on one channel: TE17 at the ear, TE3 at the hand."},
      {t:"ST36 Zusanli",c:"足三里",ok:false,
       note:"ST36 tonifies and strengthens; it is not aimed at the ear. Useful in a deficiency picture, but not the pairing being taught here."},
      {t:"BL40 Weizhong",c:"委中",ok:false,
       note:"BL40 governs the lower back and the Bladder channel — a different region entirely."}
     ]},
    {q:"The weaver mentions the ringing began suddenly, is loud, and worsens when she is angry. What pattern does this suggest?",
     cq:"其鳴驟起、聲大，遇怒則甚，屬何證？",
     opts:[
      {t:"An excess pattern — Liver and Gallbladder fire rising, so clearing points suit; LR3 would pair well",
       c:"實證——肝膽火升，宜清；可配太衝",ok:true,
       note:"<b>Correct.</b> Sudden, loud, worse with anger points to <b>excess</b>. Gradual, faint, worse with fatigue points to <b>Kidney deficiency</b>, where KI3 太谿 would be the pairing instead."},
      {t:"A deficiency pattern — Kidney essence failing to reach the ear",
       c:"虛證——腎精不足，耳失所養",ok:false,
       note:"That picture is real, but it comes on <b>gradually</b>, the sound is faint, and it worsens with exhaustion — not with anger."},
      {t:"An exterior invasion of wind-cold",
       c:"風寒外襲",ok:false,
       note:"Nothing here suggests an exterior pattern — no chills, no fever, no recent onset with aversion to cold."}
     ]}
  ],
  card:{en:"Zhongzhu is the Stream point of the Triple Burner — the hand point for an ear that rings and a temple that aches.",
        zh:"中渚，三焦經輸穴。耳鳴頭側痛，取之於手。"} },

{ id:"LI5", region:"hand",
  beats:[
    {en:"A cooper has been driving hoops all week. Now the thumb side of his wrist hurts when he lifts, and there is a hot fullness in the hollow at the base of the thumb.",
     zh:"一位箍桶匠終週打箍，如今提物則腕之橈側作痛，拇指根凹陷處有熱脹之感。"},
    {en:"Shen Yi has him raise his thumb. Two tendons stand up, and between them a small depression appears — the anatomical snuffbox.",
     zh:"沈醫師令其翹起拇指，兩筋隆起，中現小陷——即所謂鼻煙窩。"},
    {en:"\"Right in the hollow,\" she says. \"Same channel as Hegu, one station further along. Where Hegu sends its work to the face, this one stays and tends the wrist.\"",
     zh:"「正在陷中。」她說，「與合谷同經，僅上一站。合谷之力達於面，此穴則守而治腕。」"}
  ],
  qs:[
    {q:"What kind of point is Yangxi, and what does that tell you about its use?",
     cq:"陽谿為何類穴？由此可知其用為何？",
     opts:[
      {t:"It is the River point 經穴 of the Large Intestine channel — River points classically treat cough, wheeze, chills and fever, and here it also serves as a local wrist point",
       c:"手陽明大腸經之經穴。經穴主喘咳寒熱；在此又為腕部局部穴",ok:true,
       note:"<b>Correct.</b> In the Five Shu 五輸穴 sequence, the River point 經穴 governs <b>喘咳寒熱</b>. Its position at the wrist also makes it the local point for radial wrist pain."},
      {t:"It is the Source point of the Large Intestine channel",
       c:"為大腸經原穴",ok:false,
       note:"The Source point 原穴 of the Large Intestine is <b>Hegu LI4</b>. Yangxi is the River point 經穴."},
      {t:"It is the Cleft point of the Large Intestine channel",
       c:"為大腸經郄穴",ok:false,
       note:"The Cleft point 郄穴 of the Large Intestine is <b>Wenliu LI7</b>."}
     ]},
    {q:"The Five Shu points run in a fixed order from the fingertip inward. What is that order?",
     cq:"五輸穴自指端向上，其序為何？",
     opts:[
      {t:"Well 井 · Spring 滎 · Stream 輸 · River 經 · Sea 合",
       c:"井、滎、輸、經、合",ok:true,
       note:"<b>Correct.</b> The classic image is water: a well appears, becomes a spring, a stream, a river, and finally joins the sea. Qi grows in volume as it moves up the limb."},
      {t:"Sea 合 · River 經 · Stream 輸 · Spring 滎 · Well 井",
       c:"合、經、輸、滎、井",ok:false,
       note:"That is the reverse. The sequence starts small at the <b>fingertip or toe</b> and grows as it travels toward the trunk."},
      {t:"Source 原 · Connecting 絡 · Cleft 郄 · Front-Mu 募 · Back-Shu 俞",
       c:"原、絡、郄、募、俞",ok:false,
       note:"Those are special point categories, but they are not the Five Shu 五輸穴 series."}
     ]},
    {q:"How would you position the cooper's hand to locate the point accurately?",
     cq:"欲準取此穴，當如何擺位？",
     opts:[
      {t:"Ask him to extend the thumb so the two tendons stand out, and take the depression between them at the wrist crease",
       c:"令拇指翹起，兩筋顯露，取腕橫紋上兩筋間之陷中",ok:true,
       note:"<b>Correct.</b> Many points only appear when the body is positioned properly. Position first, then palpate — a habit worth building early."},
      {t:"Let the hand rest flat and measure three cun from the wrist",
       c:"手平放，自腕上量三寸",ok:false,
       note:"Yangxi sits <b>at</b> the wrist crease, in the snuffbox — not proximal to it."},
      {t:"Make a tight fist and take the highest point of the muscle",
       c:"握緊拳，取肌肉最高處",ok:false,
       note:"That manoeuvre finds Hegu-region landmarks, not the snuffbox depression."}
     ]}
  ],
  card:{en:"Yangxi sits in the snuffbox — the River point of the Large Intestine, and the local point for a wrist worn out by work.",
        zh:"陽谿在鼻煙窩中。大腸經經穴，亦為勞損腕痛之局部要穴。"} },

{ id:"LU7", region:"hand",
  beats:[
    {en:"A ferryman comes in coughing, with a stiff, aching back of the head and a dislike of the wind on the river.",
     zh:"一位船夫咳嗽而來，後頭項強而痛，惡河上之風。"},
    {en:"Shen Yi crosses her thumb over his, index finger falling into the notch above the wrist. \"There. Above the crease, at the edge of the bone.\"",
     zh:"沈醫師以兩手虎口交叉，食指按於腕上骨隙。「此處。腕紋之上，骨邊之陷。」"},
    {en:"\"This one belongs to the Lung, but it borrows a road,\" she says. \"It opens the Conception Vessel, and it answers for the neck and the head.\"",
     zh:"「此穴屬肺，而能借道。」她說，「通任脈，又主頭項。」"}
  ],
  qs:[
    {q:"The ferryman has a cough with a stiff neck and aversion to wind. Why is Lieque a good single choice?",
     cq:"其咳嗽兼項強惡風，何以列缺一穴甚宜？",
     opts:[
      {t:"It is the Connecting point of the Lung, so it treats cough and releases the exterior, and it is also the command point for the head and neck",
       c:"肺經絡穴，宣肺止咳、解表；又為頭項之要穴",ok:true,
       note:"<b>Correct.</b> Two properties meet in one point: <b>絡穴</b> of the Lung (cough, wind invasion) and the Four Command line <b>頭項尋列缺</b>."},
      {t:"It is the Source point of the Lung channel",
       c:"為肺經原穴",ok:false,
       note:"The Source point 原穴 of the Lung is <b>Taiyuan LU9</b>. Lieque is the Connecting point 絡穴."},
      {t:"It is a local point for the neck",
       c:"為頸項之局部穴",ok:false,
       note:"It is on the forearm — distal. Its reach to the neck comes from the command-point relationship, not proximity."}
     ]},
    {q:"The Four Command Points 四總穴 each govern one region. Which line belongs to Lieque?",
     cq:"四總穴各主一部，列缺主何？",
     opts:[
      {t:"For the head and the nape, seek Lieque 頭項尋列缺",
       c:"頭項尋列缺",ok:true,
       note:"<b>Correct.</b> The full set: <b>肚腹三里留 · 腰背委中求 · 頭項尋列缺 · 面口合谷收</b>."},
      {t:"For the belly and abdomen, keep to Lieque",
       c:"肚腹尋列缺",ok:false,
       note:"That line belongs to <b>ST36 足三里</b> — 肚腹三里留."},
      {t:"For the lower back, seek Lieque",
       c:"腰背尋列缺",ok:false,
       note:"That line belongs to <b>BL40 委中</b> — 腰背委中求."}
     ]},
    {q:"Lieque is also one of the Eight Confluent points. Which extraordinary vessel does it open, and what pairs with it?",
     cq:"列缺亦為八脈交會穴，通何奇經？與何穴相配？",
     opts:[
      {t:"It opens the Conception Vessel 任脈, and pairs with KI6 Zhaohai",
       c:"通任脈，配照海",ok:true,
       note:"<b>Correct.</b> <b>列缺配照海，通任脈</b> — a classic pair for throat, chest and Lung-yin complaints."},
      {t:"It opens the Governing Vessel 督脈, and pairs with BL62 Shenmai",
       c:"通督脈，配申脈",ok:false,
       note:"That pair is <b>SI3 後谿 with BL62 申脈</b>, opening the Du channel."},
      {t:"It opens the Penetrating Vessel 衝脈, and pairs with PC6 Neiguan",
       c:"通衝脈，配內關",ok:false,
       note:"That pair is <b>SP4 公孫 with PC6 內關</b>, opening the Chong channel."}
     ]}
  ],
  card:{en:"For the head and the nape, seek Lieque — Connecting point of the Lung, and the hand that opens the Conception Vessel.",
        zh:"「頭項尋列缺」。肺之絡穴，八脈交會通任脈。"} },

{ id:"PC6", region:"hand",
  beats:[
    {en:"A merchant's wife has been queasy for three days. She has not been able to keep tea down, and she says her chest feels stuffed, as though something is pressing outward.",
     zh:"一位商人之妻噁心三日，飲茶亦吐，自訴胸中滿悶，如有物撐。"},
    {en:"Shen Yi measures two cun above the wrist crease, between the two tendons on the inner forearm, and rests her thumb there.",
     zh:"沈醫師量腕橫紋上二寸，兩筋之間，以拇指按之。"},
    {en:"\"Nausea, a tight chest, a heart that will not settle,\" she says. \"All three live in the same place. This point answers all three.\"",
     zh:"「嘔惡、胸悶、心神不寧，」她說，「三者同居一處，此穴皆能應之。」"}
  ],
  qs:[
    {q:"Why is Neiguan the point for nausea and vomiting?",
     cq:"何以內關為嘔吐之要穴？",
     opts:[
      {t:"It is the Connecting point of the Pericardium and connects with the Triple Burner, regulating qi in the chest and harmonising the Stomach so rebellious qi descends",
       c:"心包經絡穴，別走三焦，寬胸理氣、和胃降逆",ok:true,
       note:"<b>Correct.</b> Nausea is <b>rebellious Stomach qi 胃氣上逆</b>. PC6 內關 makes qi in the middle and upper burner descend again — which is why it is the first point taught for motion sickness and morning nausea alike."},
      {t:"It is a local point over the stomach",
       c:"為胃之局部穴",ok:false,
       note:"It is on the forearm. Its reach into the chest and stomach comes from channel relationship, not location."},
      {t:"It is the Source point of the Heart channel",
       c:"為心經原穴",ok:false,
       note:"The Source point 原穴 of the Heart is <b>Shenmen HT7</b>. PC6 is the Connecting point 絡穴 of the Pericardium."}
     ]},
    {q:"The same woman also reports palpitations and poor sleep since a family quarrel. Does that change your point choice?",
     cq:"其人自家中爭執後心悸失眠，是否須改穴？",
     opts:[
      {t:"No — PC6 also calms the spirit, so one point covers the nausea, the chest oppression and the palpitations",
       c:"不必改——內關兼能寧心安神，一穴而三症俱顧",ok:true,
       note:"<b>Correct.</b> 寬胸、和胃、寧心 — this breadth is why PC6 appears in so many prescriptions. A well-chosen point often answers the whole picture, not one symptom."},
      {t:"Yes — palpitations need a Heart channel point instead",
       c:"當改取心經之穴",ok:false,
       note:"The Pericardium 心包 protects the Heart and is treated for Heart symptoms constantly. PC6 is a standard choice for palpitations."},
      {t:"Yes — emotional causes require head points only",
       c:"情志所傷，惟取頭部穴",ok:false,
       note:"Not so. Emotional patterns are treated on the limbs very often — PC6 and LR3 among the most used."}
     ]},
    {q:"PC6 is one of the Eight Confluent points. Which vessel does it open, and which point is its partner?",
     cq:"內關為八脈交會穴，通何經？其配穴為何？",
     opts:[
      {t:"It opens the Yin Linking Vessel 陰維脈 and pairs with SP4 Gongsun, together governing the heart, chest and stomach",
       c:"通陰維脈，配公孫，合主心、胸、胃",ok:true,
       note:"<b>Correct.</b> <b>公孫配內關，合於心、胸、胃</b>. Learn the pairs by the <i>territory</i> they cover and they stop being a list."},
      {t:"It opens the Conception Vessel 任脈 and pairs with KI6",
       c:"通任脈，配照海",ok:false,
       note:"That pair is <b>LU7 列缺 with KI6 照海</b>."},
      {t:"It opens the Yang Motility Vessel 陽蹻脈 and pairs with SI3",
       c:"通陽蹻脈，配後谿",ok:false,
       note:"BL62 申脈 opens the Yang Motility Vessel, paired with SI3 後谿."}
     ]}
  ],
  card:{en:"Neiguan settles the chest, the stomach and the heart at once — two cun above the wrist, between the tendons.",
        zh:"內關，腕上二寸兩筋間。一穴而心、胸、胃三者俱安。"} },

/* ══════════════ LEG 足 ══════════════ */

{ id:"ST36", region:"leg",
  beats:[
    {en:"An old farmer sits down heavily. He eats little, tires by midmorning, and his stools have been loose for months.",
     zh:"一位老農重重坐下。納少，日未過午即倦，大便溏薄已數月。"},
    {en:"Shen Yi measures three cun below the kneecap, one finger-breadth lateral to the crest of the shin bone, and marks the spot.",
     zh:"沈醫師量犢鼻下三寸，脛骨前嵴外一橫指，記其處。"},
    {en:"\"This is the point people come back to for a lifetime,\" she says. \"Not because it is dramatic. Because it builds.\"",
     zh:"「此穴可用一生，」她說，「非因其效猛，乃因其能培。」"}
  ],
  qs:[
    {q:"The farmer is weak, eats poorly and tires easily. Why is Zusanli the anchor of the treatment?",
     cq:"其人虛弱納少易倦，何以足三里為主穴？",
     opts:[
      {t:"It is the Sea point and Lower He-Sea of the Stomach — it tonifies Spleen and Stomach, strengthens qi and blood, and supports the whole body over time",
       c:"胃經合穴、胃之下合穴。健脾和胃、補益氣血，久用可強壯全身",ok:true,
       note:"<b>Correct.</b> ST36 足三里 is the great tonifying point. Qi and blood are made in the middle burner, so strengthening it strengthens everything downstream."},
      {t:"It disperses food stagnation quickly",
       c:"善消食積",ok:false,
       note:"It does regulate the stomach, but this patient's picture is <b>deficiency 虛</b>, not accumulation. The reason to choose it here is that it <b>builds</b>."},
      {t:"It drains damp from the lower body",
       c:"利下焦濕",ok:false,
       note:"That is closer to <b>SP9 陰陵泉</b>. ST36 builds; SP9 drains."}
     ]},
    {q:"Which Four Command line belongs to ST36?",
     cq:"四總穴中，足三里主何？",
     opts:[
      {t:"For the belly and abdomen, keep to Zusanli 肚腹三里留",
       c:"肚腹三里留",ok:true,
       note:"<b>Correct.</b> Any complaint in the belly — pain, distension, nausea, loose stool, poor appetite — brings you back to ST36."},
      {t:"For the lower back, seek Zusanli",
       c:"腰背三里求",ok:false,
       note:"That line belongs to <b>BL40 委中</b>."},
      {t:"For the head and nape, seek Zusanli",
       c:"頭項尋三里",ok:false,
       note:"That line belongs to <b>LU7 列缺</b>."}
     ]},
    {q:"The farmer asks whether moxa would help. What is the reasoning?",
     cq:"老農問可否施灸，理據為何？",
     opts:[
      {t:"Yes — moxa on ST36 suits deficiency and cold patterns and is a classic method for building strength gradually",
       c:"可——虛寒之證，灸足三里，古法所以強壯培元",ok:true,
       note:"<b>Correct.</b> ST36 is one of the most-moxaed points in the tradition, precisely for long-term strengthening in deficiency. Moxa warms and supplements; this patient's picture is deficient and cold."},
      {t:"No — moxa is only for acute pain",
       c:"否——灸法惟用於急痛",ok:false,
       note:"Moxa's core indications are <b>deficiency and cold 虛寒</b>. Acute pain is not its defining use."},
      {t:"No — ST36 must never be moxaed",
       c:"否——足三里不可灸",ok:false,
       note:"The opposite is true; it is a classic moxa point. As always, avoid moxa over a heat pattern or on numb or damaged skin."}
     ]}
  ],
  card:{en:"For the belly and abdomen, keep to Zusanli — three cun below the knee, one finger lateral to the shin.",
        zh:"「肚腹三里留」。犢鼻下三寸，脛骨外一橫指。"} },

{ id:"ST40", region:"leg",
  beats:[
    {en:"A boat-hand describes a chest that feels packed with cotton wool. He coughs up thick sticky phlegm, and his head feels heavy and unclear, like a lid is on it.",
     zh:"一位船工訴胸中如塞棉絮，咳吐痰稠黏，頭重不清，如物覆之。"},
    {en:"Shen Yi measures the midpoint between the knee crease and the ankle, two finger-breadths lateral to the shin bone, into thick muscle.",
     zh:"沈醫師取膝與外踝連線之中點，脛骨前緣外二橫指，肌肉豐厚處。"},
    {en:"\"When phlegm is the problem,\" she says, \"there is one name every student learns first.\"",
     zh:"「痰為病者，」她說，「初學必先識一穴之名。」"}
  ],
  qs:[
    {q:"Why is Fenglong the point named first whenever phlegm appears?",
     cq:"凡痰證，何以首推豐隆？",
     opts:[
      {t:"It is the Connecting point of the Stomach channel and the principal point to transform phlegm and dampness",
       c:"胃經絡穴，化痰祛濕之要穴",ok:true,
       note:"<b>Correct.</b> The classic teaching: <b>脾為生痰之源，肺為貯痰之器</b> — the Spleen makes phlegm, the Lung stores it. ST40 addresses the making."},
      {t:"It is the Sea point of the Stomach channel",
       c:"為胃經合穴",ok:false,
       note:"The Sea point 合穴 of the Stomach is <b>ST36 足三里</b>. ST40 is the Connecting point 絡穴."},
      {t:"It is a local point for the chest",
       c:"為胸部局部穴",ok:false,
       note:"It sits on the lower leg — the effect travels along the channel."}
     ]},
    {q:"The boat-hand's head feels heavy and muddy. Is that a separate complaint?",
     cq:"其頭重昏濁，是否另為一症？",
     opts:[
      {t:"No — phlegm-damp clouding the head produces exactly that heaviness, so the same point addresses it",
       c:"非也——痰濕蒙清竅，正見頭重昏濁，同穴可治",ok:true,
       note:"<b>Correct.</b> Heavy, muddy, wrapped-in-cloth sensations are a signature of <b>damp and phlegm 痰濕</b>. One root, several branches."},
      {t:"Yes — head heaviness always means blood deficiency",
       c:"是——頭重必為血虛",ok:false,
       note:"Blood deficiency produces <b>dizziness and an empty light-headedness</b>, not the heavy wrapped feeling of damp."},
      {t:"Yes — it needs a separate head point before anything else",
       c:"是——須先取頭部穴",ok:false,
       note:"Local points may help, but treating the root — the phlegm — is what resolves the head."}
     ]},
    {q:"Which point would you add to strengthen the Spleen so phlegm stops being produced?",
     cq:"欲健脾以絕生痰之源，當加何穴？",
     opts:[
      {t:"SP9 Yinlingquan, to drain damp, often with ST36 to strengthen transformation",
       c:"陰陵泉利濕，常配足三里以助運化",ok:true,
       note:"<b>Correct.</b> Treat the branch and the root together: <b>ST40 transforms the phlegm, SP9 drains the damp, ST36 rebuilds the Spleen</b> so less is made."},
      {t:"LI4 Hegu, to release the exterior",
       c:"合谷解表",ok:false,
       note:"Releasing the exterior suits a wind invasion, not an interior damp-phlegm pattern."},
      {t:"SI3 Houxi, to open the Governing Vessel",
       c:"後谿通督",ok:false,
       note:"That serves the neck and spine, not phlegm."}
     ]}
  ],
  card:{en:"For phlegm, seek Fenglong — midway between knee and ankle, two fingers lateral to the shin.",
        zh:"「治痰先取豐隆」。膝踝中點，脛骨外二橫指。"} },

{ id:"ST41", region:"leg",
  beats:[
    {en:"A dancer turned her ankle on a loose stone. The front of the joint is swollen, and dorsiflexion hurts most.",
     zh:"一位舞者踏鬆石而扭足，踝之前方腫脹，背屈時痛甚。"},
    {en:"Shen Yi finds the depression at the middle of the front of the ankle, between the two tendons, level with the joint line.",
     zh:"沈醫師取足背踝關節橫紋中央、兩筋之間陷中。"},
    {en:"\"Local point, right where it hurts,\" she says. \"Not every choice needs to be clever. Sometimes the channel simply passes through the injury.\"",
     zh:"「局部取穴，痛在何處便取何處。」她說，「用穴不必皆巧，經行其地，即可取之。」"}
  ],
  qs:[
    {q:"What kind of point is Jiexi, and what does the category suggest?",
     cq:"解谿為何類穴？其類主何？",
     opts:[
      {t:"It is the River point 經穴 of the Stomach channel, and it is also the local point for the ankle",
       c:"胃經之經穴，兼為踝部局部穴",ok:true,
       note:"<b>Correct.</b> ST41 解谿 sits exactly on the ankle joint line — local point for ankle pain, plus the Five Shu River point of the Stomach channel."},
      {t:"It is the Connecting point of the Stomach channel",
       c:"為胃經絡穴",ok:false,
       note:"The Connecting point 絡穴 of the Stomach is <b>ST40 豐隆</b>."},
      {t:"It is the Source point of the Stomach channel",
       c:"為胃經原穴",ok:false,
       note:"The Source point 原穴 of the Stomach is <b>ST42 衝陽</b>."}
     ]},
    {q:"A different patient sprained the outer side of the ankle, below the lateral bone. Which point suits better?",
     cq:"另一病人傷在外踝下方，當取何穴？",
     opts:[
      {t:"GB40 Qiuxu, in the depression anterior and inferior to the lateral malleolus",
       c:"丘墟——外踝前下方陷中",ok:true,
       note:"<b>Correct.</b> Location follows the injury: <b>front of the ankle → ST41</b>; <b>anterolateral, below the outer bone → GB40</b>; <b>behind the outer bone → BL60 崑崙</b>."},
      {t:"ST41 Jiexi — it covers the whole ankle",
       c:"解谿——通治全踝",ok:false,
       note:"ST41 is anterior and central. An outer-side sprain calls for a point on that side."},
      {t:"SP9 Yinlingquan",c:"陰陵泉",ok:false,
       note:"SP9 is at the medial knee — far from the ankle and aimed at damp, not local injury."}
     ]},
    {q:"The dancer's ankle is hot, red and swollen from today's injury. What is the sensible caution?",
     cq:"其踝紅腫熱痛，傷在當日，當注意何事？",
     opts:[
      {t:"In an acutely inflamed, swollen joint, avoid moxa and heavy local stimulation; distal points and rest come first",
       c:"急性紅腫熱痛之關節，忌灸，慎重刺；宜先遠端取穴並令其休息",ok:true,
       note:"<b>Correct.</b> Moxa warms — adding heat to a hot, acute joint works against you. Distal points on the same channel are the safer opening move."},
      {t:"Apply strong moxa immediately to move the blood",
       c:"急施重灸以活血",ok:false,
       note:"Not into acute heat and swelling. Warming methods suit <b>cold and deficiency</b>."},
      {t:"There is no caution — ankle points are always safe",
       c:"無所忌——踝穴皆安",ok:false,
       note:"Every technique has a context. \"Always safe\" is never the right answer in a clinical setting."}
     ]}
  ],
  card:{en:"Jiexi sits in the hollow at the front of the ankle — River point of the Stomach, and the local point where the shoe laces cross.",
        zh:"解谿在足背踝橫紋中央陷中。胃經經穴，亦踝痛之局部要穴。"} },

{ id:"GB34", region:"leg",
  beats:[
    {en:"A stonemason cannot straighten his knee properly. The muscles down the outside of his leg feel like drawn rope, and his mouth tastes bitter in the mornings.",
     zh:"一位石匠膝不能全伸，腿外側筋肉緊如絞繩，晨起口苦。"},
    {en:"Shen Yi finds the depression below and in front of the head of the fibula, and presses until his whole calf twitches. \"Sinews,\" she says. \"Whenever the sinews are the problem, this is where you begin.\"",
     zh:"沈醫師取腓骨小頭前下方陷中，按之其腓腸盡顫。「筋也，」她說，「凡病在筋，皆自此始。」"}
  ],
  qs:[
    {q:"Why does a problem of tight, stiff sinews send you to Yanglingquan first?",
     cq:"筋急僵硬之證，何以首取陽陵泉？",
     opts:[
      {t:"It is the Influential point of the sinews 筋會 — the meeting point for all tendon and muscle disorders",
       c:"八會穴之筋會，凡筋病皆可取之",ok:true,
       note:"<b>Correct.</b> The Eight Influential Points 八會穴 each govern one tissue. <b>筋會陽陵泉</b> — sinews. Stiffness, spasm, contracture, weakness of the tendons: start here."},
      {t:"It is the Influential point of the bones",
       c:"為八會穴之骨會",ok:false,
       note:"<b>骨會大杼 BL11</b> governs bone. GB34 governs sinew."},
      {t:"It is the Influential point of the marrow",
       c:"為八會穴之髓會",ok:false,
       note:"<b>髓會絕骨</b> — that is GB39 懸鐘, a little further down the same leg. Easy to confuse; worth separating now."}
     ]},
    {q:"The mason also has a bitter taste and irritability. Does GB34 speak to that as well?",
     cq:"其口苦煩躁，陽陵泉能否兼顧？",
     opts:[
      {t:"Yes — it is the Lower He-Sea point of the Gallbladder, so it also regulates Liver and Gallbladder and clears damp-heat there",
       c:"能——膽之下合穴，兼疏肝利膽、清泄濕熱",ok:true,
       note:"<b>Correct.</b> GB34 carries three hats at once: <b>合穴 · 筋會 · 膽之下合穴</b>. Bitter taste, rib-side fullness and jaundice all sit inside that third role."},
      {t:"No — it only treats sinews",
       c:"否——惟主筋病",ok:false,
       note:"Its Lower He-Sea role makes it a working Gallbladder point too."},
      {t:"No — bitter taste requires a Stomach point",
       c:"否——口苦當取胃經",ok:false,
       note:"A bitter taste is classically <b>Gallbladder</b> 膽 — 膽氣上溢則口苦."}
     ]},
    {q:"Lower He-Sea points 下合穴 exist because of a specific idea. Which one?",
     cq:"下合穴之設，本於何理？",
     opts:[
      {t:"The six fu organs are treated through He-Sea points on the leg — 合治內腑",
       c:"六腑病取下合穴——「合治內腑」",ok:true,
       note:"<b>Correct.</b> The set: ST36 stomach · ST37 large intestine · ST39 small intestine · BL39 triple burner · BL40 bladder · GB34 gallbladder. Note that three of them sit on the Stomach channel."},
      {t:"They are where the channel qi is weakest",
       c:"乃經氣最弱之處",ok:false,
       note:"The opposite image — He-Sea 合穴 is where qi is most abundant, like a river joining the sea."},
      {t:"They pair each yin organ with a yang organ",
       c:"乃臟腑相配之穴",ok:false,
       note:"That describes Yuan-Luo pairing 原絡配穴, a different method."}
     ]}
  ],
  card:{en:"Yanglingquan is the meeting of the sinews — and the Gallbladder's own He-Sea point on the leg.",
        zh:"陽陵泉，筋之會，亦膽之下合穴。"} },

{ id:"GB39", region:"leg",
  beats:[
    {en:"An elderly weaver's neck aches constantly, her legs feel weak on stairs, and she says her bones feel hollow.",
     zh:"一位老織婦項痛不休，登階足軟，自覺骨中空虛。"},
    {en:"Shen Yi measures three cun above the tip of the outer ankle bone, at the front edge of the fibula. \"The old name for this point is Juegu — 'severed bone',\" she says. \"It is where the marrow gathers.\"",
     zh:"沈醫師量外踝尖上三寸，腓骨前緣。「此穴古名絕骨，」她說，「髓之所會也。」"}
  ],
  qs:[
    {q:"Xuanzhong is the Influential point of what?",
     cq:"懸鐘為八會穴之何會？",
     opts:[
      {t:"Marrow 髓會",c:"髓會",ok:true,
       note:"<b>Correct.</b> <b>髓會絕骨</b>. Because marrow relates to the Kidney and to the brain, GB39 is used for weak legs, bone problems, dizziness and stiff neck."},
      {t:"Sinews 筋會",c:"筋會",ok:false,
       note:"That is <b>GB34 陽陵泉</b>, higher on the same leg."},
      {t:"Blood 血會",c:"血會",ok:false,
       note:"<b>血會膈俞 BL17</b>."}
     ]},
    {q:"Name the eight Influential points and their tissues — which of these pairs is wrong?",
     cq:"八會穴之配屬，下列何者為誤？",
     opts:[
      {t:"Qi 氣會 — Danzhong CV17 · Blood 血會 — Geshu BL17 · Vessels 脈會 — Taiyuan LU9",
       c:"氣會膻中、血會膈俞、脈會太淵",ok:true,
       note:"<b>All three are correct.</b> The full eight: 臟會章門 · 腑會中脘 · 氣會膻中 · 血會膈俞 · 筋會陽陵泉 · 脈會太淵 · 骨會大杼 · 髓會絕骨."},
      {t:"Zang organs 臟會 — Zhongwan CV12",c:"臟會中脘",ok:false,
       note:"Reversed. <b>臟會章門 LR13</b>; <b>腑會中脘 CV12</b>. Zhang Men for the yin organs, Zhong Wan for the yang."},
      {t:"Bone 骨會 — Yanglingquan GB34",c:"骨會陽陵泉",ok:false,
       note:"<b>骨會大杼 BL11</b>. GB34 is the sinew point."}
     ]},
    {q:"The weaver's neck is stiff and her legs are weak. Which combination reasons well?",
     cq:"項強而足軟，何組配穴為當？",
     opts:[
      {t:"GB39 for marrow and the neck, with GB20 locally at the base of the skull and KI3 to support the Kidney",
       c:"懸鐘以充髓治項，配風池以治局部，太谿以補腎",ok:true,
       note:"<b>Correct.</b> The reasoning chain: <b>Kidney rules bone and produces marrow 腎主骨生髓</b> — so weak bones, weak legs and marrow emptiness bring the Kidney into the treatment."},
      {t:"LI4 and LU7 only",c:"惟取合谷、列缺",ok:false,
       note:"Both are exterior-releasing, head-and-face points. Neither addresses marrow or Kidney deficiency."},
      {t:"ST40 and SP9",c:"豐隆、陰陵泉",ok:false,
       note:"Those handle phlegm and damp — an excess picture, not this deficiency one."}
     ]}
  ],
  card:{en:"Xuanzhong — 'severed bone' — is where the marrow gathers, three cun above the outer ankle.",
        zh:"懸鐘，一名絕骨，髓之會也。外踝尖上三寸。"} },

{ id:"GB37", region:"leg",
  beats:[
    {en:"A copyist's eyes have grown dim. Fine characters blur by lamplight, and by evening they ache and water.",
     zh:"一位抄書人目漸昏花，燈下細字模糊，入夜則目脹流淚。"},
    {en:"Shen Yi measures five cun above the outer ankle bone. \"The name of this point is Guangming — Bright Light,\" she says. \"Points are often named after what they do. Learn the names and half the work is done.\"",
     zh:"沈醫師量外踝尖上五寸。「此穴名光明，」她說，「穴名多從其用而立。識其名，其功已得其半。」"}
  ],
  qs:[
    {q:"Why does a Gallbladder channel point on the lower leg treat the eyes?",
     cq:"膽經下肢之穴，何以能明目？",
     opts:[
      {t:"It is the Connecting point of the Gallbladder and links to the Liver — and the Liver opens into the eyes 肝開竅於目",
       c:"膽經絡穴，別走肝經；肝開竅於目",ok:true,
       note:"<b>Correct.</b> The Connecting point 絡穴 is the bridge between a paired yin and yang channel. GB37 crosses to the Liver, and the Liver governs the eyes."},
      {t:"Because the Gallbladder channel begins at the outer canthus, so any point on it treats the eye equally",
       c:"因膽經起於目外眥，經上諸穴皆同治目",ok:false,
       note:"The channel does begin at the outer canthus, but that alone would make every GB point an eye point. The reason GB37 stands out is its <b>Luo connection to the Liver</b>."},
      {t:"Because it is a Sea point",
       c:"因其為合穴",ok:false,
       note:"GB37 is the Connecting point 絡穴. The Gallbladder's Sea point is GB34 陽陵泉."}
     ]},
    {q:"A Source point and its paired Connecting point are often needled together. What is that method called?",
     cq:"原穴與其表裡經之絡穴同用，此法何名？",
     opts:[
      {t:"Host and guest — Yuan-Luo pairing 原絡配穴法, taking the Source of the affected channel and the Connecting point of its partner",
       c:"原絡配穴法（主客配穴）：取本經原穴，配表裡經絡穴",ok:true,
       note:"<b>Correct.</b> For an eye complaint of Liver origin you might take <b>LR3 太衝 (Source) with GB37 光明 (Connecting)</b> — the pattern in miniature."},
      {t:"Five Shu point selection",c:"五輸穴配法",ok:false,
       note:"That is the Well–Spring–Stream–River–Sea series, a different scheme."},
      {t:"Front-Mu and Back-Shu pairing",c:"俞募配穴",ok:false,
       note:"That pairs a chest or abdomen point with a back point for the same organ."}
     ]},
    {q:"The copyist's eyes are dry and gritty rather than red and swollen. What does that shift?",
     cq:"其目乾澀而不紅腫，辨證有何不同？",
     opts:[
      {t:"It suggests Liver blood or yin failing to moisten the eyes — so nourishing points such as LR3 and KI3 suit better than draining ones",
       c:"屬肝血肝陰不足，目失濡養；宜補，如太衝配太谿，不宜專清",ok:true,
       note:"<b>Correct, and this is the clinical half of the point.</b> Red, swollen, painful eyes = <b>excess fire</b>, drain. Dry, gritty, tired eyes = <b>deficiency</b>, nourish. Same region, opposite method."},
      {t:"Nothing — eye points work the same either way",
       c:"無別——治目之穴，用法皆同",ok:false,
       note:"The point may be the same; the <b>method</b> — reinforcing or reducing — is not."},
      {t:"It means the problem is not in the Liver at all",
       c:"其病不在肝",ok:false,
       note:"Still the Liver, but a deficient pattern of it rather than an excess one."}
     ]}
  ],
  card:{en:"Guangming — Bright Light — is the Gallbladder's Connecting point, crossing to the Liver, which opens into the eyes.",
        zh:"光明，膽經絡穴，別走於肝；肝開竅於目。"} },

{ id:"GB40", region:"leg",
  beats:[
    {en:"A drover rolled his ankle on the mountain road. The swelling sits in front of and below the outer ankle bone, and he cannot turn the foot outward.",
     zh:"一位趕牲口的人於山路扭傷，腫在外踝前下方，足不能外翻。"},
    {en:"Shen Yi rests her thumb in that same hollow. \"Source point of the Gallbladder,\" she says. \"Local treatment and channel treatment happen to be the same place today.\"",
     zh:"沈醫師以拇指按其陷中。「膽經原穴，」她說，「今日局部與循經，恰在一處。」"}
  ],
  qs:[
    {q:"What does calling GB40 a Source point 原穴 actually mean?",
     cq:"稱丘墟為原穴，其義為何？",
     opts:[
      {t:"It is where the original qi of that channel's organ gathers and can be reached — so it treats disorders of the Gallbladder itself, not only local pain",
       c:"原氣所留止之處，故能治本腑之病，不獨治局部",ok:true,
       note:"<b>Correct.</b> Yang channels have a Source point 原穴 distinct from the Stream point; on yin channels the Stream point <i>is</i> the Source. Source points are used for both organ and channel problems."},
      {t:"It is simply the first point of the channel",
       c:"乃本經之首穴",ok:false,
       note:"The first Gallbladder point is <b>GB1 瞳子髎</b>, at the outer canthus."},
      {t:"It is where the channel is most superficial",
       c:"乃經脈最淺之處",ok:false,
       note:"Depth is not the defining idea — the gathering of original qi 原氣 is."}
     ]},
    {q:"Three points sit around the outer ankle. Match them correctly.",
     cq:"外踝周圍三穴，其位為何？",
     opts:[
      {t:"GB40 anterior-inferior to the malleolus · BL60 in the hollow between the malleolus and the Achilles tendon · GB39 three cun above the tip",
       c:"丘墟在外踝前下；崑崙在外踝與跟腱之間；懸鐘在外踝尖上三寸",ok:true,
       note:"<b>Correct.</b> Front, back, above — a small map worth being able to draw from memory."},
      {t:"GB40 behind the malleolus · BL60 in front of it",
       c:"丘墟在踝後，崑崙在踝前",ok:false,
       note:"Reversed. <b>崑崙 BL60 is behind</b> — the Bladder channel runs down the back of the leg."},
      {t:"All three are on the Gallbladder channel",
       c:"三穴皆屬膽經",ok:false,
       note:"BL60 崑崙 belongs to the <b>Bladder 足太陽膀胱經</b>."}
     ]},
    {q:"The drover asks whether he should walk it off. What is a careful answer?",
     cq:"其人問可否忍痛續行，當如何答？",
     opts:[
      {t:"Rest the joint, and if there is severe swelling, deformity or inability to bear weight, have it examined for a fracture before any treatment",
       c:"宜先休息；若腫甚、畸形、不能負重，當先就醫排除骨折，再議針灸",ok:true,
       note:"<b>Correct.</b> Recognising what is <i>not</i> a needling problem is part of clinical skill. Acupuncture does not replace assessment of a possible fracture."},
      {t:"Yes — walking moves the blood and speeds healing",
       c:"可——行走活血，愈之愈速",ok:false,
       note:"Not in an acute joint injury, and not before serious injury has been ruled out."},
      {t:"Yes, as long as the point is needled first",
       c:"先針此穴，即可續行",ok:false,
       note:"Needling does not clear someone to load an injured joint."}
     ]}
  ],
  card:{en:"Qiuxu is the Gallbladder's Source point, in the hollow in front of and below the outer ankle bone.",
        zh:"丘墟，膽經原穴，在外踝前下方陷中。"} },

{ id:"BL40", region:"back",
  beats:[
    {en:"A porter has carried sacks all season. His lower back seizes when he bends, and the pain runs down the back of his thigh.",
     zh:"一位腳夫終季負重，腰俯則痛，痛引股後。"},
    {en:"Shen Yi has him lie face down and finds the midpoint of the crease behind the knee, between the two great tendons. \"For the lower back,\" she says, \"seek Weizhong.\"",
     zh:"沈醫師令其俯臥，取膕橫紋中點、兩大筋之間。「腰背委中求。」她說。"}
  ],
  qs:[
    {q:"Why does a point behind the knee treat the lower back?",
     cq:"膕中之穴，何以能治腰？",
     opts:[
      {t:"The Bladder channel runs the whole length of the back and down the leg, so BL40 reaches the lumbar region along that route — and it is the Four Command point for the low back",
       c:"足太陽膀胱經行於腰背下至於腿，故委中可循經治腰；且為四總穴之一",ok:true,
       note:"<b>Correct.</b> <b>腰背委中求</b>. It is also the Sea point 合穴 and the Lower He-Sea of the Bladder."},
      {t:"Because it is a local point for the lumbar spine",
       c:"為腰部局部穴",ok:false,
       note:"It is behind the knee — distal treatment along the channel."},
      {t:"Because it is the Source point of the Bladder",
       c:"為膀胱經原穴",ok:false,
       note:"The Bladder's Source point 原穴 is <b>BL64 京骨</b>."}
     ]},
    {q:"A different patient has summer-heat with vomiting, diarrhoea and a hot dark rash. BL40 is mentioned again. Why?",
     cq:"另一病人暑證吐瀉、身發紅疹，何以仍取委中？",
     opts:[
      {t:"BL40 is classically pricked to bleed to clear summer-heat and cool the blood",
       c:"委中古法點刺放血，以泄暑熱、涼血",ok:true,
       note:"<b>Correct.</b> The old name is <b>血郄</b>. Bleeding technique at BL40 is a classic method for heat in the blood and for stubborn skin conditions — done only with proper CNT and clean-field technique."},
      {t:"Because it tonifies qi in heat patterns",
       c:"暑證宜補氣，故取之",ok:false,
       note:"Heat patterns call for clearing, not tonifying."},
      {t:"Because summer-heat always enters through the knee",
       c:"暑邪皆從膝而入",ok:false,
       note:"Not a real mechanism."}
     ]},
    {q:"What must be respected anatomically at BL40?",
     cq:"針委中，解剖上當顧忌何事？",
     opts:[
      {t:"The popliteal artery and nerve lie there — needle with care and avoid deep or careless insertion",
       c:"膕動脈與神經在此，不宜深刺、亂刺",ok:true,
       note:"<b>Correct.</b> Knowing the vessel is beneath your hand is exactly what CNT training is for. Caution, correct depth, and never through broken or infected skin."},
      {t:"There are no structures of concern behind the knee",
       c:"膕中無所忌",ok:false,
       note:"The popliteal fossa carries a major artery, vein and nerve."},
      {t:"The lung apex is nearby",
       c:"近肺尖",ok:false,
       note:"That caution belongs to points around the upper chest and shoulder, not the knee."}
     ]}
  ],
  card:{en:"For the lower back, seek Weizhong — midpoint of the crease behind the knee.",
        zh:"「腰背委中求」。膕橫紋中點是也。"} },

{ id:"BL57", region:"back",
  beats:[
    {en:"A messenger who runs the river road gets calf cramps at night, hard enough to wake him.",
     zh:"一位跑河道的信差夜間腓腸拘攣，痛而驚醒。"},
    {en:"Shen Yi has him point his toes. The calf muscle parts into two heads and forms a narrow valley below them. \"Right in the valley,\" she says. \"The name means Supporting Mountain.\"",
     zh:"沈醫師令其足尖下踏，腓腸分為二頭，其下成一尖角凹陷。「正在陷中，」她說，「其名承山。」"}
  ],
  qs:[
    {q:"What is BL57 best known for?",
     cq:"承山最擅治何？",
     opts:[
      {t:"Calf cramp and spasm, lower leg pain — and it is a classic point for haemorrhoids",
       c:"腓腸拘急、小腿痛；又為治痔之要穴",ok:true,
       note:"<b>Correct.</b> Two very different indications on one point. The haemorrhoid use comes from the Bladder channel's connection through the lower back and anal region."},
      {t:"Cough and wheezing",c:"咳嗽氣喘",ok:false,
       note:"Those belong to Lung channel and upper back points."},
      {t:"Ear ringing",c:"耳鳴",ok:false,
       note:"That is Triple Burner and Gallbladder territory — TE3, TE17, GB20."}
     ]},
    {q:"The messenger's cramps come at night, with dry skin and pale nails. What pattern would you consider?",
     cq:"其攣在夜，膚燥甲淡，當考慮何證？",
     opts:[
      {t:"Liver blood deficiency failing to nourish the sinews — because the Liver rules the sinews and blood returns to the Liver at night",
       c:"肝血不足，筋失所養；肝主筋，夜臥血歸於肝",ok:true,
       note:"<b>Correct.</b> Cramping that is worse at night, with pale nails, dry skin and perhaps blurred vision, points to <b>血虛</b>. Local points ease the spasm; nourishing blood addresses why it keeps happening."},
      {t:"Damp-heat pouring into the lower limbs",
       c:"濕熱下注",ok:false,
       note:"That produces heaviness, swelling, heat and often a heavy greasy tongue coat — not dry skin and pale nails."},
      {t:"Exterior wind-cold",c:"風寒外束",ok:false,
       note:"Nothing here suggests an exterior pattern."}
     ]},
    {q:"Which point would you add to treat the root of that blood deficiency?",
     cq:"欲治其血虛之本，當加何穴？",
     opts:[
      {t:"GB34, the meeting of the sinews, together with points that build blood such as ST36 and SP6",
       c:"配陽陵泉（筋會），並取足三里、三陰交以生血",ok:true,
       note:"<b>Correct.</b> Local point for the cramp, sinew-meeting point for the tissue, and middle-burner points because <b>qi and blood are made from food and drink</b>."},
      {t:"LI4 and SI3",c:"合谷、後谿",ok:false,
       note:"Upper-body points aimed at face and neck — not this pattern."},
      {t:"GB8 and Taiyang",c:"率谷、太陽",ok:false,
       note:"Head points for temporal headache."}
     ]}
  ],
  card:{en:"Chengshan sits in the valley below the two heads of the calf — for cramp, for lower leg pain, and classically for haemorrhoids.",
        zh:"承山在腓腸肌兩頭之下陷中。主腓腸拘急、小腿痛，古亦治痔。"} },

{ id:"BL60", region:"back",
  beats:[
    {en:"A pilgrim arrives with a headache at the back of the skull, a stiff neck, and heels sore from the road.",
     zh:"一位香客而來，後頭痛、項強，足跟因跋涉而痛。"},
    {en:"Shen Yi finds the hollow between the tip of the outer ankle bone and the Achilles tendon. \"One point, and all three complaints are on the same road,\" she says.",
     zh:"沈醫師取外踝尖與跟腱之間陷中。「一穴而三症同在一經。」她說。"}
  ],
  qs:[
    {q:"How can Kunlun treat an occipital headache?",
     cq:"崑崙何以能治後頭痛？",
     opts:[
      {t:"The Bladder channel runs from the head down the back to the ankle, so its River point treats the far end of its own route",
       c:"膀胱經自頭下行至踝，經穴可治其經之遠端",ok:true,
       note:"<b>Correct.</b> Occipital headache and stiff neck are <b>Taiyang 太陽</b> territory. BL60 崑崙 is the River point 經穴 of that channel."},
      {t:"Because the Achilles tendon connects to the skull",
       c:"因跟腱直連於顱",ok:false,
       note:"Not anatomy — channel theory. The route is what carries the effect."},
      {t:"Because it is the Source point of the Bladder",
       c:"為膀胱經原穴",ok:false,
       note:"The Source point 原穴 is <b>BL64 京骨</b>. BL60 is the River point 經穴."}
     ]},
    {q:"Which pairing of headache region and channel is correct?",
     cq:"頭痛部位與經脈之配屬，何者為是？",
     opts:[
      {t:"Occiput → Taiyang · Sides → Shaoyang · Forehead → Yangming · Vertex → Jueyin",
       c:"後頭屬太陽、頭側屬少陽、前額屬陽明、巔頂屬厥陰",ok:true,
       note:"<b>Correct — memorise this one.</b> It turns 'headache' into a channel diagnosis, and a channel diagnosis into a point prescription."},
      {t:"Occiput → Yangming · Forehead → Taiyang",
       c:"後頭屬陽明、前額屬太陽",ok:false,
       note:"Reversed. Yangming runs over the <b>forehead</b>; Taiyang over the <b>back of the head</b>."},
      {t:"Vertex → Shaoyang",c:"巔頂屬少陽",ok:false,
       note:"The vertex is <b>Jueyin 厥陰</b> — the Liver channel reaches the top of the head, which is why LR3 is used there."}
     ]},
    {q:"Is there a caution for BL60?",
     cq:"崑崙有何禁忌？",
     opts:[
      {t:"It is traditionally contraindicated in pregnancy, as it moves strongly and is said to promote labour",
       c:"孕婦禁針——其行氣力強，古謂能催產",ok:true,
       note:"<b>Correct.</b> Keep the pregnancy-caution group together in your memory: <b>LI4 合谷 · SP6 三陰交 · BL60 崑崙 · BL67 至陰</b> and points over the lower abdomen and lumbosacral region."},
      {t:"There is no caution",c:"無所禁忌",ok:false,
       note:"There is a well-known one."},
      {t:"It must never be needled with LI4",c:"不可與合谷同用",ok:false,
       note:"They combine freely — the shared caution is pregnancy, not the combination."}
     ]}
  ],
  card:{en:"Kunlun is the River point of the Bladder, behind the outer ankle — for the back of the head, the neck, and the heel. Not in pregnancy.",
        zh:"崑崙，膀胱經經穴，在外踝後。主後頭項強、足跟痛。孕婦禁針。"} },

{ id:"SP9", region:"leg",
  beats:[
    {en:"A rice farmer's legs feel heavy and swollen after the wet season. His appetite is poor, his stools loose, and his tongue is puffy with tooth marks along the edge.",
     zh:"一位稻農經雨季後，兩腿沉重浮腫，納呆便溏，舌胖有齒痕。"},
    {en:"Shen Yi runs her thumb up the inner shin until it stops in the hollow below the knob at the top. \"Where the finger halts, the point is,\" she says.",
     zh:"沈醫師沿脛骨內側緣上推，至膝下高骨後之凹陷而止。「指止之處即是穴。」她說。"}
  ],
  qs:[
    {q:"Why is Yinlingquan the point for a damp, heavy, swollen picture?",
     cq:"濕重身腫，何以取陰陵泉？",
     opts:[
      {t:"It is the Sea point of the Spleen and the principal point to drain damp and open the waterways of the lower burner",
       c:"脾經合穴，利水滲濕、通調下焦水道之要穴",ok:true,
       note:"<b>Correct.</b> Oedema, heavy limbs, loose stool, vaginal discharge, difficult urination — all damp, all SP9 territory."},
      {t:"It tonifies Kidney yin",c:"滋補腎陰",ok:false,
       note:"That is closer to <b>KI3 太谿</b>, on the same lower leg but the Kidney channel."},
      {t:"It transforms phlegm in the chest",c:"化胸中之痰",ok:false,
       note:"ST40 豐隆 is the phlegm point. SP9 drains damp — related, but the emphasis differs."}
     ]},
    {q:"How do ST36 and SP9 divide the work?",
     cq:"足三里與陰陵泉，其用有何分別？",
     opts:[
      {t:"ST36 builds — it tonifies Spleen and Stomach; SP9 drains — it moves damp out. In Spleen deficiency with damp they are used together",
       c:"足三里主補，健脾益氣；陰陵泉主利，滲濕外出。脾虛濕困，二穴常並用",ok:true,
       note:"<b>Correct, and this is the pair worth remembering as a pair.</b> Deficiency creates damp; damp then burdens the Spleen further. Build and drain at the same time."},
      {t:"They do the same thing, so only one is needed",
       c:"二者功同，取一即可",ok:false,
       note:"Tonifying and draining are opposite methods. Using both is a deliberate choice, not redundancy."},
      {t:"ST36 drains damp and SP9 tonifies",
       c:"足三里滲濕，陰陵泉補虛",ok:false,
       note:"Reversed."}
     ]},
    {q:"There is a mirror-image point on the outside of the same knee. Which, and what does the pairing teach?",
     cq:"膝外側有一穴與之相對，為何穴？其對照之義為何？",
     opts:[
      {t:"GB34 Yanglingquan — Yang Mound Spring outside, Yin Mound Spring inside; same height, opposite sides, opposite channels",
       c:"陽陵泉——外為陽陵，內為陰陵；高低相當，內外相對",ok:true,
       note:"<b>Correct.</b> Point names are a memory system. 陽/陰, 陵 (mound), 泉 (spring) — once you hear the pattern, the location comes free."},
      {t:"ST36 Zusanli",c:"足三里",ok:false,
       note:"ST36 is lower and on the front of the leg, not directly opposite SP9."},
      {t:"BL40 Weizhong",c:"委中",ok:false,
       note:"BL40 is behind the knee, in the crease."}
     ]}
  ],
  card:{en:"Yinlingquan drains damp from the lower body — Yang Mound outside, Yin Mound inside, at the same height on the knee.",
        zh:"陰陵泉，下焦祛濕要穴。外為陽陵，內為陰陵，高低相當。"} },

/* The medial foot, SP1–SP5. Written as one run rather than five unrelated
   visits, because the Five Shu sequence is the thing being taught. */
{ id:"SP1", region:"leg",
  beats:[
    {en:"A midwife brings a woman whose bleeding has not stopped since her period began nine days ago. The blood is pale and thin, and she is exhausted.",
     zh:"一位穩婆帶來一名婦人，經行九日未止，血色淡而稀，人已倦極。"},
    {en:"Shen Yi does not needle. She lights a small cone of moxa at the inner corner of the big toenail and lets its warmth soak in.",
     zh:"沈醫師不施針，於足大趾內側甲角旁置小艾炷，令其溫氣徐入。"},
    {en:"\"The Spleen keeps blood inside the vessels,\" she says. \"When it is too weak to hold, the blood leaks. I am not stopping the bleeding. I am strengthening what holds it.\"",
     zh:"「脾統血，」她說，「脾虛不攝則血溢。我非止其血，乃固其所以統之者。」"}
  ],
  qs:[
    {q:"Why does the Spleen channel have anything to do with bleeding?",
     cq:"崩漏之證，何以責之於脾？",
     opts:[
      {t:"The Spleen governs the holding of blood in the vessels 脾統血 — when Spleen qi is too weak to contain it, blood leaks out",
       c:"脾統血。脾氣虛不能攝血，則血溢脈外",ok:true,
       note:"<b>Correct.</b> Pale, thin, persistent bleeding with exhaustion is <b>脾不統血</b>. Compare: bright red heavy bleeding with heat signs is a different pattern needing a different method."},
      {t:"Because the Spleen stores blood",c:"脾藏血",ok:false,
       note:"The <b>Liver</b> stores blood 肝藏血. The Spleen <b>holds</b> it in the vessels 脾統血. Two different jobs, easily confused."},
      {t:"Because the Spleen makes the blood move",c:"脾主行血",ok:false,
       note:"Moving blood is the Heart and Liver's work. The Spleen's role here is containment."}
     ]},
    {q:"Shen Yi chose moxa rather than a needle. What does that tell you?",
     cq:"用灸而不用針，其意為何？",
     opts:[
      {t:"Moxa warms and supplements, which suits a deficient, cold pattern — and SP1 is a classic moxa point for bleeding from Spleen deficiency",
       c:"灸能溫補，宜於虛寒；隱白灸法本為脾虛失血之古法",ok:true,
       note:"<b>Correct.</b> Pattern chooses technique. Deficiency and cold → warm and supplement. If this bleeding were bright red with heat signs, moxa would be the wrong tool."},
      {t:"Moxa is used because needling the toe is too painful",
       c:"因趾端刺之過痛，故改用灸",ok:false,
       note:"Comfort is not the reasoning. Well points are needled routinely — the choice here is about <b>method matching pattern</b>."},
      {t:"Moxa works faster than needles in all cases",
       c:"灸法較針為速，凡病皆然",ok:false,
       note:"Neither is universally faster. They do different things."}
     ]},
    {q:"What category is SP1, and what do points of that category share?",
     cq:"隱白屬何類穴？此類穴之共性為何？",
     opts:[
      {t:"A Well point 井穴 — sited at the tips of fingers and toes, used to revive consciousness and clear heat at the very start of a channel",
       c:"井穴。在指趾之端，主開竅醒神、清熱，為經氣所出",ok:true,
       note:"<b>Correct.</b> Well points are where channel qi first emerges — small, sharp, and used for acute situations. Bleeding a Well point is a classic emergency method."},
      {t:"A Source point 原穴",c:"原穴",ok:false,
       note:"The Spleen's Source point is <b>SP3 太白</b>, further up the same foot."},
      {t:"A Connecting point 絡穴",c:"絡穴",ok:false,
       note:"The Spleen's Connecting point is <b>SP4 公孫</b>."}
     ]}
  ],
  card:{en:"Yinbai sits beside the big toenail — the Well point where the Spleen learns to hold blood again.",
        zh:"隱白在足大趾甲角旁。脾經井穴，脾虛失血者灸之。"} },

{ id:"SP3", region:"leg",
  beats:[
    {en:"A cook has no appetite. His belly feels full after three mouthfuls, his stools are loose, and his arms feel heavy by afternoon.",
     zh:"一位廚子納呆，食三口即脹，便溏，午後四肢沉重。"},
    {en:"Shen Yi runs her thumb back along the inside edge of his foot until it drops into the hollow behind the big knuckle. \"The Spleen's own point,\" she says. \"When the organ itself is tired, this is where you speak to it.\"",
     zh:"沈醫師沿足內側緣後推，指落於第一蹠骨小頭後之陷中。「脾之原穴也。」她說，「臟氣自倦，當於此處問之。」"}
  ],
  qs:[
    {q:"Why is Taibai the point for the Spleen organ itself, rather than just the channel?",
     cq:"太白何以能治脾臟本病，而不僅治經？",
     opts:[
      {t:"It is the Source point 原穴, where the original qi of that organ gathers — Source points treat the organ, not only its channel",
       c:"為原穴，原氣所留止；原穴主治本臟之病",ok:true,
       note:"<b>Correct.</b> No appetite, distension after eating, loose stools, heavy limbs — that is the Spleen organ failing to transform and transport 運化失司."},
      {t:"Because it is the largest point on the foot",
       c:"因其為足部最大之穴",ok:false,
       note:"Size is not a category. The Source point relationship is what matters."},
      {t:"Because it is a Well point",c:"因其為井穴",ok:false,
       note:"The Well point is <b>SP1 隱白</b>, at the toenail."}
     ]},
    {q:"On the Spleen channel, SP3 carries two labels at once. Why?",
     cq:"太白一穴而兼二名，何故？",
     opts:[
      {t:"On yin channels the Stream point is also the Source point — 陰經以輸為原",
       c:"陰經以輸為原，故太白既為輸穴亦為原穴",ok:true,
       note:"<b>Correct, and this rule saves you a whole column of the table.</b> On yang channels the Source point is separate and sits just after the Stream point."},
      {t:"Because it belongs to two channels",c:"因其分屬二經",ok:false,
       note:"It is a Spleen point only. The doubling is a category rule, not a channel crossing."},
      {t:"Because it can be needled from two directions",
       c:"因其可從二向進針",ok:false,
       note:"Not a real basis for point categories."}
     ]},
    {q:"Walk SP1 to SP5 in order. Which sequence is right?",
     cq:"自隱白至商丘，五輸之序為何？",
     opts:[
      {t:"SP1 Well · SP2 Spring · SP3 Stream/Source · SP4 Connecting · SP5 River",
       c:"隱白井、大都滎、太白輸原、公孫絡、商丘經",ok:true,
       note:"<b>Correct.</b> Note that SP4 公孫 breaks the run — it is the <b>Connecting point 絡穴</b>, not a Five Shu point, and the Sea point 合穴 is SP9 陰陵泉 up at the knee."},
      {t:"SP1 Sea · SP2 River · SP3 Stream · SP4 Spring · SP5 Well",
       c:"隱白合、大都經、太白輸、公孫滎、商丘井",ok:false,
       note:"Reversed. The series starts small at the <b>toe</b> and grows toward the trunk."},
      {t:"All five are Five Shu points, ending with SP5 as the Sea point",
       c:"五穴皆屬五輸，商丘為合穴",ok:false,
       note:"SP5 商丘 is the <b>River point 經穴</b>. The Sea point is SP9 陰陵泉, at the knee — the Five Shu of a leg channel do not all fit on the foot."}
     ]}
  ],
  card:{en:"Taibai is the Spleen's Source point, behind the big knuckle — on yin channels, the Stream point IS the Source.",
        zh:"太白，脾之原穴，在第一蹠骨小頭後陷中。陰經以輸為原。"} },

{ id:"SP4", region:"leg",
  beats:[
    {en:"A tea-merchant has stomach pain that comes in waves, worse before her period, along with a tight chest and a fluttering heart.",
     zh:"一位茶商婦胃痛陣作，經前尤甚，兼胸悶心悸。"},
    {en:"Shen Yi needles one point on her wrist and one on her foot. \"These two work as a pair,\" she says. \"Between them they cover the heart, the chest and the stomach — which is exactly what she has brought me.\"",
     zh:"沈醫師一取其腕，一取其足。「此二穴為對，」她說，「合主心、胸、胃——正其所苦。」"}
  ],
  qs:[
    {q:"Which point on the wrist is Shen Yi pairing with Gongsun, and what do they open?",
     cq:"與公孫相配之腕上穴為何？二者通何經？",
     opts:[
      {t:"PC6 Neiguan — together they open the Penetrating Vessel 衝脈 and govern the heart, chest and stomach",
       c:"內關。公孫配內關，通衝脈，合主心、胸、胃",ok:true,
       note:"<b>Correct.</b> Learn the Eight Confluent pairs by the <b>territory</b> they cover, not as a list of eight names. This pair's territory is 心、胸、胃."},
      {t:"LU7 Lieque — together they open the Conception Vessel",
       c:"列缺，通任脈",ok:false,
       note:"LU7 列缺 pairs with <b>KI6 照海</b>, and their territory is the throat, chest and lung."},
      {t:"SI3 Houxi — together they open the Governing Vessel",
       c:"後谿，通督脈",ok:false,
       note:"SI3 後谿 pairs with <b>BL62 申脈</b>, covering the inner canthus, neck, shoulder and back."}
     ]},
    {q:"Her pain is worse before her period. Why does that fit the Penetrating Vessel?",
     cq:"其痛經前加重，何以與衝脈相合？",
     opts:[
      {t:"The Penetrating Vessel is called the Sea of Blood 血海 and governs menstruation, so complaints that track the cycle often involve it",
       c:"衝為血海，主月事；病隨經期而作者，多涉衝脈",ok:true,
       note:"<b>Correct.</b> <b>衝為血海</b>. Symptoms that rise and fall with the cycle are a strong clue to look at the Chong vessel rather than only at the organ that hurts."},
      {t:"Because the Penetrating Vessel governs the exterior",
       c:"衝脈主表",ok:false,
       note:"Exterior defence belongs to the Yang channels and the Wei qi, not the Chong."},
      {t:"Because premenstrual symptoms are always Liver qi stagnation",
       c:"經前之症皆屬肝鬱",ok:false,
       note:"Liver qi stagnation is common, but \"always\" is too strong. Here the pairing points at the Chong."}
     ]},
    {q:"What kind of point is SP4 within its own channel?",
     cq:"公孫於本經屬何類穴？",
     opts:[
      {t:"The Connecting point 絡穴, which crosses to the Stomach channel",
       c:"絡穴，別走足陽明胃經",ok:true,
       note:"<b>Correct.</b> That crossing is why a Spleen point treats stomach pain and vomiting so directly — the Luo connects the paired yin and yang channels."},
      {t:"The Source point 原穴",c:"原穴",ok:false,
       note:"The Spleen's Source point is <b>SP3 太白</b>, one station back."},
      {t:"The Sea point 合穴",c:"合穴",ok:false,
       note:"The Spleen's Sea point is <b>SP9 陰陵泉</b>, at the knee."}
     ]}
  ],
  card:{en:"Gongsun with Neiguan opens the Penetrating Vessel — heart, chest and stomach, from one point on the foot and one on the wrist.",
        zh:"公孫配內關，通衝脈，合於心、胸、胃。"} },

{ id:"SP6", region:"leg",
  beats:[
    {en:"A young weaver has had painful periods for years. They come late, the blood is dark with clots, and she sleeps badly the week before.",
     zh:"一位年輕織婦經痛多年，經行後期，色暗有塊，經前一週輾轉難眠。"},
    {en:"Shen Yi measures four finger-breadths up from the tip of the inner ankle bone, and settles her thumb just behind the edge of the shin bone.",
     zh:"沈醫師自內踝尖上量四橫指，按於脛骨內側緣後方。"},
    {en:"\"Three channels cross under my thumb,\" she says. \"Spleen, Liver, Kidney. Her periods are all three at once — so I would rather use the crossing than chase each one.\"",
     zh:"「我指下有三經相交，」她說，「脾、肝、腎。她的經病三者俱涉，與其逐一而治，不如取其交會。」"}
  ],
  qs:[
    {q:"Why is Sanyinjiao used in almost every gynaecological prescription?",
     cq:"婦科諸方，何以幾乎必用三陰交？",
     opts:[
      {t:"It is the meeting point of the Spleen, Liver and Kidney channels, and menstrual disorders usually involve some combination of those three",
       c:"為脾、肝、腎三經交會穴；經病多不離此三經",ok:true,
       note:"<b>Correct.</b> Spleen makes and holds blood, Liver stores and moves it, Kidney governs reproduction. One point at the crossing reaches all three — that is the economy of it."},
      {t:"Because it is the Source point of the Spleen channel",
       c:"為脾經原穴",ok:false,
       note:"The Spleen's Source point 原穴 is <b>Taibai SP3</b>. SP6 is a meeting point 交會穴, not a Source point."},
      {t:"Because it is a local point over the uterus",
       c:"為胞宮之局部穴",ok:false,
       note:"It is on the lower leg — distal. Its reach comes from the three channels that pass through it."}
     ]},
    {q:"Her blood is dark with clots and the pain eases with a warm compress. What does that suggest, and what does it add to the treatment?",
     cq:"其血色暗有塊，得溫則減，屬何證？當增何法？",
     opts:[
      {t:"Cold with blood stasis — so warming methods suit, and moxa on SP6 or the lower abdomen fits the pattern",
       c:"寒凝血瘀——宜溫，可灸三陰交或小腹",ok:true,
       note:"<b>Correct.</b> Dark blood with clots, pain relieved by warmth and worse with cold, is a coherent <b>寒凝血瘀</b> picture. Note that this reasoning also tells you moxa is appropriate — pattern first, technique second."},
      {t:"Damp-heat in the lower burner — so cooling and draining suit",
       c:"下焦濕熱——宜清利",ok:false,
       note:"Damp-heat brings burning, yellow discharge, and pain that is <b>worse</b> with warmth. Here warmth helps, which points the other way."},
      {t:"Blood deficiency — so the period would be heavy and bright red",
       c:"血虛——當經量多而色鮮",ok:false,
       note:"Blood deficiency gives a <b>scant, pale</b> period with dull pain that eases with pressure — not dark clots."}
     ]},
    {q:"A month later the same woman returns and mentions she is pregnant. What changes?",
     cq:"一月後其人復診，告知已有身孕。當如何？",
     opts:[
      {t:"Stop using SP6 — it is contraindicated in pregnancy, in the same group as LI4 and BL60",
       c:"停用三陰交——孕婦禁針，與合谷、崑崙同屬此類",ok:true,
       note:"<b>Correct, and this is the answer that matters most.</b> Keep the pregnancy-caution group together: <b>LI4 合谷 · SP6 三陰交 · BL60 崑崙 · BL67 至陰</b>, plus points over the lower abdomen and lumbosacral area. Ask about pregnancy before you needle, not after."},
      {t:"Continue, but needle more gently",
       c:"照常施針，惟手法宜輕",ok:false,
       note:"A contraindication is not softened by technique. Choose a different point."},
      {t:"Continue — the contraindication only applies in the first month",
       c:"惟首月禁用，其後無妨",ok:false,
       note:"The caution is not limited to the first month."}
     ]}
  ],
  card:{en:"Sanyinjiao is where Spleen, Liver and Kidney cross — three cun above the inner ankle. Never in pregnancy.",
        zh:"三陰交，脾肝腎三經交會，內踝上三寸。孕婦禁針。"} },

{ id:"KI3", region:"leg",
  beats:[
    {en:"A widow in her sixties has ringing in her ears that grows louder when she is tired, aching in her lower back, and heat in her palms at night.",
     zh:"一位六旬孀婦，耳鳴遇勞則甚，腰痠，夜間手心發熱。"},
    {en:"Shen Yi finds the hollow between the inner ankle bone and the Achilles tendon, level with the tip. \"Great Ravine,\" she says. \"When the Kidney is empty, this is where you fill it.\"",
     zh:"沈醫師取內踝尖與跟腱之間陷中。「太谿也，」她說，「腎虛則補於此。」"}
  ],
  qs:[
    {q:"Why does this picture point to the Kidney?",
     cq:"此證何以歸之於腎？",
     opts:[
      {t:"The Kidney opens into the ear, rules the bones and the lower back, and Kidney yin deficiency produces night heat in the palms and soles",
       c:"腎開竅於耳，主骨，腰為腎之府；腎陰虛則五心煩熱",ok:true,
       note:"<b>Correct.</b> Three separate signs converging on one organ is what pattern differentiation 辨證 looks like in practice."},
      {t:"Because ear ringing is always a Kidney problem",
       c:"耳鳴皆屬腎",ok:false,
       note:"Not always — sudden loud tinnitus worse with anger is <b>Liver-Gallbladder fire</b>. It is the <i>combination</i> of signs that decides."},
      {t:"Because she is elderly, so it must be Kidney",
       c:"因其年老，故必屬腎",ok:false,
       note:"Age raises the likelihood; the signs confirm it. Diagnosis is not demographics."}
     ]},
    {q:"What kind of point is Taixi, and why does that matter for tonifying?",
     cq:"太谿為何類穴？於補法有何意義？",
     opts:[
      {t:"On yin channels the Stream point is also the Source point — so KI3 is 輸穴 and 原穴 together, and Source points are the classic choice for tonifying an organ",
       c:"陰經以輸為原，太谿既為輸穴亦為原穴；原穴為補臟之要",ok:true,
       note:"<b>Correct.</b> <b>陰經以輸為原</b> — a rule that saves you a whole column of the table."},
      {t:"It is the Sea point of the Kidney channel",
       c:"為腎經合穴",ok:false,
       note:"The Kidney's Sea point 合穴 is <b>KI10 陰谷</b>."},
      {t:"It is the Well point of the Kidney channel",
       c:"為腎經井穴",ok:false,
       note:"The Well point 井穴 is <b>KI1 湧泉</b>, on the sole."}
     ]},
    {q:"Her hands are hot at night but she also feels cold and her legs are weak. How do you read that?",
     cq:"其夜間手熱，而畏寒足軟，何以解之？",
     opts:[
      {t:"Kidney yin and yang can both be deficient; KI3 supports the Kidney in either direction, and the method — reinforcing, with or without moxa — is chosen to fit",
       c:"腎陰陽俱虛者有之。太谿補腎，陰陽皆可；隨證施補法，或加灸",ok:true,
       note:"<b>Correct.</b> Yin and yang deficiency are not mutually exclusive, especially in the elderly. The point stays; the technique adapts. Mixed pictures are common — say so rather than forcing one label."},
      {t:"One of the two observations must be wrong",
       c:"二者必有一誤",ok:false,
       note:"Real patients present mixed patterns. Discarding inconvenient signs is how a diagnosis goes wrong."},
      {t:"It rules out any Kidney involvement",
       c:"可排除腎病",ok:false,
       note:"It suggests the Kidney is involved on both sides of the pair."}
     ]}
  ],
  card:{en:"Taixi is the Kidney's Source point — behind the inner ankle, where an empty Kidney is filled.",
        zh:"太谿，腎經原穴，在內踝後。腎虛者補之於此。"} },

{ id:"LR3", region:"leg",
  beats:[
    {en:"A shopkeeper has been grinding her teeth. Her ribs feel tight, she sighs without meaning to, her head throbs at the very top, and her period comes late and painful.",
     zh:"一位店主夜間磨牙，脅肋脹滿，頻頻嘆息，巔頂脹痛，經行後期而痛。"},
    {en:"Shen Yi slides her thumb up between the first and second toes until it wedges. \"Great Rushing,\" she says. \"When qi will not move, this is the gate.\"",
     zh:"沈醫師自足背第一、二蹠骨間上推至骨縫盡處。「太衝也，」她說，「氣鬱不行，此其門戶。」"}
  ],
  qs:[
    {q:"Sighing, rib-side fullness and irritability. What does LR3 do about it?",
     cq:"善太息、脅脹、煩躁，太衝何以能治？",
     opts:[
      {t:"It is the Source point of the Liver and the main point to course Liver qi and release constraint",
       c:"肝經原穴，疏肝理氣、解鬱之要穴",ok:true,
       note:"<b>Correct.</b> <b>肝主疏泄</b> — the Liver keeps qi moving freely. When it fails, you get sighing, distension, irritability and irregular periods. LR3 is the first answer."},
      {t:"It tonifies Liver blood directly",
       c:"直補肝血",ok:false,
       note:"Its main action is <b>moving</b>. Blood-building leans on ST36, SP6 and diet."},
      {t:"It clears damp from the lower burner",
       c:"清下焦濕",ok:false,
       note:"That is SP9 陰陵泉."}
     ]},
    {q:"Her headache is at the very top of the head. Does that fit?",
     cq:"其痛在巔頂，與肝相合否？",
     opts:[
      {t:"Yes — the Liver channel reaches the vertex, so vertex headache is Jueyin territory",
       c:"合——肝經上至巔頂，巔頂痛屬厥陰",ok:true,
       note:"<b>Correct.</b> Vertex headache with irritability and a wiry pulse is a classic Liver picture. The location of the pain is itself a diagnostic clue."},
      {t:"No — the vertex belongs to the Bladder channel",
       c:"否——巔頂屬膀胱經",ok:false,
       note:"The Bladder channel does cross the top of the head, but the <b>vertex headache pattern</b> is classically assigned to Jueyin 厥陰肝經."},
      {t:"No — headaches never localise by channel",
       c:"否——頭痛不分經",ok:false,
       note:"They do, reliably, and that mapping is heavily tested."}
     ]},
    {q:"LI4 and LR3 together have a name. What is it, and what is it for?",
     cq:"合谷配太衝，其名為何？主治何用？",
     opts:[
      {t:"The Four Gates 四關 — used to move qi and blood powerfully through the whole body, for pain and constraint",
       c:"四關穴——大開氣血，行氣活血，主痛證與鬱證",ok:true,
       note:"<b>Correct.</b> Both are Source points, one on each hand and each foot. Because both move so strongly, the Four Gates are <b>avoided in pregnancy</b>."},
      {t:"The Eight Confluent points",c:"八脈交會穴",ok:false,
       note:"Those are the eight that open the extraordinary vessels — SI3, BL62, LU7, KI6, PC6, SP4, TE5, GB41."},
      {t:"The Four Command points",c:"四總穴",ok:false,
       note:"Those are ST36, BL40, LU7 and LI4 — each governing one region."}
     ]}
  ],
  card:{en:"Taichong is the Liver's Source point — the gate for stuck qi. With Hegu it forms the Four Gates.",
        zh:"太衝，肝經原穴，開鬱行氣之門。配合谷為「四關」。"} },

/* ══════════════ HEAD 頭 ══════════════ */

{ id:"GB20", region:"head",
  beats:[
    {en:"A traveller arrives chilled, with a headache at the back of the head, a stiff neck, and a strong dislike of the wind at his collar.",
     zh:"一位行旅受寒而至，後頭痛、項強，惡風襲頸。"},
    {en:"Shen Yi finds the two hollows below the base of the skull, between the great muscles. \"Wind Pool,\" she says. \"Wind gathers here, so this is where it is dispersed.\"",
     zh:"沈醫師取枕骨下兩大筋間之凹陷。「風池也，」她說，「風邪聚於此，故散之於此。」"}
  ],
  qs:[
    {q:"Why is GB20 the point for wind — both from outside and from within?",
     cq:"風池何以能治外風、內風？",
     opts:[
      {t:"It dispels exterior wind in a wind-cold or wind-heat invasion, and also subdues interior wind and Liver yang rising",
       c:"外可祛風解表，內可平肝熄風、潛陽",ok:true,
       note:"<b>Correct.</b> One point, two very different roles. External: chills, headache, stiff neck. Internal: dizziness, hypertension-type headache, Liver yang rising."},
      {t:"Only exterior wind",c:"惟治外風",ok:false,
       note:"It is used for interior wind and Liver yang patterns just as often."},
      {t:"Only interior wind",c:"惟治內風",ok:false,
       note:"It is a first-line exterior-releasing point for the neck and head."}
     ]},
    {q:"The traveller also complains of red, sore, tired eyes. Does GB20 help?",
     cq:"其目赤澀而倦，風池能治否？",
     opts:[
      {t:"Yes — it brightens the eyes and clears the head, and is used for eye and ear complaints as well as headache",
       c:"能——清頭明目，兼治目疾、耳疾與頭痛",ok:true,
       note:"<b>Correct.</b> GB20 風池 is one of the most-used points in the whole repertoire precisely because it covers head, eyes, ears, neck and wind together."},
      {t:"No — eyes require only points on the foot",
       c:"否——目疾惟取足穴",ok:false,
       note:"Local and distal both apply. GB37 光明 on the leg and GB20 at the head are often used together."},
      {t:"No — GB20 only treats the neck",
       c:"否——風池惟治項",ok:false,
       note:"Its reach is much wider than the neck."}
     ]},
    {q:"What is the essential safety point when needling GB20?",
     cq:"針風池，安全上最須注意者為何？",
     opts:[
      {t:"Angle the needle toward the tip of the nose or the opposite eye and control the depth — deep or wrongly angled insertion risks the medulla",
       c:"針尖向鼻尖或對側目內眥，嚴控深度——深刺或方向錯誤可傷延髓",ok:true,
       note:"<b>Correct, and this is a genuinely dangerous point.</b> Angle and depth are not stylistic choices here. This is why GB20 gets so much attention in CNT and safe-needling training."},
      {t:"Needle straight in as deeply as possible for a strong effect",
       c:"直刺宜深，以求強效",ok:false,
       note:"Never. Toward the midline and deep is exactly the dangerous direction."},
      {t:"There is no particular risk at GB20",
       c:"風池無所忌",ok:false,
       note:"GB20 sits below the occiput near the foramen magnum. It is one of the points where technique matters most."}
     ]}
  ],
  card:{en:"Fengchi — Wind Pool — disperses wind from outside and settles wind from within. Angle and depth matter here.",
        zh:"風池，外可祛風，內可熄風。針之須慎其方向與深度。"} },

{ id:"TE17", region:"head",
  beats:[
    {en:"A young man's face has gone slack on one side. He cannot close the eye properly, and behind that ear there is a tender, aching spot.",
     zh:"一位少年半面弛緩，目不能閉，耳後有壓痛。"},
    {en:"Shen Yi presses in the hollow behind the earlobe, between the jaw angle and the mastoid bone. He winces. \"That tenderness is the channel telling you where it is stuck,\" she says.",
     zh:"沈醫師按其耳垂後、下頜角與乳突之間陷中，少年蹙眉。「此壓痛，即經氣所滯之處。」她說。"}
  ],
  qs:[
    {q:"Why is Yifeng used for facial paralysis and for ear complaints?",
     cq:"翳風何以治面癱與耳疾？",
     opts:[
      {t:"It sits right behind the ear on the Triple Burner channel — a local point for the ear, the jaw and the side of the face",
       c:"在耳後，屬手少陽三焦經，為耳、頜、面側之局部要穴",ok:true,
       note:"<b>Correct.</b> Deafness, tinnitus, facial paralysis, toothache and jaw problems all live within reach of this one hollow."},
      {t:"Because it is a distal point on the leg",
       c:"為下肢遠端穴",ok:false,
       note:"It is at the ear — local, not distal."},
      {t:"Because it is the Source point of the Triple Burner",
       c:"為三焦經原穴",ok:false,
       note:"The Triple Burner's Source point 原穴 is <b>TE4 陽池</b>."}
     ]},
    {q:"Which combination is the standard shape for treating facial paralysis?",
     cq:"治面癱之常法配穴為何？",
     opts:[
      {t:"Local points on the affected side of the face, plus distal LI4 on the opposite side",
       c:"患側面部局部取穴，配對側合谷",ok:true,
       note:"<b>Correct.</b> Local plus distal, and the classic distal point is LI4 合谷 — because <b>面口合谷收</b>. Choosing the opposite side for the distal point is a common convention."},
      {t:"Only points on the legs",c:"惟取下肢",ok:false,
       note:"Local facial points carry most of the work in this condition."},
      {t:"Only points on the unaffected side of the face",
       c:"惟取健側面部",ok:false,
       note:"The affected side is where local treatment is needed."}
     ]},
    {q:"The young man says the weakness came on over a few hours, with a drooping mouth and one arm that also feels clumsy. What now?",
     cq:"若其面癱數小時內驟成，兼口角下垂、一臂笨拙，當如何？",
     opts:[
      {t:"Refer urgently for medical assessment — sudden facial droop with limb weakness needs stroke evaluated first",
       c:"當即轉診急診——面癱驟起兼肢體無力，須先排除中風",ok:true,
       note:"<b>Correct, and this is the most important answer on this screen.</b> Facial weakness <i>with</i> limb involvement, speech change or sudden severe headache is a red flag. Recognising what must leave your room is a core clinical skill."},
      {t:"Begin a full course of acupuncture immediately",
       c:"即行針灸療程",ok:false,
       note:"Not before serious causes are excluded. Acupuncture may well have a role afterwards — but not first."},
      {t:"Wait a week and see whether it resolves",
       c:"觀察一週再議",ok:false,
       note:"Delay is exactly the wrong response to these signs."}
     ]}
  ],
  card:{en:"Yifeng sits in the hollow behind the earlobe — for the ear, the jaw and the side of the face. Sudden droop with limb weakness is referred, not needled.",
        zh:"翳風在耳垂後陷中，主耳、頜、面側之疾。若驟發兼肢體無力，當先轉診。"} },

{ id:"GB8", region:"head",
  beats:[
    {en:"A wine-seller wakes with a splitting pain above one ear. Light hurts, he feels sick, and the pain pulses.",
     zh:"一位酒販晨起一側耳上劇痛，畏光欲嘔，痛如脈動。"},
    {en:"Shen Yi measures up from the apex of the ear, about one and a half cun into the hair, and finds the tender spot.",
     zh:"沈醫師自耳尖直上入髮際約一寸半，尋其壓痛之處。"}
  ],
  qs:[
    {q:"Why does GB8 suit a one-sided headache above the ear?",
     cq:"率谷何以宜於耳上偏頭痛？",
     opts:[
      {t:"It is a local point on the Gallbladder channel, which covers the side of the head — Shaoyang territory",
       c:"膽經局部穴，頭側屬少陽",ok:true,
       note:"<b>Correct.</b> Temporal headache = <b>Shaoyang 少陽</b>. GB8 率谷 is local; GB20 風池 and TE3 中渚 or GB41 add distal support."},
      {t:"Because it is on the Bladder channel",
       c:"屬膀胱經",ok:false,
       note:"The Bladder channel runs over the top and back of the head, not the temple."},
      {t:"Because all headaches are treated at the vertex",
       c:"頭痛皆取巔頂",ok:false,
       note:"The vertex is Jueyin territory — a different pattern."}
     ]},
    {q:"The wine-seller drinks heavily and his headaches follow heavy nights, with nausea and a bitter mouth. What pattern fits?",
     cq:"其人嗜酒，痛多發於酒後，兼噁心口苦，屬何證？",
     opts:[
      {t:"Damp-heat in Liver and Gallbladder rising to the head — so clearing and draining suits, with GB34 and LR3 added",
       c:"肝膽濕熱上擾清竅，宜清利；可配陽陵泉、太衝",ok:true,
       note:"<b>Correct.</b> Bitter mouth, nausea, alcohol as a trigger and a temporal headache is a coherent Liver-Gallbladder damp-heat picture. Local point plus channel points plus, honestly, a conversation about the wine."},
      {t:"Blood deficiency failing to nourish the head",
       c:"血虛不能上榮",ok:false,
       note:"That headache is dull, gradual, worse with fatigue — and comes with pale complexion, not a bitter mouth."},
      {t:"Wind-cold on the exterior",c:"風寒束表",ok:false,
       note:"No chills, no aversion to cold, no sudden exterior onset."}
     ]},
    {q:"GB8 is also used for a very practical complaint. Which?",
     cq:"率谷尚可治一甚實用之症，為何？",
     opts:[
      {t:"Vomiting and dizziness after alcohol, and childhood convulsions",
       c:"酒後嘔吐眩暈，及小兒驚風",ok:true,
       note:"<b>Correct.</b> The classical texts are unusually direct about the alcohol indication for this point."},
      {t:"Lower back pain",c:"腰痛",ok:false,
       note:"That is BL40 委中 territory."},
      {t:"Loose stools",c:"便溏",ok:false,
       note:"That belongs to the Spleen and Stomach points."}
     ]}
  ],
  card:{en:"Shuaigu sits a cun and a half above the ear apex — the local point for a Shaoyang headache on the side of the head.",
        zh:"率谷在耳尖直上入髮際一寸半。頭側少陽頭痛之局部要穴。"} },

{ id:"TAIYANG", region:"head",
  beats:[
    {en:"A student has been reading by poor light. Her temples throb, her eyes ache, and she keeps pressing her fingers into the hollows beside her brows.",
     zh:"一位學子燈下苦讀，兩太陽脹痛，目痛，時以指按眉外之陷。"},
    {en:"\"You have already found it,\" Shen Yi says. \"That is Taiyang — one of the extra points. Not on any of the twelve channels, and used every day.\"",
     zh:"「你已自尋得之。」沈醫師說，「此太陽穴，經外奇穴也。不屬十二經，而日日用之。」"}
  ],
  qs:[
    {q:"What kind of point is Taiyang?",
     cq:"太陽為何類穴？",
     opts:[
      {t:"An extra point 經外奇穴 — outside the fourteen channels, with its own definite location and indications",
       c:"經外奇穴，不屬十四經，而有定位定治",ok:true,
       note:"<b>Correct.</b> Extra points have a fixed site and fixed uses but no channel membership. Others you will meet: 印堂 Yintang, 四神聰 Sishencong, 十宣 Shixuan, 膝眼 Xiyan."},
      {t:"A point on the Bladder channel",c:"屬膀胱經",ok:false,
       note:"It is not on any of the twelve regular channels."},
      {t:"A Front-Mu point",c:"為募穴",ok:false,
       note:"Front-Mu points 募穴 lie on the chest and abdomen and correspond to specific organs."}
     ]},
    {q:"What is Taiyang chiefly used for?",
     cq:"太陽穴主治為何？",
     opts:[
      {t:"Temporal headache, eye pain and red eyes, and dizziness — often bled for excess heat",
       c:"偏頭痛、目赤腫痛、眩暈；熱盛者可點刺出血",ok:true,
       note:"<b>Correct.</b> Bleeding a small amount at Taiyang for stubborn temporal headache or red painful eyes is a classic method — under strict clean-needle technique."},
      {t:"Abdominal pain and diarrhoea",c:"腹痛泄瀉",ok:false,
       note:"Those belong to the abdomen and to ST36."},
      {t:"Cough and wheezing",c:"咳喘",ok:false,
       note:"Lung and upper back points."}
     ]},
    {q:"The student's headache is dull, comes on when she is tired, and eases when she rests and eats. Is bleeding the right method?",
     cq:"其痛隱隱，勞則發，休息進食則減。可用刺血否？",
     opts:[
      {t:"No — that is a deficiency pattern, and bleeding drains. Nourishing and reinforcing suits better",
       c:"不可——此屬虛證，刺血為泄；宜補宜養",ok:true,
       note:"<b>Correct, and this is the whole lesson.</b> The point can be right while the method is wrong. Bleeding suits <b>excess and heat 實熱</b>; a tired, dull, better-after-rest headache is <b>deficiency 虛</b>."},
      {t:"Yes — bleeding always relieves headache",
       c:"可——刺血皆能止頭痛",ok:false,
       note:"Draining a deficient patient can leave them worse. Method follows pattern."},
      {t:"Yes, but only on the other side",
       c:"可——惟刺對側",ok:false,
       note:"Side does not change the fact that a draining method is wrong for a deficient pattern."}
     ]}
  ],
  card:{en:"Taiyang is an extra point in the hollow beside the brow — for temporal headache and painful eyes. Bleed only excess, never deficiency.",
        zh:"太陽，經外奇穴，在眉梢與目外眥之間陷中。主偏頭痛、目赤。實熱可刺血，虛證不可。"} }

,

/* ══════════════ CHEST & UPPER ARM 胸與上臂 — the first four Lung points ══════════════ */

{ id:"LU1", region:"chest",
  beats:[
    {en:"A weaver has coughed for two winters. Her chest feels full rather than painful, and her voice tires by noon. Shen Yi asks her to sit and rest both hands in her lap.",
     zh:"一位織婦咳了兩個冬天。胸中悶而不痛，說話到中午就沒了氣力。沈醫師請她坐下，兩手放在膝上。"},
    {en:"She presses just below the outer end of the collarbone, one rib space down, and the weaver flinches before she is asked anything. \"There,\" says Shen Yi. \"The Lung is answering.\"",
     zh:"她按在鎖骨外端之下、第一肋間，織婦還沒被問就縮了一下。「就是這裡，」沈醫師說，「肺自己回答了。」"},
    {en:"\"This is the Front-Mu point of the Lung. A Mu point is where the organ's qi gathers on the front of the body — so it tells you the organ is troubled, and it treats it in the same place. I needle it shallow and angled outward. Never straight in, and never deep.\"",
     zh:"「此為肺之募穴。募者，臟氣結聚於胸腹之處，故能候其病，亦能治其病。針宜淺而向外斜刺，切不可直刺深入。」"}
  ],
  qs:[
    {q:"Why is Zhongfu a good choice for this two-winter cough with chest fullness?",
     cq:"久咳二冬、胸中滿悶，何以取中府為宜？",
     opts:[
      {t:"It is the Front-Mu point of the Lung — the organ's qi gathers there, so it both reflects and treats the Lung directly",
       c:"中府為肺之募穴，肺氣結聚於此，故能候肺亦能治肺",ok:true,
       note:"<b>Correct.</b> Front-Mu points 募穴 sit on the chest or abdomen over their organ. Tenderness at LU1 is a diagnostic sign of Lung trouble, and needling it treats the Lung and opens the chest. It is also a meeting point of the Lung and Spleen channels, which is why it suits patterns where phlegm from a weak Spleen has settled in the Lung."},
      {t:"It is the Source point of the Lung",
       c:"中府為肺之原穴",ok:false,
       note:"The Lung's Source point is Taiyuan LU9, at the wrist. LU1 is the Front-Mu point. 肺之原穴為太淵，在腕；中府為募穴。"},
      {t:"It is a distal point that reaches the chest from far away",
       c:"中府為遠道取穴，自遠處達胸",ok:false,
       note:"LU1 is a <b>local</b> point — it sits directly over the complaint. The distal Lung points are LU7 and LU5, on the forearm. 中府為近部取穴，其穴正在病所之上。遠道者列缺、尺澤也。"}]},
    {q:"Zhongfu LU1 is the Front-Mu point. Which point is its partner on the back, and why would you use both?",
     cq:"中府為募，其背之配穴為何？何以二者並用？",
     opts:[
      {t:"Feishu BL13, the Back-Shu point of the Lung — front and back together is the Shu-Mu pairing",
       c:"肺俞。前募後俞並用，即俞募配穴法",ok:true,
       note:"<b>Correct.</b> Every organ has a Back-Shu point 背俞穴 on the Bladder channel and a Front-Mu point 募穴 on the chest or abdomen. Needling both sandwiches the organ between them — the classical Shu-Mu pairing 俞募配穴, used for chronic organ patterns."},
      {t:"Dazhui DU14",
       c:"大椎",ok:false,
       note:"DU14 is a meeting point of the yang channels, used for fever and for releasing the exterior. It is not the Lung's Back-Shu point. 大椎為諸陽之會，主發熱、解表，非肺之背俞。"},
      {t:"Lieque LU7",
       c:"列缺",ok:false,
       note:"LU7 is the Lung's Connecting point, on the wrist — a distal point, not a Back-Shu point. 列缺為肺之絡穴，在腕，屬遠道，非背俞。"}]},
    {q:"What is the one thing you must not do when needling Zhongfu?",
     cq:"針中府，何事斷不可為？",
     opts:[
      {t:"Do not needle deep and perpendicular — the lung lies underneath; angle it obliquely or transversely, laterally",
       c:"不可深刺直刺——其下為肺。當向外斜刺或平刺",ok:true,
       note:"<b>Correct, and this is the safety point of the whole visit.</b> LU1 sits over the chest wall. Perpendicular deep insertion risks puncturing the lung. The standard is oblique or transverse insertion directed laterally, at a shallow depth. Points on the chest and upper back all carry this caution."},
      {t:"Do not use it on a patient who is coughing",
       c:"咳者禁用",ok:false,
       note:"Coughing is one of its main indications. 咳嗽正其所主。"},
      {t:"Do not combine it with points on the arm",
       c:"不可與臂上諸穴同用",ok:false,
       note:"Local plus distal is the ordinary way to build a prescription — LU1 with LU7 or LU5 is a normal pair. 近部配遠道，本為常法：中府配列缺、尺澤，方之常也。"}]}
  ],
  card:{en:"Zhongfu LU1 — Front-Mu point of the Lung, where Lung and Spleen channels meet. Tender here, suspect the Lung. Needle oblique and shallow, never deep and straight.",
        zh:"中府，肺之募穴，手太陰與足太陰之會。此處壓痛，當察肺。宜斜刺淺刺，切忌直刺深刺。"} },

{ id:"LU2", region:"chest",
  beats:[
    {en:"A porter cannot lift his arm above his shoulder without a catch, and says his chest feels like a shut door. Shen Yi runs a thumb along under his collarbone and stops in the hollow near its outer end.",
     zh:"一位腳伕舉臂過肩便覺卡住，說胸口像扇關著的門。沈醫師以拇指沿鎖骨下緣而行，停在近外端之凹陷處。"},
    {en:"\"Cloud Gate,\" she says. \"One cun above the Mu point, in the hollow you can feel when he lifts his arm. The Lung channel surfaces here on its way to the arm.\"",
     zh:"「雲門。在募穴上一寸，舉臂則見其陷。肺經由此出而走臂。」"},
    {en:"\"It opens the chest and sends Lung qi downward. And it takes the same care as the point below it — shallow, angled outward.\"",
     zh:"「其功開胸、降肺氣。其慎亦與下穴同：淺刺、向外斜之。」"}
  ],
  qs:[
    {q:"How do you tell Yunmen LU2 from Zhongfu LU1?",
     cq:"雲門與中府何以別之？",
     opts:[
      {t:"LU2 is in the hollow below the collarbone; LU1 is one cun lower, in the first intercostal space — and LU1 is the Front-Mu point, LU2 is not",
       c:"雲門在鎖骨下窩，中府在其下一寸、第一肋間。中府為募穴，雲門非是",ok:true,
       note:"<b>Correct.</b> Both are 6 cun lateral to the midline. LU2 sits in the infraclavicular fossa — the hollow that appears when the arm is raised. LU1 is one cun below it, in the first intercostal space, and carries the Front-Mu title."},
      {t:"LU2 is on the arm and LU1 is on the chest",
       c:"雲門在臂，中府在胸",ok:false,
       note:"Both are on the chest. The Lung channel does not reach the arm until LU3. 二穴皆在胸。肺經至天府方入於臂。"},
      {t:"LU2 is the Front-Mu point and LU1 is the Well point",
       c:"雲門為募穴，中府為井穴",ok:false,
       note:"Reversed and wrong twice: LU1 is the Front-Mu point, and the Lung's Well point is Shaoshang LU11, at the thumb. 顛倒矣：中府為募，肺之井穴為少商，在拇指。"}]},
    {q:"The porter's main complaint is that his arm catches. What makes LU2 reasonable for that as well as for the chest?",
     cq:"腳伕主訴舉臂受阻，雲門何以兼治其臂？",
     opts:[
      {t:"It is a local point at the shoulder region where the Lung channel begins its run down the arm, so it treats both the chest and the shoulder",
       c:"其穴當肩前，正肺經下行入臂之始，故胸與肩皆治",ok:true,
       note:"<b>Correct.</b> A point treats what is under it and what its channel reaches. LU2 sits at the front of the shoulder — so shoulder and upper chest complaints along the Lung channel are within reach. Pair it with a distal point for the same channel and the prescription is complete."},
      {t:"Because all chest points treat the arm",
       c:"凡胸穴皆治臂",ok:false,
       note:"Not so — a point treats along <b>its own</b> channel and where it sits. Region alone does not decide it. 不然。穴之所治，隨其經而定，不徒以部位論。"},
      {t:"Because it is the Cleft point for acute pain",
       c:"其為郄穴，主急痛",ok:false,
       note:"The Lung's Cleft point is Kongzui LU6, on the forearm. 肺之郄穴為孔最，在前臂。"}]},
    {q:"Which prescription pattern is being demonstrated when Shen Yi adds Lieque LU7 to LU1 and LU2?",
     cq:"沈醫師於中府、雲門之外再加列缺，此為何法？",
     opts:[
      {t:"Local points plus a distal point on the same channel",
       c:"近部取穴配遠道取穴，同屬一經",ok:true,
       note:"<b>Correct.</b> Local points act where the complaint is; the distal point moves the channel as a whole and often carries the stronger effect. Local + distal on one channel is the backbone of most acupuncture prescriptions. 近部治其所在，遠道通其一經，且力多在遠端。此為配穴之常法。"},
      {t:"Shu-Mu pairing",
       c:"俞募配穴",ok:false,
       note:"Shu-Mu pairs a Back-Shu with a Front-Mu — LU1 with BL13. LU7 is neither. 俞募者，背俞配前募，如肺俞配中府。列缺非其類。"},
      {t:"Host-guest pairing",
       c:"主客原絡配穴",ok:false,
       note:"Host-guest pairs the Source point of one channel with the Connecting point of its interior-exterior partner — for example LU9 with LI6. 原絡配穴者，本經原穴配表裡經絡穴，如太淵配偏歷。"}]}
  ],
  card:{en:"Yunmen LU2 — in the hollow below the outer collarbone, one cun above the Mu point. Opens the chest, descends Lung qi, reaches the front of the shoulder. Shallow and oblique, laterally.",
        zh:"雲門，鎖骨下窩，中府上一寸。開胸、降肺氣，兼治肩前。宜向外斜刺淺刺。"} },

{ id:"LU3", region:"chest",
  beats:[
    {en:"A boy is brought in with a nosebleed that has stopped and started three times since morning. He is not injured and he is not feverish, but the bleeding keeps returning.",
     zh:"一名孩童被帶來，鼻血自晨起三作三止。既非外傷，亦不發熱，然血屢作。"},
    {en:"Shen Yi asks him to raise his arm and touch the tip of his nose with it. Where the nose meets the inner upper arm, she marks the spot.",
     zh:"沈醫師令他舉臂，以鼻尖點其上臂內側。鼻所觸處，即其穴也。"},
    {en:"\"Tianfu. Three cun below the front of the armpit, on the thumb side of the biceps. The Lung opens into the nose — so a Lung point can quiet what is bleeding there.\"",
     zh:"「天府。腋前紋頭下三寸，肱二頭肌橈側緣。肺開竅於鼻，故取肺經之穴以寧其衄。」"}
  ],
  qs:[
    {q:"Why would a Lung channel point be chosen for a nosebleed?",
     cq:"鼻衄何以取肺經之穴？",
     opts:[
      {t:"Because the Lung opens into the nose, so the nose is where Lung disharmony shows and where Lung points can act",
       c:"肺開竅於鼻，鼻為肺之外候，故肺穴可及之",ok:true,
       note:"<b>Correct.</b> The orifice belongs to the organ: Lung–nose, Liver–eyes, Kidney–ears, Heart–tongue, Spleen–mouth. Tianfu is the classical Lung point for epistaxis. This is a teaching point about mechanism, not a first-aid instruction — bleeding that is heavy, repeated or unexplained needs proper medical assessment."},
      {t:"Because the nose is close to the upper arm",
       c:"以鼻近上臂",ok:false,
       note:"It is not. The connection is the channel and the organ-orifice relationship, not distance. 不然。所憑者經與竅，非其遠近。"},
      {t:"Because all bleeding is treated on the Lung channel",
       c:"凡出血皆治於肺經",ok:false,
       note:"Bleeding is treated by mechanism and by site. Yin channel Cleft points are the general blood points; the channel chosen follows the organ involved. 血證之治，隨其機與其部。陰經郄穴為治血之通法，取何經則視其臟。"}]},
    {q:"The bleeding suddenly becomes heavier and he starts coughing up blood. Which point becomes the better choice?",
     cq:"若血勢驟增，且見咯血，當改取何穴？",
     opts:[
      {t:"Kongzui LU6, the Cleft point — yin channel Cleft points treat acute bleeding",
       c:"孔最。陰經郄穴主急性血證",ok:true,
       note:"<b>Correct in principle</b> — and the practical answer is that a patient coughing blood needs urgent conventional medical assessment. The teaching stands: Cleft points 郄穴 are for acute conditions, and on yin channels they additionally govern bleeding. LU6 is the classical point for coughing blood."},
      {t:"Taiyuan LU9, the Source point",
       c:"太淵，肺之原穴",ok:false,
       note:"LU9 tonifies — the right idea for a depleted Lung afterwards, not for the acute moment. 太淵主補，宜於血止之後調其虛，非急時之選。"},
      {t:"Shaoshang LU11, pricked to bleed",
       c:"少商點刺出血",ok:false,
       note:"Bleeding a Well point is for acute heat in the throat or clouded consciousness — deliberately adding blood loss to a patient who is already bleeding is the wrong direction. 少商刺血者，為咽喉熱毒、神昏而設。其人方失血而更刺之，非其治。"}]},
    {q:"What is the memory hook for locating Tianfu?",
     cq:"天府定位之訣為何？",
     opts:[
      {t:"Raise the arm and touch the tip of the nose to the inner upper arm — where the nose lands is the point",
       c:"舉臂以鼻尖點上臂內側，鼻所至處即是",ok:true,
       note:"<b>Correct</b>, and the classical measure agrees: 3 cun below the anterior axillary fold, on the radial side of the biceps. The nose trick is a check, not a substitute for the cun measurement — but it also encodes the Lung–nose relationship, which is why the point treats nosebleed."},
      {t:"Measure one cun above the wrist crease",
       c:"腕橫紋上一寸",ok:false,
       note:"That is Jingqu LU8. 此經渠之位。"},
      {t:"At the cubital crease beside the biceps tendon",
       c:"肘橫紋中，肱二頭肌腱橈側",ok:false,
       note:"That is Chize LU5, the Sea point. 此尺澤，肺之合穴。"}]}
  ],
  card:{en:"Tianfu LU3 — 3 cun below the front of the armpit, radial to the biceps. Descends Lung qi; the classical point for nosebleed, because the Lung opens into the nose.",
        zh:"天府，腋前紋頭下三寸，肱二頭肌橈側。降肺氣，古為治鼻衄之要穴——肺開竅於鼻故也。"} },

{ id:"LU4", region:"chest",
  beats:[
    {en:"A young man carries sacks all day and now his upper arm aches along its inner front edge, from the armpit down toward the elbow. Pressing it makes him wince in one narrow line.",
     zh:"一少年終日負囊，今上臂內前緣作痛，自腋下至肘。按之則痛，其痛成一線。"},
    {en:"\"That line is a channel,\" says Shen Yi. \"Follow it with your thumb and tell me what it is.\"",
     zh:"「這條線就是一條經，」沈醫師說，「用拇指順著走一遍，說說看是哪一條。」"},
    {en:"She needles Xiabai, one cun below Tianfu — four cun below the front of the armpit. \"Where the channel hurts, the channel may be treated.\"",
     zh:"她針俠白，在天府下一寸，即腋前紋頭下四寸。「經之所痛，即經之所治。」"}
  ],
  qs:[
    {q:"What is the reasoning behind needling a point that sits right on the painful line?",
     cq:"痛在何處即針何處，其理安在？",
     opts:[
      {t:"Ashi and local channel points treat obstruction where it sits — if qi and blood are blocked along a channel, opening that segment relieves it",
       c:"阿是與近部取穴，通其所滯。經氣血阻於一段，通之則痛止",ok:true,
       note:"<b>Correct.</b> Channel problems 經絡病 are treated along the channel: local points where it hurts, plus a distal point on the same channel to move the whole line. \"不通則痛\" — where there is no free flow there is pain. Restore the flow and the pain settles."},
      {t:"Because a painful point is always a Cleft point",
       c:"痛處必為郄穴",ok:false,
       note:"Cleft points are specific named points, not any tender spot. A tender spot with no name is an ashi point 阿是穴. 郄穴為定名之穴，非凡壓痛皆是。無名之壓痛者，阿是穴也。"},
      {t:"Because arm pain always belongs to the Lung",
       c:"凡臂痛皆屬肺",ok:false,
       note:"Which channel depends on <b>where</b> on the arm. Inner front edge is Lung; inner middle is Pericardium; inner rear is Heart; the outer surfaces are the three yang channels. 視其在臂之何側：內前屬肺，內中屬心包，內後屬心，外側則三陽。"}]},
    {q:"Xiabai LU4 and Tianfu LU3 are one cun apart. What separates them in use?",
     cq:"俠白與天府相去一寸，其用何異？",
     opts:[
      {t:"LU3 is the classical point for nosebleed; LU4 is used more for chest pain and pain along the upper arm",
       c:"天府古主鼻衄；俠白多用於胸痛與上臂痛",ok:true,
       note:"<b>Correct.</b> Neighbouring points often share a general action — both descend Lung qi — while each keeps a speciality. Knowing the speciality is what lets you choose between two points a thumb's width apart."},
      {t:"LU4 is a Source point and LU3 is a Connecting point",
       c:"俠白為原穴，天府為絡穴",ok:false,
       note:"Neither is. The Lung's Source point is LU9 and its Connecting point is LU7 — both at the wrist. 二者皆非。肺之原為太淵，絡為列缺，俱在腕。"},
      {t:"They are the same point under two names",
       c:"二者一穴二名",ok:false,
       note:"They are one cun apart and separately named in every classical text. 相去一寸，古籍各有其名。"}]},
    {q:"Which four Lung points sit above the elbow, and why does that matter for the Five Shu?",
     cq:"肺經肘上有幾穴？於五輸何干？",
     opts:[
      {t:"LU1 to LU4 — and none of them can be a Five Shu point, because the Five Shu all lie below the elbow or knee",
       c:"中府至俠白四穴。此四穴皆非五輸，蓋五輸盡在肘膝以下",ok:true,
       note:"<b>Correct, and it is a clean way to remember the set.</b> The Lung's Five Shu are LU11 Well, LU10 Spring, LU9 Stream, LU8 River and LU5 Sea — all from the elbow down. LU1–LU4 sit above the elbow and belong to other categories or to none."},
      {t:"LU1 to LU6",
       c:"中府至孔最六穴",ok:false,
       note:"LU5 is at the elbow crease and LU6 is on the forearm — both below the elbow. 尺澤在肘橫紋，孔最在前臂，皆在肘下。"},
      {t:"Only LU1",
       c:"惟中府一穴",ok:false,
       note:"LU2, LU3 and LU4 are also above the elbow. 雲門、天府、俠白亦在肘上。"}]}
  ],
  card:{en:"Xiabai LU4 — 4 cun below the front of the armpit, one cun below Tianfu. Chest pain and pain along the inner front of the upper arm. Above the elbow, so not a Five Shu point.",
        zh:"俠白，腋前紋頭下四寸，天府下一寸。主胸痛及上臂內前緣痛。穴在肘上，故非五輸。"} }

,

/* ══════════════ THE LUNG'S FIVE SHU 肺經五輸 — elbow to thumb ══════════════ */

{ id:"LU5", region:"hand",
  beats:[
    {en:"A dyer coughs in loud barking bursts. What he brings up is thick and yellow, he is warm to the touch, and he wants cold water.",
     zh:"一染匠咳聲重濁，痰稠而黃，身熱，欲飲冷水。"},
    {en:"Shen Yi flexes his elbow slightly, finds the crease, and slips her finger to the thumb side of the big tendon in the middle of it.",
     zh:"沈醫師令其微屈肘，尋得肘橫紋，指落於中央大筋之橈側。"},
    {en:"\"Chize. The Sea point of the Lung. 'The Sea points govern rebellious qi and outflow' — and this one drains Lung heat while it sends the cough back down.\"",
     zh:"「尺澤，肺之合穴。『合主逆氣而泄』。此穴清肺熱而降逆咳。」"}
  ],
  qs:[
    {q:"Thick yellow phlegm, warmth, thirst for cold. Why Chize rather than Taiyuan?",
     cq:"痰黃稠、身熱、渴喜冷飲，何以取尺澤而不取太淵？",
     opts:[
      {t:"Because this is a full hot pattern and Chize drains, while Taiyuan tonifies",
       c:"此為實熱，尺澤主瀉，太淵主補",ok:true,
       note:"<b>Correct — and this single distinction decides half the Lung prescriptions you will ever write.</b> Draining a full pattern lets the pathogen out. Tonifying while a substantial pathogen is still lodged shuts the door with the thief inside 閉門留寇."},
      {t:"Because Chize is closer to the chest",
       c:"以尺澤近胸",ok:false,
       note:"Distance is not the reasoning; the category is. Both are Lung channel points, and what separates them is drain versus tonify. 不以遠近論，當以其類論。二者同經，所別在補瀉。"},
      {t:"Because Taiyuan cannot be used for cough",
       c:"太淵不可治咳",ok:false,
       note:"Taiyuan is excellent for a <b>deficient</b> cough — weak, chronic, with a quiet voice. It is wrong here only because this cough is full and hot. 太淵最宜虛咳：咳而無力、久病、聲低。其不合者，惟以本案為實熱耳。"}]},
    {q:"What does the classical line \"the Sea points govern rebellious qi and outflow\" mean in practice?",
     cq:"「合主逆氣而泄」，於臨床何謂？",
     opts:[
      {t:"Sea points treat qi moving the wrong way — cough and wheeze for the Lung, vomiting or diarrhoea for the digestive organs",
       c:"合穴主氣之逆行：於肺則咳喘，於胃腸則嘔吐泄瀉",ok:true,
       note:"<b>Correct.</b> Lung qi should descend; when it rebels upward you get cough and wheeze, and LU5 sends it back down. On the Stomach channel the same principle gives ST36 its reputation for vomiting and diarrhoea. One line, two organs, the same mechanism."},
      {t:"Sea points are only for the sea of qi in the abdomen",
       c:"合穴專主腹中氣海",ok:false,
       note:"\"Sea\" here describes where channel qi enters deeply at the elbow or knee, not an abdominal region. 「合」者，經氣深入之處，在肘膝，非指腹中之部。"},
      {t:"Sea points must always be drained",
       c:"合穴必用瀉法",ok:false,
       note:"Technique follows the pattern, not the category. ST36 is a Sea point and is usually reinforced. 手法從證，不從其類。足三里亦合穴，而多用補法。"}]},
    {q:"What must you be careful of at Chize?",
     cq:"針尺澤，何當謹慎？",
     opts:[
      {t:"The brachial artery runs just medial to the tendon — locate the tendon first and stay on its thumb side",
       c:"肱動脈在肌腱內側，當先定其腱，針在其橈側",ok:true,
       note:"<b>Correct.</b> The point is in the depression on the <i>radial</i> side of the biceps tendon. Finding the tendon first is both how you locate the point accurately and how you stay clear of the vessel."},
      {t:"It must never be used in a cough",
       c:"咳者禁用",ok:false,
       note:"Cough is its principal indication. 咳為其主治。"},
      {t:"It must always be moxaed",
       c:"必當施灸",ok:false,
       note:"Moxa warms. In a hot full pattern like this one, warmth works against the treatment principle. 灸性溫。本案實熱，加溫則與治則相悖。"}]}
  ],
  card:{en:"Chize LU5 — Sea point of the Lung, at the cubital crease on the thumb side of the biceps tendon. Drains Lung heat and sends rebellious qi down. Sea points govern rebellious qi and outflow.",
        zh:"尺澤，肺之合穴，肘橫紋中、肱二頭肌腱橈側。清肺熱、降肺氣。「合主逆氣而泄」。"} },

{ id:"LU6", region:"hand",
  beats:[
    {en:"A woman who has coughed for a week suddenly brings up bright blood on a cloth. She is frightened, and so is her husband.",
     zh:"一婦咳已一週，忽咯鮮血染帕。其人與夫俱驚。"},
    {en:"Shen Yi tells the husband to fetch help, and while they wait she measures seven cun up from the wrist crease on the thumb side of the forearm.",
     zh:"沈醫師令其夫速去請援，待援之際，於前臂橈側自腕橫紋上量七寸。"},
    {en:"\"Kongzui. The Cleft point of the Lung. Cleft points are where qi and blood gather deeply — they are the points for sudden trouble, and on the yin channels they are the points for bleeding.\"",
     zh:"「孔最，肺之郄穴。郄者，氣血深聚之處，主急症；陰經之郄，兼主血證。」"}
  ],
  qs:[
    {q:"What defines a Cleft point 郄穴 and what is it for?",
     cq:"郄穴之義為何？其主何病？",
     opts:[
      {t:"A place where channel qi and blood gather deeply — used for acute conditions on that channel, and on yin channels also for bleeding",
       c:"經氣血深聚之處。主本經急症；陰經郄穴兼主血證",ok:true,
       note:"<b>Correct.</b> Twelve regular channels plus four extraordinary vessels each have one, sixteen in all. Examples worth knowing: LU6 for coughing blood, SP8 for painful periods, PC4 for chest pain, LR6 for uterine bleeding. Every one of those is a yin channel Cleft point treating blood."},
      {t:"The point where a channel begins",
       c:"經之所起",ok:false,
       note:"That is the Well point 井穴, at the fingertip or toe. 此井穴，在指趾之端。"},
      {t:"The point that connects to the paired channel",
       c:"聯絡表裡之穴",ok:false,
       note:"That is the Connecting point 絡穴 — for the Lung, Lieque LU7. 此絡穴，肺為列缺。"}]},
    {q:"Kongzui LU6 or Chize LU5 — which fits sudden coughing of blood, and which fits a hot productive cough?",
     cq:"驟然咯血與痰熱咳嗽，孔最、尺澤各宜其一，如何分？",
     opts:[
      {t:"LU6 for the sudden bleeding, LU5 for the hot productive cough",
       c:"咯血取孔最，痰熱咳取尺澤",ok:true,
       note:"<b>Correct.</b> Cleft point for acute and for blood; Sea point for clearing heat and descending qi. They sit on the same forearm two cun apart in function, and choosing between them is exactly the kind of question a board exam asks. Note also: real haemoptysis is a medical emergency and belongs with a clinician, whatever the channel theory says."},
      {t:"The other way round",
       c:"適與之反",ok:false,
       note:"That reverses both categories. 二者之類皆倒。"},
      {t:"Either will do; they are interchangeable",
       c:"二者可互代",ok:false,
       note:"Then the categories would carry no information — and the whole system of special points exists because they do. 若可互代，則類別無義。特定穴之設，正以其不可互代。"}]},
    {q:"Where exactly is Kongzui?",
     cq:"孔最之位何在？",
     opts:[
      {t:"7 cun above the wrist crease on the line from LU9 to LU5, on the radial side of the forearm",
       c:"腕橫紋上七寸，太淵與尺澤連線上，前臂橈側",ok:true,
       note:"<b>Correct.</b> The Lung channel on the forearm is one line from LU5 at the elbow crease to LU9 at the wrist. Measure along it: LU6 at 7 cun above the wrist, LU7 at 1.5 cun, LU8 at 1 cun, LU9 at the crease."},
      {t:"1.5 cun above the wrist crease",
       c:"腕橫紋上一寸半",ok:false,
       note:"That is Lieque LU7. 此列缺。"},
      {t:"At the cubital crease",
       c:"肘橫紋中",ok:false,
       note:"That is Chize LU5. 此尺澤。"}]}
  ],
  card:{en:"Kongzui LU6 — Cleft point of the Lung, 7 cun above the wrist crease. Acute conditions of the Lung channel, and — because it is a yin channel Cleft point — bleeding, classically coughing of blood.",
        zh:"孔最，肺之郄穴，腕橫紋上七寸。主肺經急症；陰經郄穴故兼主血證，古主咯血。"} },

{ id:"LU8", region:"hand",
  beats:[
    {en:"A student asks why there is a point one cun above the wrist crease when Taiyuan is right there at the crease. \"They cannot both be needed,\" he says.",
     zh:"一學徒問：腕橫紋上一寸既有一穴，紋中又有太淵，「二者豈能俱需？」"},
    {en:"Shen Yi puts his finger on the radial artery, then moves it up one cun. \"Jingqu. The River point. Feel it — you are still on the vessel.\"",
     zh:"沈醫師按其指於橈動脈上，復上移一寸。「經渠，肺之經穴。試按之——猶在脈上。」"},
    {en:"\"'The River points govern wheeze, cough, chills and fever.' And because it sits on the artery, the old books forbid moxa here.\"",
     zh:"「『經主喘咳寒熱』。以其正當動脈，故古籍云此穴禁灸。」"}
  ],
  qs:[
    {q:"Which Five Shu category is Jingqu, and what does its classical line say it treats?",
     cq:"經渠屬五輸何類？其訣主治為何？",
     opts:[
      {t:"River point 經穴 — \"the River points govern wheeze, cough, chills and fever\"",
       c:"經穴。「經主喘咳寒熱」",ok:true,
       note:"<b>Correct.</b> The full verse: Well for fullness below the heart, Spring for body heat, Stream for heaviness and aching joints, River for wheeze cough chills and fever, Sea for rebellious qi and outflow. On the Lung channel the River point's indications and the organ's indications line up almost exactly."},
      {t:"Source point 原穴",
       c:"原穴",ok:false,
       note:"The Lung's Source point is Taiyuan LU9, one cun lower at the crease. 肺之原穴為太淵，在下一寸之腕橫紋。"},
      {t:"Spring point 滎穴",
       c:"滎穴",ok:false,
       note:"The Lung's Spring point is Yuji LU10, on the thenar eminence. 肺之滎穴為魚際，在魚際赤白肉際。"}]},
    {q:"How do you tell Jingqu LU8 from Taiyuan LU9 in practice?",
     cq:"經渠與太淵，臨床何以別之？",
     opts:[
      {t:"LU8 is one cun above the wrist crease; LU9 is at the crease — and LU9 is the Source point, so it is the one that tonifies the Lung",
       c:"經渠在腕橫紋上一寸，太淵在紋中。太淵為原穴，主補肺",ok:true,
       note:"<b>Correct.</b> One cun apart, and the difference in use follows the category rather than the location. Source point when the organ is depleted; River point for the cough-and-wheeze picture with chills and fever."},
      {t:"LU8 is on the ulnar side and LU9 on the radial side",
       c:"經渠在尺側，太淵在橈側",ok:false,
       note:"Both are on the radial side, over the artery. 二者俱在橈側，皆當動脈。"},
      {t:"LU8 is above the elbow",
       c:"經渠在肘上",ok:false,
       note:"LU8 is on the forearm; nothing above the elbow can be a Five Shu point. 經渠在前臂。肘上之穴，無為五輸者。"}]},
    {q:"Why do the classical texts forbid moxa at Jingqu?",
     cq:"古籍何以禁灸經渠？",
     opts:[
      {t:"Because it sits directly over the radial artery",
       c:"以其正當橈動脈之上",ok:true,
       note:"<b>Correct.</b> The classical prohibition 禁灸 at LU8 is about the vessel underneath. The same anatomical caution shapes needling at LU9 — locate the pulse, then needle beside it, not into it."},
      {t:"Because moxa is forbidden on every Lung point",
       c:"肺經諸穴皆禁灸",ok:false,
       note:"Not so — moxa is used on Lung points in cold and deficient patterns. The prohibition here is specific to this point's anatomy. 不然。肺經諸穴於寒證虛證仍可灸。此禁專為本穴之局部而設。"},
      {t:"Because it would injure the tendon",
       c:"恐傷其筋",ok:false,
       note:"The concern at LU8 is the artery, not a tendon. 本穴所慮者動脈，非筋。"}]}
  ],
  card:{en:"Jingqu LU8 — River point of the Lung, 1 cun above the wrist crease over the radial artery. \"River points govern wheeze, cough, chills and fever.\" Classically no moxa here.",
        zh:"經渠，肺之經穴，腕橫紋上一寸，當橈動脈。「經主喘咳寒熱」。古籍禁灸。"} },

{ id:"LU9", region:"hand",
  beats:[
    {en:"An old scribe has coughed quietly for years. The cough is weak, his voice is soft, he is short of breath on the stairs, and there is barely any phlegm.",
     zh:"一老書吏久咳數年。咳聲低弱，語音無力，登階則氣短，痰亦甚少。"},
    {en:"Shen Yi rests three fingers on his wrist, the way she does to take a pulse, and needles at the radial end of the crease — beside the artery, not into it.",
     zh:"沈醫師三指按其寸口，如診脈然，乃刺腕橫紋橈側端，針在動脈之旁而不入其脈。"},
    {en:"\"Taiyuan. The Source point of the Lung, and the Influential point of the vessels. Where the organ is empty, the Source point is where you begin.\"",
     zh:"「太淵，肺之原穴，又為八會之脈會。臟虛者，取其原穴為始。」"}
  ],
  qs:[
    {q:"Why is Taiyuan the right point for this quiet, chronic, phlegmless cough?",
     cq:"久咳聲低、痰少無力，何以取太淵？",
     opts:[
      {t:"Because a Source point treats its own organ, and this Lung is depleted rather than obstructed",
       c:"原穴主本臟；本案肺虛而非邪阻",ok:true,
       note:"<b>Correct.</b> Read the cough's <i>character</i>: loud, forceful, productive suggests excess; weak, quiet, dry and long-standing suggests deficiency. Source points are the first reach when the organ itself is short. On yin channels the Source point and the Stream point are the same point."},
      {t:"Because it drains phlegm heat",
       c:"以其清痰熱",ok:false,
       note:"That is Chize LU5's work, and there is no phlegm heat here. 此尺澤之職，且本案無痰熱可清。"},
      {t:"Because it is a Cleft point for acute conditions",
       c:"以其為郄穴主急症",ok:false,
       note:"The Lung's Cleft point is Kongzui LU6, and this illness is not acute — it is years old. 肺之郄穴為孔最。且此病經年，非急症。"}]},
    {q:"Taiyuan is the Influential point of the vessels 脈會. What does that add?",
     cq:"太淵為脈會，其義何在？",
     opts:[
      {t:"It is used where the vessels themselves are the problem — weak or absent pulse, poor circulation — and it is not a coincidence that it sits where the pulse is taken",
       c:"血脈不利、無脈之證取之。其位正當寸口，非偶然也",ok:true,
       note:"<b>Correct.</b> The eight Influential points 八會穴 each govern one substance or tissue across the whole body: zang LR13, fu REN12, qi REN17, blood BL17, sinew GB34, vessel LU9, bone BL11, marrow GB39. Learn them as a set of eight — they come up constantly."},
      {t:"It means the point may only be used on the pulse-taking hand",
       c:"謂惟可取於診脈之手",ok:false,
       note:"No such restriction exists. 無此限。"},
      {t:"It means the point governs the bones",
       c:"謂其主骨",ok:false,
       note:"Bone is Dazhu BL11. 骨會大杼。"}]},
    {q:"What does the anatomy at Taiyuan require of you?",
     cq:"太淵之局部解剖，於針法有何要求？",
     opts:[
      {t:"Feel the radial artery first and needle beside it, avoiding the vessel",
       c:"先按橈動脈，針其旁而避之",ok:true,
       note:"<b>Correct.</b> The point is in the depression where the radial artery pulses — so the artery is your landmark and your hazard at once. Locate it, then insert just beside it. The same reasoning underlies the classical moxa prohibition at LU8, one cun above."},
      {t:"Needle deep and perpendicular for a strong effect",
       c:"宜深刺直刺以取其效",ok:false,
       note:"Depth is not strength, and here it is risk. 深非即效，於此則為險。"},
      {t:"Only moxa may be used, never a needle",
       c:"惟可灸不可針",ok:false,
       note:"LU9 is needled routinely, with care for the vessel. 太淵常法可針，惟當避脈。"}]}
  ],
  card:{en:"Taiyuan LU9 — Source and Stream point of the Lung, and Influential point of the vessels. The point for a depleted Lung. It sits where you take the pulse; needle beside the artery, not into it.",
        zh:"太淵，肺之原穴、輸穴，又為脈會。肺虛之要穴。其位即寸口診脈之處，針當避動脈。"} }

,

{ id:"LU10", region:"hand",
  beats:[
    {en:"A singer arrives unable to speak above a whisper. Her throat is red and raw, she is feverish, and she says her palms have felt hot for days.",
     zh:"一歌者至，語不能出聲，惟能低語。咽紅而痛，身熱，且言手心數日發熱。"},
    {en:"Shen Yi turns her hand palm up and presses the fleshy mound below the thumb, at the line where pale skin meets pink.",
     zh:"沈醫師翻其掌，按大魚際赤白肉際之處。"},
    {en:"\"Yuji. The Spring point of the Lung. 'The Spring points govern heat in the body.' When the Lung is hot and the throat is burning, this is where you go.\"",
     zh:"「魚際，肺之滎穴。『滎主身熱』。肺熱咽痛者，取此。」"}
  ],
  qs:[
    {q:"Which Five Shu category is Yuji, and what is its classical indication?",
     cq:"魚際屬五輸何類？其主治為何？",
     opts:[
      {t:"Spring point 滎穴 — \"the Spring points govern heat in the body\"",
       c:"滎穴。「滎主身熱」",ok:true,
       note:"<b>Correct, and this is one of the most usable lines in the whole verse.</b> When a channel is hot, reach for its Spring point. Lung heat with a sore throat sends you to LU10; Stomach heat sends you to ST44 Neiting; Heart heat sends you to HT8 Shaofu. One rule, twelve channels."},
      {t:"Well point 井穴",
       c:"井穴",ok:false,
       note:"The Lung's Well point is Shaoshang LU11, at the corner of the thumbnail. 肺之井穴為少商，在拇指甲角。"},
      {t:"Sea point 合穴",
       c:"合穴",ok:false,
       note:"The Lung's Sea point is Chize LU5, at the elbow. 肺之合穴為尺澤，在肘。"}]},
    {q:"She also mentions that her palms and soles feel hot in the evenings. Does that change your reading?",
     cq:"其人又言手足心夜間發熱，於辨證有何改？",
     opts:[
      {t:"It is worth noting — heat in the palms, soles and chest is the classical five-centre heat of yin deficiency, which is a different mechanism from an acute hot throat",
       c:"當記之。手足心與心胸煩熱，為陰虛之「五心煩熱」，與急性咽熱之機不同",ok:true,
       note:"<b>Correct, and the discipline is to hold both.</b> The acute red throat with fever is a full heat pattern. Five-centre heat 五心煩熱 with night sweats and a red tongue with scant coat is empty heat. If both are present you treat the urgent branch first and the root afterwards. Yuji happens to be used for both, which is exactly why the mechanism must be named rather than assumed."},
      {t:"No — hot palms always mean the same thing as a hot throat",
       c:"否。手心熱與咽熱一也",ok:false,
       note:"They can arise from opposite mechanisms: one full, one empty. 二者機轉可正相反：一實一虛。"},
      {t:"It means the pattern must be cold",
       c:"當屬寒證",ok:false,
       note:"Heat in the five centres is heat, not cold — the question is whether it is full or empty. 五心煩熱者熱也，所辨在虛實而非寒熱。"}]},
    {q:"Yuji LU10 or Shaoshang LU11 for a severe acute sore throat?",
     cq:"咽喉急性熱痛，取魚際抑或少商？",
     opts:[
      {t:"LU11 pricked to bleed for the acute severe throat; LU10 needled to clear Lung heat more generally",
       c:"急重者少商點刺出血；魚際則針以清肺熱",ok:true,
       note:"<b>Correct.</b> Well points are the emergency category — pricked to bleed for acute heat in the throat and for clouded consciousness. Spring points are the everyday heat-clearing category, needled normally. Severity and urgency decide between them."},
      {t:"Always LU10; LU11 is never used",
       c:"恆取魚際，少商不用",ok:false,
       note:"LU11 is a standard point with a standard technique. 少商為常用之穴，自有其法。"},
      {t:"Neither — throat problems are not treated on the Lung channel",
       c:"二者皆非。咽病不治於肺經",ok:false,
       note:"The Lung channel reaches the throat; both points are classical throat points. 肺經循喉，二穴皆古之治咽要穴。"}]}
  ],
  card:{en:"Yuji LU10 — Spring point of the Lung, on the thenar eminence at the border of red and white flesh. \"Spring points govern heat in the body.\" Lung heat, sore throat, hot palms.",
        zh:"魚際，肺之滎穴，大魚際赤白肉際。「滎主身熱」。主肺熱、咽痛、手心熱。"} },

{ id:"LU11", region:"hand",
  beats:[
    {en:"A boy is carried in with a throat so swollen he can barely swallow, burning with fever. His mother says it came on in a single afternoon.",
     zh:"一童被抱入，咽喉腫甚，吞嚥艱難，身熱如燔。其母言一午之間而作。"},
    {en:"Shen Yi sends at once for a physician. While they wait she takes the boy's thumb and presses beside the corner of the nail.",
     zh:"沈醫師即遣人請醫。待援之際，執其拇指，按於指甲角旁。"},
    {en:"\"Shaoshang. The Well point of the Lung. Well points are where the channel begins and where the qi is shallowest — pricked to bleed, they are the classical answer to sudden fierce heat.\"",
     zh:"「少商，肺之井穴。井者，經之所出，其氣最淺。點刺出血，古為驟起熱毒之法。」"}
  ],
  qs:[
    {q:"What is a Well point 井穴 and what is its classical use?",
     cq:"井穴為何？古之所用為何？",
     opts:[
      {t:"The point at the fingertip or toe where the channel qi emerges — used for sudden severe conditions, often pricked to bleed",
       c:"在指趾之端，經氣所出。主急重之證，多用點刺出血",ok:true,
       note:"<b>Correct.</b> \"Where it emerges is the Well\" 所出為井. The classical line is that Well points govern fullness below the heart 井主心下滿, and in practice they are the emergency and heat-clearing category — LU11 for acute throat heat, and the twelve Well points collectively for clouded consciousness."},
      {t:"The point where a channel enters the elbow or knee",
       c:"經氣入於肘膝之處",ok:false,
       note:"That is the Sea point 合穴 — \"where it enters is the Sea\" 所入為合. 此合穴：「所入為合」。"},
      {t:"The Source point of the channel",
       c:"本經之原穴",ok:false,
       note:"The Lung's Source point is LU9, at the wrist. 肺之原穴為太淵，在腕。"}]},
    {q:"What technique does Shaoshang take, and what would be wrong here?",
     cq:"少商當用何法？何法為非？",
     opts:[
      {t:"A shallow prick to release a few drops of blood — not deep needling, and not moxa in a hot pattern",
       c:"淺刺點出數滴血。不宜深刺，熱證亦不宜灸",ok:true,
       note:"<b>Correct.</b> Well points are on the fingertip where there is almost no depth to work with, and the intention is to let heat out rather than to retain a needle. Moxa adds warmth to a pattern that is already hot. As always: a child with a rapidly swelling throat and high fever needs urgent conventional medical care first."},
      {t:"Deep perpendicular insertion with long retention",
       c:"直刺深入，久留其針",ok:false,
       note:"There is no depth at a fingertip, and retention is not the intention of a Well point in an acute heat pattern. 指端無深可入，且熱證點刺之意不在留針。"},
      {t:"Generous moxa",
       c:"重灸",ok:false,
       note:"Moxa warms. Adding heat to acute heat works directly against the treatment principle. 灸性溫。熱證加溫，與治則相悖。"}]},
    {q:"Name the Lung channel's Five Shu points in order from the thumb inward.",
     cq:"自拇指而上，肺經五輸之序為何？",
     opts:[
      {t:"LU11 Well, LU10 Spring, LU9 Stream, LU8 River, LU5 Sea",
       c:"少商井、魚際滎、太淵輸、經渠經、尺澤合",ok:true,
       note:"<b>Correct, and worth reciting until it is automatic.</b> Note that LU6 and LU7 sit between LU5 and LU8 on the forearm but belong to other categories — LU6 is the Cleft point, LU7 the Connecting point. Position on the arm and category are two different facts about the same point."},
      {t:"LU9 Well, LU8 Spring, LU7 Stream, LU6 River, LU5 Sea",
       c:"太淵井、經渠滎、列缺輸、孔最經、尺澤合",ok:false,
       note:"The Five Shu run from the fingertip, and LU7 and LU6 are not Five Shu points at all. 五輸自指端起，且列缺、孔最非五輸。"},
      {t:"LU1 Well, LU2 Spring, LU3 Stream, LU4 River, LU5 Sea",
       c:"中府井、雲門滎、天府輸、俠白經、尺澤合",ok:false,
       note:"LU1–LU4 are above the elbow, and no Five Shu point lies above the elbow or knee. 中府至俠白皆在肘上；五輸無在肘膝上者。"}]}
  ],
  card:{en:"Shaoshang LU11 — Well point of the Lung, at the radial corner of the thumbnail. Pricked to bleed for sudden fierce heat in the throat. Shallow, no moxa in a hot pattern.",
        zh:"少商，肺之井穴，拇指橈側甲角旁。咽喉熱毒驟起者，點刺出血。宜淺，熱證不灸。"} },

{ id:"SP2", region:"leg",
  beats:[
    {en:"A cook complains of a burning fullness in her belly, a dry mouth, and a body that feels heavy from midday onward. Her tongue is red at the edges with a slightly yellow greasy coat.",
     zh:"一庖人苦於腹中脹而灼熱、口乾、午後身重。舌邊紅，苔微黃而膩。"},
    {en:"Shen Yi takes her foot and presses just in front of the joint at the base of the big toe, on the inner edge, where pale skin meets pink.",
     zh:"沈醫師執其足，按於大趾本節前下方，內側赤白肉際。"},
    {en:"\"Dadu. The Spring point of the Spleen. The Spleen is damp and warm here — and Spring points clear heat.\"",
     zh:"「大都，脾之滎穴。本案脾有濕熱，而『滎主身熱』。」"}
  ],
  qs:[
    {q:"Why a Spring point rather than the Source point for this pattern?",
     cq:"本案何以取滎穴而不取原穴？",
     opts:[
      {t:"Because there is heat to clear, and Spring points are the heat category — the Source point would be the choice if the Spleen were simply empty",
       c:"以其有熱可清，滎主身熱。若但脾虛無熱，則取原穴",ok:true,
       note:"<b>Correct.</b> Same channel, two different jobs. Category answers \"what do I want this point to do\", location answers \"where do I put the needle\". A red-edged tongue with a yellow greasy coat says there is something to clear, so the Spring point leads."},
      {t:"Because Spring points are closer to the toe",
       c:"以滎穴近於趾端",ok:false,
       note:"Proximity is not the reasoning. The Well point is closer still. 不以遠近論。井穴更近趾端。"},
      {t:"Because the Spleen has no Source point",
       c:"脾無原穴",ok:false,
       note:"It does — Taibai SP3, one step further along the foot. 有之：太白，在其後。"}]},
    {q:"Dadu SP2 is the Fire point of an Earth channel. What does that let it do?",
     cq:"大都為土經之火穴，其用安在？",
     opts:[
      {t:"Fire generates Earth, so SP2 is the Spleen's mother point — the point to tonify when the Spleen is deficient",
       c:"火生土，故大都為脾之母穴。脾虛者補之",ok:true,
       note:"<b>Correct, and this is where Five Element theory becomes point selection.</b> \"Tonify the mother in deficiency, drain the child in excess\" 虛則補其母，實則瀉其子. On the Spleen channel: SP2 (Fire) is the mother point, SP5 (Metal) is the child point. Every channel has this pair, and knowing the element of each Five Shu point gives it to you."},
      {t:"It makes SP2 the child point, used to drain excess",
       c:"是為子穴，實則瀉之",ok:false,
       note:"Earth generates Metal, so the Spleen's <b>child</b> point is its Metal point — Shangqiu SP5. 土生金，故脾之子穴為金穴商丘。"},
      {t:"It has no clinical meaning",
       c:"於臨床無義",ok:false,
       note:"It is the whole basis of mother-child point selection. 母子補瀉之法，本於此。"}]},
    {q:"How would you tell Dadu SP2 from Taibai SP3 on the foot?",
     cq:"足上大都與太白，何以別之？",
     opts:[
      {t:"SP2 is in front of the joint at the base of the big toe; SP3 is behind it — both at the border of red and white flesh",
       c:"大都在第一蹠趾關節前下方，太白在其後下方，皆當赤白肉際",ok:true,
       note:"<b>Correct.</b> The joint at the base of the big toe is the landmark: SP2 distal to it, SP3 proximal to it. Learn the landmark and you have located two points, not one."},
      {t:"SP2 is on the sole and SP3 is on the top of the foot",
       c:"大都在足底，太白在足背",ok:false,
       note:"Both sit on the medial border at the red-white flesh line, neither on the sole nor the dorsum. 二者皆在足內側赤白肉際，非底非背。"},
      {t:"SP2 is at the corner of the toenail",
       c:"大都在趾甲角",ok:false,
       note:"That is Yinbai SP1, the Well point. 此隱白，脾之井穴。"}]}
  ],
  card:{en:"Dadu SP2 — Spring point of the Spleen, in front of the big toe's base joint at the red-white flesh border. Clears heat; and as the Fire point on an Earth channel it is the Spleen's mother point for tonification.",
        zh:"大都，脾之滎穴，第一蹠趾關節前下方赤白肉際。清熱；又為土經之火穴，即脾之母穴，虛則補之。"} },

{ id:"SP5", region:"leg",
  beats:[
    {en:"A ferry hand has a heavy, sodden feeling in his limbs and a belly that bloats after meals. He has also twisted the inside of his ankle, and it still aches.",
     zh:"一渡工肢體困重如裹，食後腹脹。且曾扭傷內踝，至今尚痛。"},
    {en:"Shen Yi presses into the hollow just in front of and below the inner ankle bone, and he grimaces — both complaints answer at the same spot.",
     zh:"沈醫師按內踝前下方凹陷處，其人蹙眉——二症同應於一穴。"},
    {en:"\"Shangqiu. The River point of the Spleen, and the Metal point on an Earth channel. It resolves damp, and it sits exactly where his ankle hurts.\"",
     zh:"「商丘，脾之經穴，亦土經之金穴。能化其濕，且正當其踝痛之處。」"}
  ],
  qs:[
    {q:"What makes Shangqiu suitable for both the heaviness and the ankle?",
     cq:"商丘何以兼治困重與踝痛？",
     opts:[
      {t:"It resolves damp through the Spleen channel, and it is a local point at the medial ankle — one needle serving a channel action and a local one",
       c:"循脾經以化濕，又為內踝之近部穴。一針而遠治近治兼備",ok:true,
       note:"<b>Correct, and this is what makes a point worth choosing over its neighbours.</b> When a point's channel action and its location both fit the case, it does two jobs at once. Look for these overlaps when you build a prescription — they keep the number of needles down."},
      {t:"Because all ankle points resolve damp",
       c:"凡踝穴皆能化濕",ok:false,
       note:"Not so — the damp action here comes from the Spleen channel, not from the ankle. BL60 is also at the ankle and does something quite different. 不然。化濕者其經，非其部。崑崙亦在踝而所主迥異。"},
      {t:"Because it is the Source point of the Spleen",
       c:"以其為脾之原穴",ok:false,
       note:"The Spleen's Source point is Taibai SP3. 脾之原穴為太白。"}]},
    {q:"Shangqiu SP5 is the Metal point on an Earth channel. What follows from that?",
     cq:"商丘為土經之金穴，何以推之？",
     opts:[
      {t:"Earth generates Metal, so SP5 is the Spleen's child point — the point to drain when the Spleen pattern is excess",
       c:"土生金，故商丘為脾之子穴。脾實者瀉之",ok:true,
       note:"<b>Correct.</b> \"Drain the child in excess\" 實則瀉其子. Pair it with the previous visit: SP2 (Fire, mother) tonifies; SP5 (Metal, child) drains. The same logic runs on every channel once you know which element each Five Shu point carries."},
      {t:"It is the mother point, used to tonify",
       c:"為母穴，主補",ok:false,
       note:"The Spleen's mother point is its Fire point, Dadu SP2. 脾之母穴為火穴大都。"},
      {t:"It means SP5 belongs to the Lung",
       c:"謂商丘屬肺",ok:false,
       note:"The element of a Five Shu point describes its role within its own channel; the point stays on the Spleen channel. 五輸之五行，言其於本經之職，穴仍屬脾經。"}]},
    {q:"For heavy limbs and damp, would you choose SP5 or SP9?",
     cq:"肢重濕困，取商丘抑或陰陵泉？",
     opts:[
      {t:"SP9 Yinlingquan is the principal point for draining damp; SP5 supports it and adds the local ankle effect",
       c:"利濕之主穴為陰陵泉；商丘輔之，兼治其踝",ok:true,
       note:"<b>Correct.</b> SP9 is the Sea point of the Spleen and the classical drainer of damp from the lower burner. SP5 is a reasonable partner, especially when the ankle is also involved. Knowing which point leads and which supports is the difference between a prescription and a list."},
      {t:"SP5 is the main damp point and SP9 is rarely used",
       c:"商丘為主，陰陵泉罕用",ok:false,
       note:"Reversed. SP9 is one of the most-used points in the whole system for damp. 顛倒矣。陰陵泉為治濕最常用之穴。"},
      {t:"Neither — damp is not treated on the Spleen channel",
       c:"二者皆非。濕不治於脾經",ok:false,
       note:"The Spleen governs the transformation of fluids; damp is its signature pathology. 脾主運化水濕，濕證正其本病。"}]}
  ],
  card:{en:"Shangqiu SP5 — River point of the Spleen, in the hollow in front of and below the inner ankle bone. Resolves damp and treats the medial ankle. As the Metal point on an Earth channel it is the Spleen's child point, for draining excess.",
        zh:"商丘，脾之經穴，內踝前下方凹陷中。化濕，兼治內踝。為土經之金穴，即脾之子穴，實則瀉之。"} }

];
