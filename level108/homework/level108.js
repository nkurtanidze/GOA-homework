// davaleba 3
// void
// void ნიშნავს, რომ ფუნქცია არ დაბრუნებს მნიშვნელობას (არ დააბრუნებს რამეს).როცა ფუნქციას მისცემ void ტიპს,
//  ეს ნიშნავს, რომ ფუნქცია მხოლოდ რაღაც მოქმედებას გააკეთებს, მაგრამ ვერ გამოიტანს (return) მნიშვნელობას.

// return
// return არის ბრძანება, რომელიც ფუნქციიდან გამოსვლისას აბრუნებს მნიშვნელობას (value) იმ ფუნქციის მიმღებს (caller).
// თუ ფუნქციას აქვს არა void ტიპი (მაგ., int, float, string), მაშინ ფუნქცია უნდა დააბრუნოს მნიშვნელობა return-ით.
// თუ ფუნქცია void ტიპისაა, return შეიძლება უბრალოდ ფუნქციიდან გამოსასვლელად, მნიშვნელობის გარეშე იქნას გამოყენებული.



// davaleba 7
const users = [
  { firstName: "Ana", lastName: "Kiknadze" },
  { firstName: "Giorgi", lastName: "Maisuradze" },
  { firstName: "Nino", lastName: "Kalandadze" }
];

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);

console.log(fullNames);




// davaleba 8
const students = [
  { name: "Nika", score: 85 },
  { name: "Lika", score: 92 },
  { name: "Saba", score: 88 },
  { name: "Tako", score: 95 }
];

const highScorers = students.filter(student => student.score > 90);

console.log(highScorers);



// davaleba 9
const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 80, quantity: 1 }
];

const totalPrice = cart.reduce((accumulator, item) => {
  return accumulator + item.price * item.quantity;
}, 0);

console.log(totalPrice); // დააბეჭდებს: 1380
