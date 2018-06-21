// const merge = (arr) => {
//     const length = arr.length;
//     const mid = Math.floor(length / 2);
//     if (length === 1) return arr;
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
//     const mergeArray = (leftArr, rightArr) => {
//         let leftIndex = 0,
//             rightIndex = 0;
//         let leftLength = leftArr.length,
//             rightLength = rightArr.length,
//             result = [];
//         while (leftIndex < leftLength && rightIndex < rightLength) {
//             if (leftArr[leftIndex] < rightArr[rightIndex]) {
//                 result.push(leftArr[leftIndex++])
//             }
//             if (leftArr[leftIndex] > rightArr[rightIndex]) {
//                 result.push(rightArr[rightIndex++])
//             }
//         }
//         while (leftIndex < leftLength) {
//             result.push(leftArr[leftIndex++])
//         }
//         while (rightIndex < rightLength) {
//             result.push(rightArr[rightIndex++])
//         }
//         return result;
//     }
//     return mergeArray(left).concat(mergeArray(right))
// }
// 如果只能用一次循环的话
const merge = (arr) => {
    const res = [];
    let min;
    while (arr.length) {
        min = Math.min.apply(null, arr);
        arr.splice(arr.indexOf(min), 1);
        res.push(min)
    }
    // console.log(res);
    // return res
    // [].push.apply(arr, res);
    arr.concat(res)
}
merge([1,2,3,0])
