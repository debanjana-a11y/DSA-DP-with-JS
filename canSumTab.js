const canSumTab = (candidates, target) => {
    let arr = Array(target+1).fill(0);

    for (const ele of candidates) {
        arr[ele]++;
    }
    for (let candidate of candidates) {
        for (let index = 0; index < arr.length; index++) {
            if ((arr[index] > 0) && (index+candidate <= target)) {
                arr[index+candidate]++;
            }
        }
    }

    return arr[target] > 0;
}

console.log(canSumTab([5,3,4], 7)); // true
console.log(canSumTab([5,3,4,7], 7)); // true
console.log(canSumTab([2,4], 7)); // false
console.log(canSumTab([2,3,5], 8)); // true
console.log(canSumTab([7,14], 300)) // false