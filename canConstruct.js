const canConstruct = (target, wordbank, memo={}) => {
    if (target in memo) {
        return memo[target];
    }
    if (target === "") return true;
    
    for(let word of wordbank) {
        if (target.startsWith(word)) {
            if (true === canConstruct(target.substring(word.length), wordbank, memo)) {
                memo[target] = true;
                return true; 
            }
        }
    }

    memo[target] = false;
    return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
]));  // false
