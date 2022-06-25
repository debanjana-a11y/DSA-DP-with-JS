const countConstruct = (target, wordbank, memo={}) => {
    if (target in memo) {
        return memo[target];
    }
    if (target === "") return 1;
    
    memo[target] = 0;
    for(let word of wordbank) {
        if (target.startsWith(word)) {
            memo[target] += countConstruct(target.substring(word.length), wordbank, memo);
        }
    }
    
    return memo[target];
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(countConstruct("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  // true
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
]));  // false
