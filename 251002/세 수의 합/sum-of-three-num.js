const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

// let count = 0;

// for(let i=0; i<n-2; i++) {
//     for(let j=i+1; j<n-1; j++) {
//         for(let l=j+1; l<n; l++) {
//             let sum = arr[i] + arr[j] + arr[l];
//             if(sum === k) count++;
//         }
//     }
// }

// console.log(count);

const freq = new Map();
let result = 0;

for(let num of arr) freq.set(num, (freq.get(num) || 0) + 1);

for(let i=0; i<n; i++) {
    
    freq.set(arr[i], freq.get(arr[i]) - 1);
    for(let j=0; j<i; j++) {
        let target = k - arr[i] - arr[j];
        
        result+=(freq.get(target) ?? 0)
    }
}

console.log(result);