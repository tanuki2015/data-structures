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
    // 返回栈顶元素，最后进入的一个
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

function divideBy2(decNumber) {
  const remainderStack = new Stack();
  let remainder;
  const result = [];

  while (decNumber > 0) {
    remainder = Math.floor(decNumber % 2);
    remainderStack.push(remainder);
    decNumber = Math.floor(decNumber / 2);
  }

  const len = remainderStack.size();
  for (let i = 0; i < len; i++) {
    result.push(remainderStack.pop());
  }

  return result.toString();
}

console.log(divideBy2(10));
console.log(divideBy2(233));
console.log(divideBy2(1000));
