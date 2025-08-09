// davaleba 1
function calculate(a, b, callback) {
    return callback(a, b);
}
const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;

console.log(calculate(5, 3, sum));      // 8
console.log(calculate(5, 3, multiply)); // 15
console.log(calculate(5, 3, subtract)); // 2




// davaleba 2
function customFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = num => num % 2 === 0;

console.log(customFilter(numbers, isEven)); // [2, 4, 6]




// davaleba 3
function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
const nums = [1, 2, 3];
const double = x => x * 2;

console.log(customMap(nums, double)); // [2, 4, 6]

setTimeout(() => {
    console.log("ნაბიჯი 1");
    setTimeout(() => {
        console.log("ნაბიჯი 2");
        setTimeout(() => {
            console.log("ნაბიჯი 3");
        }, 1000);
    }, 1000);
}, 1000);
