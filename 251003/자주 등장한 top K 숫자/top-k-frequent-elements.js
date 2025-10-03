const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

const count = new Map();

arr.forEach(num => {
    count.set(num, (count.get(num) || 0) + 1);
})


const countArr = [...count];
const sort = countArr.sort((a, b) => {
    if(b[1] === a[1]) return b[0] - a[0];
    else b[1] - a[1];
});

let result = '';
for(let i=0; i<k; i++) {
    result += `${sort[i][0]} `
}

console.log(result);