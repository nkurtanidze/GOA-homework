// 1. თითოეული რიცხვი ორმაგდება lambda და map-ით
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("დაორმაგებული:", doubled); // [2, 4, 6, 8, 10]

// 2. დააბრუნე მხოლოდ კენტები lambda და filter-ით
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("კენტები:", oddNumbers); // [1, 3, 5]

// 3. ყველა სიტყვა დიდი ასოებით lambda და map-ით
const words = ['hello', 'world', 'javascript'];
const upperWords = words.map(word => word.toUpperCase());
console.log("დიდი ასოებით:", upperWords); // ['HELLO', 'WORLD', 'JAVASCRIPT']

// 4. მხოლოდ ის სიტყვები, რომელთა სიგრძე 5-ზე მეტია lambda და filter-ით
const longWords = words.filter(word => word.length > 5);
console.log("სიგრძე > 5:", longWords); // ['javascript']

// 5. კავშირების სია, დაალაგე ასაკის მიხედვით lambda და sorted-ით
const people = [
  { name: 'Nika', age: 25 },
  { name: 'Ana', age: 20 },
  { name: 'Luka', age: 30 }
];

const sortedByAge = people.sort((a, b) => a.age - b.age);
console.log("ასაკის მიხედვით დალაგებული:", sortedByAge);
// [
//   { name: 'Ana', age: 20 },
//   { name: 'Nika', age: 25 },
//   { name: 'Luka', age: 30 }
// ]
