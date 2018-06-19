const fibonacci = (n) => {
    const nums = [1, 1];
    let length = nums.length;
    for (let i = length; i < n; i++) {
        nums[i] = nums[i - 1] + nums[i - 2];
    }
    return nums[n-1]
}
console.log(fibonacci(5))
