const partition3way = (arr) => {
    const firstItem = arr[0];
    let totalLength = arr.length;
    let mid = Math.floor(totalLength / 2)-1;
    let result = Array(totalLength);
    let header = 0;
    let tail = totalLength - 1;
    for (let i = 1; i < totalLength; i++) {
        if (arr[i] < firstItem) {
            result[header] = arr[i];
            header++;
        }
        if (arr[i] > firstItem) {
            result[tail] = arr[i];
            tail--;
        } else {
            result[mid] = arr[i];
            mid++
        }
    }
    return result;
}
console.log(partition3way([3, 1, 3, 6, 2, 3, 4, 5]))