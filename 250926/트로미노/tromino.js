const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const shapes = [
  [[0, 0], [0, 1], [0, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 0], [1, 0], [1, 1]],
  [[1, 0], [2, 0], [1, 1]],
  [[0, 1], [1, 1], [1, 0]],
  [[0, 0], [0, 1], [1, 1]]
];

let maxSum= 0;
for(let i=0; i<n; i++) {
  for(let j=0; j<m; j++) {
    for(let shape of shapes) {
      let sum = 0;
      let isInBlock = true;

      for(let [x, y] of shape) {
        let nx = i + x;
        let ny = j + y;
        if(nx < 0 || nx >= n || ny < 0 || ny >= m) {
          isInBlock = false;
          break;
        }
        sum+=grid[nx][ny];
      }
      
      if(isInBlock && sum > maxSum) maxSum = sum;
    }
  }
}

console.log(maxSum);