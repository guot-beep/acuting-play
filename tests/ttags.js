/* Content is written as HTML fragments, so an unclosed <b> leaks bold into the
   rest of the screen and a stray </b> is a silent typo. Check every string. */
const fs=require('fs'), vm=require('vm');
const R='/home/claude/site/data/';
const FILES=fs.readdirSync(R).filter(f=>f.endsWith('.js'));
const PAIRED=['b','i','em','strong','small','span','u'];
const bad=[];
function check(str, where){
  if(typeof str!=='string'||str.indexOf('<')<0) return;
  const counts={};
  const re=/<\/?([a-zA-Z]+)[^>]*?(\/?)>/g; let m;
  while((m=re.exec(str))){
    const tag=m[1].toLowerCase();
    if(PAIRED.indexOf(tag)<0) continue;
    if(m[0][1]==='/') counts[tag]=(counts[tag]||0)-1;
    else if(m[2]!=='/')  counts[tag]=(counts[tag]||0)+1;
    if(counts[tag]<0){ bad.push(where+': stray </'+tag+'> — "'+str.slice(0,60)+'…"'); return; }
  }
  Object.keys(counts).forEach(t=>{ if(counts[t]>0)
    bad.push(where+': unclosed <'+t+'> — "'+str.slice(0,60)+'…"'); });
}
function walk(v, where){
  if(typeof v==='string') return check(v, where);
  if(Array.isArray(v)) return v.forEach((x,i)=>walk(x, where+'['+i+']'));
  if(v&&typeof v==='object') return Object.keys(v).forEach(k=>walk(v[k], where+'.'+k));
}
FILES.forEach(f=>{
  const sbox={window:{}};
  try{ vm.runInNewContext(fs.readFileSync(R+f,'utf8'), sbox); }
  catch(e){ bad.push(f+' failed to parse: '+e.message); return; }
  Object.keys(sbox.window).forEach(g=>walk(sbox.window[g], f+':'+g));
});
if(bad.length){bad.slice(0,25).forEach(b=>console.log('  ✗ '+b));
  if(bad.length>25)console.log('  … and '+(bad.length-25)+' more');process.exitCode=1}
else console.log('  ✅ every HTML fragment in data/ has balanced tags ('+FILES.length+' files)');
