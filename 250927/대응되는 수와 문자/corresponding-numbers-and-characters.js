const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const words = input.slice(1, 1 + n);
const queries = input.slice(1 + n, 1 + n + m);
// Please Write your code here.

const keyToValue = new Map();
const valueToKey = new Map();

for(let i=0; i<words.length; i++) {
    keyToValue.set(words[i], `${i+1}`);
    valueToKey.set(`${i+1}`, words[i]);
}

for(let query of queries) {
    if(keyToValue.has(query)) console.log(keyToValue.get(query));
    if(valueToKey.has(query)) console.log(valueToKey.get(query));
}