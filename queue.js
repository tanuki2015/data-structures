class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    // 返回排头的元素，最先进队的一个
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
  print() {
    console.log(this.items.toString());
  }
}

class Patient {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
}

// 几个病人对象
const a = new Patient('John', 2);
const b = new Patient('Jack', 1);
const c = new Patient('Camila', 1);
const d = new Patient('nicolas', 5);

// 优先队列 继承自queue
class PriorityQueue extends Queue {

  enqueue(object) {
    let ifAdd = false; // 标志位

    if (this.isEmpty()) {
      return this.items.push(object);
    }

    for(let i = 0, len = this.items.length; i < len; i++) {
      // 添加后把标志位设为true，否则表示优先级最小，要添加到末尾
      if (this.items[i].priority > object.priority) {
        ifAdd = true;
        return this.items.splice(i, 0, object);
      }
    }

    if (!ifAdd) {
      return this.items.push(object);
    }
  }

  print() {
    console.dir(this.items);
  }
}

const pQueue = new PriorityQueue();
pQueue.enqueue(a);
pQueue.enqueue(b);
pQueue.enqueue(c);
pQueue.enqueue(d);
pQueue.print();
pQueue.dequeue();
pQueue.print();
pQueue.dequeue();
pQueue.print();
