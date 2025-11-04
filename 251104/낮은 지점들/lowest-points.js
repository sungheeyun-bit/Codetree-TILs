const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const coordinateX = new Map();

for(let [x, y] of points) {
    if(!coordinateX.has(x)) {
        coordinateX.set(x, y);
    } else {
        if(coordinateX.get(x) > y) {
            coordinateX.set(x, y);
        }
    }
}

let sumY = 0;
for(let num of coordinateX.values()) {
    sumY+=num;
}

console.log(sumY);