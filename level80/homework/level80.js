// unshift
let arr = [2, 3, 4];
arr.unshift(1); // Adds 1 at the beginning
console.log(arr); // Output: [1, 2, 3, 4]

// shift
let arr1 = [1, 2, 3, 4];
arr1.shift(); // Removes the first element
console.log(arr1); // Output: [2, 3, 4]

// splice
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 2, 6, 7); // Starts at index 2, removes 2 elements, and inserts 6, 7
console.log(arr2); // Output: [1, 2, 6, 7, 5]

// slice
let arr3 = [1, 2, 3, 4, 5];
let newArr3 = arr3.slice(1, 4); // Starts from index 1 and ends before index 4
console.log(newArr3); // Output: [2, 3, 4]

// concat
let arr4 = [1, 2];
let arr5 = [3, 4];
let arr6 = arr4.concat(arr5);
console.log(arr6); // Output: [1, 2, 3, 4]

// sort
let arr7 = [4, 2, 1, 5, 3];
arr7.sort(); // Default sorts as strings (alphabetical)
console.log(arr7); // Output: [1, 2, 3, 4, 5]

// reverse
let arr8 = [1, 2, 3, 4];
arr8.reverse(); // Reverses the array in place
console.log(arr8); // Output: [4, 3, 2, 1]

// join
let arr9 = ['apple', 'banana', 'cherry'];
let str = arr9.join(', '); // Joins elements with a comma and a space
console.log(str); // Output: "apple, banana, cherry"
