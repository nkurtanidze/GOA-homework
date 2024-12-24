let numberString = "12345"; // რიცხვების სტრინგი
let numberArray = [];

for (let i = 0; i < numberString.length; i++) {
  numberArray.push(Number(numberString[i])); // თითოეული სიმბოლო რიცხვად
}

console.log(numberArray); // [1, 2, 3, 4, 5]
