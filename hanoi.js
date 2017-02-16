/* 汉诺塔的算法一直没弄明白，今天看了一下用递归真他妈简单，想出这种算法的人牛逼
 * 注意：console这行是真正的移动圆盘的操作
 *
 * 思路：1。首先是结束的条件，n=1时只需把a柱上的n个盘子移动到c柱上
 * 2. n>1时，把n-1个用某种方法从a移动到b，再把第n个从a移动到c
 * 3. 再用某种方法把b上的n-1个都移动到c
 * 4. 某种方法指的就是hanoi自己，所以把hanoi代入上面的操作步骤就可以了，代码比文字跟简洁
 */

function hanoi(n, a, b, c) {
  if (n === 1) {
    return console.log(`移动 第 ${n} 个 盘子 从 ${a} 到 ${c}`);
  }
  hanoi(n - 1, a, c, b);
  console.log(`移动 第 ${n} 个 盘子 从 ${a} 到 ${c}`);
  hanoi(n - 1, b, a, c);
}
// 可以验证，分别是需要 1，3，7，15，31，63步...

// 下面是带计数的版本
// function hanoiWithCount(n, a, b, c) {
//   let count = 0;
//   function hanoi(n, a, b, c) {
//     if (n === 1) {
//       count++;
//       return console.log(`移动 第 ${n} 个 盘子 从 ${a} 到 ${c}`);
//     }
//     hanoi(n - 1, a, c, b);
//     console.log(`移动 第 ${n} 个 盘子 从 ${a} 到 ${c}`);
//     count++;
//     hanoi(n - 1, b, a, c);
//   }
//   hanoi(n, a, b, c);
//   return count;
// }
