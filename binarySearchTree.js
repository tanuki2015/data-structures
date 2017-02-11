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
      // 先搜索左边
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

  search(SearchKey) {
    // 帮助函数，执行搜索递归
    function searchNode(node, key) {
      // 递归终止条件，1 找不到节点
      if (node === null) {
        return false;
      }
      // 递归终止条件，2 找到节点
      if (key === node.key) {
        return true;
      }
      // 递归查找途中，左边
      if (key < node.key) {
        return searchNode(node.left, key);
      }
      // 递归查找途中，右边
      return searchNode(node.right, key);
    }

    // 递归执行
    return searchNode(this.root, SearchKey);
  }

  // 中序遍历
  inOrderTraverse(callback) {
    function inOrderTraverseNode(node, innerCallback) {
      if (node !== null) {
        // 下面的顺序很重要， 先完成左边的递归，再完成中间，最后右边
        // 这是每一个节点都必须要做的操作，每个节点都要做3次进栈和3次出栈
        inOrderTraverseNode(node.left, innerCallback);
        innerCallback(node.key);
        inOrderTraverseNode(node.right, innerCallback);
      }
    }

    inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback) {
    function preOrderTraverseNode(node, innerCallback) {
      if (node !== null) {
        // 所谓中序遍历和先序遍历的区别只是下面三步操顺序不同
        innerCallback(node.key);
        preOrderTraverseNode(node.left, innerCallback);
        preOrderTraverseNode(node.right, innerCallback);
      }
    }

    preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback) {
    function postOrderTraverseNode(node, innerCallback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, innerCallback);
        postOrderTraverseNode(node.right, innerCallback);
        innerCallback(node.key);
      }
    }

    postOrderTraverseNode(this.root, callback);
  }

  min() {
    function getMin(node) {
      if (node.left === null) {
        return node.key;
      }
      return getMin(node.left);
    }
    return getMin(this.root);
  }

  max() {
    function getMax(node) {
      if (node.right === null) {
        return node.key;
      }
      return getMax(node.right);
    }
    return getMax(this.root);
  }

  remove(key) {
    // 帮助函数
    function removeNode(node, innerKey) {
      // 未找到的 递归结束条件
      if (node === null) {
        return null;
      }

      if (innerKey < node.key) {
        node.left = removeNode(node.left, innerKey);
        return node;
      } else if (innerKey > node.key) {
        node.right = removeNode(node.right, innerKey);
        return node;
      }
      // 找到node，分别处理删除操作
      // 删除叶节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 删除仅有一个子节点的节点， 直接把仅有一边的节点替换掉到当前节点的位置
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // 有两个节点的子节点
      // 帮助方法，返回最小节点
      function findMinNode(node) {
        function getMin(node) {
          if (node.left === null) {
            return node;
          }
          return getMin(node.left);
        }
        return getMin(node);
      }

      const aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }

    return removeNode(this.root, key);
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);

tree.inOrderTraverse(console.log);
console.log('===========');
tree.preOrderTraverse(console.log);
console.log('===========');
tree.postOrderTraverse(console.log);
console.log('===========');
console.log(tree.min());
console.log(tree.max());
console.log(tree.remove(3));
tree.remove(5);
tree.remove(15);
