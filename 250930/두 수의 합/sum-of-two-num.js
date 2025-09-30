const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
arr.sort((a, b) => a - b);

let left = 0; 
let right = n - 1;
let count = 0;

while(left < right) {
    let sum = arr[left] + arr[right];

    if(sum === k) {
        count++;
        left++;
        right--;
    }
    else if(sum < k) {
        left++;
    } else {
        right--;
    }
}

console.log(count);