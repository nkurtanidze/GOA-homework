// davaleba 1
const arr = [42, "hello", true, "world", null, 99, "GPT"];

const result = arr.map(item => typeof item === "string");

console.log(result);



// davaleba 2
const scores = [85, 42, 77, 90, 66, 70, 55, 88];

const passedScores = scores.filter(score => score > 70);

console.log(passedScores); // [85, 77, 90, 88]





// davaleba 3
const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const counts = array.reduce((acc, item) => {
  if (acc[item]) {
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});

console.log(counts);



// davaleba 4
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = sum / numbers.length;

console.log(average);  





// davaleba 5
// Manual Map
function manualMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// Manual Filter
function manualFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}


// Manual Reduce
function manualReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
