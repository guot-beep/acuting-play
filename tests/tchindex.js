/* the generated chapter spine must match data/chapters.js exactly —
   a stale index shows the wrong titles or hides a chapter entirely */
const {execFileSync}=require('child_process'), fs=require('fs'), vm=require('vm');
const R='/home/claude/site/';
const sbox={window:{}}; vm.runInNewContext(fs.readFileSync(R+'data/chapters.js','utf8'),sbox);
const C=sbox.window.AG_CHAPTERS;
const sb2={window:{}}; vm.runInNewContext(fs.readFileSync(R+'data/chapter-index.js','utf8'),sb2);
const IDX=sb2.window.AG_CHAPTER_INDEX;
const want=Object.keys(C).sort((a,b)=>(+a)-(+b));
const bad=[];
if(IDX.map(x=>x.id).join(',')!==want.join(',')) bad.push('ids differ: index has ['+IDX.map(x=>x.id)+'], chapters.js has ['+want+']');
IDX.forEach(x=>{const c=C[x.id]; if(!c){bad.push(x.id+' not in chapters.js');return}
  if(x.title!==c.title) bad.push(x.id+' title stale: "'+x.title+'" vs "'+c.title+'"');
  if(x.titleZh!==c.titleZh) bad.push(x.id+' titleZh stale');
  if(x.pattern!==(c.pattern||'')) bad.push(x.id+' pattern stale');});
/* the practice index must match practice.js + sorts.js the same way */
const sb3={window:{}}; vm.runInNewContext(fs.readFileSync(R+'data/practice.js','utf8'),sb3);
const sb4={window:{}}; vm.runInNewContext(fs.readFileSync(R+'data/sorts.js','utf8'),sb4);
const sb5={window:{}}; vm.runInNewContext(fs.readFileSync(R+'data/practice-index.js','utf8'),sb5);
const P=sb3.window.AG_PRACTICE, SO=sb4.window.AG_SORTS, PI=sb5.window.AG_PRACTICE_INDEX;
const wantP=Object.keys(P).concat(Object.keys(SO));
if(PI.map(x=>x.id).join(',')!==wantP.join(',')) bad.push('practice index ids differ: ['+PI.map(x=>x.id)+'] vs ['+wantP+']');
PI.forEach(x=>{
  if(x.kind==='practice'){const d=P[x.id];
    if(!d){bad.push(x.id+' not in practice.js');return}
    if(x.title!==d.title||x.titleZh!==d.titleZh) bad.push(x.id+' practice title stale');
    if(x.n!==d.items.length) bad.push(x.id+' question count stale: '+x.n+' vs '+d.items.length);
    if(x.axis!==d.axis) bad.push(x.id+' axis stale');
  }else{const d=SO[x.id];
    if(!d){bad.push(x.id+' not in sorts.js');return}
    if(x.title!==d.title.en||x.titleZh!==d.title.zh) bad.push(x.id+' sort title stale');
    if(x.n!==d.items.length) bad.push(x.id+' item count stale');
    if(x.axis!==d.axis) bad.push(x.id+' axis stale');}});
if(bad.length){bad.forEach(b=>console.log('  ✗ '+b));
  console.log('     run: python3 tools/mkindexes.py'); process.exitCode=1}
else console.log('  ✅ both generated indexes match their sources ('+IDX.length+' chapters, '+PI.length+' practices; '
  +(fs.statSync(R+'data/chapter-index.js').size+fs.statSync(R+'data/practice-index.js').size)+' bytes vs '
  +(fs.statSync(R+'data/chapters.js').size+fs.statSync(R+'data/practice.js').size+fs.statSync(R+'data/sorts.js').size)+')');
