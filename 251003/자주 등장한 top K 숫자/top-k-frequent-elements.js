const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// 1. 각 숫자의 등장 횟수를 Map에 저장
const count = new Map();
arr.forEach(num => {
    count.set(num, (count.get(num) || 0) + 1);
});

// 2. [숫자, 횟수] 배열로 변환
const countArr = [...count];

// 3. 정렬: 
// - 횟수가 큰 순서
// - 횟수가 같으면 숫자가 큰 순서
countArr.sort((a, b) => {
    if (b[1] === a[1]) return b[0] - a[0];
    return b[1] - a[1];
});

// 4. 상위 k개의 숫자만 추출
const result = countArr.slice(0, k).map(item => item[0]).join(" ");

console.log(result);