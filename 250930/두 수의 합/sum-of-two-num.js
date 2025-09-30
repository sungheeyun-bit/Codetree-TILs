const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const freq = new Map();
for (const v of arr) {
  freq.set(v, (freq.get(v) || 0) + 1);   
}

let count = 0;
for (const [v, c] of freq.entries()) {
  const u = k - v;
  if (!freq.has(u)) continue;

  if (v === u) {
    count += c * (c - 1) / 2;
  } else if (v < u) {
    count += c * freq.get(u);
  }
}

console.log(count);