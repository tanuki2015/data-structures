class HashTable {
  constructor() {
    this.items = [];
  }

  // 哈希函数djb2
  djb2HashCode(key) {
    let hash = 5381;
    for (let i = 0, len = key.length; i < len; i++) {
      hash = (hash * 33) + key.charCodeAt(i);
    }
    return hash % 1013;
  }

  put(key, value) {
    const position = this.djb2HashCode(key);
    // 没有考虑到冲突的情况
    console.log(`${position}  ${key}`);
    this.items[position] = value;
  }

  remove(key) {
    const position = this.djb2HashCode(key);
    return delete this.items[position];
  }

  get(key) {
    const position = this.djb2HashCode(key);
    return this.items[position];
  }
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

// log中用====号标记一下，免得太多看不清
console.log(hash.get('Gandalf'), '=====');
console.log(hash.get('John'));
console.log(hash.get('kkk'));

console.log(hash.remove('Gandalf'));
console.log(hash.get('Gandalf'));
