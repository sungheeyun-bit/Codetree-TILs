const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function gcd(n, m) {
    while(m !== 0) {
        let temp = m;
        m = n % m;
        n = temp;
    }
    return n;
}

function lcm(n, m) {
    return (n * m) / gcd(n, m);
}


console.log(lcm(n, m));