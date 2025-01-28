// მანქანის კონსტრუქტორი
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  
    this.displayInfo = function () {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    };
  }
  
  // მანქანის ობიექტები
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("BMW", "X5", 2021);
  const car3 = new Car("Mercedes", "C-Class", 2022);
  
  // ცხოველის კონსტრუქტორი
  function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  
    this.makeSound = function () {
      console.log(`${this.name} makes a sound!`);
    };
  }
  
  // ცხოველის ობიექტები
  const animal1 = new Animal("Leo", "Lion", 5);
  const animal2 = new Animal("Bella", "Cat", 3);
  const animal3 = new Animal("Max", "Dog", 2);
  
  // მოსწავლის კონსტრუქტორი
  function Student(name, grade, subject) {
    this.name = name;
    this.grade = grade;
    this.subject = subject;
  
    this.study = function () {
      console.log(`${this.name} is studying ${this.subject}.`);
    };
  }
  
  // მოსწავლის ობიექტები
  const student1 = new Student("Anna", "A", "Math");
  const student2 = new Student("Luka", "B", "History");
  const student3 = new Student("Maya", "A", "Science");
  
  // მონაცემების გამოტანა
  console.log("Cars:");
  car1.displayInfo();
  car2.displayInfo();
  car3.displayInfo();
  
  console.log("\nAnimals:");
  animal1.makeSound();
  animal2.makeSound();
  animal3.makeSound();
  
  console.log("\nStudents:");
  student1.study();
  student2.study();
  student3.study();
  