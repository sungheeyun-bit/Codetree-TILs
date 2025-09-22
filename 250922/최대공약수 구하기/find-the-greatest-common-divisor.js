const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function getGcd(n, m) {
   while(m !== 0) {
      let temp = m;
      m = n % m;
      n = temp;
   }
   return n;
}

console.log(getGcd(n, m));