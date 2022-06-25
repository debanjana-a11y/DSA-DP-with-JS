const howSum = (nums, target, memo = {}) => {
    if (target in memo) {
        return memo[target];
    }
    if (target === 0) {
        return [];
    }
    if (target < 0) {
        return null;
    }
    
    let ans = null;
    for (const num of nums) {
        let retVal = howSum(nums, target-num, memo);
        if (retVal !== null) {
            retVal = [...retVal, num];
            if (ans === null || retVal.length < ans.length) {
                ans = [...retVal];
            }
        }
    }
    
    memo[target] = ans;
    return memo[target];
};

console.log(howSum([2,3,6,7], 7));
console.log(howSum([2,3,7], 7));
console.log(howSum([2,3,5], 8));
console.log(howSum([7,14], 300));
console.log(howSum([1,2,5,25], 100));