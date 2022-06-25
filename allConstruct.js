const allConstruct = (target, wordbank) => {
    if (target === "") return [[]];
    
    let retVal = [[]];
    for(let word of wordbank) {
        if (target.startsWith(word)) {
            let ret = allConstruct(target.substring(word.length), wordbank);
            retVal = ret.map(ele => [word, ...ele]);
        }
    }
    
    // console.log("Outside target " + target + " " + retVal);
    return retVal;
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(allConstruct("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  // true
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
// [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"
// ]));  // false
