const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const map = new Map();

map.set(3, 5);
map.set(10000, 1);
if(map.has(3)) {
    console.log(map.get(3));
} else console.log('None');

if(map.has(5)) {
    console.log(map.get(5));
} else console.log('None');

if(map.has(10000)) {
    console.log(map.get(10000));
} else console.log('None');

map.set(3, 10)

if(map.has(3)) {
    console.log(map.get(3));
} else console.log('None');

map.set(7, 15);
map.delete(3);
map.delete(7);
if(map.has(7)) {
    console.log(map.get(7));
} else console.log('None');
