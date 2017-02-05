class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      // 找到最后一个元素
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return node;
  }

  insert(position, element) {
    // 检查要添加的位置是否越界
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);
    let current = this.head;
    // 插入到头部的情况
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // 插入到头部之后的情况
      for (let i = 1; i < position; i++) {
        current = current.next;
      }
      const nextNode = current.next;
      current.next = node;
      node.next = nextNode;
    }

    this.length++;
    return node;
  }

  removeAt(position) {
    // 检查要删除的位置是否越界
    if (position < 0 || position >= this.length) {
      return false;
    }

    let current = this.head;
    let previous = current;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      for (let i = 0; i < position; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    let hasElement = -1; // 没有找到返回-1比较好，比如removeAt(indexOf(element))调用的时候,会过滤掉-1

    while (current) {
      if (current.element === element) {
        hasElement = true;
        break;
      } else {
        current = current.next;
        index++;
      }
    }

    return hasElement ? index : hasElement;
  }

  remove(element) {
    // 借用了indexOf和removeAt方法
    const index = this.indexOf(element);
    this.removeAt(index);
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    return this.length;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `${current.element} `;
      current = current.next;
    }
    return string;
  }

  print() {
    console.log(this.toString());
  }
}

const linkedList = new LinkedList();
linkedList.append('nicolas');
linkedList.append('dave');
linkedList.append('mick');
linkedList.insert(3, 'neo');
