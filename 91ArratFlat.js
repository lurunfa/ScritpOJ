function* flatten2(arr) {
    const flatArr = arr.length? arr.toString().split(',').map(item => parseInt(item)):[];
    while (flatArr.length) {
        yield flatArr.shift()
    }
}
const numbers = flatten2([1, [
    [2], 3, 4
], 5])
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);