const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const map = new Map();
for(let i=1; i<=n; i++) {
    const arr = input[i].split(' ');
    
    if(arr[0] === 'add') {
        map.set(Number(arr[1]), Number(arr[2]));
    } else if (arr[0] === 'find') {
        if(map.has(Number(arr[1]))) console.log(map.get(Number(arr[1])));
        else console.log('None');
    } else if (arr[0] === 'remove') {
        map.delete(Number(arr[1]));
    }
}