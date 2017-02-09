## 数据结构和算法

### 栈 stack
栈比较简单，直接调用数组的方法模拟。

#### 栈的应用 十进制转换为二进制
思路：10进制数除以二，求余数进栈，然后出栈。

### 队列 queue
跟栈类似，只不过是先进先出

#### 队列的应用
1. 优先队列: 比如医院排队，病人有名字和优先级，然后按照优先级排队插入。
2. 循环队列： 模拟击鼓传花游戏。

构建一个循环队列，给定传花的次数，每次传递 把头元素出队，再入队到尾， 当传递次数结束，头元素出局，如此直到剩下最后一个元素

#### 单向链表

#### 双向链表暂时略过，思路基本相同以后有时间再练

### 集合
包括交，并，补，子集的运算。

集合存储的是值-值对，不区分类型，所以如果先存了一个number 10， 后面再存string ‘10’ 就存不进去了。

后面的字典可以解决这个问题。

#### 顺带学习一下es6中的set
找了好多中文资料对es6中的set都讲的不太清晰，只能看nicolla的《understanding es6》，确实讲的好。

set和map在es6中出现的原因，因为es5没有set和map，于是大家用object来模拟。
```
// 用一个空对象所以要Object.create(null)
// 如果用字面量obj = {}, 会继承Object的原型上的方法。

let set = Object.create(null);
set.loaded = true;
if (set.loaded) {
  //do something ...
}
```

用map则是为了检索值，除此外跟set区别不大。

他们的问题是存储的时候不分类型，存number 8 后，再存string 8 就会覆盖前面的值。

而如果key是一个对象，则会被转换成字符串[object Object]，再存对象也会覆盖前面的值.

你以为有两个对象，其实只有一个：
```
key1 = {},
key2 = {};

map[key1] = "foo";

console.log(map[key2]);     // "foo"
```

为了解决这些问题，有了set和map。

#### set的目的是用一个不重复的list管理离散的value。
1. 不重复的value，并且set内部有类型区分，同时存入number 8 和 string 8， 或两个空对象都没问题。
```
let set = new Set();
set.add(5);
set.add("5");

console.log(set.size);    // 2

let set = new Set(),
    key1 = {},
    key2 = {};

set.add(key1);
set.add(key2);

console.log(set.size);    // 2
```
2. 访问set的时候用set的forEach迭代访问，也可以转换成数组后直接用下标访问。

#### weakSet
1. 只能存储对象。
2. 在对象没有其他引用的时候回自动交给垃圾处理机制，不会有内存泄漏问题。这是weakSet的最大用处。
```
let set = new WeakSet(),
    key = {};

// add the object to the set
set.add(key);

console.log(set.has(key));      // true

// remove the last strong reference to key, also removes from weak set
key = null;

// set中再没有任何内容
```



### Dictionary

以 key-value 的形式存储。

#### hashMap(hashTable)
其实是个通过hash算法取地址的数组，查找数据的时候不需要像字典那样遍历，直接找数组的地址就行，所以速度快。

为加快学习的速度，关于地址冲突的处理就不展开了。

### 树 二叉搜索树（binary search tree）
一个key(在树中称一个节点为key)只有左右两个子节点，且左边的key值小与父key，右边的key值大于父key。
