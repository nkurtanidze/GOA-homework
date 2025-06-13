// davaleba 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`მე ვარ ${this.name}, ${this.age} წლის.`);
  }
}

// davaleba 2
class Calculator {
    constructor(a,b) {
    this.a = a;
    this.b = b;
    }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (this.b !== 0) {
            return this.a / this.b;
    } else{
        return "არ იყოფა ნულზე";
    }
  }
}
let nums = new Calculator(22, 55);

console.log(
    `Sum: ${nums.add()}; subtraction: ${nums.subtract()}; multiplytion: ${nums.multiply()}; division: ${nums.divide()}`
)


// davaleba 3
// Book კლასი, აქვს სათაური და ავტორი
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Library კლასი, რომელსაც აქვს წიგნების სია და მეთოდები
class Library {
  constructor() {
    this.books = [];
  }

  // წიგნის დამატება ბიბლიოთეკაში
  addBook(book) {
    this.books.push(book);
  }

  // ბეჭდავს ყველა წიგნის სათაურს და ავტორს
  listBooks() {
    if (this.books.length === 0) {
      console.log("ბიბლიოთეკა ცარიელია.");
      return;
    }

    this.books.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" ავტორი: ${book.author}`);
    });
  }
}


// davaleba 4
// მშობელი კლასი Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} რაღაც ხმას გამოსცემს`);
  }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}
let dog = new Dog("whof")
dog.bark()


// davaleba 5
class User {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log(`${this.username} ავტორიზებულია`);
  }
}
class Admin extends User {
  deleteUser(user) {
      console.log(`${user} წაიშალა`);
    }
}

let user1 =new User("Nika")
let admin1 = new Admin("Admin")