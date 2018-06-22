const a =  [, , null, undefined, 'OK', ,]
const fillEmpty = (arr) => {
    const store = {}
    const length = arr.length;
    // const result = [].fill.call(new Array(length), 'Hello'); 创建若干都是Hello的数组的方法
    arr.forEach((item, index) => {
        // result[index] = item;
        store[index] = item;
    })
    
    for(let i=0;i<length;i++){
        arr[i] = store.hasOwnProperty(i)? arr[i]:'Hello'
    }
    return arr;
}
console.log(fillEmpty(a));
