/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · hud.js
   A persistent bar every page shares: get home, check yourself,
   see what you've collected, change settings — from anywhere.

   Drop-in: <script src="hud.js"></script>  (after state.js)
   It injects its own markup and styles, so no page needs editing
   beyond the one script tag.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  var AG = global.AG; if (!AG) return;
  var D = global.document;

  var CSS = `
  :root{--hud-h:48px}
  /* the bar owns the top strip — make room for it on every layout style */
  #app{padding-top:var(--hud-h)}
  .screen{padding-top:calc(6px + env(safe-area-inset-top))}
  /* pages whose screens are absolutely positioned need their own offset,
     because an absolute box resolves against the padding box, not the content box */
  body[data-page="hub"] .screen,
  body[data-page="daoyin"] .screen,
  body[data-page="yinyang"] .screen,
  body[data-page="prologue"] .screen,
  body[data-page="daily"] .screen,
  body[data-page="points"] .screen{top:var(--hud-h)}
  /* page chrome that is absolutely positioned also has to clear the bar */
  .chapline,.r2,#r2,.stage-name{position:relative;z-index:4}
  body[data-page="daoyin"] .screen,
  body[data-page="yinyang"] .screen{padding-top:26px}
  /* the HUD's settings tray owns the language switch now */
  .lang-toggle,.langBtn,#langBtn{display:none !important}
  .seal{top:calc(var(--hud-h) + 6px) !important}
  .rail{padding-top:8px !important}
  /* keep the chapter line clear of the seal in the corner */
  .chapline{padding:0 46px}
  .hud{position:absolute;left:0;right:0;top:0;z-index:60;display:flex;align-items:center;gap:6px;
    padding:calc(6px + env(safe-area-inset-top)) 10px 6px;
    background:linear-gradient(180deg,rgba(244,237,220,.97),rgba(244,237,220,.86) 70%,transparent);
    backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);pointer-events:none}
  .hud>*{pointer-events:auto}
  .hud-btn{min-width:40px;height:36px;padding:0 10px;border-radius:11px;
    border:1.5px solid rgba(58,55,48,.14);background:rgba(255,255,255,.92);
    font-family:inherit;font-size:13px;color:var(--ink,#3A3730);cursor:pointer;
    display:flex;align-items:center;justify-content:center;gap:5px;line-height:1;
    box-shadow:0 1px 3px rgba(58,55,48,.12);transition:transform .14s ease}
  .hud-btn:active{transform:scale(.94)}
  .hud-btn .g{font-size:14px;opacity:.7}
  .hud-btn .zh{font-family:"Songti TC","Noto Serif TC",serif;font-size:12px;color:var(--ink-soft,#5E594E)}
  body.nozh .hud-btn .zh{display:none}
  .hud-spacer{flex:1}
  .hud-xp{font-family:"Courier New",monospace;font-size:11px;color:var(--gold,#B08D3E);
    letter-spacing:.08em;white-space:nowrap;padding:0 2px}
  .hud-xp b{color:var(--terra,#C26D4E);font-size:13px}

  /* the tray that slides up.
     Four independent ways out — the ✕ top-right, the Close row at the foot,
     a tap on the dimmed backdrop, and Esc. Both buttons are real <button>s
     wired through a delegated capture-phase listener, so a tap can neither
     fall through nor depend on one element keeping one handler. */
  .hud-scrim{position:absolute;inset:0;z-index:88;background:rgba(58,55,48,.44);
    opacity:0;pointer-events:none;transition:opacity .28s ease;cursor:pointer}
  .hud-scrim.on{opacity:1;pointer-events:auto}
  /* the bar stays BEHIND the backdrop while a panel is open: a tap up there
     then reads as "tap outside to dismiss", which is what people expect.
     Raising it above caused a tap to close and instantly reopen the panel. */
  .tray{display:none;position:absolute;left:0;right:0;bottom:0;z-index:90;
    background:var(--paper,#F4EDDC);
    border-radius:20px 20px 0 0;box-shadow:0 -14px 44px rgba(58,55,48,.3);
    max-height:88%;overflow-y:auto;overscroll-behavior:contain}
  /* .shown = in the DOM flow; .on = slid up. Two classes so it can still
     animate, while a closed tray is display:none and cannot peek at all. */
  .tray.shown{display:block;transform:translateY(102%);
    transition:transform .34s cubic-bezier(.22,1,.36,1)}
  .tray.shown.on{transform:none}
  .tray-in{padding:16px 18px calc(20px + env(safe-area-inset-bottom));position:relative}
  .tray-grab{width:38px;height:4px;border-radius:2px;background:rgba(58,55,48,.2);margin:0 auto 12px}
  /* the ✕ — 44px tap target, top-right, above everything in the tray */
  .tray-x{position:absolute;top:6px;right:8px;z-index:3;width:44px;height:44px;
    border:none;background:rgba(255,255,255,.86);border-radius:50%;cursor:pointer;
    font-family:inherit;font-size:20px;line-height:1;color:var(--ink-soft,#5E594E);
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 1px 4px rgba(58,55,48,.16);transition:transform .14s ease}
  .tray-x:active{transform:scale(.9)}
  /* and a plain Close row at the foot, for anyone who never looks top-right */
  .tray-done{display:block;width:100%;margin-top:16px;min-height:48px;border-radius:14px;
    border:1.5px solid rgba(58,55,48,.16);background:var(--white,#fff);cursor:pointer;
    font-family:inherit;font-size:15px;letter-spacing:.06em;color:var(--ink,#3A3730)}
  .tray-done:active{transform:scale(.98)}
  body.nozh .tray-done .zh{display:none}
  .tray h4{padding-right:48px}
  .tray h4{font-family:"Courier New",monospace;font-size:10.5px;letter-spacing:.28em;
    color:var(--gold,#B08D3E);text-transform:uppercase;margin:0 0 10px}
  .tray h4 .zh{font-family:"Songti TC",serif;letter-spacing:.06em}
  .tray-row{display:flex;align-items:center;justify-content:space-between;gap:12px;
    padding:11px 0;border-bottom:1px solid rgba(58,55,48,.08);font-size:14.5px}
  .tray-row:last-child{border-bottom:none}
  .tray-row small{display:block;font-size:11.5px;color:var(--ink-faint,#8A8578);margin-top:2px}
  .tray-toggle{min-width:78px;height:34px;border-radius:99px;border:1.5px solid rgba(58,55,48,.16);
    background:var(--white,#fff);font-family:inherit;font-size:12.5px;color:var(--ink,#3A3730);cursor:pointer}
  .tray-toggle.on{background:rgba(123,139,111,.18);border-color:var(--sage-deep,#6E8B57);color:var(--sage-deep,#6E8B57)}
  .tray-toggle.danger{color:var(--terra,#C26D4E);border-color:rgba(194,109,78,.4)}
  .tray-toggle.danger.solid{background:var(--terra,#C26D4E);color:#fff;border-color:transparent}
  .resetbox{display:none;margin-top:10px;padding:12px 14px;border-radius:12px;
    background:rgba(194,109,78,.08);border-left:3px solid var(--terra,#C26D4E);
    font-size:13px;line-height:1.7;color:var(--ink-soft,#5E594E)}
  .resetbox.on{display:block;animation:reactIn .28s ease}
  .resetbox b{color:var(--ink,#3A3730)}
  .resetrow{display:flex;gap:8px;margin-top:11px}
  .resetrow button{flex:1;min-width:0;height:38px;font-size:12.5px}
  @keyframes reactIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
  .tray-axes{display:flex;flex-direction:column;gap:7px;margin-top:4px}
  .tray-axes div{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-soft,#5E594E)}
  .tray-axes .bar{flex:1;height:6px;border-radius:3px;background:rgba(58,55,48,.1);overflow:hidden}
  .tray-axes .bar i{display:block;height:100%;background:var(--sage,#7B8B6F);border-radius:3px}
  .tray-axes b{font-family:"Courier New",monospace;font-size:12px;min-width:26px;text-align:right}
  .tray-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:9px}
  .tray-card{background:var(--white,#fff);border:1.5px solid rgba(58,55,48,.1);border-radius:12px;
    padding:9px;text-align:center;font-size:11.5px;line-height:1.45;color:var(--ink,#3A3730)}
  .tray-card.locked{background:rgba(58,55,48,.04);border-style:dashed;color:var(--ink-faint,#8A8578)}
  .tray-card .ic{font-size:19px;display:block;margin-bottom:3px;font-family:"Songti TC",serif}
  .tray-card small{display:block;margin-top:3px;font-size:10.5px;color:var(--ink-faint,#8A8578)}
  .tray-empty{font-size:13px;color:var(--ink-faint,#8A8578);line-height:1.7}
  /* herb codex */
  .codex{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:8px}
  .herbcell{background:var(--white,#fff);border:1.5px solid rgba(58,55,48,.1);border-radius:12px;
    padding:7px 5px 8px;font-family:inherit;cursor:pointer;text-align:center;color:var(--ink,#3A3730)}
  .herbcell img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:8px;display:block;margin-bottom:5px}
  .herbcell .qm{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;
    border-radius:8px;background:rgba(58,55,48,.05);color:var(--ink-faint,#8A8578);
    font-size:22px;margin-bottom:5px}
  .herbcell b{display:block;font-size:11px;line-height:1.3}
  .herbcell .zh{display:block;font-size:10.5px;color:var(--ink-soft,#5E594E);margin-top:1px}
  .herbcell .qm.plate{background:rgba(176,141,62,.12);color:var(--gold,#B08D3E);
    font-family:"Songti TC",serif;font-size:26px}
  .herbcell.locked{border-style:dashed;background:rgba(58,55,48,.03)}
  .herbcell.locked b{color:var(--ink-faint,#8A8578);letter-spacing:.14em}
  .herbcell:active{transform:scale(.96)}
  .herbdetail{display:none;margin-top:10px;padding:12px 14px;border-radius:12px;
    background:rgba(123,139,111,.09);border-left:3px solid var(--sage,#7B8B6F);
    font-size:13px;line-height:1.7;color:var(--ink-soft,#5E594E)}
  .herbdetail.on{display:block;animation:reactIn .26s ease}
  .herbdetail b{color:var(--ink,#3A3730);font-size:15px}
  .herbdetail i{color:var(--gold,#B08D3E);font-style:normal;font-size:12.5px}
  .herbdetail p{margin-top:6px}
  .herbdetail .nat{font-family:"Courier New",monospace;font-size:11.5px;color:var(--ink-faint,#8A8578)}
  /* sprite-sheet animation — 8 frames in one 90 KB image, driven by steps().
     Pixel maths, not percentages: percentage background-position resolves
     against (container - image), which does not step evenly. */
  .sprite{--cell:112px;--frames:8;
    width:var(--cell);height:var(--cell);margin:0 auto 6px;
    background-repeat:no-repeat;
    background-size:calc(var(--cell) * var(--frames)) var(--cell);
    animation:spriteRun .78s steps(8) infinite}
  @keyframes spriteRun{
    from{background-position:0 0}
    to  {background-position:calc(-1 * var(--cell) * var(--frames)) 0}}
  @media (prefers-reduced-motion:reduce){.sprite{animation:none;background-position:0 0}}
  @media (min-width:900px){
    .tray{left:50%;right:auto;bottom:50%;transform:translate(-50%,50%) scale(.97);
      width:min(560px,90%);border-radius:20px;opacity:0}
    .tray.on{transform:translate(-50%,50%) scale(1);opacity:1}
    .hud{padding-left:16px;padding-right:16px}
  }`;

  var AXES = [["needle","Needle","針道"],["theory","Theory","醫理"],
              ["dx","Diagnosis","四診"],["herb","Herbs","本草"],["daoyin","Cultivation","導引"]];
  var NODES = [["needle","針","Needle Hall"],["theory","理","Theory Hall"],
               ["daoyin","導","Cultivation"],["dx","診","Diagnosis"],["herb","草","Herbs"]];

  function el(html){ var d=D.createElement("div"); d.innerHTML=html.trim(); return d.firstChild; }
  function zh(t){ return t?'<span class="zh"> '+t+'</span>':''; }

  function build(){
    if(!D.body || D.getElementById("hudBar")) return;
    var app = D.getElementById("app") || D.body;
    var isHub = (D.body.getAttribute("data-page")==="hub");

    var st=D.createElement("style"); st.textContent=CSS; D.head.appendChild(st);

    var bar = el(
      '<div class="hud" id="hudBar">'
      + (isHub ? '' : '<button class="hud-btn" id="hudHome" title="Back to town"><span class="g">\u2302</span>Town<span class="zh">鎮</span></button>')
      + '<button class="hud-btn" id="hudYou" title="Your progress"><span class="g">\u25CE</span>Me<span class="zh">己</span></button>'
      + '<button class="hud-btn" id="hudBag" title="Collection"><span class="g">\u25C8</span>Bag<span class="zh">囊</span></button>'
      + '<div class="hud-spacer"></div>'
      + '<span class="hud-xp" id="hudXp"></span>'
      + '<button class="hud-btn" id="hudSet" title="Settings">⚙</button>'
      + '</div>');
    app.appendChild(bar);

    var scrim = el('<div class="hud-scrim" id="hudScrim"></div>');
    var tray  = el('<aside class="tray" id="hudTray" role="dialog" aria-modal="true">'
      + '<div class="tray-in">'
      + '<button class="tray-x" data-close-tray aria-label="Close" title="Close">✕</button>'
      + '<div class="tray-grab"></div><div id="trayBody"></div>'
      + '<button class="tray-done" data-close-tray>Close<span class="zh"> 關閉</span></button>'
      + '</div></aside>');
    app.appendChild(scrim); app.appendChild(tray);

    var openBy = null;   // which HUD button opened it, so that button can toggle it shut

    var hideT=null;
    function open(html, key){
      if(hideT){ clearTimeout(hideT); hideT=null; }
      D.getElementById("trayBody").innerHTML=html;
      tray.classList.add("shown");
      tray.offsetHeight;                       // force layout so the slide animates
      scrim.classList.add("on"); tray.classList.add("on");
      D.body.classList.add("tray-open"); tray.scrollTop=0; openBy=key||null;
    }
    function close(){
      scrim.classList.remove("on"); tray.classList.remove("on");
      D.body.classList.remove("tray-open"); openBy=null;
      if(hideT) clearTimeout(hideT);
      hideT=setTimeout(function(){ tray.classList.remove("shown"); hideT=null; }, 360);
    }
    function isOpen(){ return tray.classList.contains("on"); }

    /* Closing must never depend on one element keeping one handler.
       This listens on the document in the CAPTURE phase, so any tap that
       lands on anything marked data-close-tray closes the panel — even if
       the tray's own markup was re-rendered, or a handler was lost. */
    function closer(e){
      var n=e.target;
      while(n && n!==D.body){
        if(n.nodeType===1 && n.hasAttribute && n.hasAttribute("data-close-tray")){
          e.preventDefault(); e.stopPropagation(); close(); return;
        }
        n=n.parentNode;
      }
      /* a tap on the dimmed backdrop also closes */
      if(isOpen() && (n===D.body||true) && e.target===scrim){ e.preventDefault(); close(); }
    }
    D.addEventListener("click", closer, true);
    D.addEventListener("touchend", closer, true);
    scrim.onclick=close;
    D.addEventListener("keydown", function(e){ if(e.key==="Escape"||e.key==="Esc") close(); });
    /* leaving the page or changing screen never leaves a panel stranded */
    global.addEventListener("pagehide", close);
    global.addEventListener("hashchange", close);
    global.AG_closeTray=close;
    global.AG_trayOpen=isOpen;

    /* tapping the same HUD button again shuts the panel it opened */
    function toggler(key, build){
      return function(){ if(isOpen() && openBy===key){ close(); return; } build(); };
    }

    /* ── 己 · who you are right now ── */
    D.getElementById("hudYou").onclick=toggler("you", function(){
      var S=AG.state, r=AG.rank();
      var rows=AXES.map(function(a){
        var lv=S.stats[a[0]]||0;
        return '<div><span style="min-width:82px">'+a[1]+zh(a[2])+'</span>'
             + '<span class="bar"><i style="width:'+(lv/4*100)+'%"></i></span><b>'+lv+'/4</b></div>';
      }).join("");
      open('<h4>Your Progress<span class="zh"> 己身</span></h4>'
        + '<div class="tray-row"><div><b>'+r.en+'</b>'+zh(r.zh)
        + '<small>'+S.xp+' XP · day streak '+(S.streak||0)+'</small></div></div>'
        + '<div class="tray-axes" style="margin-top:12px">'+rows+'</div>'
        + '<p class="tray-empty" style="margin-top:12px">Each case you finish raises the axes it exercised.'
        + '<span class="zh"> 每完成一個病案，會提升該案用到的軸。</span></p>');
    });

    /* ── 囊 · what you have collected ── */
    D.getElementById("hudBag").onclick=toggler("bag", function(){
      var S=AG.state, best=S.best||{};
      var chapters=Object.keys(best).filter(function(k){return k.indexOf("chapter_")===0}).sort();
      var cards = chapters.map(function(k){
        var b=best[k];
        return '<div class="tray-card"><span class="ic">牌</span>Chapter '+k.slice(-2)
             + '<small style="display:block;color:var(--gold)">'+"★".repeat(b.stars||0)+'</small></div>';
      });
      var codex = herbCodex();
      var halls = NODES.map(function(n){
        var on=AG.unlocked(n[0]);
        return '<div class="tray-card'+(on?'':' locked')+'"><span class="ic">'+n[1]+'</span>'+n[2]
             + (on?'':'<small>locked</small>')+'</div>';
      }).join("");
      open('<h4>Collection<span class="zh"> 行囊</span></h4>'
        + (cards.length
            ? '<div class="tray-cards">'+cards.join("")+'</div>'
            : '<p class="tray-empty">No case cards yet. Finish a chapter to earn your first.'
              + '<span class="zh"> 尚無病案卡。完成一章即可獲得。</span></p>')
        + codex
        + '<h4 style="margin-top:16px">Halls of the Town<span class="zh"> 鎮上門派</span></h4>'
        + '<div class="tray-cards">'+halls+'</div>');
      bindCodex();
    });

    /* ── ⚙ · settings ── */
    D.getElementById("hudSet").onclick=toggler("set", function(){
      var S=AG.state;
      open('<h4>Settings<span class="zh"> 設定</span></h4>'
        + '<div class="tray-row"><div>Chinese support<small>中文輔助文字</small></div>'
        + '<button class="tray-toggle'+(S.zh?" on":"")+'" id="tgZh">'+(S.zh?"ON":"OFF")+'</button></div>'
        + '<div class="tray-row"><div>Learning path<small>學習路線 · Beginner / Student</small></div>'
        + '<button class="tray-toggle'+(AG.isBeginner()?" on":"")+'" id="tgMode">'
        + (AG.isBeginner()?"Beginner":"Student")+'</button></div>'
        + '<div class="tray-row"><div>Reduced motion<small>依系統設定自動調整</small></div>'
        + '<span style="font-size:12.5px;color:var(--ink-faint)">auto</span></div>'
        + '<div class="tray-row"><div>Start over<small>重新開始 · 換一個角色</small></div>'
        + '<button class="tray-toggle danger" id="tgReset">Reset</button></div>'
        + '<div id="resetConfirm" class="resetbox">'
        + '<b>This erases everything.</b> Your character, XP, chapters, cards and streak all go back to zero. It cannot be undone.'
        + '<span class="zh" style="display:block;margin-top:5px">這會清除全部進度：角色、XP、章節、卡片、連續天數，且無法復原。</span>'
        + '<div class="resetrow"><button class="tray-toggle" id="rsNo">Keep my progress</button>'
        + '<button class="tray-toggle danger solid" id="rsYes">Erase and start over</button></div></div>'
        + '<p class="tray-empty" style="margin-top:12px">Apricot Grove is an educational game. Cases are fictional teaching examples and not medical advice.'
        + '<span class="zh"> 本遊戲為教學用途，病案為虛構教學範例，不構成醫療建議。</span></p>');
      D.getElementById("tgZh").onclick=function(){
        AG.setZh(!AG.state.zh); this.textContent=AG.state.zh?"ON":"OFF";
        this.classList.toggle("on",AG.state.zh);
      };
      D.getElementById("tgMode").onclick=function(){
        var b=!AG.isBeginner(); AG.setMode(b?"beginner":"student");
        this.textContent=b?"Beginner":"Student"; this.classList.toggle("on",b);
      };
      /* destructive, so it asks first and says exactly what is lost */
      D.getElementById("tgReset").onclick=function(){
        D.getElementById("resetConfirm").classList.add("on");
        this.disabled=true; this.style.opacity=".45";
      };
      D.getElementById("rsNo").onclick=function(){
        D.getElementById("resetConfirm").classList.remove("on");
        var t=D.getElementById("tgReset"); t.disabled=false; t.style.opacity="";
      };
      D.getElementById("rsYes").onclick=function(){
        AG.reset();
        try{ global.localStorage.removeItem("acuting-play-v1"); }catch(e){}
        location.href="index.html";
      };
    });

    var home=D.getElementById("hudHome");
    if(home) home.onclick=function(){ location.href="index.html"; };

    pinFooters();
    paintXp();
  }

  /* Every screen that ends in action buttons gets a footer that is never
     scrolled past. Without this, a long intro buries the only way forward. */
  function pinFooters(){
    if(D.body.getAttribute("data-page")==="chapter") return;   // chapter does its own
    var st=D.createElement("style");
    st.textContent=".hud-scroll{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;"
      +"-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;padding-bottom:8px}"
      +".hud-foot{flex:none;padding:8px 0 calc(6px + env(safe-area-inset-bottom));position:relative;z-index:5;"
      +"background:linear-gradient(0deg,var(--paper,#F4EDDC) 62%,rgba(244,237,220,.9))}"
      +".hud-foot .btn+.btn,.hud-foot .cta+.cta{margin-top:8px}";
    D.head.appendChild(st);
    D.querySelectorAll(".screen").forEach(function(sec){
      if(getComputedStyle(sec).position==="absolute" && !sec.style.display) {/* still fine */}
      var kids=[].slice.call(sec.children);
      var i=kids.length;
      while(i>0 && kids[i-1].classList &&
            (kids[i-1].classList.contains("btn")||kids[i-1].classList.contains("cta"))) i--;
      if(i===kids.length) return;
      var body=D.createElement("div"); body.className="hud-scroll";
      var foot=D.createElement("div"); foot.className="hud-foot";
      kids.slice(0,i).forEach(function(k){body.appendChild(k)});
      kids.slice(i).forEach(function(k){foot.appendChild(k)});
      sec.appendChild(body); sec.appendChild(foot);
      sec.style.overflowY="hidden";
    });
  }

  /* ── Herb Codex ── */
  function ownedIds(){
    var out={};
    (AG.state.cards||[]).forEach(function(c){
      var k=(c&&(c.id||c.n||c))+""; k=k.toLowerCase();
      (global.AG_HERBS||[]).forEach(function(h){
        if(k.indexOf(h.id)>=0 || (h.zh&&k.indexOf(h.zh)>=0) || k.indexOf(h.en.toLowerCase())>=0) out[h.id]=true;
      });
    });
    return out;
  }
  function herbCodex(){
    var list=global.AG_HERBS||[]; if(!list.length) return "";
    var own=ownedIds(), n=Object.keys(own).length;
    var cells=list.map(function(h){
      var got=!!own[h.id];
      return '<button class="herbcell'+(got?"":" locked")+'" data-h="'+h.id+'">'
        + (got
             ? (h.img ? '<img src="'+h.img+'" alt="'+h.en+'" loading="lazy">'
                      : '<span class="qm plate">'+h.zh.charAt(0)+'</span>')
             : '<span class="qm">?</span>')
        + '<b>'+(got?h.en:"— — —")+'</b>'
        + (got?'<span class="zh">'+h.zh+'</span>':'')
        + '</button>';
    }).join("");
    return '<h4 style="margin-top:16px">Herb Codex<span class="zh"> 本草圖鑑</span>'
      + ' <span style="float:right;color:var(--ink-faint);letter-spacing:.1em">'+n+' / '+list.length+'</span></h4>'
      + '<div class="codex">'+cells+'</div>'
      + '<div class="herbdetail" id="herbDetail"></div>';
  }
  function bindCodex(){
    var own=ownedIds();
    D.querySelectorAll(".herbcell").forEach(function(b){
      b.onclick=function(){
        var h=(global.AG_HERBS||[]).filter(function(x){return x.id===b.dataset.h})[0];
        var d=D.getElementById("herbDetail"); if(!h||!d) return;
        if(!own[h.id]){
          d.className="herbdetail on";
          d.innerHTML='<b>Not found yet</b><span class="zh"> 尚未取得</span>'
            +'<p>Herb cards drop from chapters and from Point Tap.<span class="zh"> 章節與點穴練習皆可能掉落藥草卡。</span></p>';
          return;
        }
        d.className="herbdetail on";
        d.innerHTML='<b>'+h.en+'</b> <i>'+h.py+'</i><span class="zh"> '+h.zh+'</span>'
          +'<p class="nat">'+h.nature+'<span class="zh" style="display:block">'+h.natureZh+'</span></p>'
          +'<p>'+h.fact+'<span class="zh" style="display:block;margin-top:4px">'+h.factZh+'</span></p>';
      };
    });
  }

  function paintXp(){
    var e=D.getElementById("hudXp"); if(!e) return;
    e.innerHTML='<b>'+AG.state.xp+'</b> XP';
  }
  global.AG.hudRefresh = paintXp;

  if(D.readyState==="loading") D.addEventListener("DOMContentLoaded",build);
  else build();
})(window);
