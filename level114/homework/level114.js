// davaleba 1
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = 0; // საწყისი ფასი
    this.price = price; // გამოიყენებს setter-ს
  }

  // Getter
  get price() {
    return this._price;
  }

  // Setter
  set price(value) {
    if (value < 0) {
      console.error("ფასი არ შეიძლება იყოს უარყოფითი რიცხვი.");
    } else {
      this._price = value;
    }
  }
}

const product1 = new Product("Laptop", 1500);
console.log(product1.price); // 1500

product1.price = -300; // შეცდომის შეტყობინება: ფასი არ შეიძლება იყოს უარყოფითი რიცხვი.
console.log(product1.price); // 1500 (არ შეცვლილა)



// davaleba 2
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter ფართობისთვის
  get area() {
    return this._width * this._height;
  }

  // Setter ზომებისთვის (იღებს ობიექტს {width, height})
  set dimensions({ width, height }) {
    if (typeof width === 'number' && typeof height === 'number') {
      this._width = width;
      this._height = height;
    } else {
      throw new Error("dimensions must be an object with numeric width and height");
    }
  }

  get dimensions() {
    return { width: this._width, height: this._height };
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.dimensions = { width: 7, height: 3 };
console.log(rect.area); // 21



// davaleba 3
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1] || '';
  }
}

const user = new User("Nika", "Nikadze");

console.log(user.fullName); // "Nika Nikadze"

user.fullName = "Giorgi Giorgadze";
console.log(user.firstName); // "Giorgi"
console.log(user.lastName);  // "Giorgadze"



// davaleba 4
class MathHelper {
  static sum(a, b) {
    return a + b;
  }
}

const result = MathHelper.sum(5, 7);
console.log(result); // 12




// davaleba 5
class Account {
  #balance;  // private property

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  // Getter for balance
  get balance() {
    return this.#balance;
  }

  // Setter for balance with some validation
  set balance(amount) {
    if (typeof amount !== 'number' || amount < 0) {
      throw new Error('Balance must be a non-negative number');
    }
    this.#balance = amount;
  }
}

const acc = new Account(100);
console.log(acc.balance); // 100

acc.balance = 200;
console.log(acc.balance); // 200