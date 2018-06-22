// 解法1
const store = [0,1,2];
const climbStairs = (n) => n <= 2 ? store[n] : (store[n] = climbStairs(n - 1) + climbStairs(n - 2))
console.log(climbStairs(10));
// 矩阵快速法
