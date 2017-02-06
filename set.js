class Set {
  constructor() {
    this.items = {};
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  clear() { this.items = {}; }

  // Object.keys()返回的是有key-name组成的字符串数组
  size() { return Object.keys(this.items).length; }
  // Object.values()才返回实际的值，这是有区别的
  values() { return Object.values(this.items); }

  // 交集 a && b
  intersection(otherSet) {
    const resultSet = new Set();
    const thisValues = this.values();

    thisValues.forEach(item => {
      if (otherSet.has(item)) {
        resultSet.add(item);
      }
    });

    return resultSet;
  }

  // 并集 a || b
  union(otherSet) {
    const resultSet = new Set();
    const thisValues = this.values();
    const otherValues = otherSet.values();
    thisValues.forEach(item => resultSet.add(item));
    otherValues.forEach(item => resultSet.add(item));
    return resultSet;
  }
  // 差集 a === !b 跟交集只有一个判断条件取反就行了
  difference(otherSet) {
    const resultSet = new Set();
    const thisValues = this.values();

    thisValues.forEach(item => {
      if (!otherSet.has(item)) {
        resultSet.add(item);
      }
    });

    return resultSet;
  }

  subSetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    const thisValues = this.values();
    // 下面一句多了个括号，结果就不对了，错误示范：thisValues.every(item => {otherSet.has(item)});
    // 记住，单独一句话的时候不需要大括号，默认带return，有大括号的时候要显式return。
    const result = thisValues.every(item => otherSet.has(item));
    return result;
  }
}

const set = new Set();
set.add(10);
set.add('nicolas');
set.add('neo');
set.has(12);
set.has('nicolas');
set.size();
set.values();

const set2 = new Set();
set2.add(10);
set2.add(5);
set.intersection(set2);

set.union(set2);
set.difference(set2);

const set3 = new Set();
set3.add(5);
set3.subSetOf(set);
set3.subSetOf(set2);
set3.add('10');
set3.subSetOf(set2);
