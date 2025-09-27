const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

const sum = new Map();


for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(sum.has(arr[i] + arr[j])) {
            sum.set(arr[i] + arr[j], [...sum.get(arr[i] + arr[j]), [arr[i], arr[j]]]);
        } else {
            sum.set(arr[i] + arr[j], [[arr[i], arr[j]]]);
        }
    }
}



if(sum.has(k)) {
    let target = sum.get(k).flat();
    let unique = new Set(target);
    
    if(unique.size / 2 === 0) console.log(unique.size / 2);
    else console.log(Math.ceil(unique.size / 2));  
}

