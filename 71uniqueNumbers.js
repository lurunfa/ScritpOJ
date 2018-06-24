const uniqueNums = (n) => {
    const randomArr = Array(n);
    let totalArr = []
    for (let i = 0; i < 33; i++) {
        totalArr[i] = i;
    }
    console.log(totalArr);

    totalArr = totalArr.slice(2);
    for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * totalArr.length)
        randomArr[i] = totalArr[index];
        totalArr.splice(index, 1);
    }
    return randomArr;
}
console.log(uniqueNums(10))
// es6 

const uniqueNums = (n) => {
    let result = new Set();
    while (result.size < n) {
        result.add(Math.floor(2 + Math.random() * 31));
    }
    return [...result];
}