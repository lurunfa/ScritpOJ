Map.prototype.filterKeys = function (funs) {
    console.log([...this]);
    return new Map([...this].filter(([k, v]) => funs(k)))
}
Map.prototype.filterValues = function (funs) {
    return new Map([...this].filter(([k, v]) => funs(v)))
}
const m = new Map([['Jerry', 12], ['Jimmy', 13], ['Tomy', 14]])

m.filterKeys((key) => key.startsWith('J')) // => Map { Jerry => 12, Jimmy => 13 }