const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

function printRect(n) {
    let num = 0;

    for(let i=0; i<n; i++) {
        let row = [];
        for(let j=0; j<n; j++) {
            num = (num % 9) + 1;
            row.push(num);
        }
        console.log(row.join(' '));
    }
}

printRect(N);