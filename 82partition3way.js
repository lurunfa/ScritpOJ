const partition3way = (arr) => {
    const firstItem = arr[0];
    const length = arr.length;
    let tail = length - 1;
    let indexCount = 0; // 用于记录交换
    for (let i = 0; i < length; i++) {
        if (arr[i] < firstItem) { // 小于第一个，就交换位置。
            [arr[indexCount], arr[i]] = [arr[i], arr[indexCount]];
            indexCount++;
        } else if(arr[i]>firstItem) {
            if (i > tail) break;
            [arr[i], arr[tail]] = [arr[tail], arr[i]];
            tail--;
            i--; // 这里因为换过来的还没有检测，所以i-1向后退一个 再检查一下
        }
    }
    return arr;
}
console.log(partition3way([3, 1, 3, 6, 2, 3, 4, 5]))

