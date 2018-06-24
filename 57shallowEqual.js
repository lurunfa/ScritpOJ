const hasOwn = Object.prototype.hasOwnProperty
const shallowEqual = (x, y) => {
    function is(x, y) { // 关于0的检验
        if (x === y) {
            return x !== 0 || y !== 0 || 1 / x === 1 / y
        } else {
            return x !== x && y !== y
        }
    }
    if (is(x, y)) return true; // 首先验证0 +-0；
    if (typeof x !== 'object' || x === null || typeof y !== 'object' || y === null) return false;
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) return false
    for (let i = 0; i < xKeys.length; i++) {
        if (!hasOwn.call(y, xKeys[i]) ||
            !is(x[xKeys[i]], y[xKeys[i]])) {
            return false
        }
    }
    return true
}
console.log(shallowEqual(+0, -0));
