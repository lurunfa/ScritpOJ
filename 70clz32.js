const clz32 = (num) => {
    let v = num >>> 0 // 如果是负数 这样就会得到对应的补码，例如-10 得到的就是11111111111111111111111111110110
    return v ? 32 - v.toString(2).length : 32
}
clz32(-10);
const a = 4294967286
const b = -10;
console.log(a.toString(2));
console.log(b.toString(2));
