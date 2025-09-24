const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let maxCount = 0;

function dfs(x, y) {
    let count = 0;
    for(let i=x; i<x + 3; i++) {
        for(let j=y; j<y + 3; j++) {
            if(grid[i][j]) count++;
        }
    }
    return count;
}

for(let i=0; i<n-2; i++) {
    for(let j=0; j<n-2; j++) {
        let curCount = dfs(i, j);
        maxCount = Math.max(curCount, maxCount);
    }
}

console.log(maxCount);

