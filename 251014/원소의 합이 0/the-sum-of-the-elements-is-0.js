const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const C = input[3].split(' ').map(Number);
const D = input[4].split(' ').map(Number);

// Please Write your code here.
const abFreq = new Map();
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        const sumAB = A[i] + B[j];
        abFreq.set(sumAB, (abFreq.get(sumAB) || 0) + 1);
    }
}

let result = 0;
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        const sumCD = C[i] + D[j];
        const need = -sumCD;
        if(abFreq.has(need)) {
            result += abFreq.get(need);
        } 
    }
}

console.log(result);