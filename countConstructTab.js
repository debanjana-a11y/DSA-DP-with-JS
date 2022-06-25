const countConstructTab = (target, wordbank) => {
    const arr = Array(target.length+1).fill(0);
    arr[0] = 1;

    for (let i = 0; i < target.length; i++) {
        if (arr[i] > 0) {
            for (const word of wordbank) {
                let temp = target.substr(i, word.length);
                if (word === temp) {
                    arr[i + word.length] += arr[i];
                }
            }
        }
    }

    return arr[target.length];
};

console.log(countConstructTab("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstructTab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstructTab("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  // 4
console.log(countConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
]));  // 0