const arrWithoutLoop = (n) => {
    let a = [];
    a.length = n;
    const fillArr = (arr) => {
        if (!arr[--n] && n >= 0) {
            arr[n] = n
            fillArr(arr)
        }
    }
    fillArr(a)
    return a
}
console.log(arrWithoutLoop(5));