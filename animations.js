/* Deterministic algorithm traces. A frame is an immutable teaching snapshot. */
(() => {
  const clone = x => JSON.parse(JSON.stringify(x));
  const catalog = [];
  const add = (id,label,chapter,kind,about,code,build) => catalog.push({id,label,chapter,kind,about,code,build});
  const letters = ['A','B','C','D','E','F'];
  const edges = [[0,1,2],[0,2,5],[1,3,3],[1,4,4],[2,4,1],[2,5,7],[3,4,2],[4,5,3]];
  const points = [[80,160],[230,65],[230,255],[410,65],[410,255],[570,160]];
  const baseGraph = {nodes:letters,edges,points};
  const neighbors = v => edges.flatMap(([a,b]) => a===v?[b]:b===v?[a]:[]).sort((a,b)=>a-b);
  function sortingTrace(type) {
    const a = [46,26,22,68,48,42,36,84,66], frames=[];
    let comparisons=0,moves=0;
    const emit=(caption,active=[],done=[],line=0,extra={})=>frames.push({values:[...a],caption,active:[...active],done:[...done],line,comparisons,moves,...extra});
    const swap=(i,j)=>{[a[i],a[j]]=[a[j],a[i]];moves+=3;};
    emit('预设序列来自第 8 章堆排序例题。观察不同算法怎样把同一组数排成升序。');
    if(type==='bubble') {
      const done=[];
      for(let end=a.length-1;end>0;end--) {
        let changed=false;
        for(let j=0;j<end;j++) {
          comparisons++; emit(`比较相邻的 ${a[j]} 与 ${a[j+1]}。`,[j,j+1],done,2);
          if(a[j]>a[j+1]) {swap(j,j+1);changed=true;emit('前者更大，交换这两个相邻元素。',[j,j+1],done,4);}
        }
        done.push(end);emit(`本趟结束，${a[end]} 已在最终位置。`,[],done,0);
        if(!changed) break;
      }
    }
    if(type==='insertion'||type==='shell') {
      const gaps=type==='shell'?[4,2,1]:[1];
      for(const gap of gaps) for(let i=gap;i<a.length;i++) {
        const x=a[i];moves++;let j=i;
        emit(`gap=${gap}，暂存 ${x}，为它寻找插入位置。`,[i],type==='insertion'?Array.from({length:i},(_,k)=>k):[],1,{held:x});
        a[i]=null;
        while(j>=gap) {
          comparisons++;emit(`比较暂存值 ${x} 与 ${a[j-gap]}。`,[j-gap],[],2,{held:x});
          if(a[j-gap]<=x) break;
          a[j]=a[j-gap];a[j-gap]=null;j-=gap;moves++;
          emit(`将较大值向右移动 ${gap} 个位置，空位来到下标 ${j}。`,[j+gap],[],3,{held:x});
        }
        a[j]=x;moves++;emit(`将 ${x} 放入下标 ${j}。`,[j],[],5);
      }
    }
    if(type==='selection') for(let i=0;i<a.length-1;i++) {
      let min=i;const done=Array.from({length:i},(_,k)=>k);
      for(let j=i+1;j<a.length;j++) {comparisons++;if(a[j]<a[min])min=j;emit(`扫描无序区，当前最小值为 ${a[min]}。`,[min,j],done,2);}
      if(min!==i)swap(i,min);emit(`最小值 ${a[i]} 归位到下标 ${i}。`,[i,min],[...done,i],4);
    }
    if(type==='quick') {
      const done=[];
      function quick(lo,hi) {
        if(lo>hi)return;
        if(lo===hi){done.push(lo);return;}
        const pivot=a[lo];moves++;let i=lo,j=hi;a[lo]=null;
        emit(`划分区间 [${lo},${hi}]，暂存首元素 ${pivot} 作为基准，空位在左。`,[lo,hi],done,1,{held:pivot,range:[lo,hi]});
        while(i<j) {
          while(i<j) {comparisons++;if(a[j]<pivot)break;j--;}
          if(i<j){a[i]=a[j];a[j]=null;moves++;emit('从右侧找到较小值，填入左边空位。',[i,j],done,2,{held:pivot,range:[lo,hi]});}
          while(i<j){comparisons++;if(a[i]>pivot)break;i++;}
          if(i<j){a[j]=a[i];a[i]=null;moves++;emit('从左侧找到较大值，填入右边空位。',[i,j],done,2,{held:pivot,range:[lo,hi]});}
        }
        a[i]=pivot;moves++;done.push(i);emit(`指针相遇，基准 ${pivot} 在下标 ${i} 归位；两侧分别递归。`,[i],done,3);
        quick(lo,i-1);quick(i+1,hi);
      }
      quick(0,a.length-1);
    }
    if(type==='heap') {
      let size=a.length;const done=[];
      function sift(i) {
        for(;;) {
          let largest=i,left=2*i+1,right=left+1;
          if(left<size){comparisons++;if(a[left]>a[largest])largest=left;}
          if(right<size){comparisons++;if(a[right]>a[largest])largest=right;}
          emit(`在大小 ${size} 的堆内，比较结点 ${i} 和存在的孩子。`,[i,...[left,right].filter(x=>x<size)],done,1,{heapSize:size});
          if(largest===i)break;
          swap(i,largest);emit('将更大的孩子换到父结点，继续向下筛选。',[i,largest],done,1,{heapSize:size});i=largest;
        }
      }
      for(let i=Math.floor(size/2)-1;i>=0;i--)sift(i);
      emit('大根堆建立完成，堆顶是最大值。',[0],[],2,{heapSize:size});
      for(let end=a.length-1;end>0;end--){swap(0,end);done.push(end);size=end;emit(`堆顶最大值 ${a[end]} 归位，剩余堆大小为 ${size}。`,[0,end],done,3,{heapSize:size});sift(0);}
    }
    emit('排序完成。所有元素按升序排列。',[],a.map((_,i)=>i),-1);
    return frames;
  }
  add('growth','复杂度：线性与折半',1,'growth','比较扫描与折半区间缩小的步数。这里展示操作次数，不是机器运行秒数。',['逐个扫描：每次排除一个候选','折半查找：每次排除约一半','输入规模增大，观察增长速度'],()=>[4,8,16,32,64,128].map(n=>({n,linear:n,binary:Math.floor(Math.log2(n))+1,caption:`规模 n=${n}：逐个扫描最坏比较 ${n} 次，折半查找最坏比较 ${Math.floor(Math.log2(n))+1} 次。`,line:2})));
  add('list','顺序表插入',2,'cells','第 2 位插入 18。数组下标从 0 开始，位序从 1 开始。',['检查位序与容量','从最后一个元素向后移动','逐个移动，保留一个空位','把新元素写入空位','长度加 1'],()=>[
    {values:[12,24,36,48,null],active:[],caption:'长度 4，容量 5。要在第 2 位（下标 1）插入 18。',line:0},
    {values:[12,24,36,null,48],active:[3,4],caption:'先把 48 移到下标 4，腾出下标 3。',line:1},
    {values:[12,24,null,36,48],active:[2,3],caption:'再把 36 后移，下标 2 变为空位。',line:2},
    {values:[12,null,24,36,48],active:[1,2],caption:'把 24 后移，目标下标 1 已腾空。',line:2},
    {values:[12,18,24,36,48],active:[1],done:[1],caption:'将 18 写入下标 1，长度变为 5。',line:3}
  ]);
  add('linked','链表后插：指针次序',2,'linked','在 p 指向的 A 后插入 X。先保存原后继，再修改 p。',['原链：A.next = B','q->next = p->next;','p->next = q;'],()=>[
    {stage:0,caption:'原来 A→B，结点 X 已分配，q 指向 X，p 指向 A。',line:0},
    {stage:1,caption:'先令 X.next=B。原来的 A→B 仍保留，因此没有断链。',line:1},
    {stage:2,caption:'再令 A.next=X。最终 A→X→B，插入完成。',line:2}
  ]);
  add('stack','栈：压入与弹出',3,'stack','top 指向下一空位。每次只允许操作最上方元素。',['Push: 先检查容量，再 *top=x; top++','Pop: 先判非空，再 --top; return *top','Empty: top == base'],()=>{
    const arr=[],f=[{values:[],caption:'空栈，top==base。',line:2}];
    for(const [op,x] of [['push',3],['push',5],['push',8],['pop'],['push',2],['pop'],['pop'],['pop']]){
      let caption;if(op==='push'){arr.push(x);caption=`压入 ${x}，top 上移到下一空位。`;}else{caption=`弹出 ${arr.pop()}，top 下移，最近压入的先离开。`;}
      f.push({values:[...arr],caption,line:op==='push'?0:1});
    }return f;
  });
  add('queue','循环队列：绕回与空满',3,'ring','数组容量 6，保留 1 个空位，可存 5 个元素。front 指队头，rear 指下一空位。',['空：front == rear','满：(rear+1)%6 == front','入队：Q[rear]=x; rear=(rear+1)%6','出队：x=Q[front]; front=(front+1)%6'],()=>{
    const a=Array(6).fill(null);let front=0,rear=0;
    const f=[];const emit=(caption,line)=>f.push({values:[...a],front,rear,caption,line});emit('初始空队列，front=rear=0。',0);
    for(const [op,x] of [['in','A'],['in','B'],['in','C'],['in','D'],['in','E'],['in','F'],['out'],['out'],['in','F'],['in','G'],['out'],['out'],['out'],['out'],['out']]){
      if(op==='in'){
        if((rear+1)%6===front){emit(`尝试入队 ${x}：队满，本次拒绝入队。`,1);continue;}
        a[rear]=x;rear=(rear+1)%6;emit(`入队 ${x}，rear=${rear}，长度 ${(rear-front+6)%6}。`,2);
      }else {const v=a[front];a[front]=null;front=(front+1)%6;emit(`出队 ${v}，front=${front}，长度 ${(rear-front+6)%6}。`,3);}
    }return f;
  });
  add('matrix','二维数组：行优先',4,'matrix','3 行 4 列，下标从 1 开始，每个元素 4 字节，首地址 100。',['offset = (i-1)*4 + (j-1)','address = 100 + offset*4'],()=>Array.from({length:12},(_,k)=>({index:k,values:Array.from({length:12},(_,i)=>i+1),caption:`a_{${Math.floor(k/4)+1},${k%4+1}}：前面有 ${k} 个元素，地址 = 100+${k}×4 = ${100+k*4}。`,line:1})));
  add('transpose','稀疏矩阵：三元组转置',4,'triples','交换行列后按新行序输出。预设矩阵为 3×4，共 4 个非零元。',['扫描原矩阵的一列','把 (row,col,value) 换成 (col,row,value)','按转置后的行号顺序输出'],()=>{
    const input=[[1,2,5],[1,4,8],[2,1,3],[3,2,7]],order=[2,0,3,1],out=[],f=[{input,output:[],caption:'原三元组已经按行序排列。现在按原列 1、2、3、4 扫描。',line:0}];
    for(const i of order){const[r,c,v]=input[i];out.push([c,r,v]);f.push({input,output:clone(out),active:[i],caption:`找到原第 ${c} 列的非零元 (${r},${c},${v})，输出 (${c},${r},${v})。`,line:1});}
    f.push({input,output:clone(out),caption:'转置完成，新矩阵为 4×3，输出已按新行序排列。',line:2});return f;
  });
  const treeNodes=['A','B','C','D','E','F','G'],treePoints=[[320,45],[170,140],[470,140],[90,245],[245,245],[395,245],[550,245]],treeEdges=[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]];
  for(const [id,label,position]of[['preorder','二叉树：前序 DLR',0],['inorder','二叉树：中序 LDR',1],['postorder','二叉树：后序 LRD',2]]){
    add(id,label,5,'tree','所有遍历都先左子树后右子树，区别在什么时候访问根。',['if (T == NULL) return;',position===0?'visit(T); // 此处输出当前根':'// 当前子树非空，继续递归', 'Traverse(T.left);',position===1?'visit(T); // 此处输出当前根':'// 左子树已处理', 'Traverse(T.right);',position===2?'visit(T); // 此处输出当前根':'// 本次子树遍历结束'],()=>{
      const order=[],f=[];const emit=(v,line,caption)=>f.push({nodes:treeNodes,points:treePoints,edges:treeEdges,active:[v],done:[...order],order:order.map(i=>treeNodes[i]),caption,line});
      function walk(v){if(v>=7)return;if(position===0){order.push(v);emit(v,1,`先访问根 ${treeNodes[v]}，再进入它的左右子树。`);}walk(v*2+1);if(position===1){order.push(v);emit(v,3,`左子树完成，访问根 ${treeNodes[v]}。`);}walk(v*2+2);if(position===2){order.push(v);emit(v,5,`左右子树完成，最后访问根 ${treeNodes[v]}。`);}}
      f.push({nodes:treeNodes,points:treePoints,edges:treeEdges,order:[],done:[],caption:'从根 A 开始。黄色是当前访问，绿色是已经输出的结点。',line:0});walk(0);return f;
    });
  }
  add('huffman','哈夫曼：最小权合并',5,'forest','沿用课件权值 9、4、5、2；每轮合并当前最小的两棵树。',['取出两个最小权值 a、b','创建权值 a+b 的新根','放回森林并重复','WPL 等于各次合并权值之和'],()=>{
    let forest=[9,4,5,2].map((w,i)=>({w,name:['a','b','c','d'][i]})),wpl=0;
    const f=[{forest:clone(forest),wpl,caption:'初始四片叶子。WPL 尚未累加。',line:0}];
    while(forest.length>1){forest.sort((a,b)=>a.w-b.w);const a=forest.shift(),b=forest.shift();wpl+=a.w+b.w;forest.push({w:a.w+b.w,left:a,right:b});f.push({forest:clone(forest),wpl,caption:`合并 ${a.w} 与 ${b.w}，得到 ${a.w+b.w}；累计合并代价 ${wpl}。`,line:2});}
    f.push({forest:clone(forest),wpl,caption:'构造完成。WPL=6+11+20=37；左右约定不同会改变编码，但不改变最优 WPL。',line:3});return f;
  });
  for(const type of ['bfs','dfs'])add(type,type==='bfs'?'图：广度优先 BFS':'图：深度优先 DFS',6,'graph','从 A 开始，邻居按字母顺序访问；数字边权在此遍历中不参与决策。',type==='bfs'?['起点标记，入队','弹出队头，输出顶点','未访问邻居标记并入队']:['访问并标记当前顶点','对未访问邻居递归','没有未访问邻居则回退'],()=>{
    const f=[],seen=new Set(),order=[];
    const emit=(caption,active=[],queue=[],line=0)=>f.push({...clone(baseGraph),done:[...seen],active,order:order.map(i=>letters[i]),queue:queue.map(i=>letters[i]),caption,line});
    emit('尚未访问任何顶点，从 A 出发。');
    if(type==='bfs'){
      const queue=[0];seen.add(0);emit('A 标记为已发现并入队。',[0],queue,0);
      while(queue.length){const u=queue.shift();order.push(u);emit(`弹出 ${letters[u]} 并输出。`,[u],queue,1);for(const v of neighbors(u))if(!seen.has(v)){seen.add(v);queue.push(v);emit(`发现 ${letters[v]}，立即标记并入队，避免重复入队。`,[v],queue,2);}}
    }else{function visit(u){seen.add(u);order.push(u);emit(`访问 ${letters[u]}，尝试继续深入。`,[u],[],0);for(const v of neighbors(u))if(!seen.has(v)){visit(v);emit(`从子分支返回 ${letters[u]}。`,[u],[],2);}}visit(0);}
    emit(`遍历完成：${order.map(i=>letters[i]).join(' → ')}。`);return f;
  });
  for(const type of ['prim','kruskal'])add(type,type==='prim'?'最小生成树：Prim':'最小生成树：Kruskal',6,'graph',type==='prim'?'从 A 出发，每次选跨越已选集合边界的最小边。':'从小到大考虑边，只有不成环时才选取。',['选择最小的合法候选边','连接新的顶点或连通集合','若成环则跳过','选中 V-1 条边后结束'],()=>{
    const selected=[],done=new Set(type==='prim'?[0]:[]),f=[];let total=0;
    const emit=(caption,active=[],edgeActive=[],line=0)=>f.push({...clone(baseGraph),done:[...done],active,edgeActive,selected:[...selected],total,caption,line});emit('初始没有选中任何边。');
    if(type==='prim')while(done.size<6){let best=-1;edges.forEach(([a,b,w],i)=>{if(done.has(a)!==done.has(b)&&(best<0||w<edges[best][2]))best=i;});if(best<0)break;const[a,b,w]=edges[best];selected.push(best);done.add(a);done.add(b);total+=w;emit(`选择 ${letters[a]}−${letters[b]}，边权 ${w}，累计 ${total}。`,[a,b],[best],1);}
    else{const parent=letters.map((_,i)=>i);const find=x=>parent[x]===x?x:parent[x]=find(parent[x]);for(const i of edges.map((_,i)=>i).sort((a,b)=>edges[a][2]-edges[b][2])){const[a,b,w]=edges[i];if(find(a)===find(b)){emit(`${letters[a]}−${letters[b]} 会成环，跳过。`,[a,b],[i],2);continue;}parent[find(a)]=find(b);selected.push(i);done.add(a);done.add(b);total+=w;emit(`选择 ${letters[a]}−${letters[b]}，边权 ${w}，累计 ${total}。`,[a,b],[i],1);if(selected.length===5)break;}}
    emit(`选中 5 条边，连接全部 6 个顶点，总权值 ${total}。`,[],[],3);return f;
  });
  add('dijkstra','单源最短路：Dijkstra',6,'graph','非负权无向图，从 A 出发。先确认最小距离，再松弛邻接边。',['dist[A]=0，其他为 ∞','选择 dist 最小的未确定顶点','确定该顶点','若 dist[u]+w < dist[v]，更新 v'],()=>{
    const dist=[0,Infinity,Infinity,Infinity,Infinity,Infinity],seen=new Set(),f=[];
    const emit=(caption,active=[],line=0,edgeActive=[])=>f.push({...clone(baseGraph),done:[...seen],active,dist:dist.map(x=>Number.isFinite(x)?x:'∞'),caption,line,edgeActive});emit('初始化距离。');
    while(seen.size<6){let u=-1;for(let i=0;i<6;i++)if(!seen.has(i)&&(u<0||dist[i]<dist[u]))u=i;if(u<0||!Number.isFinite(dist[u]))break;seen.add(u);emit(`当前最小的是 ${letters[u]}，最短距离 ${dist[u]} 已确定。`,[u],2);edges.forEach(([a,b,w],idx)=>{const v=a===u?b:b===u?a:-1;if(v>=0&&!seen.has(v)&&dist[u]+w<dist[v]){const old=Number.isFinite(dist[v])?dist[v]:'∞';dist[v]=dist[u]+w;emit(`经 ${letters[u]} 到 ${letters[v]}：${old} 更新为 ${dist[u]}+${w}=${dist[v]}。`,[u,v],3,[idx]);}});}
    emit('全部距离已确定。绿色结点是已确定最短距离的顶点。');return f;
  });
  add('topo','拓扑排序：零入度队列',6,'graph','预设 DAG：A、B 是起点。邻居按字母序处理。',['计算所有入度','所有零入度点入队','输出队头并删除它的出边','新入度为零的点入队','输出数小于 V 则有环'],()=>{
    const e=[[0,2],[1,2],[1,3],[2,4],[3,4],[4,5]],indegree=Array(6).fill(0),q=[],order=[],f=[];e.forEach(([,b])=>indegree[b]++);indegree.forEach((d,i)=>{if(d===0)q.push(i);});
    const emit=(caption,active=[],line=0)=>f.push({nodes:letters,edges:e,points,directed:true,done:[...order],active,order:order.map(i=>letters[i]),queue:q.map(i=>letters[i]),dist:[...indegree],distLabel:'当前入度',caption,line});emit('A 与 B 的入度均为 0，按字母序入队。',[],1);
    while(q.length){const u=q.shift();order.push(u);emit(`输出 ${letters[u]}，随后删除它的出边。`,[u],2);e.forEach(([a,b])=>{if(a===u){indegree[b]--;if(indegree[b]===0){q.push(b);emit(`${letters[b]} 的入度降为 0，入队。`,[b],3);}else emit(`${letters[b]} 的入度减为 ${indegree[b]}，暂不能入队。`,[b],2);}});}
    emit('输出全部顶点，图无环；当前得到一个合法拓扑序。');return f;
  });
  add('binary','折半查找：成功与失败',7,'cells','沿用课件 11 个有序数据。切换预设目标以观察成功与失败边界。',['low=0; high=n-1;','while (low <= high)','mid=low+(high-low)/2','若相等：返回 mid','若目标更小：high=mid-1','否则：low=mid+1','区间为空：查找失败'],(preset='success')=>{
    const a=[12,21,30,35,38,40,48,55,56,60,64],key=preset==='fail'?36:56,f=[];let lo=0,hi=a.length-1;
    const emit=(caption,mid=-1,line=0)=>f.push({values:[...a],range:[lo,hi],active:mid<0?[]:[mid],pointers:{low:lo,high:hi,mid},key,caption,line});emit(`目标 ${key}，初始搜索区间为 [0,10]。`);
    while(lo<=hi){const mid=lo+Math.floor((hi-lo)/2);emit(`mid=${mid}，比较 a[${mid}]=${a[mid]} 与目标 ${key}。`,mid,2);if(a[mid]===key){emit(`查找成功，目标位于下标 ${mid}（第 ${mid+1} 个元素）。`,mid,3);f[f.length-1].done=[mid];return f;}if(key<a[mid]){hi=mid-1;emit(`目标更小，保留左半区间 [${lo},${hi}]。`,-1,4);}else{lo=mid+1;emit(`目标更大，保留右半区间 [${lo},${hi}]。`,-1,5);}}
    emit(`low=${lo} > high=${hi}，区间为空，目标 ${key} 不存在。`,-1,6);return f;
  });
  add('hash','散列：线性探测',7,'cells','m=8，H(key)=key%7，冲突后按表长 8 绕回。数据来自课件第 38 页。',['addr=key%7','pos=(addr+j)%8','若已占用：j++，继续探测','空位写入 key'],()=>{
    const values=Array(8).fill(null),f=[];let probes=0;f.push({values:[...values],caption:'初始 8 个槽位为空，准备依次插入 32、13、49、55、22、39、20。',line:0});
    for(const key of [32,13,49,55,22,39,20])for(let j=0;j<8;j++){const pos=(key%7+j)%8;probes++;if(values[pos]!==null){f.push({values:[...values],active:[pos],key,caption:`插入 ${key}：H=${key%7}，第 ${j+1} 次探测地址 ${pos}，已有 ${values[pos]}，继续。`,line:2});}else{values[pos]=key;f.push({values:[...values],active:[pos],key,done:[pos],caption:`在地址 ${pos} 写入 ${key}，本次共探测 ${j+1} 次。`,line:3});break;}}
    f.push({values:[...values],done:values.flatMap((v,i)=>v===null?[]:[i]),caption:`构造完成。总探测次数 ${probes}，成功平均查找长度 ${probes}/7≈${(probes/7).toFixed(2)}。`,line:3});return f;
  });
  const sortCodes={bubble:['每趟缩小右边界','changed=false','比较相邻元素','若逆序','交换并标记 changed','若无交换则结束'],insertion:['从第 2 个元素开始','暂存当前值','与有序区从右向左比较','较大元素右移','继续寻找插入位置','把暂存值填入空位'],shell:['依次使用 gap=4,2,1','暂存当前值','比较 gap 之前的元素','较大元素后移 gap','沿同组继续查找','填入暂存值'],selection:['从未排序区开始','暂定最小位置','扫描并更新最小位置','扫描结束','交换最小值到区间首位'],heap:['从最后的非叶结点开始','向下筛选恢复大根堆','交换堆顶与当前末尾','缩小堆，继续调整'],quick:['递归区间 [low,high]','暂存首元素作为基准','左右扫描并填充空位','基准归位，分别递归']};
  for(const [id,label]of[['insertion','直接插入排序'],['shell','希尔排序'],['selection','简单选择排序'],['heap','堆排序'],['bubble','冒泡排序'],['quick','快速排序']])add(id,label,8,'bars','使用同一预设序列。黄色表示当前操作；插入排序绿色表示当前有序前缀，可能继续移动，其他排序绿色表示已归位。比较只计关键字比较；记录写入临时变量或数组各算一次移动，交换算三次。指针、下标与演示空位标记不计移动。',sortCodes[id],()=>sortingTrace(id));
  window.ANIMATIONS=catalog;
})();
