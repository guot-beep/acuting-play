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

  /* the tray that slides up */
  .hud-scrim{position:absolute;inset:0;z-index:88;background:rgba(58,55,48,.44);
    opacity:0;pointer-events:none;transition:opacity .28s ease}
  .hud-scrim.on{opacity:1;pointer-events:auto}
  .tray{position:absolute;left:0;right:0;bottom:0;z-index:90;background:var(--paper,#F4EDDC);
    border-radius:20px 20px 0 0;box-shadow:0 -14px 44px rgba(58,55,48,.3);
    transform:translateY(102%);transition:transform .34s cubic-bezier(.22,1,.36,1);
    max-height:88%;overflow-y:auto;overscroll-behavior:contain}
  .tray.on{transform:none}
  .tray-in{padding:16px 18px calc(20px + env(safe-area-inset-bottom))}
  .tray-grab{width:38px;height:4px;border-radius:2px;background:rgba(58,55,48,.2);margin:0 auto 12px}
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
    var tray  = el('<aside class="tray" id="hudTray"><div class="tray-in"><div class="tray-grab"></div><div id="trayBody"></div></div></aside>');
    app.appendChild(scrim); app.appendChild(tray);

    function open(html){ D.getElementById("trayBody").innerHTML=html;
      scrim.classList.add("on"); tray.classList.add("on"); }
    function close(){ scrim.classList.remove("on"); tray.classList.remove("on"); }
    scrim.onclick=close;

    /* ── 己 · who you are right now ── */
    D.getElementById("hudYou").onclick=function(){
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
    };

    /* ── 囊 · what you have collected ── */
    D.getElementById("hudBag").onclick=function(){
      var S=AG.state, best=S.best||{};
      var chapters=Object.keys(best).filter(function(k){return k.indexOf("chapter_")===0}).sort();
      var cards = chapters.map(function(k){
        var b=best[k];
        return '<div class="tray-card"><span class="ic">牌</span>Chapter '+k.slice(-2)
             + '<small style="display:block;color:var(--gold)">'+"★".repeat(b.stars||0)+'</small></div>';
      });
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
        + '<h4 style="margin-top:16px">Halls of the Town<span class="zh"> 鎮上門派</span></h4>'
        + '<div class="tray-cards">'+halls+'</div>');
    };

    /* ── ⚙ · settings ── */
    D.getElementById("hudSet").onclick=function(){
      var S=AG.state;
      open('<h4>Settings<span class="zh"> 設定</span></h4>'
        + '<div class="tray-row"><div>Chinese support<small>中文輔助文字</small></div>'
        + '<button class="tray-toggle'+(S.zh?" on":"")+'" id="tgZh">'+(S.zh?"ON":"OFF")+'</button></div>'
        + '<div class="tray-row"><div>Learning path<small>學習路線 · Beginner / Student</small></div>'
        + '<button class="tray-toggle'+(AG.isBeginner()?" on":"")+'" id="tgMode">'
        + (AG.isBeginner()?"Beginner":"Student")+'</button></div>'
        + '<div class="tray-row"><div>Reduced motion<small>依系統設定自動調整</small></div>'
        + '<span style="font-size:12.5px;color:var(--ink-faint)">auto</span></div>'
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
    };

    var home=D.getElementById("hudHome");
    if(home) home.onclick=function(){ location.href="index.html"; };

    paintXp();
  }

  function paintXp(){
    var e=D.getElementById("hudXp"); if(!e) return;
    e.innerHTML='<b>'+AG.state.xp+'</b> XP';
  }
  global.AG.hudRefresh = paintXp;

  if(D.readyState==="loading") D.addEventListener("DOMContentLoaded",build);
  else build();
})(window);
