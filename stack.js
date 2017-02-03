class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    const length = this.items.length;
    return this.items[length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
stack.push(10);
stack.push(52);
stack.print();
stack.pop();
console.log(stack.peek());
console.log(stack.size());
// stack.clear();
