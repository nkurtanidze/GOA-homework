// davaleba 1
const array = ["Goa", "novatori", "step", "step"];

const result = array.map(item => {
  // ვამოწმებთ, იწყება თუ არა დიდი ასოთი
  if (item[0] === item[0].toUpperCase()) {
    return "Good";
  } else {
    return "Bad";
  }
});

console.log(result); // ["Good", "Bad", "Bad", "Bad"]



// davaleba 2
const numbers = [11, 3, 1, 5, 6, 2, 0, 13];

const filteredNumbers = numbers.filter(num => num > 5);

console.log(filteredNumbers);




// davaleba 3
const strings = ["Hello", " ", "world", "!", " Have", " a", " nice", " day."];

const concatenated = strings.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, ""); // საწყისი მნიშვნელობა არის ცარიელი სტრინგი

console.log(concatenated);
