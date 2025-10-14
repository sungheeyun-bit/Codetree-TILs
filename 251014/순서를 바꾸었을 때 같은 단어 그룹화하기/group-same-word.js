const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1, n + 1);
// Please Write your code here.


const sortedWords = words.map(word => word.split('').sort().join(''));
const count = new Map();

for(let word of sortedWords) {
    count.set(word, (count.get(word) || 0) + 1);
}

let result = 0;
for(let [key, value] of count.entries()) {
    if(result < value) result = value;
}

console.log(result);