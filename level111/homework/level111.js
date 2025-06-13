// davaleba 1
let colors = ["red", "green", "blue", "yellow", "purple"];

let [firstColor, secondColor, ...otherColors] = colors;

console.log("First Color:", firstColor);       // "red"
console.log("Second Color:", secondColor);     // "green"
console.log("Other Colors:", otherColors);     // ["blue", "yellow", "purple"]



// davaleba 2
let user = {
  name: "ნიკა",
  age: 25,
  country: "საქართველო"
};
let { name, country } = user;
console.log("სახელი:", name);
console.log("ქვეყანა:", country);




// davaleba 3
let book = {
  title: "The Great Gatsby",
};
let { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle);
console.log(bookAuthor);



// davaleba 4
let person = {
  name: "Nika",
  age: 25,
  address: {
    city: "Tbilisi",
    zip: "0102"
  }
};
let {
  address: { city }
} = person;

console.log(city);



// davaleba 5
function getObj(Obj) {
  let { name, age } = Obj
  return "User: ${name}, Age: ${age}";
}
console.log(getObj({ name: Nino, Age: 25}))