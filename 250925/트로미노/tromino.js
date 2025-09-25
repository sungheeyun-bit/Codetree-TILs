const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let maxSum = 0;
function sumLineBlockRotations(x, y) {
    let sum = 0;

    if(x + 1 < n && x + 2 < n) {
        sum = Math.max(sum, grid[x][y] + grid[x + 1][y] + grid[x + 2][y]);
    }

    if(y + 1 < m && y + 2 < m) {
        sum = Math.max(sum, grid[x][y] + grid[x][y + 1] + grid[x][y +2 ]);
    }
    
    return sum;
}

function sumLBlockRotations(x, y) {
    let sum = 0;

    if(x + 1 < n && y + 1 < m) {
        sum = Math.max(sum, grid[x][y] + grid[x + 1][y] + grid[x + 1][y + 1]);
        sum = Math.max(sum, grid[x][y] + grid[x][y + 1] + grid[x + 1][y + 1]);
        sum = Math.max(sum, grid[x][y] + grid[x][y + 1] + grid[x + 1][y]);
        sum = Math.max(sum, grid[x+1][y] + grid[x][y + 1] + grid[x + 1][y + 1]);
    }

    return sum;
}


for(let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[0].length; j++) {
        let sum1 = sumLBlockRotations(i, j);
        let sum2 = sumLineBlockRotations(i, j);

        maxSum = Math.max(maxSum, sum1, sum2);
    }
}

console.log(maxSum);