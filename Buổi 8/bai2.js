// Câu 2: Cộng một đơn vị vào mảng số nguyên
// Input: digits = [1,2,3]
// Output: [1,2,4]

// Input: digits = [0]
// Output: [1]

// Input: digits = [9]
// Output: [1,0]
const digits1 = [1, 2, 3];
const digits2 = [0];
const digits3 = [9];

const sumArr = (digits) => {
    let number = parseInt(digits.join('')) + 1;
    return number.toString().split('').map(digits => digits);
}

console.log(sumArr(digits1));
console.log(sumArr(digits2));
console.log(sumArr(digits3));