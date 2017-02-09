class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    // 帮助函数，执行插入操作
    function insertNode(node, newNode) {
      // 搜索左边
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else if (newNode.key > node.key) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }

    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  search(key) {

  }

  // 中序遍历
  inOrderTraverse() {

  }

  preOrderTraverse() {

  }

  postOrderTraverse() {

  }

  min() {

  }

  max() {

  }

  remove(key) {

  }
}

const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);

// tree.insert(6);
