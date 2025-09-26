const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1);

// Please Write your code here.
const count = new Map();
for(let i=0; i<n; i++) {
    count.set(arr[i], count.get(arr[i]) + 1 || 1);
}

const values = [...count.values()];
const maxCount = Math.max(...values);
console.log(maxCount);