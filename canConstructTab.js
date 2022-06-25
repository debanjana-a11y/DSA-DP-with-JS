const canConstructTab = (target, wordbank) => {
    const arr = Array(target.length+1).fill(false);
    arr[0] = true;

    for (let i = 0; i < target.length; i++) {
        if (arr[i] === true) {
            for (const word of wordbank) {
                let temp = target.substr(i, word.length);
                if (word === temp) {
                    arr[i + word.length] = true;
                }
            }
        }
    }

    return arr[target.length];
};

console.log(canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstructTab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstructTab("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  // true
console.log(canConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
]));  // false
