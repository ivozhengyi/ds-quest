/* Pure scoring and sampling logic; no network, eval or arbitrary code execution. */
(() => {
const manual=q=>q.type==='written'||q.type==='code';
const clean=s=>String(s??'').normalize('NFKC').trim().replace(/−/g,'-');
function number(s){const t=clean(s).replace(/\s/g,''),decimal='[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)';if(new RegExp('^'+decimal+'$').test(t))return Number(t);if(new RegExp('^'+decimal+'/'+decimal+'$').test(t)){const[a,b]=t.split('/').map(Number);return b? a/b:NaN;}return NaN;}
function canonical(s,kind='text'){
 const powers={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','ⁿ':'n','ⁱ':'i','⁺':'+','⁻':'-'};
 let t=clean(String(s??'').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱ⁺⁻]+/g,m=>'^('+[...m].map(c=>powers[c]).join('')+')')).toLowerCase().replace(/\s/g,'').replace(/\^\(([^()]+)\)/g,'^$1').replace(/[，、；]/g,c=>({'，':',','、':',','；':';'}[c]));
 if(kind==='complexity'){t=t.replace(/[²³⁴]/g,c=>({'²':'^2','³':'^3','⁴':'^4'}[c])).replace(/n([234])\b/g,'n^$1').replace(/\*|·/g,'').replace(/log_?\d+/g,'log');return t.replace(/^o\((.*)\)$/,'$1').replace(/^o/,'');}
 if(kind==='formula')return t.replace(/\*/g,'').replace(/[\[\]{}]/g,'');
 if(kind==='sequence')return t.replace(/[\[\](){}]/g,'').replace(/->|→/g,',').replace(/[;,]/g,',');
 if(kind==='slots')return t.replace(/[\[\](){}]/g,'').replace(/null|none|空|∅/g,'_').replace(/[;,]/g,',');
 return t;
}
function equal(actual,expected,kind){
 if(kind==='number'){const a=number(actual),b=number(expected);return Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=.00100000001;}
 if(kind==='sequence'){
  const exp=canonical(expected,kind),act=canonical(actual,kind);
  if(/^[\d.,+\-]+$/.test(exp)&&exp.includes(',')){
   const e=exp.split(',').filter(Boolean),a=act.split(',').filter(Boolean);return e.length===a.length&&e.every((v,i)=>Number.isFinite(number(a[i]))&&Math.abs(number(v)-number(a[i]))<1e-9);
  }
  return act.replace(/,/g,'')===exp.replace(/,/g,'');
 }
 if(kind==='slots'){
  const exp=canonical(expected,kind).split(','),act=canonical(actual,kind).split(',');return exp.length===act.length&&exp.every((v,i)=>v==='_'?act[i]==='_':number(v)===number(act[i]));
 }
 return canonical(actual,kind)===canonical(expected,kind);
}
function grade(q,response){
 if(manual(q))return{kind:'self',score:null,max:q.points,details:[]};
 if(q.type==='choice'){const correct=Number.isInteger(response)&&response===q.answer;return{kind:'auto',score:correct?q.points:0,max:q.points,correct,details:[{correct,answer:q.options[q.answer]}]};}
 const arr=Array.isArray(response)?response:[];let score=0;
 const details=q.fields.map((f,i)=>{const correct=[f.answer,...(f.aliases||[])].some(a=>equal(arr[i],a,f.kind));if(correct)score+=f.points;return{correct,answer:f.answer,points:f.points,label:f.label};});
 return{kind:'auto',score,max:q.points,correct:score===q.points,details};
}
const shuffle=(xs,rng=Math.random)=>{const a=[...xs];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function eligible(q,{chapter='all',type='all',difficulty='all',priority='all',skill='all',tier='all'}={}){
 return(chapter==='all'||q.chapter===+chapter)&&(type==='all'||(type==='manual'?manual(q):q.type===type))&&(difficulty==='all'||q.difficulty===difficulty)&&(priority==='all'||q.priority===priority)&&(skill==='all'||q.skill===skill)&&(tier==='all'||q.tier===tier);
}
function select(bank,{chapter='all',count=10,pool='all',type='all',difficulty='all',priority='all',skill='all',tier='all',records={},rng=Math.random}={}){
 let qs=bank.filter(q=>eligible(q,{chapter,type,difficulty,priority,skill,tier}));
 if(pool==='wrong')qs=qs.filter(q=>records[q.id]?.attempts&&!records[q.id]?.lastCorrect);
 if(pool==='new')qs=qs.filter(q=>!records[q.id]?.attempts);
 qs=shuffle(qs,rng).sort((a,b)=>(records[a.id]?.lastCorrect?1:0)-(records[b.id]?.lastCorrect?1:0));
 const first=[],rest=[],seen=new Set();for(const q of qs){if(seen.has(q.family))rest.push(q);else{seen.add(q.family);first.push(q);}}
 return[...first,...rest].slice(0,count);
}
function mock(bank,rng=Math.random){
 const taken=new Set(),families=new Set(),out=[];
 function choose(list,n,section){const all=shuffle(list.filter(q=>!taken.has(q.id)),rng),choices=[];for(const q of all){if(!families.has(q.family)){choices.push(q);families.add(q.family);if(choices.length===n)break;}}if(choices.length<n)throw Error('模拟卷题源不足：'+section);for(const q of choices.slice(0,n)){out.push({...q,section});taken.add(q.id);}}
 choose(bank.filter(q=>q.type==='fields'&&q.points===1&&q.fields.length===1),10,'一、填空题 · 每题1分，共10分');
 // Concept coverage comes from the paper's objective topics; optional extensions stay outside mocks.
 const objective=bank.filter(q=>q.type==='choice'&&q.priority!=='extension');
 for(const ch of [1,2,3,4,5,6,7,8])choose(objective.filter(q=>q.chapter===ch),1,'二、单选题 · 每题1分，共10分');
 choose(objective,2,'二、单选题 · 每题1分，共10分');
 choose(bank.filter(q=>q.family==='R2-circle-code'),1,'三、算法编写 · 8分');
 choose(bank.filter(q=>q.family==='R1-triangle'||q.family==='E14-loop-up'),1,'四、精确频度 · 两题共8分');
 const frequencyFamilies=rng()<.5?['E14-loop-down']:['R1-geometric','R1-triple','R1-coupled','PPT1-even-start'];
 choose(bank.filter(q=>frequencyFamilies.includes(q.family)),1,'四、精确频度 · 两题共8分');
 for(const family of ['R5-reconstruct','R6-storage','R8-quick-full','R6-aoe-full','R5-fixed-shape','R5-huffman-tree','R7-hash-full','E14-pointer-forest'])choose(bank.filter(q=>q.family===family&&q.points===8&&(family!=='R5-fixed-shape'||manual(q))),1,'五、综合题 · 每题8分，共64分');
 if(out.reduce((s,q)=>s+q.points,0)!==100)throw Error('模拟卷分值不等于100');return out;
}
window.TrainingEngine={manual,number,canonical,equal,grade,shuffle,eligible,select,mock};
})();
