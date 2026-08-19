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
if(bad.length){bad.forEach(b=>console.log('  ✗ '+b));
  console.log('     run: python3 tools/mkchapterindex.py'); process.exitCode=1}
else console.log('  ✅ chapter spine matches chapters.js ('+IDX.length+' chapters, '+fs.statSync(R+'data/chapter-index.js').size+' bytes vs '+fs.statSync(R+'data/chapters.js').size+')');
