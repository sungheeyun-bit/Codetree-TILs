const fs = require("fs");
const raw = fs.readFileSync(0, "utf8").trim().split("\n");
const [n, m] = raw[0].split(/\s+/).map(Number);
const grid = raw.slice(1, 1 + n).map(line => line.split(/\s+/).map(Number));

// 트로미노 모양 정의 (offset 좌표)
const shapes = [
  // 일자 - 가로, 세로
  [[0,0],[0,1],[0,2]],
  [[0,0],[1,0],[2,0]],

  // ㄴ 블럭 - 4가지
  [[0,0],[1,0],[1,1]],
  [[0,0],[0,1],[1,0]],
  [[0,0],[0,1],[1,1]],
  [[0,1],[1,0],[1,1]]
];

let maxSum = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (const shape of shapes) {
      let sum = 0;
      let ok = true;
      for (const [dx, dy] of shape) {
        const x = i + dx, y = j + dy;
        if (x < 0 || x >= n || y < 0 || y >= m) { ok = false; break; }
        sum += grid[x][y];
      }
      if (ok && sum > maxSum) maxSum = sum;
    }
  }
}

console.log(maxSum);