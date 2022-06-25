// function helper(board, i, j, target_i, target_j, result) {
//     if ((i == target_i) && (j == target_j)) {
//         console.log(result);
//         return;
//     }

//     if ((i > board.length) || (j > board[0].length)) {
//         return;
//     }

//     helper(board, i+1, j, target_i, target_j, result + "D");
//     helper(board, i, j+1, target_i, target_j, result + "R");
// }

function helper2(target_i, target_j, result, memo={}) {
    const key = target_i + ',' + target_j;
    if (key in memo) {
        return memo[key];
    }
    if ((target_i === 0) && (target_j === 0)) {
        return 1;
    }

    if ((target_i < 0) || (target_j < 0)) {
        return 0;
    }

    let count = 0;
    count += helper2(target_i-1, target_j, result + "D", memo);
    count += helper2(target_i, target_j-1, result + "R", memo);
    console.log(count);
    memo[key] = count;
    console.log(memo);
    return count;
}

let m = 3;
let n = 3;
console.log(helper2(m, n, ""));
console.log(helper3(4, 4));

function helper3(m, n) {
    const arr = Array(m+1).fill(0).map(() => Array(n+1).fill(0));
    for (let col = 0; col <= n; col++) {
        for (let row = 0; row <= m; row++) {
            if (col+1 <= n) arr[row][col+1] = arr[row][col]+1;
            if (row+1 <= m) arr[row+1][col] = arr[row][col]+1;
        }
    }
    return arr[m][n];
}