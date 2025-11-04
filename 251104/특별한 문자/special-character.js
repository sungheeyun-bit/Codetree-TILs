const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];

// Please Write your code here.

const countMap = new Map();

for(let s of str) {
    countMap.set(s, (countMap.get(s) || 0) + 1);
}

for(let [key, value] of countMap.entries()) {
    if(value === 1) {
        console.log(key);
        return;
    }
}

console.log('None');
