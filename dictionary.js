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

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

const obj1 = {x: 1};
const obj2 = {y: 2};
const obj3 = {x: 5, z:[8,9,10],};
const objRsult = Object.assign(obj1, obj2, obj3);

const set1 = new Set([1,2,3,'a','b','c']);
const set2 = new Set([1,2,'a','b','e']);

const arr1 = [...set1];
const unionSet = arr1.map(item => set2.has(item));
