/* Check every authored learning/review string against the bundled offline renderer. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),w={},context={window:w,katex:require(path.join(root,'assets/katex/katex.min.js'))};vm.createContext(context);
for(const f of ['math-format.js','content.js','curriculum.js','learning-guides.js','review-lessons.js','learn-bank.js','review-bank.js','training-engine.js','animations.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),context);
let strings=0,formulas=0;
function walk(value,key=''){
 if(typeof value==='string'&&!['code','pages','id','family','topic','learn'].includes(key)){
  const html=w.MathTypeset.html(value);assert(!html.includes('katex-error'));strings++;formulas+=(html.match(/class="math-render"/g)||[]).length;
 }else if(Array.isArray(value))value.forEach(v=>walk(v,key));else if(value&&typeof value==='object')for(const[k,v]of Object.entries(value))walk(v,k);
}
for(const key of ['CURRICULUM','COURSE','LEARNING_GUIDES','REVIEW_LESSONS','LEARN_QUESTIONS','REVIEW_QUESTIONS'])walk(w[key]);
for(const a of w.ANIMATIONS)for(const f of a.build())walk(f);
assert.strictEqual(w.MathTypeset.errors.length,0,JSON.stringify(w.MathTypeset.errors));
for(const sample of ['n(n+1)/2','ASL=13/7≈1.857143','⌊log₂n⌋+1','a₂₃','WPL=Σwᵢlᵢ','Cₙ=binom(2n,n)/(n+1)','|i−j|≤1','O(2ⁿ)'])assert(w.MathTypeset.html(sample).includes('<math'),'MathML '+sample);
assert(w.MathTypeset.html('n(n+1)/2').includes('<mfrac>'),'stacked fraction');
assert(w.MathTypeset.html('O(2ⁿ)').includes('<msup>'),'exponent');
assert(w.MathTypeset.html('n₀=n₂+1').includes('<msub>'),'subscripts');
assert(w.MathTypeset.toTex('a₂₃').includes('2 , 3'),'matrix row/column index');
assert(w.MathTypeset.toTex('Cₙ=binom(2n,n)/(n+1)').includes('\\binom'),'binomial coefficient');
assert(w.MathTypeset.html('ASL=54/16=3.375').includes('data-math="ASL=54/16=3.375"'),'decimal preserved');
assert(w.MathTypeset.html('地址=(2−1)×4').includes('data-math="地址=(2−1)×4"'),'parentheses and labels stay inside expression');
assert(!w.MathTypeset.html('<img src=x onerror=alert(1)>').includes('<img'),'text does not become HTML');
assert(w.MathTypeset.html('p->next=q;').includes('inline-code'),'pointer code remains code');
for(const code of ['p=p->next','L==NULL','L!=NULL']){const rendered=w.MathTypeset.html(code);assert(rendered.includes('inline-code')&&!rendered.includes('math-render'),'C pointer operation remains a single code expression '+code);}
assert(!w.MathTypeset.html('C / 伪代码').includes('<mfrac>'),'prose slash preserved');
assert(!w.MathTypeset.html('DFS/BFS').includes('math-render'),'algorithm names are not a quotient');
assert(!w.MathTypeset.html('预设例子 · 暂停').includes('math-render'),'prose separator preserved');
assert(w.MathTypeset.html('装填因子α=7/8').includes('data-math="α=7/8"'),'Chinese suffix is not a mathematical factor');
const E=w.TrainingEngine;
for(const[a,b]of [['O(2^n)','O(2ⁿ)'],['O(n^2)','O(n²)'],['O(n²)','O(n^2)'],['O(log_2 n)','O(log n)']])assert(E.equal(a,b,'complexity'),'equivalent notation '+a);
assert(!E.equal('O(n)','O(n²)','complexity'));
assert(E.equal('3/2.3','30/23','number'),'decimal ratio accepted');
assert(!E.equal('1/0','0','number'),'zero denominator rejected');
assert(E.equal('−2','-2','number'),'Unicode minus');
const matrix=w.COURSE.find(c=>c.id===4).lessons.find(l=>l.id==='4-3');assert(matrix.details.some(t=>t.includes('|i−j|≤1')&&t.includes('3n−2')),'tridiagonal condition and count remain in one explanation');
for(const file of ['index.html','app.js','review-lessons.js','review-bank.js','exam-meta.js','README.md'])assert(!/95\+|TARGET 95|考试目标 95/.test(fs.readFileSync(path.join(root,file),'utf8')),'no target score label '+file);
const css=fs.readFileSync(path.join(root,'assets/katex/katex.min.css'),'utf8');for(const match of css.matchAll(/url\(([^)]+)\)/g))assert(fs.existsSync(path.join(root,'assets/katex',match[1].replace(/["']/g,''))),'offline font '+match[1]);
console.log(`Math checks passed: ${strings} authored strings, ${formulas} mathematical spans, no render errors; fraction/index/exponent/decimal semantics, code isolation, local fonts and equivalent-answer grading verified.`);

assert(w.MathTypeset.html('1..n').includes('<math'),'index ranges use standard mathematical ellipsis');
