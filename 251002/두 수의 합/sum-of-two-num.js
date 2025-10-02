const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
// const freq = new Map();
// let count = 0;
// for(const v of arr) {
//   freq.set(v, (freq.get(v) || 0) + 1);
// }

// for(const [v, c] of freq.entries()) {
//   let u = k - v;
//   if(!freq.has(u)) continue;

//   if(u === v) {
//     count += c * (c - 1) / 2;
//   } else if (v < u) {
//     count += c * freq.get(u);
//   }
// }

// console.log(count)

const count = new Map();
let answer = 0;

for(let num of arr) {
  let diff = k - num;

  if(count.has(diff)) {
    answer += count.get(diff);
  }

  count.set(num, count.get(num) + 1 || 1);
}

console.log(answer);