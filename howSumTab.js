const howSumTab = (candidates, target) => {
    let arr = Array(target+1).fill(null);

    for (const ele of candidates) {
        arr[ele] = [ele];
    }
    for (let candidate of candidates) {
        for (let index = 0; index < arr.length; index++) {
            if ((arr[index] != null) && (index+candidate <= target)) {
                arr[index+candidate] = [...arr[index], candidate];
            }
        }
    }
    return arr[target];
}

console.log(howSumTab([5,3,4], 7)); // true
console.log(howSumTab([5,3,4,7], 7)); // true
console.log(howSumTab([2,4], 7)); // false
console.log(howSumTab([2,3,5], 8)); // true
console.log(howSumTab([7,14], 300)) // false