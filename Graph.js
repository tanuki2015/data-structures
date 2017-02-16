document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('readyState is ok!');
  }
};
// 需要用到字典，使用import需要编译，为了直接能在浏览器运行，就拷贝过来用。
class Dictionary {
  constructor() {
    this.items = {};
  }

  has(key) {
    // 根据eslint的建议修改这一句 this.hasOwnProperty(key)
    return Object.prototype.hasOwnProperty.call(this.items, key);
  }

  set(key, value) {
    if (!this.has(key)) {
      this.items[key] = value;
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  get(key) {
    if (this.has(key)) {
      return this.items[key];
    }
    return false;
  }

  values() {
    // 以数组形式返回所有值
    const result = [];

    for (let key in this.items) {
      if (this.has(key)) {
        result.push(this.items[key]);
      }
    }
    return result;
  }

  // clear, size, keys, 跟set中的一样，直接拷贝过来
  clear() { this.items = {}; }

  size() { return Object.keys(this.items).length; }

  keys() { return Object.keys(this.items); }

  getItems() {
    // 用于验证values方法的输出是否正确
    return this.items;
  }
}

// 图

class Graph {
  constructor() {
    this.vertices = []; // 存储定点
    this.adjList = new Dictionary();  // 存储边，key是定点，value是数组
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  toString() {
    this.vertices.forEach(item => {
      const vertice = item;
      const Edges = this.adjList.get(item).toString();
      console.log(`${vertice} -> ${Edges}`);
    });
  }
}

// 初始化图
const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
myVertices.forEach(item => graph.addVertex(item));

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');

graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');

graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.toString();
console.log('graph done!')
