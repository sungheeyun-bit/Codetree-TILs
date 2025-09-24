const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

for(let i=0; i<n; i++) {
    let arr = [];
    for(let j=0; j<n; j++) {
        arr.push(grid[j][i]);
    }
    grid.push(arr);
}

let result = 0;
for(let i=0; i<grid.length; i++) {
    let count = 1;
    for(let j=0; j<grid[i].length - 1; j++) {
        if(grid[i][j] === grid[i][j+1]) count++;
    }

    if(count >= m) result++;
}

console.log(result);