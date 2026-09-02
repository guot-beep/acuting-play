/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/jieqi.js
   二十四節氣 · the twenty-four solar terms

   The one part of the game that changes without anybody writing new
   content: the calendar moves, the term changes about every fifteen
   days, and the town says something different. Twenty-four states,
   round and round, for as long as the game exists.

   Dates are the usual Gregorian approximations. The real terms drift
   by a day either way with the solar longitude, so the copy never
   claims a term begins exactly on its date — `on or about` is the
   honest phrasing and it is what the town prints.

   LANGUAGE RULE — English is the line, Chinese is the help under it.

   CLAIMS RULE — this is seasonal self-care, not treatment. No entry
   promises an outcome, names a disease it will fix, or tells anyone
   to do anything instead of seeing a clinician. Food is food.
   ═══════════════════════════════════════════════════════════════ */
window.AG_JIEQI = [

{ id:"lichun", n:1, m:2, d:4, en:"Beginning of Spring", zh:"立春", phase:"spring", organ:{en:"Liver",zh:"肝"},
  note:{en:"The year turns even though the cold has not left. In Chinese Medicine spring is the season of the Liver, which likes to move freely and dislikes being held down — so this is the term for gently starting things rather than forcing them.",
        zh:"歲首已轉，而寒未去。中醫以春屬肝，肝喜條達而惡抑鬱——故此節宜緩緩起事，不宜強為。"},
  eat:{en:"A little something sweet and mild to support the middle, and the first green shoots as they appear. Traditionally a heavy, greasy table is eased off now.",
       zh:"稍佐甘平以養中，並取初生之嫩芽。古法於此時漸減肥甘厚味。"},
  care:{en:"Loosen the clothes at the waist, walk outdoors, and let the shoulders down. Sleep a little later into the light and rise a little earlier.",
        zh:"寬其腰帶，出戶而行，鬆其肩背。夜臥早起，廣步於庭。"},
  caution:{en:"Wind and cold both still bite. The old advice is to unlayer slowly — 春捂 — rather than the first warm afternoon.",
           zh:"風寒猶在。古有「春捂」之訓：減衣宜遲，不因一日之暖而遽脫。"} },

{ id:"yushui", n:2, m:2, d:19, en:"Rain Water", zh:"雨水", phase:"spring", organ:{en:"Liver and Spleen",zh:"肝脾"},
  note:{en:"Snow turns to rain and the air holds water again. Damp is the pathogen of this term: heaviness in the limbs, a foggy head, a thick tongue coat, an appetite that goes quiet.",
        zh:"雪化為雨，天地復含水氣。此節之邪在濕：肢體困重、頭昏如裹、苔厚、納減。"},
  eat:{en:"Warm and cooked rather than raw and cold. Millet, Job&#39;s tears, and a plain congee do more here than a salad.",
       zh:"宜溫熟而忌生冷。小米、薏苡仁、清粥，勝於生菜。"},
  care:{en:"Keep the feet and the low back dry and warm. Damp gets in from below.",
        zh:"足與腰宜燥宜暖。濕多自下而入。"},
  caution:{en:"Heaviness and low mood in a damp spring is common and usually passes. Heaviness that does not lift, or that comes with other changes, is worth talking to someone about.",
           zh:"春濕之時，身重情低者多，且多自解。若久而不解，或兼他變，宜與人談之。"} },

{ id:"jingzhe", n:3, m:3, d:5, en:"Waking of Insects", zh:"驚蟄", phase:"spring", organ:{en:"Liver",zh:"肝"},
  note:{en:"Thunder wakes what has been sleeping underground. Yang qi rises quickly now, and in people who run hot or tense it can rise too fast — headaches at the temples, a short fuse, poor sleep.",
        zh:"春雷動而蟄蟲驚起。陽氣升發速，體質偏熱或偏鬱者，升之太過：顳部頭痛、易怒、寐差。"},
  eat:{en:"Pears, and things that are cool without being cold. The old northern custom of stewed pear at this term is about dryness, not superstition.",
       zh:"梨，及涼而不寒之品。北地此節食梨之俗，為其燥也，非為誕也。"},
  care:{en:"Move the body every day. Rising yang that has somewhere to go does not press upward.",
        zh:"日日使身有所動。升發之陽有所出，則不上迫。"},
  caution:{en:"Headache that is new, severe, or different from your usual pattern is not a seasonal note. See a clinician.",
           zh:"頭痛若為新起、劇烈，或與素日不同者，非節氣之事，當就醫。"} },

{ id:"chunfen", n:4, m:3, d:20, en:"Spring Equinox", zh:"春分", phase:"spring", organ:{en:"Liver",zh:"肝"},
  note:{en:"Day and night are equal, and the classical instruction for this term is balance: nothing too hot, nothing too cold, nothing too much. It is the clearest calendar illustration of what yin and yang balancing actually means.",
        zh:"晝夜均而寒暑平。此節古訓在一「和」字：勿過寒、勿過熱、勿過用。陰陽平衡之義，於此最為顯明。"},
  eat:{en:"Pair cooling with warming rather than swinging between them — chives with a cooling green, ginger with a cool soup.",
       zh:"寒溫相配而不偏走：韭配涼蔬，薑佐涼羹。"},
  care:{en:"Regular hours matter more this fortnight than any particular food.",
        zh:"此半月之中，起居有常，重於所食何物。"},
  caution:{en:"Seasonal allergies climb now. Persistent breathlessness or wheeze is a medical question, not a dietary one.",
           zh:"時令過敏漸起。若氣促、喘鳴不已，此屬醫者之事，非飲食所能了。"} },

{ id:"qingming", n:5, m:4, d:5, en:"Pure Brightness", zh:"清明", phase:"spring", organ:{en:"Liver",zh:"肝"},
  note:{en:"The air clears and the graves are swept. This term carries grief in the calendar, and grief and the chest belong together — sighing, a tight ribcage, a lump in the throat that comes and goes.",
        zh:"氣清景明，掃墓之時。此節於歲時本含哀思，而悲與胸中相繫：太息、脅脹、梅核氣時作。"},
  eat:{en:"Light, green and fresh. Traditionally not a term for heavy tonics.",
       zh:"宜清、宜青、宜鮮。古於此節不主峻補。"},
  care:{en:"Let grief have its hour rather than pushing it down. Walking outdoors with someone is the oldest prescription there is.",
        zh:"哀有其時，不必強抑。與人偕行於野，此古方之最古者。"},
  caution:{en:"Grief that does not move at all, or that takes away sleep and appetite for weeks, deserves a person to talk to — a friend, or a professional.",
           zh:"若哀而全不能移，或數週寢食俱廢，宜得一人與談——友朋或專業者皆可。"} },

{ id:"guyu", n:6, m:4, d:20, en:"Grain Rain", zh:"穀雨", phase:"spring", organ:{en:"Spleen",zh:"脾"},
  note:{en:"The last term of spring, and the wettest. Damp and warmth together now, which is a different animal from the cold damp of February — sticky, heavy, and slow to shift.",
        zh:"春之末節，其雨最盛。今為濕與溫並，異於二月之寒濕：黏、重，而難去。"},
  eat:{en:"Job&#39;s tears, adzuki bean, winter melon — bland things that let water leave. Less sugar, less dairy, less fried.",
       zh:"薏苡仁、赤小豆、冬瓜，淡滲之品，使水有所出。減糖、減乳酪、減煎炸。"},
  care:{en:"Air the bedding. Damp lives in what you sleep on as much as in the weather.",
        zh:"曝其寢具。濕之所居，不獨在天，亦在所臥。"},
  caution:{en:"Sticky, heavy, unfinished stools for more than a couple of weeks are worth mentioning to a clinician rather than eating around.",
           zh:"大便黏滯不爽逾兩週者，宜告醫者，不當但以飲食周旋。"} },

{ id:"lixia", n:7, m:5, d:5, en:"Beginning of Summer", zh:"立夏", phase:"summer", organ:{en:"Heart",zh:"心"},
  note:{en:"Summer belongs to the Heart, which houses the spirit. The classical worry of this season is not heat itself but agitation — sleep getting shorter, the mind getting louder, the chest feeling busy.",
        zh:"夏屬心，心藏神。此季所慮者非熱，乃躁：寐漸短、心緒漸喧、胸中不寧。"},
  eat:{en:"Bitter is the flavour of the Heart and of summer — a little bitter green, lotus seed, or lotus plumule tea in the evening.",
       zh:"苦為心之味，亦夏之味：少佐苦菜、蓮子，或夜飲蓮心茶。"},
  care:{en:"A short afternoon rest, even twenty minutes, is the traditional summer instruction and it holds up.",
        zh:"午間小憩，雖一刻亦可。此古之夏令常法，至今可據。"},
  caution:{en:"Palpitations that are new, or that come with breathlessness or chest pain, are a reason to see a doctor promptly — not a seasonal note.",
           zh:"心悸若為新起，或兼氣促、胸痛者，當即就醫，非節氣之事。"} },

{ id:"xiaoman", n:8, m:5, d:21, en:"Grain Buds", zh:"小滿", phase:"summer", organ:{en:"Heart and Spleen",zh:"心脾"},
  note:{en:"Warm and wet at once — the term where damp-heat first appears in the year. It shows as sticky skin, a greasy tongue coat, an afternoon heaviness that a nap does not fix, and a mouth that is dry without wanting much to drink.",
        zh:"溫與濕並，歲中濕熱之始見。其候為膚黏、苔膩、午後困重而寐不解，口乾而不欲多飲。"},
  eat:{en:"Cucumber, winter melon, mung bean, Job&#39;s tears. Ease off the sweet and the greasy, which feed damp.",
       zh:"黃瓜、冬瓜、綠豆、薏苡仁。減甘減膩——甘膩生濕。"},
  care:{en:"Cool, not cold. Iced drinks in a damp season tend to make the middle burner worse, not better.",
        zh:"宜涼不宜寒。濕令而恣冰飲者，中焦反傷。"},
  caution:{en:"Itchy rashes and skin flare-ups are common now and mostly settle. Anything spreading fast, painful, or with fever needs a clinician.",
           zh:"此時膚癢瘡疹多見，多能自平。若蔓延迅速、疼痛，或兼發熱，當即就醫。"} },

{ id:"mangzhong", n:9, m:6, d:6, en:"Grain in Ear", zh:"芒種", phase:"summer", organ:{en:"Heart and Spleen",zh:"心脾"},
  note:{en:"The busiest term in the farming year, and the calendar simply expects people to be tired. Sweating heavily spends both fluids and qi, which is why exhaustion in early summer often comes with thirst and a short temper at once.",
        zh:"農事最忙之節，歲時本許人疲。汗多則氣津並耗，故初夏之倦，每兼口渴與易怒。"},
  eat:{en:"Sour with sweet to hold fluids — plum, hawthorn, a little sour drink. This is the classical pairing 酸甘化陰.",
       zh:"酸甘並用以斂津：梅、山楂、少飲酸湯。此即「酸甘化陰」之法。"},
  care:{en:"Replace water and salt after real sweating, and take the shade in the middle of the day.",
        zh:"大汗之後，水鹽並補。日中宜就其陰。"},
  caution:{en:"Dizziness, stopping sweating, confusion or nausea in heat is a medical emergency, not a pattern to differentiate.",
           zh:"暑中若見眩暈、汗閉、神昏、噁心者，屬急症，非可從容辨證。"} },

{ id:"xiazhi", n:10, m:6, d:21, en:"Summer Solstice", zh:"夏至", phase:"summer", organ:{en:"Heart",zh:"心"},
  note:{en:"Yang is at its peak and, from today, begins to turn. The classics make a point of this: at the very height of yang, yin is already born. It is the reason winter illnesses are traditionally treated in summer.",
        zh:"陽極而自今日始轉。古於此致意：陽極之時，一陰已生。冬病夏治之理，即出於此。"},
  eat:{en:"Light and cooling, and not much of it. Heavy meals in deep heat sit badly.",
       zh:"清淡而少。盛暑重食則不化。"},
  care:{en:"This is the season for San Fu Tian preparation — the traditional summer treatment of winter complaints. If that is something you do, now is when it is planned.",
        zh:"此為三伏之所預備——冬病夏治之時。若素行此法，於今謀之。"},
  caution:{en:"San Fu treatments are done with a licensed practitioner who knows your history, not from a description online.",
           zh:"三伏諸法，當就有照之醫者，且須知其人素日之病史；非可據網上一說而自為。"} },

{ id:"xiaoshu", n:11, m:7, d:7, en:"Minor Heat", zh:"小暑", phase:"summer", organ:{en:"Heart and Spleen",zh:"心脾"},
  note:{en:"Heat settles in and stops leaving at night. Summer-heat 暑 in Chinese Medicine has a specific character: it rises, it scatters qi, it dries fluids, and in a wet climate it arrives with damp attached.",
        zh:"熱既至而夜不去。中醫之暑邪自有其性：其性升散，耗氣傷津，而在濕地則每挾濕而至。"},
  eat:{en:"Mung bean soup, watermelon in moderation, lotus leaf tea. Cool without icing the middle.",
       zh:"綠豆湯、西瓜適量、荷葉茶。取其涼而不冰其中。"},
  care:{en:"Air conditioning straight onto the neck and shoulders is a modern way of catching a wind-cold in July. Cover the nape.",
        zh:"冷氣直吹頸肩者，今人七月受風寒之常法也。當覆其項。"},
  caution:{en:"If you take medication that affects sweating or fluid balance, ask your prescriber before changing anything about heat management.",
           zh:"若所服之藥涉及汗出或水液平衡者，欲更其避暑之法，當先問處方之醫。"} },

{ id:"dashu", n:12, m:7, d:22, en:"Major Heat", zh:"大暑", phase:"summer", organ:{en:"Heart and Spleen",zh:"心脾"},
  note:{en:"The hottest term of the year, and usually inside San Fu Tian. Appetite drops, sleep gets thin, and people who are already qi-deficient feel it most — heat scatters qi, so the tired get more tired.",
        zh:"歲中最熱之節，多在三伏之內。納減、寐薄，而素氣虛者尤覺其苦——暑耗其氣，故倦者益倦。"},
  eat:{en:"Congee, soup, and small frequent meals rather than one heavy one. Sheng Mai San is the classical summer formula for qi and fluids spent together — discussed with a practitioner, not self-prescribed.",
       zh:"粥、湯，少食多餐，勿一頓而重。生脈散為暑月氣津兩傷之古方——當與醫者議之，非可自服。"},
  care:{en:"Do the hard work early or late. The middle of the day is not a test of character.",
        zh:"作事宜早晚。日中非試人志節之時。"},
  caution:{en:"Heat illness is an emergency. Confusion, stopping sweating, a very high temperature — call for help, do not brew tea.",
           zh:"中暑為急症。神昏、汗閉、身熱甚者，當即呼救，勿煎茶。"} },

{ id:"liqiu", n:13, m:8, d:7, en:"Beginning of Autumn", zh:"立秋", phase:"autumn", organ:{en:"Lung",zh:"肺"},
  note:{en:"The calendar says autumn while the thermometer says otherwise, and the classical name for this stretch is 秋老虎, the autumn tiger. Dryness begins even while the heat holds — the first hint is usually the nose and the lips rather than the throat.",
        zh:"歷已立秋而寒暑未改，古謂之「秋老虎」。燥氣始生於熱中——其先見者，多在鼻與唇，而不在咽。"},
  eat:{en:"Start moistening: pear, white fungus, lily bulb, honey. Ease off the acrid and drying — less chilli, less strong spirits.",
       zh:"始行潤養：梨、銀耳、百合、蜂蜜。減辛減燥——少辛辣、少烈酒。"},
  care:{en:"Do not put the summer clothes away yet. The old instruction 秋凍 — let yourself feel a little cool — is about adapting slowly, not about being cold.",
        zh:"夏衣未可遽收。古訓「秋凍」者，令身漸與寒相習，非令其受寒也。"},
  caution:{en:"A dry cough that lasts more than a few weeks, or comes with blood, weight loss or night sweats, needs medical assessment.",
           zh:"乾咳逾數週，或兼咳血、消瘦、盜汗者，當就醫查之。"} },

{ id:"chushu", n:14, m:8, d:23, en:"End of Heat", zh:"處暑", phase:"autumn", organ:{en:"Lung",zh:"肺"},
  note:{en:"The heat stands down. The nights turn first, and the gap between day and night temperature widens sharply — which is the specific reason this term produces so many colds in people who dress for the afternoon and come home at night.",
        zh:"暑氣至此而止。夜先轉涼，晝夜溫差驟大——此節多外感者，正坐於衣為午後而備，而歸於夜也。"},
  eat:{en:"Still moistening, now with a little more substance: pear and lily bulb, congee with white fungus, a soup rather than a cold drink.",
       zh:"仍主潤，而稍加其質：梨、百合、銀耳粥，宜羹湯而不宜冷飲。"},
  care:{en:"Carry a layer for the evening. This is the most useful single sentence in the whole term.",
        zh:"出必攜一衣以備其夜。此節之言，惟此一句最有用。"},
  caution:{en:"Autumn fatigue 秋乏 is expected and passes. Fatigue with fever, weight loss, or that gets worse week by week is not seasonal.",
           zh:"秋乏為常，自能過去。若倦而兼發熱、消瘦，或逐週益甚者，非時令之故。"} },

{ id:"bailu", n:15, m:9, d:7, en:"White Dew", zh:"白露", phase:"autumn", organ:{en:"Lung",zh:"肺"},
  note:{en:"Dew appears on the grass in the morning: the air can no longer hold its water overnight. Dryness is now the ruling pathogen — dry nose, dry throat on waking, dry skin at the shins, a cough with almost nothing in it.",
        zh:"晨露見於草上：夜氣不復能含其水。燥為此節之主邪——鼻乾、晨起咽乾、脛膚燥、咳而幾無痰。"},
  eat:{en:"White foods, by the old correspondence: pear, white fungus, lily bulb, almond, white radish. Warm and moist beats cold and moist.",
       zh:"依五色之應，宜白：梨、銀耳、百合、杏仁、白蘿蔔。溫潤勝於寒潤。"},
  care:{en:"Cover the feet at night. The old line is 白露身不露 — at White Dew, keep covered.",
        zh:"夜宜覆足。古語：「白露身不露。」"},
  caution:{en:"Dry skin and a dry throat are seasonal. Unexplained thirst with weight loss and frequent urination is a reason to get checked.",
           zh:"膚乾咽燥，時令之常。若渴而兼消瘦、多尿而無所因者，當往診之。"} },

{ id:"qiufen", n:16, m:9, d:23, en:"Autumn Equinox", zh:"秋分", phase:"autumn", organ:{en:"Lung",zh:"肺"},
  note:{en:"Equal day and night again, and from here the yin half of the year. The classical instruction turns inward: gather rather than expend, finish rather than begin.",
        zh:"晝夜復均，自此入歲之陰半。古訓於此轉而向內：宜收不宜散，宜成不宜始。"},
  eat:{en:"Moistening with a little warmth — sesame, walnut, congee. The cold raw food of summer stops suiting most people around now.",
       zh:"潤而微溫：芝麻、核桃、粥食。夏日生冷之物，至此多不相宜。"},
  care:{en:"Sleep earlier. The single change with the largest effect this half of the year is going to bed before you are exhausted.",
        zh:"宜早臥。歲之後半，起居之改，未有大於「未憊而先臥」者。"},
  caution:{en:"Low mood that arrives with the shorter days is common and real. If it takes away function for weeks, that is worth professional help.",
           zh:"日短而情低者，其事常有，亦其實有。若歷數週而礙其所為，宜求專業之助。"} },

{ id:"hanlu", n:17, m:10, d:8, en:"Cold Dew", zh:"寒露", phase:"autumn", organ:{en:"Lung and Kidney",zh:"肺腎"},
  note:{en:"The dew is cold now rather than white. Cold and dryness together — the combination that cracks lips and heels, and that stiffens old joint complaints for the first time since spring.",
        zh:"露由白而寒。寒與燥並——此其所以裂唇皸踵，而舊痹自春以來至此復作。"},
  eat:{en:"Warm and moistening: sesame, honey, walnut, a little lamb or chicken soup if that suits you. Reduce the very cold and raw.",
       zh:"溫潤為主：芝麻、蜂蜜、核桃，體質相宜者可少進羊肉雞湯。減其大寒生冷。"},
  care:{en:"Cover the ankles and the neck. 寒從腳起 — cold comes in from the feet.",
        zh:"宜覆踝與項。「寒從腳起。」"},
  caution:{en:"Joint pain that is hot, red and swollen is a different pattern from cold-stiff joints — and if it comes on suddenly with fever, see someone.",
           zh:"關節紅腫灼熱者，與寒凝之僵痛異證。若驟作而兼發熱，當即就醫。"} },

{ id:"shuangjiang", n:18, m:10, d:23, en:"Frost Descends", zh:"霜降", phase:"autumn", organ:{en:"Lung and Spleen",zh:"肺脾"},
  note:{en:"The last term of autumn, and the traditional moment to build reserves before winter rather than during it. 補冬不如補霜降 — supplementing at Frost Descends beats supplementing in winter.",
        zh:"秋之末節，古以此為冬前蓄養之時，而非入冬乃補。諺曰：「補冬不如補霜降。」"},
  eat:{en:"Chestnut, sweet potato, pumpkin, persimmon — but persimmon is famously hard on an empty or cold stomach, so not first thing and not in quantity.",
       zh:"栗、番薯、南瓜、柿。然柿性難受於空腹與胃寒者，故不宜晨起空腹，亦不宜多食。"},
  care:{en:"Warm the middle: cooked breakfast, warm drinks, and stop eating cold straight from the fridge.",
        zh:"溫其中焦：早食宜熟、飲宜溫，勿即取冰冷之物而食。"},
  caution:{en:"If you take a regular herbal formula, this is a good term to review it with your practitioner rather than to add things to it yourself.",
           zh:"若素服湯方，此節宜與醫者覆核，而非自增其味。"} },

{ id:"lidong", n:19, m:11, d:7, en:"Beginning of Winter", zh:"立冬", phase:"winter", organ:{en:"Kidney",zh:"腎"},
  note:{en:"Winter belongs to the Kidney, and the season&#39;s instruction is storage 藏 — the year&#39;s one term for doing less on purpose. Everything about winter care is about not spending what you are supposed to be keeping.",
        zh:"冬屬腎，其令在「藏」——歲中惟此一季，以少作為是。冬令諸養，無非「勿耗其所當藏」一義。"},
  eat:{en:"Warm and substantial: root vegetables, black beans, black sesame, walnut, bone broth. Cooked, not raw.",
       zh:"溫而有質：根莖之屬、黑豆、黑芝麻、核桃、骨湯。宜熟不宜生。"},
  care:{en:"Sleep early and rise after the sun. This is one of the very few pieces of classical advice with a direct modern evidence base.",
        zh:"早臥晚起，必待日光。古之養生語中，此為少數今日仍有實據者。"},
  caution:{en:"Warming tonics do not suit everyone. If you run hot, sleep badly and have a red tongue with little coat, the winter tonic advice is not written for you.",
           zh:"溫補非人人相宜。若素體偏熱、寐差、舌紅少苔者，冬令進補之說，非為君設。"} },

{ id:"xiaoxue", n:20, m:11, d:22, en:"Minor Snow", zh:"小雪", phase:"winter", organ:{en:"Kidney",zh:"腎"},
  note:{en:"Cold closes in and daylight shortens noticeably. The classical concern here is a chest that feels constrained and a mood that flattens — yang is low outside and people who are already low feel it doubled.",
        zh:"寒氣漸密，日照顯短。此節所慮者，胸中鬱悶而情志低平——外陽既微，素鬱者其感倍之。"},
  eat:{en:"Warm soups; a little citrus peel or rose bud tea to move the chest. Not a term for cold drinks.",
       zh:"宜溫羹；少佐陳皮或玫瑰花茶以行胸中之氣。此節不宜冷飲。"},
  care:{en:"Get outside in the daylight even briefly. Light and movement do more for winter mood than any food does.",
        zh:"雖暫亦當出戶就日。冬令情志，得於光與動者，多於得於食者。"},
  caution:{en:"If low mood is persistent, or comes with hopelessness, please talk to someone — a friend, a doctor, or a crisis line where you are.",
           zh:"若情低久而不解，或兼絕望之感，請與人談：友朋、醫者，或當地之協談專線。"} },

{ id:"daxue", n:21, m:12, d:7, en:"Major Snow", zh:"大雪", phase:"winter", organ:{en:"Kidney",zh:"腎"},
  note:{en:"Deep cold. Cold contracts and congeals, which is why old injuries and stiff joints announce themselves now, and why cold-pattern pain is dramatically better with warmth — the single most useful question in a winter joint complaint.",
        zh:"寒之深者。寒性收引凝滯，故舊傷與僵痛於此自陳；而寒證之痛，得溫則大減——冬日問關節之病，此一問最有用。"},
  eat:{en:"Warming and moving together: ginger, cinnamon in small amounts, mutton if it suits you, black beans and walnut.",
       zh:"溫而兼行：生薑、少許肉桂，體質相宜者可進羊肉，並黑豆、核桃。"},
  care:{en:"Keep the low back and the knees warm. A hot water bottle at the low back in the evening is unglamorous and effective.",
        zh:"腰膝宜溫。夜以湯婆子熨其腰，其法不雅而有效。"},
  caution:{en:"Chest pain or pressure in the cold, especially on exertion, is a see-someone-today symptom.",
           zh:"寒中而胸痛胸悶，尤其因勞而作者，屬當日即須就醫之候。"} },

{ id:"dongzhi", n:22, m:12, d:21, en:"Winter Solstice", zh:"冬至", phase:"winter", organ:{en:"Kidney",zh:"腎"},
  note:{en:"The longest night, and from tonight the yang begins to return — 冬至一陽生. The classical calendar treats this as the true beginning of the year&#39;s cycle, and the traditional advice is rest rather than celebration.",
        zh:"夜之最長者，而自今夕陽氣復生——「冬至一陽生」。古曆以此為歲之真始，其養在靜而不在宴。"},
  eat:{en:"Warm, cooked, unhurried. Dumplings in the north, tangyuan in the south — both are warm, both are shared, and both are eaten sitting down.",
       zh:"溫、熟、緩食。北食餃，南食湯圓——皆溫、皆與人共、皆坐而食之。"},
  care:{en:"An early night at the solstice is the most traditional thing you can do, and the easiest.",
        zh:"冬至早臥，古法之最正者，亦最易行者。"},
  caution:{en:"Winter tonic season brings a lot of confident advice. Anything strong enough to be worth taking is strong enough to be worth asking about first.",
           zh:"冬令進補之時，人多自信而言。凡藥力足以有用者，其力亦足以先問而後服。"} },

{ id:"xiaohan", n:23, m:1, d:5, en:"Minor Cold", zh:"小寒", phase:"winter", organ:{en:"Kidney",zh:"腎"},
  note:{en:"Often the coldest stretch of the year despite the name. Yang has begun to return underground but nothing shows above it yet — which is a fair description of how recovery feels in general.",
        zh:"名雖曰小，而歲中最寒者每在此節。陽已復於地下而未見於上——凡病之向愈，其狀亦每如此。"},
  eat:{en:"Warm porridge in the morning: black rice, red date, walnut, a slice of ginger. Simple and daily beats elaborate and occasional.",
       zh:"晨進溫粥：黑米、紅棗、核桃、薑一片。簡而日行者，勝於精而偶為者。"},
  care:{en:"Warm the hands and feet before bed rather than in the morning. Sleep follows warmth.",
        zh:"溫手足宜在臥前，不在晨起。寐隨溫而至。"},
  caution:{en:"Fingers or toes that go white or blue in the cold and stay numb are worth showing to a clinician.",
           zh:"指趾遇寒而色白色紫、麻木不復者，宜就醫視之。"} },

{ id:"dahan", n:24, m:1, d:20, en:"Major Cold", zh:"大寒", phase:"winter", organ:{en:"Kidney",zh:"腎"},
  note:{en:"The last term of the whole cycle. Cold is at its deepest and the turn is already underway — in a fortnight it will be Beginning of Spring again. The classical instruction is to hold steady rather than to start anything.",
        zh:"二十四節之末。寒至其極，而轉機已在其中——半月之後，復為立春。此節古訓在守而不在興。"},
  eat:{en:"Still warm and substantial, but begin easing off the heaviest tonics — the body is about to be asked to move outward again.",
       zh:"仍宜溫而有質，然峻補宜漸減——身將復其外達之令。"},
  care:{en:"Plan the spring lightly rather than resolving hard. Yang that returns gently lasts longer than yang that is forced.",
        zh:"春事宜緩圖，不宜苦誓。陽之緩復者，久於陽之強致者。"},
  caution:{en:"Anything you have been putting off medically through the winter — this is the term to book it.",
           zh:"凡冬日所延之診視，此節宜約之。"} }
];

/* Which term is it, on a given date?

   Careful with the wrap. The list is in TERM order, which starts at
   Beginning of Spring in February and ends at Major Cold in January — so it
   is not sorted by calendar date, and scanning it in place put every date in
   the year inside Major Cold. Sort by (month, day) first, then the answer is
   the last term whose start has passed; if none has, we are still inside the
   previous year's final term. Approximate by a day either side, which is why
   nothing in the copy claims an exact boundary. */
var AG_JIEQI_BYDATE = window.AG_JIEQI.slice().sort(function (a, b) {
  return a.m - b.m || a.d - b.d;
});

window.AG_JIEQI_AT = function (date) {
  var L = AG_JIEQI_BYDATE, m = date.getMonth() + 1, d = date.getDate();
  var cur = L[L.length - 1];               // before the first start: last year's final term
  for (var i = 0; i < L.length; i++) {
    if (m > L[i].m || (m === L[i].m && d >= L[i].d)) cur = L[i];
  }
  return cur;
};

/* How many days until the next term begins — the town uses it to say
   "for another eleven days" rather than pretending the term is a point. */
window.AG_JIEQI_NEXT = function (date) {
  var L = AG_JIEQI_BYDATE, cur = window.AG_JIEQI_AT(date);
  var nx = L[(L.indexOf(cur) + 1) % L.length];
  var y = date.getFullYear();
  var t = new Date(y, nx.m - 1, nx.d, 12, 0, 0);
  var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
  if (t <= now) t = new Date(y + 1, nx.m - 1, nx.d, 12, 0, 0);
  return { term: nx, days: Math.max(0, Math.round((t - now) / 864e5)) };
};
