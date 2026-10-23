/* Local KaTeX presentation only. Original question answers and grading data stay unchanged. */
(() => {
'use strict';
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const supers={'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','ⁿ':'n','ⁱ':'i','ʰ':'h','⁺':'+','⁻':'−'},subs={'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','ᵢ':'i','ⱼ':'j','ₙ':'n'};
// Explicit definitions supply missing indices/bounds in the original shorthand.
const definitions=[
 ['ΣΣj=n²(n+1)/2',String.raw`\sum_{i=1}^{n}\sum_{j=1}^{n}j=\frac{n^{2}(n+1)}{2}`],
 ['Σi=n(n+1)/2',String.raw`\sum_{i=1}^{n}i=\frac{n(n+1)}{2}`],
 ['Σj=n(n+1)/2',String.raw`\sum_{j=1}^{n}j=\frac{n(n+1)}{2}`],
 ['WPL=Σ(叶子权值×根到叶子的边数)',String.raw`\mathrm{WPL}=\sum_{i=1}^{n}w_i l_i`],
 ['平均码长=Σ(出现概率×码长)',String.raw`\bar l=\sum_{i=1}^{n}p_i l_i`],
 ['平均码长=WPL/Σ权',String.raw`\bar l=\frac{\mathrm{WPL}}{\sum_{i=1}^{n}w_i}`],
 ['固定长位数=⌈log₂字符数⌉',String.raw`b=\left\lceil\log_2 N\right\rceil`],
 ['ASL=Σ结点层数/n',String.raw`\mathrm{ASL}=\frac{\sum_{i=1}^{n}d_i}{n}`],
 ['ASL=Σ探测次数/n',String.raw`\mathrm{ASL}=\frac{\sum_{i=1}^{n}c_i}{n}`],
 ['ASL=层数和/n',String.raw`\mathrm{ASL}=\frac{\sum_{i=1}^{n}d_i}{n}`],
 ['ASL=Σ层数/n',String.raw`\mathrm{ASL}=\frac{\sum_{i=1}^{n}d_i}{n}`],
 ['ASL=Σ(pᵢcᵢ)',String.raw`\mathrm{ASL}=\sum_{i=1}^{n}p_i c_i`],
 ['ASL=Σpᵢcᵢ',String.raw`\mathrm{ASL}=\sum_{i=1}^{n}p_i c_i`],
 ['ASL=ΣpᵢCᵢ',String.raw`\mathrm{ASL}=\sum_{i=1}^{n}p_i C_i`],
 ['WPL=Σwᵢlᵢ',String.raw`\mathrm{WPL}=\sum_{i=1}^{n}w_i l_i`],
 ['Σindegree=Σoutdegree=E',String.raw`\sum_{v\in V}\deg^{-}(v)=\sum_{v\in V}\deg^{+}(v)=|E|`],
 ['Σdegree=2E',String.raw`\sum_{v\in V}\deg(v)=2|E|`],
 ['O(列数+非零元数)',String.raw`O(n+t)`],
 ['BF=左高−右高',String.raw`\mathrm{BF}=h_{\mathrm{left}}-h_{\mathrm{right}}`],
 ['实际地址=基址+偏移×元素字节数 L',String.raw`\mathrm{Loc}=\mathrm{base}+\mathrm{offset}\cdot L`],
 ['(D,R,P)',String.raw`(D,R,P)`],['(D,R)',String.raw`(D,R)`],
 ['R={<A,B>,<B,C>}',String.raw`R=\{\langle A,B\rangle,\langle B,C\rangle\}`],
 ['WPL/Σ权',String.raw`\frac{\mathrm{WPL}}{\sum_{i=1}^{n}w_i}`],
 ['Σwᵢlᵢ',String.raw`\sum_{i=1}^{n}w_i l_i`],
 ['Σpᵢcᵢ',String.raw`\sum_{i=1}^{n}p_i c_i`],
 ['Σ层数/n',String.raw`\frac{\sum_{i=1}^{n}d_i}{n}`],
 ['⌈log₂字符数⌉',String.raw`\left\lceil\log_2 N\right\rceil`]
].sort((a,b)=>b[0].length-a[0].length);
const operatorNames=new Set(['log','ln','max','min','sin','cos','floor','ceil']);
const upright=new Set(['ASL','WPL','BF','Loc','base','top','offset','len','rear','front','low','high','mid','key','pivot','gap','degree','indegree','outdegree','dist','ve','vl','cpot','num','pos','GetElem','LocateElem']);
function normalize(s){return s.replace(/ceil\(([^()]*)\)/g,'⌈$1⌉').replace(/floor\(([^()]*)\)/g,'⌊$1⌋').replace(/a([₀₁₂₃₄₅₆₇₈₉]{2,3})/g,(_,m)=>'a_{'+[...m].map(c=>subs[c]).join(',')+'}').replace(/aᵢⱼ/g,'a_{i,j}').replace(/aⱼᵢ/g,'a_{j,i}').replace(/nlogn/g,'n log n').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱʰ⁺⁻]+/g,m=>'^{'+[...m].map(c=>supers[c]).join('')+'}').replace(/[₀₁₂₃₄₅₆₇₈₉ᵢⱼₙ]+/g,m=>'_{'+[...m].map(c=>subs[c]).join('')+'}').replace(/==/g,'=').replace(/<=/g,'≤').replace(/>=/g,'≥').replace(/!=/g,'≠').replace(/\.\./g,'…');}
function toTex(raw){
 const s=normalize(raw),tokens=s.match(/\d+(?:\.\d+)?|[A-Za-z]+|[\u3400-\u9fff]+|[+\-−*/×·%=<>≤≥≠≈^_()[\]{},|⌊⌋⌈⌉ΣαΘ∞±…∈→]/g)||[];
 let i=0;const peek=()=>tokens[i],take=()=>tokens[i++];
 const op={'+':'+','-':'-','−':'-','*':String.raw`\cdot`,'×':String.raw`\times`,'·':String.raw`\cdot`,'%':String.raw`\bmod`,'=':'=','<':'<','>':'>','≤':String.raw`\le`,'≥':String.raw`\ge`,'≠':String.raw`\ne`,'≈':String.raw`\approx`,'±':String.raw`\pm`,'∈':String.raw`\in`,'→':String.raw`\to`};
 const prec=t=>['=','<','>','≤','≥','≠','≈','∈','→'].includes(t)?1:['+','-','−','±'].includes(t)?2:['*','×','·','/','%'].includes(t)?3:0;
 const closing=new Set([')',']','}','⌋','⌉',',']);
 const strip=n=>n.inner??n.tex;
 function atom(){
  const t=take();if(!t)return{tex:''};let n;
  if(['(','[','{','⌊','⌈'].includes(t)){
   const end={'(':')','[':']','{':'}','⌊':'⌋','⌈':'⌉'}[t],parts=[];
   while(i<tokens.length&&peek()!==end){const before=i;parts.push(expr(1).tex);if(peek()===','){take();parts.push(',');}if(i===before)take();}
   if(peek()===end)take();const inner=parts.join(' '),left={'(': '(', '[':'[','{':String.raw`\{`,'⌊':String.raw`\lfloor`,'⌈':String.raw`\lceil`}[t],right={')':')',']':']','}':String.raw`\}`,'⌋':String.raw`\rfloor`,'⌉':String.raw`\rceil`}[end];
   n={tex:`\\left${left} ${inner} \\right${right}`,inner};
  }else if(t==='binom'&&peek()==='('){
   take();const top=expr(1);if(peek()===',')take();const bottom=expr(1);if(peek()===')')take();n={tex:`\\binom{${top.tex}}{${bottom.tex}}`};
  }else if(['-','−','+','±'].includes(t))n={tex:(op[t]||t)+' '+atom().tex};
  else if(operatorNames.has(t))n={tex:'\\'+t};
  else if(/[\u3400-\u9fff]/.test(t))n={tex:`\\text{${t}}`};
  else if(upright.has(t))n={tex:`\\mathrm{${t}}`};
  else n={tex:({'_':String.raw`\_`,'}':String.raw`\}`,'Σ':String.raw`\sum`,'α':String.raw`\alpha`,'Θ':String.raw`\Theta`,'∞':String.raw`\infty`,'…':String.raw`\ldots`}[t]||t)};
  while(peek()==='^'||peek()==='_'){const p=take(),arg=atom();n={tex:n.tex+p+'{'+strip(arg)+'}'};}
  return n;
 }
 function expr(min){let left=atom();while(i<tokens.length&&!closing.has(peek())){const t=peek(),p=prec(t);if(p){if(p<min)break;take();const right=expr(p+1);left={tex:t==='/'?`\\frac{${strip(left)}}{${strip(right)}}`:`${left.tex} ${op[t]||t} ${right.tex}`};}else if(!['^','_'].includes(t)){const right=atom();left={tex:left.tex+' '+right.tex};}else break;}return left;}
 const out=[];while(i<tokens.length){const before=i;out.push(expr(1).tex);if(peek()===','){take();out.push(',');}if(i===before)take();}return out.join(' ');
}
const cache=new Map(),errors=[];
function math(raw,tex){
 const key=tex||raw;if(cache.has(key))return cache.get(key);
 try{const value=`<span class="math-render" data-math="${escape(raw)}">${katex.renderToString(tex||toTex(raw),{throwOnError:true,strict:'error',trust:false,output:'htmlAndMathml'})}</span>`;cache.set(key,value);return value;}
 catch(e){errors.push({raw,message:e.message});return escape(raw);}
}
// C expressions remain code, while mathematical prose uses fractions, indices and powers.
const codePattern=/\b[A-Za-z]\w*\s*(?:==|!=)\s*NULL\b|\b[A-Za-z]\w*\s*=\s*[A-Za-z]\w*(?:->\w+)+|\bfor\s+[ijk]\s*=\s*[^，；。：\n]+|\b(?:for|while|if)\s*\([^\n;]*(?:;[^\n)]*)?\)(?:\s*\{[^{}\n]*\})?|\b[A-Za-z]\w*(?:->\w+)+(?:\s*(?:==|!=|<=|>=|=)\s*[^，；。\n]+)?|\b(?:pre|p|q|s|tail|L|La|Lb)\s*=\s*[^，；。\n]*;[^\n。]*|\b(?:[A-Za-z]\w*\.)+(?:next|left|right)(?:=[A-Za-z0-9]+)?/g;
const labels=['行优先偏移','列优先偏移','行优先地址','列优先地址','实际地址','元素字节数','压缩下标','所有顶点度数之和','所有入度之和','所有出度之和','合并新权值之和','一般树孩子链','森林根链','固定长位数','最小容量','最大编号','初始大根堆','探测次数','失败次数','成功次数','平均码长','层数和','结点数','边数','上界','下界','左高','右高','父','子','比较','交换','长度','偏移','地址','总位置','次数','空间','初长','终长','叶子','高度','容量','余量','工期','基准','表','根','左','右','空','输入受限','一端插入','两端可删','查找代价','后继','层数'];
const charClass=String.raw`A-Za-z0-9 .\t+\-−*/×·%=<>≤≥≠≈^_()[\]{},|⌊⌋⌈⌉ΣαΘ∞±…∈→⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱʰ⁺⁻₀₁₂₃₄₅₆₇₈₉ᵢⱼₙ`;
const runPattern=new RegExp('(?:(?:'+labels.join('|')+')(?=\\s*[=<>≤≥])|[A-Za-z0-9αΘΣ⌊⌈|±(=<>≤≥])(?:'+labels.join('|')+'|['+charClass+'])*','g');
function generic(text){let out='',at=0;for(const match of text.matchAll(runPattern)){const raw=match[0];out+=escape(text.slice(at,match.index));at=match.index+raw.length;out+=(()=>{
 const lead=raw.match(/^\s*/)[0],tail=raw.match(/\s*$/)[0],s=raw.trim();
 // Avoid treating chapter IDs, source page ranges, English UI labels and bare counts as formulas.
 const strong=/[=+*/×·%<>≤≥≠≈^_⌊⌋⌈⌉ΣαΘ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱʰ₀₁₂₃₄₅₆₇₈₉ᵢⱼₙ]/.test(s)||/\bO\s*\(/.test(s)||/[A-Za-z][−-]|[−-][A-Za-z]|\d+[a-z]/.test(s)||/\b(?:\d+|[A-Za-z])\.\.(?:\d+|[A-Za-z])\b/.test(s)||/^[A-Za-z]$|^[a-z]{2}$|\b(?:nlogn|n\s+log\s+n|log\s+n)\b|^[fTH]\(/.test(s);
 if(/^[\d,_. \t]+$/.test(s)||/[+*/×·%]$/.test(s)||/^(?:DFS\/BFS|ve\/vl|front\/rear|Lchild\/Rchild)$/.test(s))return escape(raw);
 if(!strong||/^(?:CH|SLIDE|PDF|R\d|q\d|r\d)/.test(s)||/^[A-Z]+(?: [A-Z]+)+/.test(s))return escape(raw);
 // Full stops and sentence commas are not part of the expression.
 const m=s.match(/^(.*?)([,.]+)?$/);return escape(lead)+math(m[1])+(m[2]||'')+escape(tail);
 })();}return out+escape(text.slice(at));}
function plain(text){
 let output='',at=0;
 // Longest explicit definitions win; remaining prose uses the conservative expression scanner.
 while(at<text.length){let best=null;for(const [raw,tex]of definitions){const p=text.indexOf(raw,at);if(p>=0&&(!best||p<best.p))best={p,raw,tex};}
  if(!best){output+=generic(text.slice(at));break;}output+=generic(text.slice(at,best.p))+math(best.raw,best.tex);at=best.p+best.raw.length;
 }return output;
}
function html(text){
 let out='',at=0;for(const match of String(text).matchAll(codePattern)){out+=plain(String(text).slice(at,match.index))+`<code class="inline-code">${escape(match[0])}</code>`;at=match.index+match[0].length;}return out+plain(String(text).slice(at));
}
function render(root){
 if(!root||typeof katex==='undefined')return;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];
 while(walker.nextNode()){const node=walker.currentNode,p=node.parentElement;if(!node.data.trim()||!p||p.closest('math,.math-render,pre,code,textarea,input,select,option,svg,script,style,.answer-record,[data-note],.source-slide,.user-note,.eyebrow,.reading-tools,.question-counter,.challenge-top,.stats-row,.source-ref,.chapter-nav,.chapter-banner,.tabs,.lesson-tabs,.stage-top,.animation-controls,.badges,.goal-strip,#searchResults,.question-tags,.question-type,.source-pagination,.result-item-header,.session-end-note,.graph-table,.matrix-memory,.record-meta,.score-disclosure,.given-data,.paper-progress,.paper-nav,.mock-actions,.mock-autosave,.code-line,.code-summary,.guide-option>span,.code-guide,.quick-card,.answer-label,.letter,.lesson-nav-label,.resume-card,.character-status,.level-progress,.flash-controls,.notes-panel,.chapter-bottom,.btn,.tag,.chip,.footer,.answer-feedback h3,.bag-item>p,#timelineLabel,#labCounter'))continue;nodes.push(node);}
 for(const node of nodes){const value=html(node.data);if(!value.includes('math-render')&&!value.includes('inline-code'))continue;const t=document.createElement('template');t.innerHTML=value;node.replaceWith(t.content);}
}
window.MathTypeset={html,toTex,render,errors};
})();
