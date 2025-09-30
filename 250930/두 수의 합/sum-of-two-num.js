const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const sumMap = new Map();
arr.sort();

for(let i=0; i<n; i++) {
    for(let j=i+1; j<n; j++) {
        let sum = arr[i] + arr[j];
        sumMap.set(sum, sumMap.get(sum) + 1 || 1);
    }
}

console.log(sumMap.get(k));

