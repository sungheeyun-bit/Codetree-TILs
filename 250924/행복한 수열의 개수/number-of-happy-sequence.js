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
    if(m === 1) {
        result++;
        continue;
    }
    
    let count = 1;
    let happy = false;
    for(let j=0; j<grid[i].length - 1; j++) {
        if(grid[i][j] === grid[i][j+1]) {
            count++;
            if(count >= m) {
                happy = true;
                break;
            }
        } else {
            count = 1;
        }
    }
    
    if(happy) result++;
}

console.log(result);