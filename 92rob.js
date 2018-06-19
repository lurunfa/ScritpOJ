const rob = (nums) => {
    const robResult = [];
    if(!nums.length) return 0;

    robResult[0] = nums[0];
    robResult[1] = nums[1]?Math.max(nums[0],nums[1]):nums[0];
    for(let i = 2;i<nums.length;i++){
        robResult[i] = Math.max(nums[i]+robResult[i-2],robResult[i-1]);
    }
    return robResult.pop()
} 
console.log(rob([1,9,0,2,5]))
