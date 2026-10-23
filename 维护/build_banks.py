"""Build the offline banks. Variants are explicitly labelled and share family IDs.
Pure Python solvers compute all numeric/trace answers; see verify_banks.cjs for checks.
"""
from pathlib import Path
from fractions import Fraction
from collections import deque,Counter
from math import log2,floor,ceil,comb
import json,random,heapq,itertools
ROOT=Path(__file__).resolve().parents[1]
course=json.loads((ROOT/'content.js').read_text().removeprefix('window.COURSE = ').strip().removesuffix(';'))
learn=[];review=[];families={}
priority={1:'必会计算',2:'算法重点',3:'基础稳分',4:'公式稳分',5:'综合核心',6:'综合核心',7:'综合重点',8:'过程重点'}
evidence={1:[1,3,14,21,31],2:[1,3,14,25,29,30],3:[1,2,12,19,23,26],4:[11,22,24,25,45,46],5:[1,4,8,9,10,13,17,21,24,28,34,35,36,43,44],6:[2,5,7,12,16,18,20,27,45,46,47,48,49,50,51,52],7:[1,8,10,11,13,22,23,33,37,38,40,41,42],8:[6,12,15,19,23,32,39,40]}
# For an individual problem, sourcePages refer to the method precedent, never an official answer key.
def base(ch,family,title,kind='fields',points=4,difficulty='考试标准',src=None,origin='同类考法新题',lesson=None):
 count=sum(q['family']==family for q in review)+1
 families.setdefault(family,{'chapter':ch,'name':title.split('：')[0]})
 return dict(id=f'{family}-v{count}',chapter=ch,mode='review',family=family,variant=count,title=title,type=kind,points=points,difficulty=difficulty,sourcePages=src if src is not None else evidence[ch][:2],origin=origin,topic=lesson or f'r{ch}-1',hint='',explain='',solution=[],rubric=[])
def field(label,answer,points=1,kind='number',aliases=None):return dict(label=label,answer=str(answer),points=points,kind=kind,aliases=[str(a) for a in (aliases or [])])
def fields(ch,fam,title,fs,solution,src=None,difficulty='考试标准',lesson=None,origin='同类考法新题'):
 q=base(ch,fam,title,'fields',sum(f['points'] for f in fs),difficulty,src,origin,lesson);q['fields']=fs;q['solution']=solution;q['explain']='\n'.join(solution);review.append(q);return q
def choice(ch,fam,title,options,answer,explain,src=None,lesson=None,difficulty='考试标准',origin='同类考法新题'):
 q=base(ch,fam,title,'choice',1,difficulty,src,origin,lesson);q.update(options=options,answer=answer,explain=explain,solution=[explain]);review.append(q);return q
def written(ch,fam,title,solution,rubric,src=None,lesson=None,kind='written',difficulty='综合拔高',origin='同类考法新题'):
 q=base(ch,fam,title,kind,sum(x[1] for x in rubric),difficulty,src,origin,lesson);q['solution']=solution;q['explain']='\n'.join(solution);q['rubric']=[dict(label=s,points=p)for s,p in rubric];review.append(q);return q
for c in course:
 for q in c['quiz']:
  q.update(mode='learn',type='choice',points=1,difficulty='入门',family='learn-'+q['id'],hint=next((l['summary'] for l in c['lessons'] if int(q['pages'].split('–')[0].split('、')[0]) in range(int(l['pages'].split('–')[0].split('、')[0]),int(l['pages'].split('–')[0].split('、')[0])+6)),c['lessons'][0]['summary']))
  learn.append(q)
def learnq(ch,title,opts,ans,explain,hint,pages):
 n=1+sum(q['chapter']==ch for q in learn);learn.append(dict(id=f'q{ch}-{n}',chapter=ch,mode='learn',family=f'learn-q{ch}-{n}',variant=1,type='choice',points=1,title=title,options=opts,answer=ans,explain=explain,hint=hint,pages=pages,difficulty='入门'))
# 32 scaffolded introductory problems, independent from review bank.
for ch,rows in {
2:[('数组下标从 0 开始时，第 3 个元素的下标是？',['1','2','3','4'],1,'位序 3 对应下标 2。','从 0 数：0、1、2。','10'),('A→B→C 中，p 指向 A。执行 p=p->next 后，p 指向？',['A','B','C','NULL'],1,'这句让 p 沿 next 前进一步，来到 B。','next 保存后继结点地址。','27'),('把新结点 X 接到 A 和 B 之间，第一步应先保存什么？',['A 的值','X 指向 B 的链接','表长的奇偶','C 的地址'],1,'先让 X.next=B，再令 A.next=X，原后继不会丢失。','先保存原来的后继。','33–34'),('双向链表中的 prior 一般指向哪里？',['根','直接前驱','任意元素','最后一个结点'],1,'prior 用于连接直接前驱。','与 next 的方向相反。','41–43')],
3:[('空栈压入 7 后立刻弹出，得到什么？',['0','7','NULL','无法确定'],1,'栈里只有 7，因此弹出 7。','弹出最近压入的元素。','3'),('队列依次入队 A、B，第一个出队的是？',['A','B','两者一起','由地址决定'],0,'队列先进先出，A 先进入，也先离开。','像排队买票。','27')],
5:[('根 A 的左孩子 B 没有孩子，B 是什么？',['根','叶子','森林','双亲'],1,'没有孩子、度为零的结点是叶子。','看它有没有孩子。','3'),('B、C 都是 A 的孩子，它们互称什么？',['双亲','祖先','兄弟','根'],2,'同一个双亲的孩子称兄弟。','同级且共享双亲。','3'),('二叉树中的一个结点最多有几个孩子？',['1','2','3','无限'],1,'每个结点最多两个孩子，区分左与右。','“二叉”表示两个分支位置。','5–8'),('根为 A，只有左叶子 B，前序是什么？',['AB','BA','AA','BB'],0,'前序先根后左子树，所以 A、B。','前序 DLR 的 D 最先。','20'),('同一棵 A 左 B 的树，中序是什么？',['AB','BA','AA','BB'],1,'中序先左后根，因此 B、A。','中序 LDR 先处理左边。','20'),('同一棵 A 左 B 的树，后序是什么？',['AB','BA','AA','BB'],1,'后序先子树后根，所以 B、A。','后序的根在最后。','20'),('高度为 1 的非空二叉树有几个结点？',['0','1','2','3'],1,'根就是唯一的结点。','根在第 1 层。','9'),('大权值字符在哈夫曼树中通常应有怎样的路径？',['尽可能短','必须最长','必须深度为 0','完全无关'],0,'常见字符使用短码，能降低加权总成本。','把常用的东西放近一点。','40–44'),('孩子兄弟表示中的左指针指向什么？',['第一孩子','下一兄弟','双亲','根'],0,'左孩子表示第一个孩子，右指针表示下一兄弟。','左孩子，右兄弟。','30'),('根 A 有左右叶子 B、C，层序是什么？',['BCA','ABC','BAC','CBA'],1,'层序先访问第 1 层 A，再第 2 层 B、C。','逐层、从左到右。','20')],
6:[('路网中的路口适合用什么表示？',['顶点','关键字','栈顶','指数'],0,'路口是顶点，道路是边。','把地点看作点。','2–5'),('单行道的方向适合用哪种图表示？',['无向图','有向图','空栈','顺序表'],1,'有向边能表示允许通过的方向。','边上有箭头。','4'),('图中的 visited 数组主要用来做什么？',['排序','避免重复访问','计算地址','保存课件页码'],1,'图中可能有环，标记已访问点能防止反复访问。','这个点来过没有？','20'),('DFS 走到没有未访问邻居时应如何做？',['结束整个程序','回退到上一层','清空所有标记','反复访问自己'],1,'回退后继续找其他未探索分支。','像迷宫走不通就退回岔口。','21'),('BFS 先探索 A 的邻居还是更远的点？',['更远的点','A 的邻居','没有规则','总先字母 Z'],1,'BFS 按距离层次向外扩展。','近的先，远的后。','24'),('边上写着“5 分钟”，这个 5 是？',['顶点度','边权','下标','树高'],1,'边权表示代价、距离或时间。','数字描述经过这条边的成本。','5'),('最小生成树要求首先满足哪件事？',['所有点都连接起来','所有边都保留','每点都有回路','固定根的距离最小'],0,'生成树必须连通全部顶点并且无环。','先保证所有岛都能到达。','29–30'),('入度为 0 表示什么？',['没有出边','没有指向它的边','它一定孤立','图没有边'],1,'入度统计指向该顶点的弧。','箭头进入结点的条数。','7'),('拓扑排序中，零入度点可以做什么？',['优先输出','一定删除失败','改成无向边','永久不能访问'],0,'它没有尚未完成的前驱依赖，可以输出。','没有先修要求的课可以先学。','46'),('关键路径的“最长”主要按什么衡量？',['名称长度','活动工期总和','纸上画的距离','箭头数量永远相同'],1,'AOE 边权是持续时间，最长依赖链约束工期。','项目要等最慢的支线。','51')],
7:[('折半查找前为什么要有序？',['更好看','才能根据大小排除一半','节省数组容量','保证每个值一样'],1,'有序保证中点两边的值具有可判断的范围。','小的在一边，大的在另一边。','5'),('有序数组 [2,4,6]，第一次中点值为？',['2','4','6','8'],1,'0 起始区间 [0,2]，mid=1，值为 4。','看中间的位置。','6'),('BST 当前结点值 10，查 3 应先走哪边？',['左','右','回根','随机'],0,'3<10，所以到左子树寻找。','左小右大。','17'),('不同关键字算到同一哈希地址叫什么？',['遍历','冲突','递归','排序'],1,'散列地址相同而关键字不同，称为冲突。','两个物品被分到同一柜子。','34')],
8:[('升序排序 [3,1,2] 的最终结果是？',['[3,2,1]','[1,2,3]','[2,3,1]','[3,1,2]'],1,'升序指从小到大排列。','先找最小，再逐渐变大。','1'),('冒泡比较相邻的 7 和 2，要升序应如何处理？',['保持不动','交换为 2、7','删除 7','插入 0'],1,'左边更大，构成逆序，应交换相邻两项。','较小的数应在左。','24–25')]
}.items():
 for row in rows:learnq(ch,*row)
# chapter 1: exact frequency, not just asymptotic labels.
for n in [6,11,20,31]:
 fields(1,'R1-triangle',f'精确频度：for(i=1;i<=n;i++) for(j=1;j<=i;j++) @; 当 n={n}。写出 @ 次数与渐近时间。',[field('本次 @ 执行次数',n*(n+1)//2,2),field('时间复杂度','O(n²)',2,'complexity')],[f'固定 i 时内层执行 i 次。',f'f(n)=1+2+…+n=n(n+1)/2；代入 n={n} 得 {n*(n+1)//2}。','保留最高阶，时间 O(n²)。'],[3,14,21],lesson='r1-1')
for n in [5,9,12]:
 fields(1,'R1-triple',f'精确频度：for i=1..n，for j=1..n，for k=1..j 执行 @。当 n={n}，分别求次数和时间级别。',[field('@ 次数',n*n*(n+1)//2,2),field('时间复杂度','O(n³)',2,'complexity')],[f'每个 i 对应 Σj=n(n+1)/2 次，外层再乘 n。',f'f(n)=n²(n+1)/2，n={n} 时为 {n*n*(n+1)//2}。','时间 O(n³)。'],[31],lesson='r1-1')
for n,b in [(64,2),(81,3),(100,4),(255,2)]:
 t=0;i=1
 while i<=n:t+=1;i*=b
 fields(1,'R1-geometric',f'i=1; while(i<={n}) {{ @; i=i*{b}; }}。注意 <=，求精确次数与时间复杂度（将上界记为 n）。',[field('@ 次数',t,2),field('时间复杂度','O(log n)',2,'complexity')],[f'i 的取值是 1,{b},{b*b},…，直到超过 {n}。',f'次数=⌊log_{b}({n})⌋+1={t}。','底数为常数不改变 O(log n)。'],[14,31],lesson='r1-1')
for n in [8,9,15,20]:
 fields(1,'R1-coupled',f'i=1,j=0; while(i+j<=n) {{ if(i>j) {{ @; j++; }} else i++; }}。当 n={n}，求 @ 次数和整段时间级别。',[field('@ 次数',ceil(n/2),2),field('时间复杂度','O(n)',2,'complexity')],[f'i+j 从 1 开始，每轮增加 1，循环共 {n} 轮。','j++ 和 i++ 交替，j++ 出现在奇数轮。',f'@ 次数=⌈n/2⌉={ceil(n/2)}；整段 O(n)。'],[14],lesson='r1-1')
for title,opts,a,ex in [
('频度 10¹⁰n³+n⁴ 的主导时间级别是什么？',['O(n³)','O(n⁴)','O(10¹⁰)','O(n⁷)'],1,'渐近比较时 n⁴ 最终超过常数倍 n³，保留最高幂。'),
('顺序执行 O(n log n) 和 O(n²) 两段代码，总体最坏界是？',['O(n³ log n)','O(n²)','O(log n)','O(n log n)'],1,'顺序相加，保留增长较快的 n²。'),
('递归 T(n)=2T(n/2)+O(n)，n 为 2 的幂，时间界是？',['O(n)','O(log n)','O(n log n)','O(n²)'],2,'每层总处理 O(n)，共有 log₂n 层。属于复杂度拓展题。'),
('算法分析中，平均情况需要额外明确什么？',['变量命名','输入概率分布','显示器大小','源文件名'],1,'平均值必须基于输入或目标的概率分布。'),
('输入错误数据时仍能给出恰当处理，主要体现哪项设计要求？',['可读性','健壮性','稳定性','随机性'],1,'健壮性指能识别、处理非法输入等异常情况。')]:choice(1,'R1-concept',title,opts,a,ex,[1,12,28],lesson='r1-2')
for n in [7,16,25]:fields(1,'R1-space',f'用数组暂存 n={n} 个元素；每个元素 4 字节，仅计算该临时数组空间。',[field('数组字节数',4*n,1),field('渐近空间','O(n)',1,'complexity')],[f'空间={n}×4={n*4} 字节，随 n 线性增长。'],[1,3],lesson='r1-2')
# solvers reused below
class Node:
 def __init__(self,v,left=None,right=None):self.v=v;self.left=left;self.right=right

def traversal(t,order):
 if t is None:return []
 a=traversal(t.left,order);b=traversal(t.right,order)
 return ([t.v]+a+b)if order=='pre' else (a+[t.v]+b)if order=='in' else(a+b+[t.v])
def build_pre(pre,ino):
 if not pre:return None
 r=pre[0];i=ino.index(r);return Node(r,build_pre(pre[1:i+1],ino[:i]),build_pre(pre[i+1:],ino[i+1:]))
def build_post(post,ino):
 if not post:return None
 r=post[-1];i=ino.index(r);return Node(r,build_post(post[:i],ino[:i]),build_post(post[i:-1],ino[i+1:]))
def positions(t,i=1):return{}if t is None else {i:t.v,**positions(t.left,2*i),**positions(t.right,2*i+1)}
def bst(seq):
 root=None
 for x in seq:
  if root is None:root=Node(x);continue
  t=root
  while True:
   attr='left' if x<t.v else 'right'
   if getattr(t,attr) is None:setattr(t,attr,Node(x));break
   t=getattr(t,attr)
 return root

def height(t):return 0 if t is None else 1+max(height(t.left),height(t.right))
def depthsum(t,d=1):return 0 if t is None else d+depthsum(t.left,d+1)+depthsum(t.right,d+1)
def edge_description(t):
 if t is None:return []
 return [f'{t.v}:左={t.left.v if t.left else "空"},右={t.right.v if t.right else "空"}']+edge_description(t.left)+edge_description(t.right)
def compact(xs):return ','.join(map(str,xs))
# chapter 2: pointer correctness and boundary cases.
for data,x in [([3,7,11],1),([2,6,10],8),([4,8,12],15)]:
 written(2,'R2-circle-code',f'带头结点 L 的递增循环单链表，尾结点 next 指向 L。编写 Insert(L,x)，把 x={x} 插入 {data} 后仍非递减；允许重复键，需处理空表。用类 C 写出算法及复杂度。',[
 'p=L; while(p->next!=L && p->next->data<=x) p=p->next;',
 's=malloc(sizeof(Node)); if(!s) return ERROR; s->data=x;',
 's->next=p->next; p->next=s; return OK;',
 '空表时 L->next==L，循环不进入；前插、尾插都通过同样两句接链。查找 O(n)，连接 O(1)。'],[('循环以 p->next!=L 结束，避免把头结点当数据',2),('找到最后一个 <=x 的位置，兼顾空表与两端',2),('先 s->next 再 p->next，分配失败有处理',2),('说明查找 O(n)、接链 O(1)，指针类型一致',2)],[3],lesson='r2-1',kind='code')
for data,k in [([2,2,3,2],2),([1,4,4,4],4),([7,7,7],7)]:
 written(2,'R2-delete-code',f'带头结点的普通单链表 L，编写算法删除所有值为 {k} 的结点，并返回删除个数。以 {data} 检验连续命中和删空情况。',[
 'pre=L; p=L->next; count=0;',f'while(p!=NULL) {{ if(p->data=={k}) {{ pre->next=p->next; free(p); p=pre->next; count++; }} else {{ pre=p; p=p->next; }} }}',
 'return count;','每个有效结点只检查一次，时间 O(n)、额外空间 O(1)；命中后 pre 不前移。'],[('正确初始化前驱和当前指针',2),('命中后先接链再释放，且不跳过连续命中',2),('未命中时同步向前推进',2),('返回正确个数且说明 O(n)/O(1)',2)],[29],lesson='r2-2',kind='code')
for data in [[1,2,3,4],[7],[2,5,8]]:
 written(2,'R2-reverse-code',f'编写带头结点普通单链表的原地逆置算法，不新建数据结点。测试输入为 {data}，并说明空表是否适用。',[
 'p=L->next; L->next=NULL;',
 'while(p!=NULL) { q=p->next; p->next=L->next; L->next=p; p=q; }',
 f'结果为 {data[::-1]}。空表 p=NULL，循环不进入。',
 '时间 O(n)，额外空间 O(1)。每轮先保存原后继 q。'],[('摘下原链并初始化新空链',2),('先保存 q，避免丢失未处理部分',2),('头插连接正确，p 沿原链继续',2),('空表适用；复杂度正确',2)],[14],lesson='r2-2',kind='code')
for A,B in [([1,4,7],[2,3,8]),([2,5],[2,5,9])]:
 written(2,'R2-merge-code',f'将两个带头结点、非递减单链表 {A} 与 {B} 合并为一个非递减表，复用原数据结点。写出算法，重复值保留。',[
 'p=La->next; q=Lb->next; tail=La;',
 'while(p && q) { if(p->data<=q->data) { tail->next=p; p=p->next; } else { tail->next=q; q=q->next; } tail=tail->next; }',
 'tail->next = p ? p : q; Lb->next=NULL; // Lb 头结点的释放责任由调用者约定',f'结果 {sorted(A+B)}；时间 O(m+n)、额外空间 O(1)。'],[('两个游标从有效首元开始，保留重复值',2),('每次连接较小者并推进相应游标',2),('尾指针正确推进并接上剩余链',2),('说明头结点所有权和复杂度',2)],[3,29],lesson='r2-2',kind='code')
for n,i in [(12,1),(15,8),(20,21),(9,4)]:
 fields(2,'R2-seq-moves',f'长度 n={n} 的顺序表，容量足够，在第 i={i} 位之前插入。求移动次数；随后删除新插入项又需移动多少次？',[field('插入的元素移动次数',n-i+1,1),field('删除该新项的元素移动次数',n-i+1,1)],[f'插入时原第 i..n 位后移，共 {n-i+1} 个。',f'插入后长度为 n+1，删除第 i 位需左移 (n+1)-i={n-i+1} 个。'],[1,25],lesson='r2-3')
for addr,L,k in [(160,4,10),(200,8,7),(1000,2,11)]:fields(2,'R2-address',f'顺序表首元素字节地址 {addr}，每元素 {L} 字节，位序从 1 开始。第 {k} 个元素地址是多少？',[field('字节地址',addr+(k-1)*L,1)],[f'首元素前偏移 0，第 {k} 个前有 {k-1} 个，地址={addr}+{k-1}×{L}={addr+(k-1)*L}。'],[1,11],lesson='r2-3')
for values in [[10,20,30],[5,8,13],[2,4,6],[11,22,33]]:
 fields(2,'R2-pointer-trace',f'带头结点 L 的链为 L→{compact(values)}→NULL。p=L->next；q=p->next；p->next=q->next；free(q)。',[field('剩余数据序列',compact([values[0],values[2]]),2,'sequence'),field('新的 p->next->data',values[2],1)],[f'p 指向 {values[0]}，q 指向 {values[1]}；删除 q 后接到 {values[2]}。'],[25,30],lesson='r2-2')
for title,opts,a,ex in [
('已知非空双向循环链表结点 q，删除 q 的正确链接修复是？',['只改 q->next','q->prior->next=q->next; q->next->prior=q->prior','q=q->next','free(q) 后再访问 q->prior'],1,'必须修复前后两个方向；保存和接链必须发生在释放之前。'),
('已知 p 后插入 s，把 p->next=s 放在 s->next=p->next 之前，会发生什么？',['始终正确','s 自环且原后继可能丢失','自动回到头结点','只影响表长'],1,'第二句读到的 p->next 已是 s，会使 s->next=s。'),
('单链表只知道待删除结点 p 的值，定位并删除它的最坏复杂度是？',['O(1)','O(log n)','O(n)','O(n²)'],2,'查找前驱或位置通常需要线性扫描，不能只计算改指针的常数时间。'),
('不带头结点的普通单链表，删除首元时必须更新什么？',['仅释放局部 p','调用者保存的头指针','所有结点地址','最后元素值'],1,'首元就是头指针所指结点，删除它后要让头指针指向新首元。'),
('带头结点循环单链表的空表状态为？',['L==NULL','L->next==L','L->next==NULL','L->data==0'],1,'循环链表空表由头结点指向自身，与普通带头单链表判空不同。')]:choice(2,'R2-pitfalls',title,opts,a,ex,[3,25,30],lesson='r2-1')
for x in [0,9,20]:
 written(2,'R2-double-delete',f'非空双向循环链表含头结点，q 指向有效结点，值为 {x}。写出删除 q 的关键语句，解释为何不先 free(q)。',[
 'q->prior->next=q->next;','q->next->prior=q->prior;','free(q);','先释放后读取 q 的域属于释放后访问。循环头结点让首尾的邻居指针也存在。'],[('前驱的 next 修复正确',2),('后继的 prior 修复正确',2),('最后释放且不再使用 q',2),('说明首尾边界和释放顺序',2)],[30],lesson='r2-2')
# chapter 3

def stack_capacity(order):
 st=[];nextval=1;peak=0
 for x in order:
  while nextval<=x:st.append(nextval);nextval+=1;peak=max(peak,len(st))
  if not st or st[-1]!=x:return None
  st.pop()
 return peak
for seq in [[4,3,5,1,2],[4,5,3,2,1],[2,1,4,3,5],[3,2,1,5,4]]:
 ok=stack_capacity(seq)is not None
 choice(3,'R3-stack-legal',f'按 1,2,3,4,5 依次入栈，允许交错出栈，输出 {compact(seq)} 是否合法？',['合法','不合法，违背栈顶次序','只有队列合法','取决于元素地址'],0 if ok else 1,'模拟：需要某个值时依次压入尚未输入的元素；只能弹当前栈顶。'+('该序列可完成。'if ok else'该序列要求从栈内部越过未弹出的元素。'),[2,12,19],lesson='r3-1')
for seq in [[2,4,3,6,5,1],[3,2,1,6,5,4],[1,2,3,4,5,6],[4,3,2,1,6,5]]:
 cap=stack_capacity(seq);assert cap
 fields(3,'R3-stack-capacity',f'元素 1..6 按序输入栈 S，弹出后立即进入队列 P。要使 P 输出 {compact(seq)}，S 的最小容量是多少？',[field('最小容量',cap,4)],[f'模拟压栈与弹栈，只在所需目标未出现时继续压入。',f'整个过程同时在栈中的最大元素数为 {cap}，所以最小容量={cap}。','队列保持入队次序，不额外改变输出序列。'],[2,26],lesson='r3-1')
postfixes=[('5 3 - 2 * 18 6 / +',7),('3 2 + 4 5 * +',25),('8 3 - 2 *',10),('9 3 / 2 1 + *',9),('20 4 / 7 2 - +',10)]
for expr,result in postfixes:fields(3,'R3-postfix',f'求后缀表达式 {expr} 的值，/ 表示普通除法。',[field('计算结果',result,2)],[f'从左到右扫描，遇操作数入栈。','遇二元运算符先弹右操作数，再弹左操作数。',f'最终结果 {result}。'],[1,11,23],lesson='r3-2')
for expr,ans in [('a+b*c','abc*+'),('(a+b)*c','ab+c*'),('a-b/c+d','abc/-d+'),('a*(b+c)-d/e','abc+*de/-')]:fields(3,'R3-infix',f'把中缀 {expr} 转为后缀。运算符 + - * / 均按通常优先级和左结合处理。',[field('后缀表达式',ans,3,'sequence')],['操作数保持次序，运算符按优先级与括号借助栈处理。',f'结果 {ans}，括号不出现在结果中。'],[1,17,23],lesson='r3-2')
for m,f,r,out,ins in [(8,6,2,2,1),(10,8,3,1,2),(6,4,1,2,2),(12,10,4,3,1)]:
 n=(r-f+m)%m;assert n>=out and n-out+ins<m
 nf=(f+out)%m;nr=(r+ins)%m
 fields(3,'R3-ring',f'循环队列数组容量 m={m}，牺牲一个单元，front={f},rear={r}。先合法出队 {out} 次，再入队 {ins} 次。',[field('初始长度',n,1),field('最终 front',nf,1),field('最终 rear',nr,1),field('最终长度',(nr-nf+m)%m,1)],[f'初长=({r}-{f}+{m})%{m}={n}。',f'front=({f}+{out})%{m}={nf}；rear=({r}+{ins})%{m}={nr}。',f'终长={n-out+ins}；有效容量为 {m-1}。'],[25,26,27],lesson='r3-3')
for s,ok in [('([{}])',True),('([)]',False),('(()',False)]:choice(3,'R3-bracket',f'字符串 {s} 的括号匹配结论是什么？',['匹配','不匹配','仅凭总数相等就匹配','取决于存储结构'],0 if ok else 1,'逐个匹配最近未闭合左括号，并在结束时检查栈空。'+('本串满足。'if ok else'本串存在类型次序错误或残留左括号。'),[1,23],lesson='r3-2')
for n in [4,7,10]:fields(3,'R3-hanoi',f'{n} 个盘的标准汉诺塔，求最少移动次数和递归栈最大深度（忽略 n=0 的空调用）。',[field('最少移动次数',2**n-1,1),field('最大非空调用层数',n,1)],[f'T(n)=2T(n−1)+1=2ⁿ−1={2**n-1}。',f'同时保留的非空调用最多 {n} 层，深度与总次数不同。'],[21,23],lesson='r3-4')
for title,opts,a,ex in [('仅允许一端插入、两端删除的是？',['输入受限双端队列','输出受限双端队列','普通栈','循环单链表'],0,'限制输入端，删除仍可以从两端进行。'),('无头结点链队只有一个结点，出队后 front 与 rear 应？',['仅 front=NULL','仅 rear=NULL','两者都为 NULL','继续指向原结点'],2,'删空后不能保留悬空尾指针。')]:choice(3,'R3-boundary',title,opts,a,ex,[27],lesson='r3-3')
# chapter 4: address conventions are stated in each item.
for m,n,i,j,L,addr in [(5,6,3,4,4,1234),(6,8,2,4,2,1000),(4,7,4,6,8,2048),(8,5,6,3,4,500),(3,9,2,8,1,100)]:
 row=addr+((i-1)*n+j-1)*L;col=addr+((j-1)*m+i-1)*L
 fields(4,'R4-rowcol',f'A[1..{m}][1..{n}]，每元素 {L} 字节，a[1][1] 起始地址 {addr}。求 a[{i}][{j}] 两种存法的起始地址。',[field('行优先地址',row,2),field('列优先地址',col,2)],[f'行优先偏移=({i}-1)×{n}+({j}-1)，地址={row}。',f'列优先偏移=({j}-1)×{m}+({i}-1)，地址={col}。','用行数乘列偏移、列数乘行偏移，最后再乘字节数。'],[22,25],lesson='r4-1')
for n,L,baseaddr in [(15,1,644),(7,4,100),(9,2,800)]:
 target=baseaddr+(2*n+2)*L
 fields(4,'R4-infer-dim',f'二维数组 A[0..5][0..n-1] 按行优先连续存储，每元素 {L} 字节。A[0][0] 地址 {baseaddr}，A[2][2] 地址 {target}。',[field('列数 n',n,2),field('A[4][5] 地址',baseaddr+(4*n+5)*L,2)],[f'({target}-{baseaddr})/{L}=2n+2，解得 n={n}。',f'A[4][5]={baseaddr}+(4×{n}+5)×{L}={baseaddr+(4*n+5)*L}。'],[24],lesson='r4-1')
for n,i,j,L in [(6,4,3,2),(8,7,2,4),(10,9,5,1),(5,5,5,8)]:
 k=i*(i-1)//2+j-1
 fields(4,'R4-triangle',f'n={n} 的下三角矩阵（上三角全为 0）按行压缩，原坐标从 1 开始，压缩数组从 0 开始；每元素 {L} 字节，基址 2000。求 a[{i}][{j}]。',[field('压缩下标 k',k,1),field('元素字节地址',2000+k*L,1),field('需要保存的下三角位置数',n*(n+1)//2,1)],[f'前 {i-1} 行共 {i*(i-1)//2} 个，行内再偏移 {j-1}，k={k}。',f'地址=2000+{k}×{L}={2000+k*L}；总位置={n*(n+1)//2}。'],[11,22],lesson='r4-2')
for n,i,j in [(6,2,5),(7,1,7),(5,3,4)]:
 a,b=max(i,j),min(i,j);k=a*(a-1)//2+b-1
 fields(4,'R4-symmetric',f'{n} 阶对称矩阵只存含主对角线的下三角，原下标 1 起，压缩下标 0 起。a[{i}][{j}] 映射到哪个下标？',[field('压缩下标',k,2)],[f'i<j，先利用对称性改查 a[{a}][{b}]。',f'k={a}×({a}-1)/2+{b}-1={k}。'],[11,22],lesson='r4-2')
for n in [8,15]:fields(4,'R4-band',f'n={n} 阶三对角矩阵，仅保存 |i-j|<=1 的带区。共有多少个位置？',[field('带区位置数',3*n-2,1)],[f'首尾各 2 个，另外 {n-2} 行各 3 个，总数 3n-2={3*n-2}。'],[11],lesson='r4-2')
triplesets=[(3,4,[(1,2,5),(1,4,8),(2,1,3),(3,2,7)]),(4,3,[(1,3,2),(2,1,5),(4,2,9)]),(3,3,[(1,2,6),(2,1,4),(2,3,7),(3,1,8)]),(5,5,[(1,2,3),(1,5,6),(2,1,4),(2,3,5),(2,4,9),(4,1,2),(4,3,7),(5,4,8)])]
for m,n,ts in triplesets:
 ans=sorted((c,r,v)for r,c,v in ts)
 fields(4,'R4-transpose',f'稀疏矩阵 {m}×{n} 的行序三元组为 {ts}。转置后重新按行、列升序排列；用 r,c,v;… 输入完整结果。',[field('转置后的行数',n,1),field('转置后的列数',m,1),field('有序三元组序列',';'.join(compact(t)for t in ans),4,'sequence')],['交换每个三元组的前两个字段，值不变。',f'再按新行、新列排序：{ans}。','只交换字段而不重排，会破坏行序。'],[45,46],lesson='r4-3')
for counts in [[2,0,3,1],[0,2,1,2],[1,1,0,4],[3,0,0,2]]:
 cpot=[];pos=1
 for x in counts:cpot.append(pos);pos+=x
 fields(4,'R4-fasttranspose',f'快速转置中 num[1..{len(counts)}]={counts}，三元组从 1 起存，求尚未填入数据时 cpot。',[field('cpot 序列',compact(cpot),3,'sequence')],[f'cpot[1]=1；cpot[c]=cpot[c-1]+num[c-1]。',f'得到 {cpot}；零计数列可能共享起始位置。'],[2,12,45],lesson='r4-3')
for title,opts,a,ex in [('快速转置中列辅助向量主要提高什么？',['原矩阵行数','转置效率','元素数值','矩阵秩'],1,'预先确定新行起始位置，避免每列重新扫描全部三元组。'),('十字链表删除一个非零元时，必须修复？',['仅行链','仅列链','行链和列链','所有零元素'],2,'一个结点同时属于所在行和列的链，两侧链接都要维护。')]:choice(4,'R4-storage',title,opts,a,ex,[2,12,45],lesson='r4-3')
# chapter 5: reconstruction and Huffman, process-level answers.
for n,n1 in [(2014,13),(2015,4),(99,10),(150,7)]:
 n0=(n+1-n1)//2;n2=n0-1;assert n0+n1+n2==n
 fields(5,'R5-counts',f'非空二叉树共有 {n} 个结点，其中度为 1 的结点有 {n1} 个。求叶子数和度为 2 的结点数。',[field('叶子数 n0',n0,2),field('度为 2 的结点数 n2',n2,2)],[f'n0+n1+n2={n} 且 n0=n2+1。',f'n0=({n}-{n1}+1)/2={n0}，n2={n2}。','这里是任意二叉树，不套完全二叉树叶子公式。'],[1,24],lesson='r5-1')
for n,i in [(2013,503),(31,8),(50,17),(64,31)]:fields(5,'R5-complete',f'{n} 个结点的完全二叉树，根为第 1 层、按层从 1 编号。',[field('树高',floor(log2(n))+1,1),field('叶子个数',ceil(n/2),1),field(f'结点 {i} 的双亲编号',i//2,1),field(f'结点 {i} 的左孩子编号（不存在填0）',2*i if 2*i<=n else 0,1)],[f'h=⌊log₂{n}⌋+1={floor(log2(n))+1}；叶子=⌈n/2⌉={ceil(n/2)}。',f'父亲 ⌊{i}/2⌋={i//2}；左孩子 2i={2*i}，需检查不超过 n。'],[11,21,24],lesson='r5-1')
for n in [3,4,5]:fields(5,'R5-catalan',f'{n} 个标识互异的结点，固定先序遍历次序，允许任意二叉树形状且区分左右。共有多少种二叉树？',[field('二叉树种数',comb(2*n,n)//(n+1),2)],[f'固定先序次序后，每个形状唯一对应标识分配。种数为 Catalan Cₙ=binom(2n,n)/(n+1)。',f'n={n} 时为 {comb(2*n,n)//(n+1)}。'],[1,12,24],lesson='r5-1')
trees=[('ABDGCFHEK','BGDAHFCEK'),('ABDECFG','DBEAFCG'),('MFGHRTV','GFHMRTV'),('KDBAFHG','BDFAKHG')]
# last two must be valid traversals; construction itself validates subtree label sets.
validtrees=[]
for pre,ino in trees:
 try:
  t=build_pre(list(pre),list(ino));assert traversal(t,'pre')==list(pre) and traversal(t,'in')==list(ino);validtrees.append(t)
 except (ValueError,AssertionError):pass
if len(validtrees)<4:
 validtrees.extend([Node('M',Node('F',Node('G'),Node('H')),Node('R',Node('T'),Node('V'))),Node('K',Node('D',Node('B'),Node('F',Node('A'))),Node('H',None,Node('G')))])
validtrees=validtrees[:4]
for idx,t in enumerate(validtrees):
 pre=''.join(traversal(t,'pre'));ino=''.join(traversal(t,'in'));post=''.join(traversal(t,'post'));pos=positions(t);rootnum=next((k for k,v in pos.items() if v==traversal(t,'in')[0]),1)
 givens=f'先序 {pre}、中序 {ino}' if idx%2==0 else f'后序 {post}、中序 {ino}'
 wanted='后序'if idx%2==0 else'先序';ans=post if idx%2==0 else pre
 fields(5,'R5-reconstruct',f'结点标识互异，已知 {givens}。重建二叉树后填写；顺序存储按完全二叉树位置从 1 编号，缺位仍保留。',[field(wanted+'序列',ans,3,'sequence'),field('树高',height(t),1),field('需要的最大位置编号',max(pos),2),field(f'结点 {traversal(t,"in")[0]} 的位置编号',rootnum,2)],[f'根={t.v}。每次在中序中定位根，再递归切分左右子树。',*edge_description(t),f'{wanted}={ans}；位置映射='+', '.join(f'{k}:{v}'for k,v in sorted(pos.items())),f'高度={height(t)}，最大编号={max(pos)}。'],[4,13],lesson='r5-2',origin='历年题改编'if idx==0 else'同类考法新题')
pointer_inputs=[]
for idx,t in enumerate(validtrees):
 nodes=traversal(t,'pre');rng=random.Random(62+idx);indices=list(range(1,len(nodes)+1));rng.shuffle(indices);mp=dict(zip(nodes,indices))
 rows=[]
 def walk(t):
  if not t:return
  rows.append((mp[t.v],t.v,mp[t.left.v]if t.left else 0,mp[t.right.v]if t.right else 0));walk(t.left);walk(t.right)
 walk(t);rows.sort();pointer_inputs.append((mp[t.v],rows))
 fields(5,'R5-pointertable',f'二叉链表以编号表保存，0 表示空，根指针 T={mp[t.v]}。每行 (编号,值,左指针,右指针)：{rows}。按指针关系求遍历，不按物理编号排序。',[field('前序',''.join(traversal(t,'pre')),2,'sequence'),field('中序',''.join(traversal(t,'in')),3,'sequence'),field('后序',''.join(traversal(t,'post')),3,'sequence')],['从根指针开始按左右链接还原，而非按表的列序或字母序。',*edge_description(t),'前/中/后序分别是 '+', '.join(''.join(traversal(t,o))for o in ['pre','in','post'])],[10,34,35,36],lesson='r5-3')
for h in [4,5,6,7]:
 nodes=[chr(65+i)for i in range(h)];maxnum=2**h-1
 fields(5,'R5-sparse-array',f'一棵 {h} 个结点的二叉树只有右孩子，根 A，沿右链依次是 {compact(nodes)}。根编号 1，用完全二叉树位置顺序存储。',[field('最后结点位置编号',maxnum,2),field('至少需要的数组位置数（不含0号）',maxnum,1),field('二叉链表空孩子指针数',h+1,1)],[f'右链编号 1,3,7,…，第 h 层为 2ʰ−1={maxnum}。',f'有效结点虽仅 {h} 个，顺序存储仍要留到 {maxnum} 号。',f'二叉链表空指针域=n+1={h+1}。'],[4,13,34],lesson='r5-3')
forest_cases=[('A',{'A':('B','D'),'B':('C','E'),'C':(None,None),'D':('F',None),'E':(None,None),'F':(None,None)}),('A',{'A':('B',None),'B':('C','D'),'C':('E',None),'D':('F','G'),'E':(None,None),'F':(None,None),'G':(None,None)}),('M',{'M':('N','R'),'N':(None,'P'),'P':(None,None),'R':('S',None),'S':(None,None)}),('A',{'A':('B',None),'B':('C','D'),'C':('E',None),'D':('F','I'),'E':(None,None),'F':('H',None),'H':(None,None),'I':('J',None),'J':(None,None)})]
def convert_forest(root,table):
 roots=[];x=root
 while x:roots.append(x);x=table[x][1]
 children={}
 for x in table:
  a=table[x][0];cs=[]
  while a:cs.append(a);a=table[a][1]
  children[x]=cs
 return roots,children
for root,table in forest_cases:
 roots,cs=convert_forest(root,table)
 written(5,'R5-forest',f'将以下二叉树解释为孩子兄弟表示并还原一般树/森林。根指针 {root}；各结点(左,右)为 {table}，None 表示空。列出森林根及每个结点的孩子，可在纸上画图。',[f'森林根从根的右链读取：{roots}。',* [f'{v} 的孩子：'+('、'.join(ch)if ch else'无')for v,ch in cs.items()],'左指针是第一孩子，沿这些孩子的右指针依次找到其他兄弟；不能把二叉右边仍当一般树孩子。'],[('森林根及顺序正确',2),('逐个还原第一孩子和其右兄弟链',4),('不把右兄弟误挂为自己的孩子，图或文字无遗漏',2)],[10,28,35,36],lesson='r5-4')
def huffman(weights):
 heap=[(w,i,{'w':w,'name':chr(65+i)})for i,w in enumerate(weights)];heapq.heapify(heap);idx=len(heap);merges=[]
 while len(heap)>1:
  a,_,ta=heapq.heappop(heap);b,_,tb=heapq.heappop(heap);merges.append((a,b,a+b));heapq.heappush(heap,(a+b,idx,{'w':a+b,'left':ta,'right':tb}));idx+=1
 codes={}
 def visit(t,s=''):
  if 'name'in t:codes[t['name']]=s;return
  visit(t['left'],s+'0');visit(t['right'],s+'1')
 visit(heap[0][2]);return merges,codes,sum(x[2]for x in merges)
hsets=[[47,7,3,6,20,4,13],[35,25,20,10,6,4],[10,5,15,35,5,15,10,5],[9,4,5,2]]
for w in hsets:
 merge,codes,wpl=huffman(w)
 written(5,'R5-huffman-tree',f'字符 A..{chr(64+len(w))} 的频数依次为 {w}。构造哈夫曼树，约定左 0 右 1，给出一组前缀编码和 WPL；相同权值时允许不同合并次序。',[f'合并过程：{merge}。',f'一组合法编码：{codes}。',f'WPL 为每次合并的新权值之和={wpl}。','左右互换或相同权值选法不同，编码可不同；检验前缀性和相同的最优 WPL，不能只逐字对答案。'],[('每步确实合并当前两个最小权值',3),('树形与所列码字一致且满足前缀性',3),('WPL 正确并按边数计算码长',2)],[9,17,43,44],lesson='r5-5')
for w in [[10,20,30,40],[8,12,18,24,38],[4,6,10,15,25,40],[5,9,12,13,16,45]]:
 merge,codes,wpl=huffman(w);avg=Fraction(wpl,sum(w));bits=ceil(log2(len(w)))
 fields(5,'R5-huffman-numeric',f'字符频数 {w}，先构造哈夫曼树。求 WPL、平均码长与最短固定长编码的码长。允许输入分数或小数，数值误差不超过 0.001。',[field('WPL',wpl,2),field('平均码长',avg,2),field('固定长码每字符位数',bits,1)],[f'合并 {merge}，合并代价和 {wpl}。',f'平均码长=WPL/总频数={wpl}/{sum(w)}={float(avg):.6f}。',f'固定长需要 ⌈log₂{len(w)}⌉={bits} 位。'],[9,17,43,44],lesson='r5-6')
for w in [[35,25,20,10,6,4],[25,25,20,15,10,5],[5,10,15,20,20,30]]:
 merge,codes,wpl=huffman(w);avg=Fraction(wpl,sum(w));fixed=ceil(log2(len(w)));ratio=Fraction(fixed,1)/avg
 fields(5,'R5-compression',f'频数 {w}，比较最短固定长编码与哈夫曼编码。这里定义“压缩比”为原固定长总位数 / 压缩后总位数；忽略码表开销。',[field('平均哈夫曼码长',avg,2),field('压缩比（非百分数）',ratio,2)],[f'WPL={wpl}，平均码长={avg}。',f'固定长每字符 {fixed} 位，压缩比={fixed}/({avg})={float(ratio):.6f}。','不要把反比或节省百分数填进这个空。'],[17,43],lesson='r5-6')
for seq in [[19,18,60,40,7,31,72,65],[10,18,3,6,12,2,4],[8,3,10,1,6,14,4,7,13]]:
 t=bst(seq);ds=depthsum(t)
 fields(5,'R5-bst-inorder',f'将互异关键字 {seq} 依次插入空 BST（不做平衡旋转）。',[field('中序序列',compact(traversal(t,'in')),2,'sequence'),field('树高',height(t),1),field('成功等概率 ASL',Fraction(ds,len(seq)),2)],[*edge_description(t),f'中序为 {traversal(t,"in")}。',f'各结点层数和={ds}，ASL={ds}/{len(seq)}。'],[8,33,40],lesson='r5-7')
for t in validtrees[:3]:
 pre=traversal(t,'pre');post=traversal(t,'post');ino=traversal(t,'in')
 fields(5,'R5-traversal-logic',f'二叉树由以下链接给出：{edge_description(t)}。',[field('前序',''.join(pre),1,'sequence'),field('中序',''.join(ino),1,'sequence'),field('后序',''.join(post),1,'sequence')],['前序 DLR、中序 LDR、后序 LRD，左右子树始终按左先右后。',f'结果分别为 {pre}、{ino}、{post}。'],[34,36],lesson='r5-3')
# chapter 6

def adjacency(n,edges,directed=False):
 a=[[]for _ in range(n)]
 for u,v,*w in edges:
  a[u].append(v)
  if not directed:a[v].append(u)
 for x in a:x.sort()
 return a

def graphwalk(n,edges,directed=False,start=0):
 a=adjacency(n,edges,directed);seen=set();dfs=[]
 def go(u):
  seen.add(u);dfs.append(u+1)
  for v in a[u]:
   if v not in seen:go(v)
 go(start);q=deque([start]);seen={start};bfs=[]
 while q:
  u=q.popleft();bfs.append(u+1)
  for v in a[u]:
   if v not in seen:seen.add(v);q.append(v)
 return dfs,bfs
GSETS=[(7,[(0,1),(0,2),(1,3),(1,5),(3,4),(3,6),(4,5)],False),(6,[(0,1),(0,3),(0,2),(1,2),(2,4),(3,4),(5,3),(5,4)],True),(6,[(0,1),(0,2),(1,3),(1,4),(2,4),(4,5)],False),(5,[(0,1),(0,2),(1,3),(2,3),(3,4)],True)]
for n,edges,directed in GSETS:
 desc=[(u+1,v+1)for u,v in edges];a=adjacency(n,edges,directed);dfs,bfs=graphwalk(n,edges,directed)
 written(6,'R6-storage',f'{"有向"if directed else"无向"}图顶点为 1..{n}，边集 {desc}。写出邻接表，并从顶点1出发进行DFS和BFS，邻居按升序访问；只遍历起点可达部分。无自环，可用0/1矩阵辅助。',[f'邻接表：'+str({u+1:[v+1 for v in vs]for u,vs in enumerate(a)}),'矩阵每行：'+str([[int(v in a[u])for v in range(n)]for u in range(n)]),f'DFS={dfs}；BFS={bfs}。',f'边结点数为 {len(edges) if directed else 2*len(edges)}，存储为 O(V+E)。'],[('逐顶点列邻接表，方向和升序正确',2),('从1出发的DFS及回退次序正确',3),('BFS队列次序正确，不漏/重复访问',3)],[5,16,45,46],lesson='r6-1')
for n,edges,directed in GSETS:
 dfs,bfs=graphwalk(n,edges,directed)
 fields(6,'R6-traversal',f'从顶点 1 出发，邻居均按编号升序访问。图为 {"有向"if directed else"无向"}，顶点 1..{n}，边集 {[(u+1,v+1)for u,v in edges]}。只记录起点可达部分。',[field('DFS 序列',compact(dfs),4,'sequence'),field('BFS 序列',compact(bfs),4,'sequence')],[f'DFS={dfs}；递归深入到无路可走才回退。',f'BFS={bfs}；发现时标记并入队。','该答案依赖题设升序邻居约定；有向边不能反向走。'],[5,16,20,47],lesson='r6-2')
DAGS=[(6,[(0,2),(1,2),(1,3),(2,4),(3,4),(4,5)]),(5,[(0,2),(1,2),(2,3),(2,4)]),(6,[(0,1),(0,3),(1,2),(3,2),(2,4),(4,5)]),(6,[(0,1),(0,3),(0,2),(1,2),(2,4),(3,4),(5,3),(5,4)])]
def topo(n,edges):
 a=adjacency(n,edges,True);ind=[0]*n
 for u,v,*_ in edges:ind[v]+=1
 q=deque(i for i,d in enumerate(ind)if d==0);out=[]
 while q:
  u=q.popleft();out.append(u)
  for v in a[u]:
   ind[v]-=1
   if ind[v]==0:q.append(v)
 return out
for n,edges in DAGS:
 order=topo(n,edges)
 fields(6,'R6-topo-order',f'AOV 网顶点 1..{n}，弧 {[(u+1,v+1)for u,v in edges]}。零入度初始按编号升序入队，使用 FIFO，处理每个顶点出邻居也按升序；求此确定规则下的拓扑序。',[field('拓扑序',compact(u+1 for u in order),4,'sequence')],['拓扑序一般不唯一，但这里固定了队列与访问规则。',f'本规则输出 {[u+1 for u in order]}。','若输出不到 V 个结点则有环。'],[12,20,27],lesson='r6-3')
for n,edges in DAGS:
 order=topo(n,edges);invalid=list(reversed(order))
 opts=[compact(u+1 for u in order),compact(u+1 for u in invalid),'每个有向图都有拓扑序','只能从编号最大的点开始']
 choice(6,'R6-topo-check',f'弧集 {[(u+1,v+1)for u,v in edges]} 中，下列哪个序列满足所有先后约束？',opts,0,'逐弧检查 u 必须排在 v 之前；不能仅检查相邻两项。',[12,20,27],lesson='r6-3')
AOESETS=[(8,[(1,2,1),(1,3,3),(2,4,4),(2,5,10),(3,5,3),(4,6,6),(5,7,6),(5,8,7),(6,8,5),(7,8,6)]),(6,[(1,2,3),(1,3,2),(2,4,5),(2,5,3),(3,4,4),(3,6,3),(4,6,2),(5,6,1)]),(9,[(1,2,6),(1,3,4),(1,4,5),(2,5,1),(3,5,1),(4,5,6),(4,6,2),(5,7,9),(5,8,7),(6,8,4),(7,9,2),(8,9,4)]),(5,[(1,2,3),(1,3,3),(2,4,2),(3,4,2),(4,5,4)]),(6,[(1,2,2),(1,3,5),(2,4,5),(3,4,2),(2,5,3),(4,6,4),(5,6,7)]),(7,[(1,2,4),(1,3,2),(2,4,3),(3,4,5),(3,5,4),(4,6,2),(5,6,3),(6,7,1)])]
def critical(n,es):
 edges=[(u-1,v-1,w)for u,v,w in es];order=topo(n,edges);assert len(order)==n
 ve=[0]*n
 for u in order:
  for a,b,w in edges:
   if a==u:ve[b]=max(ve[b],ve[u]+w)
 duration=max(ve);vl=[duration]*n
 for u in reversed(order):
  out=[(b,w)for a,b,w in edges if a==u]
  if out:vl[u]=min(vl[b]-w for b,w in out)
 e=[ve[u]for u,v,w in edges];l=[vl[v]-w for u,v,w in edges];crit=[i+1 for i in range(len(es))if e[i]==l[i]]
 return ve,vl,e,l,crit,duration
for idx,(n,es) in enumerate(AOESETS):
 ve,vl,e,l,crit,duration=critical(n,es);src=[7]if idx==0 else[49,50]if idx==1 else[51,52]if idx==2 else[7,49]
 written(6,'R6-aoe-full',f'AOE 网事件 1..{n}，以下三元组按活动 a1..a{len(es)} 的顺序给出 (起点,终点,工期)：{es}。求所有 ve、vl、活动 e、l，关键活动及总工期。',[
 f've（按顶点序）={ve}；vl={vl}。',f'e（按活动序）={e}；l={l}。',f'关键活动编号={crit}，最短总工期={duration}。',
 '按拓扑序用 max 求 ve，再反拓扑用 min 求 vl；活动 u→v 的 e=ve[u]、l=vl[v]−w。'],[('还原弧方向与拓扑依赖正确',1),('ve 与 vl 全表正确',3),('活动 e 与 l 全表正确',3),('所有关键活动及工期正确',1)],src,lesson='r6-4',origin='历年题改编'if idx<3 else'同类考法新题')
for idx,(n,es) in enumerate(AOESETS):
 ve,vl,e,l,crit,duration=critical(n,es)
 fields(6,'R6-aoe-tables',f'AOE 网三元组 {es}，顶点 1..{n}，按列出的活动顺序计算。',[field('所有事件 ve',compact(ve),2,'sequence'),field('所有事件 vl',compact(vl),2,'sequence'),field('关键活动编号（升序）',compact(crit),2,'sequence'),field('工期',duration,2)],[f've={ve}，vl={vl}。',f'活动 e={e}，l={l}。',f'e=l 的活动为 {crit}，工期 {duration}。'],[7,18,49,51],lesson='r6-4')
for n,es in AOESETS[:4]:
 ve,vl,e,l,crit,duration=critical(n,es);idx=len(es)//2
 fields(6,'R6-activity',f'AOE 网 {es}，活动按给出顺序编号。求 a{idx+1}（{es[idx]}）的最早、最晚开始及可拖延时长。',[field('最早开始 e',e[idx],1),field('最晚开始 l',l[idx],1),field('时间余量 l-e',l[idx]-e[idx],1),field('工期',duration,1)],[f'事件 ve={ve}，vl={vl}。',f'a{idx+1} 的 e={e[idx]}，l={l[idx]}，余量={l[idx]-e[idx]}。'],[7,49,50],lesson='r6-5')
for title,opts,a,ex in [('有两条等长关键路径，缩短仅属于其中一条的活动，工期一定减少吗？',['一定','不一定，另一条可能仍限制工期','一定增加','变成最短路问题'],1,'必须同时解除所有仍然达到最长长度的路径约束。'),('AOE 求事件最早时间 ve 时，对多条入弧应取？',['最小值','最大值','平均值','任选'],1,'事件必须等待所有前驱活动完成，取最大到达时间。'),('AOE 求事件最迟时间 vl 时，对多条出弧应取？',['最大值','最小值','求和','取0'],1,'要满足所有后续工期限制，因此取最紧的最小上界。')]:choice(6,'R6-aoe-pitfall',title,opts,a,ex,[7,18,49,50,52],lesson='r6-5')
WG=[(6,[(0,1,50),(0,2,10),(0,4,45),(1,2,15),(1,3,50),(1,4,10),(2,0,20),(2,3,15),(3,1,20),(3,4,5),(3,5,30),(4,3,30)]),(5,[(0,1,6),(0,2,2),(2,1,1),(1,3,2),(2,3,8),(3,4,3)]),(5,[(0,1,4),(0,2,1),(2,1,2),(1,3,1),(2,3,6),(3,4,2)]),(6,[(0,1,2),(0,2,5),(1,3,3),(1,4,4),(2,4,1),(2,5,7),(3,4,2),(4,5,3)])]
def dijkstra(n,es):
 dist=[10**9]*n;dist[0]=0;seen=set();pre=[None]*n;order=[]
 while True:
  un=[i for i in range(n)if i not in seen]
  if not un:break
  u=min(un,key=lambda i:(dist[i],i))
  if dist[u]>=10**9:break
  seen.add(u);order.append(u+1)
  for a,b,w in es:
   if a==u and dist[u]+w<dist[b]:dist[b]=dist[u]+w;pre[b]=u
 return dist,pre,order
for idx,(n,es)in enumerate(WG):
 dist,pre,order=dijkstra(n,es)
 fields(6,'R6-dijkstra',f'非负权有向图，顶点 1..{n}，边 (起点,终点,权) 为 {[(u+1,v+1,w)for u,v,w in es]}。从 1 用 Dijkstra 求距离；同距离优先较小编号。',[field('按顶点编号的距离序列',compact(dist),5,'sequence'),field('确定顶点的先后序列',compact(order),3,'sequence')],[f'最终距离 {dist}；确定顺序 {order}。','每次选未确定点中的最小 dist，再松弛出边。',f'前驱（0 表示无）={[0 if x is None else x+1 for x in pre]}。'],[47,48],lesson='r6-6',origin='历年题改编'if idx==0 else'同类考法新题')
for n,es in WG:
 dist,pre,order=dijkstra(n,es);v=n-1;path=[]
 while v is not None:path.append(v+1);v=pre[v]
 path.reverse()
 fields(6,'R6-shortestpath',f'同类最短路：顶点 1..{n}，有向边 {[(u+1,v+1,w)for u,v,w in es]}。求从 1 到 {n} 的最短路径及长度，路径按结点序输入。',[field('路径',compact(path),2,'sequence'),field('长度',dist[-1],2)],[f'距离={dist}；根据前驱反向回溯后反转，得到 {path}，长度 {dist[-1]}。'],[47,48],lesson='r6-6')
for weights in [[2,5,1,4,3],[4,7,2,6,5],[1,8,3,2,4]]:
 es=[(1,2,weights[0]),(1,3,weights[1]),(2,3,weights[2]),(2,4,weights[3]),(3,4,weights[4])];parent=list(range(5))
 def find(x):
  while parent[x]!=x:x=parent[x]
  return x
 selected=[]
 for u,v,w in sorted(es,key=lambda e:(e[2],e[0],e[1])):
  if find(u)!=find(v):parent[find(u)]=find(v);selected.append((u,v,w))
 fields(6,'R6-mst',f'课件补全训练：4 个顶点的连通无向图边 {es}。用 Kruskal 求最小生成树总权及边数。',[field('最小权值和',sum(w for _,_,w in selected),2),field('边数',3,1)],[f'按权排序，避环选中 {selected}；权和 {sum(w for _,_,w in selected)}。','该专题来自课件补全，不据此宣称在所给资料中高频。'],[],lesson='r6-7')
for degrees in [[2,3,1,2],[3,3,2,2,2],[4,2,2,2,2],[1,1,2,2,2]]:fields(6,'R6-degree',f'简单无向图各顶点度数为 {degrees}。',[field('边数',sum(degrees)//2,1),field('若同样顶点数构成一棵树时所需边数',len(degrees)-1,1)],[f'总度数={sum(degrees)}，每边计两次，E={sum(degrees)//2}。',f'{len(degrees)} 个顶点的树有 {len(degrees)-1} 条边。'],[2,24,28],lesson='r6-1')
for title,opts,a,ex in [('Dijkstra 已确定的最小距离为何需要非负权？',['非负权保证未经过的边不会带来更小回头路','方便输入','图必须完全','为保证 BFS 顺序'],0,'负权可能让稍后路径缩短已确定距离，破坏贪心不变式。'),('用邻接矩阵实现 BFS，最坏时间通常是？',['O(V+E)','O(V²)','O(log V)','O(E²)'],1,'每个访问顶点需要扫描整行 V 个位置，最多 V 行。'),('对非连通无向图，只从顶点 1 启动一次 BFS，能保证遍历全图吗？',['能','不能，需要从其他未访问点再启动','只能访问全部边','取决于标签'],1,'一次只覆盖起点所在连通分量。'),('最小生成树与单源最短路径树的目标是否相同？',['相同','不同，前者最小化整树总权，后者最小化源点距离','都只数边','都不考虑权'],1,'这两种贪心算法解决不同的优化目标。')]:choice(6,'R6-algorithm-boundary',title,opts,a,ex,[16,47],lesson='r6-6')
# chapter 7: successful and failed ASL are distinct.
def binary_trace(arr,key):
 lo=0;hi=len(arr)-1;trace=[]
 while lo<=hi:
  mid=(lo+hi)//2;trace.append(arr[mid])
  if arr[mid]==key:return trace,mid
  if key<arr[mid]:hi=mid-1
  else:lo=mid+1
 return trace,-1
for arr,key in [([6,15,30,37,65,78,89,90,97],89),([6,15,30,37,65,68,70,72,89,99],59),([1,3,9,12,32,41,45,62,75,77],62),([11,16,22,34,45,50,56,62,69],62)]:
 trace,idx=binary_trace(arr,key)
 fields(7,'R7-binary-path',f'有序数组 {arr}，从 0 下标闭区间开始，mid 向下取整，折半查找 {key}。只计与中点关键字的比较。',[field('比较到的关键字序列',compact(trace),2,'sequence'),field('比较次数',len(trace),1),field('最终下标（不存在填 -1）',idx,1)],[f'比较序列 {trace}，共 {len(trace)} 次。',f'最终下标={idx}。','每次边界应排除已比较中点；闭区间循环到 low>high 才失败。'],[1,11,22,23],lesson='r7-1')
for n in [8,10,16,20]:
 arr=list(range(2,2*n+1,2));key=arr[n//2]+1;trace,idx=binary_trace(arr,key)
 fields(7,'R7-binary-fail',f'数组 {arr} 中用闭区间折半查找不存在的值 {key}，mid 向下取整。',[field('实际比较次数',len(trace),2),field('比较关键字序列',compact(trace),2,'sequence')],[f'依次比较 {trace}，最后区间为空，比较 {len(trace)} 次。','不把最后一次空区间判断计为一次关键字比较。'],[11,37,38],lesson='r7-1')
for n in [7,8,15,16]:
 counts=[len(binary_trace(list(range(1,n+1)),k)[0])for k in range(1,n+1)]
 fields(7,'R7-binary-asl',f'长度 {n} 的有序数组，闭区间折半且 mid 向下取整，每个关键字成功概率相同。',[field('成功 ASL',Fraction(sum(counts),n),3),field('成功最多比较次数',max(counts),1)],[f'按每个关键字分别查找，比较次数={counts}。',f'ASL={sum(counts)}/{n}；最多 {max(counts)} 次。','n 不是满判定树结点数时，不能直接当成每层都满。'],[37,38],lesson='r7-1')
for seq in [[19,18,60,40,7,31,72,65],[10,18,4,13,16,5,8,2],[30,20,40,10,25,35,50],[12,5,18,3,8,15,20,7]]:
 t=bst(seq);ds=depthsum(t)
 written(7,'R7-bst-full',f'将 {seq} 依次插入空 BST，不平衡旋转。画树（或写每个结点的左右孩子），并求等概率成功 ASL。',[*edge_description(t),f'层数和={ds}，ASL={Fraction(ds,len(seq))}≈{ds/len(seq):.6f}。','根比较也计一次；相同键集合的插入次序可能改变 ASL。'],[('根及全部左右大小关系正确',4),('层数/比较次数逐点计数正确',2),('ASL 使用正确分母并求值',2)],[8,33,40],lesson='r7-2')
for seq,key in [([20,10,30,5,15,25,35],20),([8,3,12,1,6,10,14],3),([15,7,20,3,10,18,25],15)]:
 t=bst(seq)
 def delete(t,x):
  if not t:return None
  if x<t.v:t.left=delete(t.left,x)
  elif x>t.v:t.right=delete(t.right,x)
  else:
   if not t.left:return t.right
   if not t.right:return t.left
   s=t.right
   while s.left:s=s.left
   t.v=s.v;t.right=delete(t.right,s.v)
  return t
 t=delete(t,key)
 written(7,'R7-bst-delete',f'BST 由 {seq} 插入得到，删除 {key}。若待删结点有两孩子，统一使用中序后继替代。写出最终链接或画图并解释。',[*edge_description(t),'两孩子删除：先取右子树最小值替换，再删除右子树对应原结点；不是直接丢弃整棵子树。'],[('准确定位待删结点与后继',2),('后继值替代后继续正确删除原后继',3),('所有剩余链接和 BST 次序正确',3)],[8,33,40],lesson='r7-2')
for seq,rotation in [([30,20,10],'右旋'),([10,20,30],'左旋'),([30,10,20],'先左后右'),([10,30,20],'先右后左')]:fields(7,'R7-avl',f'将 {seq} 插入空 AVL，平衡因子=左高−右高。',[field('失衡型',['LL','RR','LR','RL'][[ [30,20,10],[10,20,30],[30,10,20],[10,30,20]].index(seq)],2,'text'),field('调整后根值',20,1),field('调整后中序',compact(sorted(seq)),1,'sequence')],[f'失衡在原根 {seq[0]}，采用{rotation}。','最终根 20，左孩子 10，右孩子 30；中序保持 10,20,30。'],[1,11],lesson='r7-3')
def hash_build(keys,m,p,mult=1):
 table=[None]*m;probes=[]
 for k in keys:
  found=False
  for j in range(m):
   pos=((mult*k)%p+j)%m
   if table[pos]is None:table[pos]=k;probes.append(j+1);found=True;break
  if not found:raise ValueError('full table')
 return table,probes
HSETS=[([22,41,53,8,16,30,1,31,55],15,11,1),([22,41,53,8,46,30,1,31,66],11,11,3),([32,13,49,55,22,39,20],8,7,1),([13,29,1,23,44,55,20],10,7,1),([18,41,22,44,59,32],9,7,1)]
for hidx,(keys,m,p,mult) in enumerate(HSETS):
 table,probes=hash_build(keys,m,p,mult)
 fields(7,'R7-hash-full',f'关键字依次 {keys}；表长 m={m}，H(key)=({mult}*key)%{p}；冲突线性探测 (H+j)%m，j=0,1,…。',[field('按地址 0..m-1 的表内容，空槽填 _',','.join('_'if v is None else str(v)for v in table),5,'slots'),field('成功等概率 ASL',Fraction(sum(probes),len(keys)),3)],[f'最终表={table}。',f'按插入键顺序的成功比较次数={probes}。',f'ASL={sum(probes)}/{len(keys)}；初地址对 {p} 取模，探测对 {m} 取模。'],[10,13,41,42],lesson='r7-4',origin='历年题改编'if hidx<3 else'同类考法新题')
for keys,m,p,mult in HSETS[:4]:
 table,probes=hash_build(keys,m,p,mult)
 fields(7,'R7-hash-probes',f'依次插入 {keys}，m={m}，H=({mult}*key)%{p}，线性探测每次 +1 后对 m 取模。',[field('按关键字插入次序的探测次数',compact(probes),3,'sequence'),field('成功 ASL',Fraction(sum(probes),len(keys)),1)],[f'表={table}。',f'探测次数={probes}，包含最终命中槽。ASL={sum(probes)}/{len(keys)}。'],[10,13,41,42],lesson='r7-4')
for keys,m,p in [([1,8,15],7,7),([2,9,16,4],8,7),([3,10,17,6],9,7)]:
 table,probes=hash_build(keys,m,p);counts=[]
 for start in range(p):
  c=0
  for j in range(m):
   c+=1
   if table[(start+j)%m]is None:break
  counts.append(c)
 fields(7,'R7-hash-failure',f'将 {keys} 插入 m={m} 的线性探测表，H=key%{p}。失败查找的初始地址按 H 的值域 0..{p-1} 等概率分布，遇到普通空槽停止，空槽这次检查也计数；探测绕回仍对 m 取模。',[field('各初地址失败探测次数',compact(counts),3,'sequence'),field('失败 ASL',Fraction(sum(counts),p),1)],[f'表={table}；从每个初地址逐个走到第一个空槽。',f'按初地址 0..{p-1} 的失败次数={counts}；ASL={sum(counts)}/{p}。','失败平均按可能初地址及其概率，不按已有关键字数，也不默认用表长作分母。'],[41,42],lesson='r7-5',difficulty='进阶边界')
for n,alpha in [(9,Fraction(3,5)),(12,Fraction(3,4)),(7,Fraction(7,8))]:fields(7,'R7-alpha',f'有 {n} 个不同记录，目标装填因子 α={alpha}，若 m=n/α 恰为整数，求表长。',[field('表长 m',Fraction(n,1)/alpha,1)],[f'm=n/α={n}/({alpha})={Fraction(n,1)/alpha}。','模数 p 可以小于 m，p 和 m 不应混用。'],[10,41],lesson='r7-4')
for title,opts,a,ex in [('分块查找的基本有序条件是？',['每块内部有序即可','前一块最大值小于后一块最小值','只有索引最大值递增就足够','所有块完全相同'],1,'块间取值范围必须分离且有序，块内可以无序。'),('线性探测表直接把被删槽置为空，可能导致？',['查找更快且总正确','截断后续冲突键的查找路径','所有键自动前移','改变哈希函数'],1,'需要删除标记或正确回填策略，不能无条件用普通空槽代替。'),('表中键越多、装填因子越大时，通常冲突趋势如何？',['降低','增大','永不变化','必然没有冲突'],1,'同样分布和策略下，占用更高通常意味着更长探测。'),('二分查找可以直接在有序链表上保持数组版本的 O(log n) 总访问成本吗？',['可以，总是','通常不行，中点访问不是 O(1)','只要值为整数就行','链表不能有序'],1,'比较次数可能为对数，但寻找中点还需走链，不能混同随机访问。')]:choice(7,'R7-search-boundary',title,opts,a,ex,[1,2,12,13],lesson='r7-5')
# chapter 8: exact implementation conventions included.
def partition(a,lo=0,hi=None):
 a=list(a);hi=len(a)-1 if hi is None else hi;p=a[lo];i=lo;j=hi
 while i<j:
  while i<j and a[j]>=p:j-=1
  a[i]=a[j]
  while i<j and a[i]<=p:i+=1
  a[j]=a[i]
 a[i]=p;return a,i
SORTSETS=[[47,79,56,38,40,84],[10,18,4,13,16,5,10,8,2],[19,24,22,10,21,13,36,22,24],[46,26,22,68,48,42,36,84,66]]
for arr in SORTSETS:
 a,p=partition(arr)
 fields(8,'R8-quick-first',f'对 {arr} 做第一次快速划分：首元素为基准，右指针先扫描 >=pivot，填左坑，再左扫 <=pivot，填右坑；指针相遇回填基准，0 起始。',[field('划分后的完整数组',compact(a),3,'sequence'),field('基准最终下标',p,1)],[f'基准={arr[0]}，按指定挖坑法，结果 {a}，基准下标 {p}。','一次划分后两段内部仍可能无序，不能直接把整段排好后提交。'],[6,23,39],lesson='r8-1')
for arr in SORTSETS[:3]:
 traces=[]
 def quick(a,lo,hi):
  if lo>=hi:return a
  a,p=partition(a,lo,hi);traces.append((lo,hi,p,list(a)));a=quick(a,lo,p-1);a=quick(a,p+1,hi);return a
 result=quick(list(arr),0,len(arr)-1)
 written(8,'R8-quick-full',f'把 {arr} 用快速排序排升序。首元素基准、右侧先扫的挖坑法，左子区间先递归。列出每次划分后的全数组，并标出当前区间和基准位置。',[f'区间/基准/全数组逐次为：{traces}。',f'最终 {result}。','不同划分算法的中间排列可能不同；本题已经固定实现约定。'],[('遵守首元素基准与右侧先扫',2),('首次划分及基准归位正确',2),('递归区间与后续各次划分正确',3),('最终有序且未丢失重复键',1)],[6,39],lesson='r8-1')
def shell_passes(arr,gaps):
 a=list(arr);out=[]
 for gap in gaps:
  for i in range(gap,len(a)):
   x=a[i];j=i
   while j>=gap and a[j-gap]>x:a[j]=a[j-gap];j-=gap
   a[j]=x
  out.append(list(a))
 return out
for arr,gaps in [(SORTSETS[1],[5,3,1]),(SORTSETS[2],[5,3,1]),([26,5,77,1,61,11,59,15,48,19],[5,2,1]),([8,1,6,2,9,3,7,4,5],[4,2,1])]:
 passes=shell_passes(arr,gaps)
 fields(8,'R8-shell',f'序列 {arr} 按增量 {gaps} 做希尔排序；每个增量结束后写完整数组。分组按下标差 gap，不是连续切块。',[field(f'gap={g} 一趟后的完整序列',compact(p),3 if i<2 else 2,'sequence')for i,(g,p)in enumerate(zip(gaps,passes))],[*[f'gap={g} 后：{p}'for g,p in zip(gaps,passes)],'每组保持原下标间距并进行直接插入。gap=1 后整体有序。'],[6,39],lesson='r8-2')
def heap_trace(arr):
 a=list(arr);n=len(a);traces=[]
 def sift(i,size):
  while True:
   best=i;l=2*i+1;r=l+1
   if l<size and a[l]>a[best]:best=l
   if r<size and a[r]>a[best]:best=r
   if best==i:break
   a[i],a[best]=a[best],a[i];i=best
 for i in range(n//2-1,-1,-1):sift(i,n)
 built=list(a)
 for end in range(n-1,0,-1):a[0],a[end]=a[end],a[0];sift(0,end);traces.append(list(a))
 return built,traces
for arr in [[26,5,77,1,61,11,59,15,48,19],SORTSETS[3],[46,79,56,38,40,84],[12,4,18,7,3,9]]:
 built,traces=heap_trace(arr)
 written(8,'R8-heap',f'对 {arr} 做升序堆排序。0 起始，从最后非叶结点向前建大根堆；向下筛选时取更大孩子，相等优先左孩子。写出建堆及每次取出堆顶后完整数组，区分堆区与有序后缀。',[f'初始大根堆={built}。',* [f'第 {i+1} 次取顶并调整后={p}，堆大小 {len(arr)-i-1}。'for i,p in enumerate(traces)],'取出的最大值交换到当前末尾，余下部分继续成堆。'],[('按最后非叶到根正确建大根堆',3),('每趟堆顶交换与缩小边界正确',2),('逐趟下筛选与完整序列正确',2),('区分堆区/有序后缀，得到升序',1)],[15],lesson='r8-3')
def bubble_stats(arr):
 a=list(arr);comp=swaps=passes=0;rows=[]
 for end in range(len(a)-1,0,-1):
  changed=False;c=s=0
  for j in range(end):
   comp+=1;c+=1
   if a[j]>a[j+1]:a[j],a[j+1]=a[j+1],a[j];swaps+=1;s+=1;changed=True
  passes+=1;rows.append((list(a),c,s))
  if not changed:break
 return a,comp,swaps,passes,rows
for arr in [[19,18,60,40,7,31,72,65],[1,2,3,4,5],[5,4,3,2,1],[3,1,4,2,5]]:
 a,c,s,p,rows=bubble_stats(arr)
 fields(8,'R8-bubble-count',f'冒泡升序，左到右比较相邻元素，每趟右边界减一，整趟无交换提前结束。对 {arr}，每次交换按 3 次记录移动计。',[field('总关键字比较次数',c,2),field('交换次数',s,2),field('记录移动次数',s*3,2),field('实际扫描趟数',p,2)],[f'逐趟（数组,比较,交换）={rows}。',f'比较 {c}，交换 {s}，移动 {s*3}，扫描 {p} 趟。','算法是否提前结束会影响比较次数；交换和记录移动不是同一个数。'],[40],lesson='r8-4')
for arr in [[9,3,7,1,5],[4,2,5,1,3],[8,5,1,6,2],[7,3,6,2,4]]:
 a=list(arr);traces=[]
 for i in range(2):
  k=min(range(i,len(a)),key=lambda j:a[j]);a[i],a[k]=a[k],a[i];traces.append(list(a))
 choice(8,'R8-recognize',f'原序列 {arr}，第 1 趟 {traces[0]}，第 2 趟 {traces[1]}；每趟从未排序区找全局最小值交换到前端。这是什么算法？',['冒泡','简单选择','快速排序','希尔排序'],1,'关键线索是扫描整个未排序区取最小，再与区间首项交换。',[12,32],lesson='r8-4')
for n in [9,16,30]:fields(8,'R8-selection-count',f'对 {n} 个记录做简单选择排序，未排序区每趟完整扫描。',[field('关键字比较总次数',n*(n-1)//2,2),field('最多发生的交换次数',n-1,1)],[f'比较=({n}-1)+…+1={n*(n-1)//2}；至多 {n-1} 次交换。','即使已排序，比较次数仍为同样的平方级。'],[32],lesson='r8-4')
for title,opts,a,ex in [('选择排序将 [2甲,2乙,1] 排为 [1,2乙,2甲]，说明什么？',['排序稳定','选择排序存在破坏稳定性的输入','升序错误','甲乙必须相等记录'],1,'关键字相等而身份不同，远距离交换颠倒了原相对次序。'),('折半插入相等时放在已有相等键之后，是否稳定？',['稳定','必不稳定','取决于数组地址','只对递减序列稳定'],0,'从左到右处理、相等插在后方可保持相对次序；课件末尾分类需要校注。'),('若希望最坏 O(n log n) 且迭代实现额外 O(1)，最合适的是？',['直接插入','堆排序','首元素快速排序','折半插入'],1,'堆排序同时满足这两个条件，普通快速排序有平方级最坏及递归栈开销。')]:choice(8,'R8-stability',title,opts,a,ex,[6,12,15,39],lesson='r8-5')
for arr in [[5,2,4,1],[8,3,6,2,9],[7,1,5,3,2]]:
 a=list(arr);passes=[]
 for i in range(1,len(a)):
  x=a[i];j=i-1
  while j>=0 and a[j]>x:a[j+1]=a[j];j-=1
  a[j+1]=x;passes.append(list(a))
 fields(8,'R8-insertion',f'对 {arr} 做稳定的直接插入升序，第一项初始视为有序，求前两趟结束的全数组。',[field('第 1 趟',compact(passes[0]),2,'sequence'),field('第 2 趟',compact(passes[1]),2,'sequence')],[f'第 1 趟插入第二项：{passes[0]}。',f'第 2 趟插入第三项：{passes[1]}。','一趟只使左侧有序前缀增长 1，不会把整个数组都排好。'],[12,32],lesson='r8-4')
for title,opts,a,ex in [('首元素快排在有序互异输入上，最坏可能为？',['O(n)','O(n log n)','O(n²)','O(log n)'],2,'每轮只划掉一个基准，形成极不均衡的递归。'),('希尔排序能否脱离增量序列统一声称 O(n log n)？',['能','不能，复杂度依赖增量','只有元素都是整数能','只看表长奇偶'],1,'增量选择影响复杂度，一般不能给统一的这个界。'),('大根堆一定满足哪项？',['所有左子树小于右子树','父结点不小于其存在的孩子','数组整体递减','兄弟从左到右有序'],1,'堆只约束父子，不是 BST，也不要求兄弟有序。'),('普通折半插入把比较减少到 O(n log n)，为什么整体最坏仍 O(n²)？',['没有使用数组','移动记录仍可为平方级','比较必须翻倍','因为递归无限'],1,'移动成本没有因查找位置使用二分而消失。')]:choice(8,'R8-comparison',title,opts,a,ex,[6,12,15,39],lesson='r8-5')
# Explicit original-paper transcription. Answers are independently derived, not claimed official.
fields(2,'E14-address','2014–2015 卷填空 1：一个向量第一个元素的存储地址是 100，每个元素的长度为 2，则第 5 个元素的地址是多少？',[field('地址',108,1)],['100+(5−1)×2=108。'],[1],lesson='r2-3',origin='原题整理')
fields(5,'E14-leaves','2014–2015 卷填空 3：一棵有 2014 个结点的任意二叉树，度 1 的结点数为 13，则叶子数是多少？',[field('叶子数',1001,1)],['n₀+n₁+n₂=2014，n₀=n₂+1，得 n₀=1001。'],[1],lesson='r5-1',origin='原题整理')
fields(7,'E14-binary','2014–2015 卷填空 4：对分查找序列 (6,15,30,37,65,78,89,90,97)，查 89 时比较次数是多少？中点向下取整。',[field('比较次数',2,1)],['先比较 65，再比较 89，共 2 次。'],[1],lesson='r7-1',origin='原题整理')
fields(3,'E14-postfix','2014–2015 卷填空 5：后缀表达式 5 3 - 2 * 18 6 / +，其计算结果为多少？',[field('结果',7,1)],['(5−3)×2+18/6=4+3=7。'],[1],lesson='r3-2',origin='原题整理')
fields(2,'E14-moves','2014–2015 卷填空 6：长度 n 的顺序表，在第 i 个元素（1≤i≤n+1）之前插入新元素，需向后移动多少个元素？',[field('含 n、i 的表达式','n-i+1',1,'formula',['n+1-i'])],['第 i 到第 n 个均需后移，共 n−i+1 个。'],[1],lesson='r2-3',origin='原题整理')
fields(1,'E14-frequency','2014–2015 卷填空 7：算法执行次数为 10¹⁰n³+n⁴，则其渐近时间复杂度是什么？',[field('时间复杂度','O(n⁴)',1,'complexity')],['最高次幂 n⁴ 最终占主导，时间 O(n⁴)。'],[1],lesson='r1-1',origin='原题整理')
fields(7,'E14-avl','2014–2015 卷填空 9：AVL 树中，每个结点左右子树高度之差的绝对值不超过多少？',[field('最大允许绝对值',1,1)],['AVL 每个结点的平衡因子必须为 −1、0、1。'],[1],lesson='r7-3',origin='原题整理')
fields(5,'E14-shapes','2014–2015 卷填空 10：前序遍历结果为 CBA，有多少种不同二叉树可以得到这一结果？标识互异且区分左右。',[field('种数',5,1)],['根为 C。按根的左子树结点数分为0、1、2三类：左空时右侧两结点有2种形状；左右各一个时有1种；右空时左侧两结点有2种。合计2+1+2=5种。固定先序后，每种形状的标识排列唯一。'],[1],lesson='r5-1',origin='原题整理')
fields(4,'E-undated-triangle','未标年份样卷填空：n×n 下三角矩阵按行为主序压缩到 B[1..m]，所需最大存储单元数为多少？',[field('含 n 的表达式','n*(n+1)/2',1,'formula',['n(n+1)/2','(n*n+n)/2'])],['1+2+…+n=n(n+1)/2。'],[11],lesson='r4-2',origin='原题整理')
fields(6,'E-notes-treeedges','资料手写整理题：n 个顶点的连通图至少有多少条边？按简单无向图解释。',[field('含 n 的表达式','n-1',1,'formula')],['连通无向图至少是一棵生成树，需 n−1 条边。'],[24],lesson='r6-1',origin='整理题重述')
# Link all beginner items to their instructional lesson by source page when possible.
for q in learn:
 c=course[q['chapter']-1];page=int(q['pages'].split('–')[0].split('、')[0]);q['topic']=c['lessons'][0]['id']
 for l in c['lessons']:
  for part in l['pages'].split('、'):
   nums=[int(s)for s in __import__('re').findall(r'\d+',part)]
   if nums and nums[0]<=page<=(nums[-1]):q['topic']=l['id'];break
# Combine quicksort and Shell passes in the 8-point exam family, matching the scanned paper's 5+3 split.
for q in review:
 if q['family']=='R8-quick-full':
  arr=SORTSETS[q['variant']-1];gaps=[5,3,1];passes=shell_passes(arr,gaps)
  q['title']+='（快速排序部分5分。）再从同一原序列出发，以增量[5,3,1]做希尔排序，列出每个增量结束的全数组（3分）。'
  q['solution'] += [f'希尔 gap={g} 后：{a}' for g,a in zip(gaps,passes)]
  q['explain']='\n'.join(q['solution']);q['rubric']=[dict(label='快排首次划分和基准位置正确',points=2),dict(label='快排后续递归区间及各次划分正确',points=2),dict(label='快排最终结果正确且重复键未丢失',points=1),dict(label='希尔三个增量结束的全数组均正确',points=3)]
# Explicit curriculum links avoid overlapping PPT ranges pointing to unrelated lessons.
learn_links={1:[1,2,3,4,5,6,6,6],2:[2,2,3,4,4,5,6,6,2,3,4,5],3:[1,1,2,3,4,5,5,6,1,5],4:[1,1,3,3,3,4,5,6],5:[2,2,2,4,4,5,7,8,1,1,1,4,4,4,2,7,5,4],6:[1,3,3,4,4,5,6,7,1,1,3,3,3,1,4,1,6,7],7:[1,2,2,3,4,5,6,7,2,2,4,6],8:[1,2,3,3,4,5,6,7,1,6]}
for q in learn:
 num=int(q['id'].split('-')[1]);index=learn_links[q['chapter']][num-1];q['topic']=f"{q['chapter']}-{index}"
 if num<=8:
  source=course[q['chapter']-1]['lessons'][index-1];q['hint']=source['summary']+' '+source['analogy']
# Store the given structure separately from the answer, so the interface can show readable tables/diagrams.
for q in review:
 if q['family']=='R5-forest':
  root,table=forest_cases[q['variant']-1]
  q['title']=f'将题目给定的二叉树按孩子兄弟表示还原成一般树/森林。根指针指向 {root}；左右孩子表见下方，∅ 表示空。列出森林的根及每个结点的孩子，可在纸上画图。'
  q['given']=dict(kind='table',caption='题目给定：二叉树左右孩子表',heads=['结点','左孩子','右孩子'],rows=[[k,a or '∅',b or '∅']for k,(a,b)in table.items()])
 elif q['family']=='R5-pointertable':
  root,rows=pointer_inputs[q['variant']-1]
  q['title']=f'二叉链表的指针表见下方，0 表示空，根指针 T={root}。按左右指针关系求前、中、后序遍历，不按物理编号排序。'
  q['given']=dict(kind='table',caption='题目给定：二叉链表指针表',heads=['编号','数据','左孩子编号','右孩子编号'],rows=rows)
 elif q['family'] in ['R6-storage','R6-traversal']:
  n,edges,directed=GSETS[q['variant']-1]
  q['given']=dict(kind='graph',caption='题目给定：'+('有向图'if directed else'无向图'),n=n,edges=[[u+1,v+1]for u,v in edges],directed=directed)
  q['title']=('按下图写出邻接表，再从顶点1出发进行 DFS 和 BFS。'if q['family']=='R6-storage' else'按下图从顶点1出发，分别写出 DFS 和 BFS 序列。')+'顶点按1起编号，邻居按编号升序访问；只遍历起点可达部分。箭头表示有向边，无箭头表示无向边。'

# Concept-to-lesson links must lead to the concept actually needed.
for q in review:
 if q['family']=='R1-space' or q['id']=='R1-concept-v3':q['topic']='r1-3'
 if q['id']=='R1-concept-v1':q['topic']='r1-1'
 if q['id']=='R3-boundary-v1':q['topic']='r3-4'
# Rotate answer positions to avoid a systematic positional cue.
for i,q in enumerate(q for q in review if q['type']=='choice'):
 shift=i%4; q['options']=q['options'][shift:]+q['options'][:shift]; q['answer']=(q['answer']-shift)%4
# Documentation and metadata expose actual quantity and family counts, not fictitious historical frequencies.
meta=dict(source=dict(file='历年卷/数据结构历年卷.pdf',pages=52,groups=[dict(pages='1–10',label='2014–2015 学年秋季正式卷'),dict(pages='11–18',label='未标年份样卷'),dict(pages='19–52',label='手写整理题与参考解答，包含重复题/变式')],notice='不是 52 份独立试卷；手写解答不视为官方答案。训练权重按可核对分值、题型复杂度和跨资料重复专题制定，不是下一次考试分值预测。'),blueprint=dict(label='按 2014–2015 卷题型分值编排',fill=10,choice=10,code=8,frequency=8,comprehensive=64,total=100,recommendedMinutes=120),chapters=[])
reasons={1:'正式卷含 8 分精确频度，基础概念另见客观题。',2:'正式卷单列 8 分有序循环链表插入，样卷与手写材料还有逆置、删值、双向链表。',3:'栈合法输出/最小容量、后缀表达式、队列指针多次出现，以客观稳分为主。',4:'地址与压缩公式多次出现，手写题含稀疏矩阵三元组及行链表转换。',5:'正式卷综合题含树重建、哈夫曼、二叉链表转树/森林，过程与图形是核心。',6:'正式卷含遍历与 AOE，后续材料含拓扑、Dijkstra、ve/vl 全表；综合步骤多。',7:'正式卷含哈希构造/ASL 与 BST 赋值/ASL，后续材料反复训练折半判定树与探测。',8:'正式卷要求快排与希尔逐趟过程，样卷含堆排序，手写题含冒泡比较/交换计数。'}
for c in course:
 ch=c['id'];lqs=[q for q in learn if q['chapter']==ch];rqs=[q for q in review if q['chapter']==ch]
 meta['chapters'].append(dict(id=ch,title=c['title'],priority=priority[ch],learnCount=len(lqs),reviewCount=len(rqs),families=len(set(q['family']for q in rqs)),sourcePages=evidence[ch],reason=reasons[ch]))
from pedagogy import enrich
learn,review=enrich(learn,review,globals())
from refine_curriculum import refine
learn,review,meta=refine(learn,review,meta)
for name,value in [('LEARN_QUESTIONS',learn),('REVIEW_QUESTIONS',review),('EXAM_META',meta)]:
 (ROOT/(dict(LEARN_QUESTIONS='learn-bank.js',REVIEW_QUESTIONS='review-bank.js',EXAM_META='exam-meta.js')[name])).write_text('window.'+name+' = '+json.dumps(value,ensure_ascii=False,indent=2)+';\n')
print('Learning',len(learn),'Review',len(review),'Families',meta['totals']['families'])
print('Review types',dict(Counter(q['type']for q in review)))
for c in meta['chapters']:print(c['id'],c['learnCount'],c['reviewCount'],c['families'])
