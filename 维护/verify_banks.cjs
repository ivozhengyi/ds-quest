/* Content, numerical grading, sampling and real exam blueprint regression checks. */
const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const f of ['content.js','curriculum.js','learn-bank.js','review-bank.js','review-lessons.js','exam-meta.js','training-engine.js','animations.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const{COURSE,LEARN_QUESTIONS:L,REVIEW_QUESTIONS:R,REVIEW_LESSONS:T,EXAM_META:M,TrainingEngine:E,ANIMATIONS}=ctx.window;
let n=0;const check=(x,m)=>{assert(x,m);n++;};
check(L.length===120&&R.length===371,'bank totals');check(T.length===37,'independent review modules');check(new Set(R.map(q=>q.family)).size===125,'family count disclosure');
const ids=new Set(),titles=new Set(L.map(q=>q.title)),allTopics=new Set([...COURSE.flatMap(c=>c.lessons),...T].map(l=>l.id));
for(const q of [...L,...R]){
 check(!ids.has(q.id),'unique ID '+q.id);ids.add(q.id);check(allTopics.has(q.topic),'valid topic '+q.id);check(q.points>0,'positive points');
 if(q.mode==='review')check(!titles.has(q.title),'no identical question shared across modes');
 if(q.type==='choice'){check(q.options.length===4&&q.answer>=0&&q.answer<4,'valid choices');check(E.grade(q,q.answer).score===q.points,'correct choice earns credit');check(E.grade(q,(q.answer+1)%4).score===0,'incorrect choice gets zero');}
 else if(E.manual(q)){check(q.rubric.reduce((s,r)=>s+r.points,0)===q.points,'rubric total');check(E.grade(q,'arbitrary text').score===null,'no fake automatic written grading');}
 else {
  check(q.fields.reduce((s,f)=>s+f.points,0)===q.points,'field points');const correct=q.fields.map(f=>f.answer),grade=E.grade(q,correct);check(grade.score===q.points,'every supplied answer grades correctly '+q.id);
  check(E.grade(q,q.fields.map(()=>'' )).score===0,'blank answer not credited '+q.id);
  q.fields.forEach(f=>{if(f.kind==='number'){check(Number.isFinite(E.number(f.answer)),'finite numeric answer');const dec=E.number(f.answer).toFixed(5);check(E.equal(dec,f.answer,'number'),'fraction decimal equivalent');}if(f.aliases)for(const a of f.aliases)check(E.equal(a,f.answer,f.kind)||E.grade(q,q.fields.map(g=>g===f?a:g.answer)).score===q.points,'accepted explicit alias');});
 }
 if(q.mode==='review')check(q.sourcePages.every(p=>p>=1&&p<=52),'valid source pages');
}
for(const m of M.chapters){check(m.learnCount===L.filter(q=>q.chapter===m.id).length,'chapter learn counts');check(m.reviewCount===R.filter(q=>q.chapter===m.id).length,'chapter review counts');check(m.families===new Set(R.filter(q=>q.chapter===m.id).map(q=>q.family)).size,'chapter family counts');check(m.reviewCount>m.learnCount,'review has more per chapter');}
check(E.equal('O(n^2)','O(n²)','complexity'),'complexity notation');check(E.equal('n+1-i','n+1-i','formula'),'formula explicit alias');check(E.equal('13/7','1.857142857','number'),'rational');check(!E.equal('1,23','12,3','sequence'),'sequence token boundary matters');check(!E.equal('ABC','ACB','sequence'),'order matters');check(!E.equal('1,2,3','1,2','sequence'),'length matters');check(E.equal('49,22,20,空,32,39,13,55','49,22,20,_,32,39,13,55','slots'),'empty slot alias');check(!E.equal('49,22,20,32,39,13,55','49,22,20,_,32,39,13,55','slots'),'missing empty slot rejected');
const partQ=R.find(q=>q.fields?.length===2&&q.fields[0].points>0);check(E.grade(partQ,[partQ.fields[0].answer,'wrong']).score===partQ.fields[0].points,'partial process credit');
const sample=E.select(R,{count:20});check(new Set(sample.map(q=>q.family)).size===20,'family-first selection');check(E.select(R,{chapter:6,count:1000}).length===67,'chapter scope');check(E.select(L,{count:1000}).every(q=>q.mode==='learn'),'learning sampling isolation');check(E.select(R,{pool:'wrong',records:{[R[0].id]:{attempts:1,lastCorrect:false}},count:10}).length===1,'wrong pool isolation');
for(let i=0;i<60;i++){const paper=E.mock(R);check(paper.length===31,'31 mock items');check(paper.reduce((s,q)=>s+q.points,0)===100,'100 points');check(paper.every(q=>q.mode==='review'),'mock review only');check(new Set(paper.map(q=>q.id)).size===31,'no repeated item');check(new Set(paper.map(q=>q.family)).size===31,'mock spans distinct families');const totals=Object.fromEntries([...new Set(paper.map(q=>q.section))].map(s=>[s,paper.filter(q=>q.section===s).reduce((a,q)=>a+q.points,0)]));check(Object.values(totals).join(',')==='10,10,8,8,64','historical section weights');}
// Independently checked anchors from the scanned material and simple worked cases.
const q=id=>R.find(q=>q.id===id);
check(q('E14-leaves-v1').fields[0].answer==='1001','2014 arbitrary binary tree leaf count');check(q('R7-binary-asl-v4').fields[0].answer==='27/8','n=16 binary success ASL');check(q('R7-hash-full-v3').fields[0].answer==='49,22,20,_,32,39,13,55','scan hash table');check(q('R7-hash-full-v3').fields[1].answer==='13/7','scan hash ASL');check(q('R6-aoe-tables-v2').fields[0].answer==='0,3,2,8,6,10','AOE forward table');check(q('R6-aoe-tables-v2').fields[1].answer==='0,3,4,8,9,10','AOE backward table');check(q('R6-dijkstra-v1').fields[0].answer==='0,45,10,25,30,55','scan shortest distances');check(q('R8-quick-first-v1').fields[0].answer==='40,38,47,56,79,84','first partition fixed convention');check(q('R8-bubble-count-v1').fields[0].answer==='25','scan bubble comparisons');check(q('R8-bubble-count-v1').fields[1].answer==='9','scan bubble swaps');

// Independently recompute answers from the newly displayed given tables/graphs.
for(const item of R.filter(q=>q.given)){
 const g=item.given;
 if(g.kind==='graph'){
  const adj=Array.from({length:g.n},()=>[]);for(const[u,v]of g.edges){check(u>=1&&u<=g.n&&v>=1&&v<=g.n&&u!==v,'given graph vertex range');adj[u-1].push(v);if(!g.directed)adj[v-1].push(u);}adj.forEach(a=>a.sort((a,b)=>a-b));
  const dfs=[],bfs=[],seen=new Set();function visit(u){seen.add(u);dfs.push(u);for(const v of adj[u-1])if(!seen.has(v))visit(v);}visit(1);seen.clear();seen.add(1);const queue=[1];while(queue.length){const u=queue.shift();bfs.push(u);for(const v of adj[u-1])if(!seen.has(v)){seen.add(v);queue.push(v);}}
  if(item.fields){check(item.fields[0].answer===dfs.join(','),'given graph DFS answer');check(item.fields[1].answer===bfs.join(','),'given graph BFS answer');}else{const line=item.solution.find(x=>x.startsWith('DFS='));check(JSON.parse(line.match(/DFS=(\[[^\]]+\])/)[1]).join(',')===dfs.join(','),'given graph written DFS');check(JSON.parse(line.match(/BFS=(\[[^\]]+\])/)[1]).join(',')===bfs.join(','),'given graph written BFS');}
 }else if(item.family==='R5-pointertable'){
  const rows=new Map(g.rows.map(r=>[r[0],r])),root=Number(item.title.match(/T=(\d+)/)[1]);function order(i,kind){if(!i)return '';const r=rows.get(i);check(!!r,'given pointer target exists');return(kind==='pre'?r[1]:'')+order(r[2],kind)+(kind==='in'?r[1]:'')+order(r[3],kind)+(kind==='post'?r[1]:'');}for(const[i,kind]of ['pre','in','post'].entries())check(item.fields[i].answer===order(root,kind),'given pointer traversal '+kind);
 }else if(item.family==='R5-forest'){
  const table=new Map(g.rows.map(r=>[r[0],r.slice(1)])),root=item.title.match(/根指针指向 ([A-Z])/)[1],roots=[];let x=root;while(x!=='∅'){roots.push(x);x=table.get(x)[1];}const recorded=JSON.parse(item.solution[0].match(/\[[^\]]+\]/)[0].replace(/'/g,'"'));check(recorded.join(',')===roots.join(','),'given forest root chain');for(const[v,[left]]of table){const children=[];let child=left;while(child!=='∅'){children.push(child);child=table.get(child)[1];}check(item.solution.includes(v+' 的孩子：'+(children.length?children.join('、'):'无')),'given forest children '+v);}
 }
}

// Failure ASL uses possible home addresses of the actual hash function, not unreachable slots.
for(const item of R.filter(q=>q.family==='R7-hash-failure')){
 const m=Number(item.title.match(/m=(\d+)/)[1]),p=Number(item.title.match(/key%(\d+)/)[1]),keys=JSON.parse(item.title.match(/\[[^\]]+\]/)[0]),slots=Array(m).fill(null);
 for(const key of keys){let pos=key%p;while(slots[pos]!==null)pos=(pos+1)%m;slots[pos]=key;}
 const costs=Array.from({length:p},(_,home)=>{let count=1,pos=home;while(slots[pos]!==null){count++;pos=(pos+1)%m;}return count;});
 check(item.fields[0].answer===costs.join(','),'reachable home addresses have independently computed failure costs');
 check(E.equal(item.fields[1].answer,String(costs.reduce((s,v)=>s+v,0)/p),'number'),'failure ASL divides by possible equiprobable homes');
}
for(const a of ANIMATIONS){const frames=a.build();check(frames.length>1,'animation available '+a.id);if(['bubble','insertion','shell','heap','quick','selection'].includes(a.id))check(frames.at(-1).values.join(',')==='22,26,36,42,46,48,66,68,84','sorting result remains correct');
 if(['preorder','inorder','postorder'].includes(a.id)){
  check(a.code.filter(line=>/^visit\(/.test(line)).length===1,'one output operation per traversal, not three');
  check(frames.at(-1).order.join('')===({preorder:'ABDECFG',inorder:'DBEAFCG',postorder:'DEBFGCA'})[a.id],'independent complete-tree traversal order');
 }
 if(a.id==='insertion'){
  const input=frames[0].values,inversions=input.reduce((s,v,i)=>s+input.slice(i+1).filter(x=>x<v).length,0);
  check(frames.at(-1).moves===inversions+2*(input.length-1),'insertion moves include one hold and one placement per inserted record plus inversions');
 }
}
console.log(`${n} checks passed: 491 independent-mode items, 125 review families, numeric/sequence grading, partial-point schemas, 60 full 100-point papers, source anchors, animations.`);
