const flatten = (arr) => {
    let result = []
    arr.forEach(item => {
        if (!Array.isArray(item)) {
            result.push(item);
        } else {
            result = result.concat(flatten(item))
        }
    })
    return result;
}
// 或
// const flatten = (arr) => {
//     return arr.toString().split(',').map(item => 
//          parseInt(item)
//     )
// }
console.log(flatten([1, 2, 3, 43, 5]));
