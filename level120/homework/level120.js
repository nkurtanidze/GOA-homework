// 1
let people = new Map();
people.set("Giorgi", 25);
people.set("Nino", 30);
people.set("Luka", 22);

people.set("Giorgi", 26);

people.delete("Nino");

console.log("People Map:", people);


// 2
let books = new Map();
books.set("The Alchemist", "Paulo Coelho");
books.set("1984", "George Orwell");
books.set("To Kill a Mockingbird", "Harper Lee");

for (let [title, author] of books) {
  console.log(`${title} - ${author}`);
}


// 3
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

let students = new Map();
students.set(101, new Student("Ana", "A"));
students.set(102, new Student("Davit", "B"));
students.set(103, new Student("Lika", "A+"));

for (let [id, student] of students) {
  console.log(`ID: ${id}, Name: ${student.name}, Grade: ${student.grade}`);
}


// 4
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let products = new Map();
products.set("p1", new Product("Laptop", 1200));
products.set("p2", new Product("Phone", 800));
products.set("p3", new Product("Headphones", 150));

for (let [key, product] of products) {
  console.log(`${product.name} Price: $${product.price}`);
}



// 5
let text = "apple banana apple orange banana apple";
let wordCount = new Map();

let words = text.split(" ");

for (let word of words) {
  if (wordCount.has(word)) {
    wordCount.set(word, wordCount.get(word) + 1);
  } else {
    wordCount.set(word, 1);
  }
}

for (let [word, count] of wordCount) {
  console.log(`${word}: ${count}`);
}
