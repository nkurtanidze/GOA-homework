// davaleba 1
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  bark() {
    return `Woof! მე ვარ ${this.name}`;
  }
}



// davaleba 2
class Vehicle {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(model, year, brand) {
    super(model, year);
    this.brand = brand;
  }

  getDescription() {
    return `ეს არის ${this.brand} ${this.model}, ${this.year}`;
  }
}



// davaleba 3
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }

  getInfo() {
    return `${this.getFullName()} - ${this.grade} კლასი`;
  }
}



// davaleba 4
class Shape {
  getArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}



// davaleba 5
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getInfo() {
    return `მე ვარ ${this.name}, ვმუშაობ ${this.department}-ში და ჩემი ხელფასია ${this.salary}`;
  }
}
