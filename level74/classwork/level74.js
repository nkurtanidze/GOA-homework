// davaleba 1
// ადამიანის კონსტრუქტორი ფუნქცია
class Person {
    constructor(id, name, age, height) {
      this.id = id;          // უნიკალური ID
      this.name = name;      // სახელი
      this.age = age;        // ასაკი
      this.height = height;  // სიმაღლე
    }
  
    // ობიექტის დეტალების ტექსტის სახით დაბრუნება
    getInfo() {
      return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Height: ${this.height}m`;
    }
  }
  
  // სამი ობიექტის შექმნა
  const person1 = new Person(1, "გიორგი", 25, 1.80);
  const person2 = new Person(2, "ანა", 30, 1.65);
  const person3 = new Person(3, "ლუკა", 20, 1.75);


// davaleba 2
// Owner კლასი ადამიანის ობიექტისთვის
class Owner {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Car კლასი მანქანის ობიექტისთვის
class Car {
    constructor(name, year, engine, horsepower, color, owner) {
        this.name = name;
        this.year = year;
        this.engine = engine;
        this.horsepower = horsepower;
        this.color = color;
        this.owner = owner; // მფლობელი უნდა იყოს Owner ობიექტი
    }

    // მანქანის მონაცემების ჩვენების მეთოდი
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Engine: ${this.engine}`);
        console.log(`Horsepower: ${this.horsepower} HP`);
        console.log(`Color: ${this.color}`);
        console.log(`Owner: ${this.owner.name}, Age: ${this.owner.age}`);
        console.log('-------------------------');
    }
}

// Owner ობიექტები
const owner1 = new Owner("George", 35);
const owner2 = new Owner("Sophia", 28);
const owner3 = new Owner("Alex", 40);

// Car ობიექტები
const car1 = new Car("Toyota Camry", 2020, "2.5L", 203, "Black", owner1);
const car2 = new Car("BMW M3", 2022, "3.0L Turbo", 473, "Blue", owner2);
const car3 = new Car("Audi A6", 2019, "3.0L V6", 335, "White", owner3);
