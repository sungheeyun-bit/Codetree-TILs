const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

// Please Write your code here.
let count = new Map();

for(let i=0; i<n; i++) {
    count.set(arr[i], count.get(arr[i])+1 || 1);
}

let result = [];
for(let query of queries) {
    if(count.has(query)) result.push(count.get(query));
    else result.push(0);
} 

console.log(result.join(' '));