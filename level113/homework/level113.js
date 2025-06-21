// davaleba 1
class Student {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // name-ის getter
  get name() {
    return this._name;
  }

  // name-ის setter
  set name(newName) {
    this._name = newName;
  }

  // age-ის getter
  get age() {
    return this._age;
  }

  // age-ის setter
  set age(newAge) {
    this._age = newAge;
  }
}

const student = new Student("Nika", 20);

console.log(student.name); // Nika
console.log(student.age);  // 20

student.name = "Ana";
student.age = 22;

console.log(student.name); // Ana
console.log(student.age);  // 22



// davaleba 2
class Book {
  constructor(title, author, pages) {
    this._title = title;
    this._author = author;
    this._pages = pages;
  }

  // Get მეთოდები
  getTitle() {
    return this._title;
  }

  getAuthor() {
    return this._author;
  }

  getPages() {
    return this._pages;
  }

  // Set მეთოდები
  setTitle(newTitle) {
    this._title = newTitle;
  }

  setAuthor(newAuthor) {
    this._author = newAuthor;
  }

  setPages(newPages) {
    this._pages = newPages;
  }
}

const myBook = new Book("ვეფხისტყაოსანი", "შოთა რუსთაველი", 300);

console.log(myBook.getTitle());   // ვეფხისტყაოსანი
console.log(myBook.getAuthor());  // შოთა რუსთაველი
console.log(myBook.getPages());   // 300

myBook.setPages(350);
console.log(myBook.getPages());   // 350



// davaaleba 3
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.getFullName = function() {
    return this.brand + " " + this.model;
  };

  this.setYear = function(newYear) {
    this.year = newYear;
  };
}

const myCar = new Car("Toyota", "Corolla", 2015);
console.log(myCar.getFullName()); // გამოიტანს: Toyota Corolla

myCar.setYear(2020);
console.log(myCar.year); // გამოიტანს: 2020



// davaleba 4
function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  // მეთოდი ფართობისთვის
  this.getArea = function() {
    return this.width * this.height;
  };

  // მეთოდი პერიმეტრისთვის
  this.getPerimeter = function() {
    return 2 * (this.width + this.height);
  };

  // width-ის შეცვლა
  this.setWidth = function(newWidth) {
    this.width = newWidth;
  };

  // height-ის შეცვლა
  this.setHeight = function(newHeight) {
    this.height = newHeight;
  };
}

const rect = new Rectangle(5, 10);
console.log("ფართობი:", rect.getArea());           // 50
console.log("პერიმეტრი:", rect.getPerimeter());    // 30

rect.setWidth(7);
rect.setHeight(3);
console.log("ახალი ფართობი:", rect.getArea());     // 21



// davaleba 5
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password; // ნამდვილი აპლიკაციებისთვის ამ პაროლს ჰეშირება სჭირდება
  }

  // Getters
  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }

  // Setters
  setUsername(newUsername) {
    this.username = newUsername;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  setPassword(newPassword) {
    this.password = newPassword; // ნამდვილი აპლიკაციებისთვის აქაც ჰეშირებაა საჭირო
  }

  // სასარგებლო მეთოდი პაროლის გადამოწმებისთვის
  checkPassword(inputPassword) {
    return this.password === inputPassword;
  }

  // ინფორმაციის დასაბეჭდად
  getInfo() {
    return `User: ${this.username}, Email: ${this.email}`;
  }
}

const user1 = new User("nika123", "nika@example.com", "mypassword");

console.log(user1.getUsername()); // "nika123"
user1.setPassword("newsecurepassword");
console.log(user1.checkPassword("mypassword")); // false
console.log(user1.checkPassword("newsecurepassword")); // true
console.log(user1.getInfo()); // "User: nika123, Email: nika@example.com"
