// davaleba 1
function Bank(owner, initialAmount) {
    this.owner = owner; // მფლობელის სახელი
    this.balance = initialAmount; // საწყისი თანხა
  
    // თანხის შეტანა
    this.deposit = function (amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`${amount} ₾ წარმატებით ჩაირიცხა.`);
      } else {
        console.log("შეყვანილი თანხა უნდა იყოს დადებითი.");
      }
    };
  
    // თანხის გამოტანა
    this.withdraw = function (amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`${amount} ₾ წარმატებით გაიტანეთ.`);
      } else if (amount > this.balance) {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა.");
      } else {
        console.log("შეყვანილი თანხა უნდა იყოს დადებითი.");
      }
    };
  
    // თანხის ჩვენება
    this.showBalance = function () {
      console.log(`${this.owner}: ${this.balance} ₾`);
    };
  }
  
  // მაგალითი
  const myBank = new Bank("გიორგი", 1000);
  myBank.showBalance(); // გიორგი: 1000 ₾
  myBank.deposit(500); // 500 ₾ წარმატებით ჩაირიცხა.
  myBank.showBalance(); // გიორგი: 1500 ₾
  myBank.withdraw(300); // 300 ₾ წარმატებით გაიტანეთ.
  myBank.showBalance(); // გიორგი: 1200 ₾
  



// davaleba 2
function Animal(name, species, age) {
    this.name = name; // სახელი
    this.species = species; // სახეობა
    this.age = age; // ასაკი

    this.describe = function() {
      return `${this.name} არის ${this.species}, რომელიც არის ${this.age} წლის.`;
    };
  }
  
  // მაგალითი
  const dog = new Animal("ბიმი", "ძაღლი", 3);
  console.log(dog.describe()); // ბიმი არის ძაღლი, რომელიც არის 3 წლის.
  
  const cat = new Animal("მიუზი", "კატა", 2);
  console.log(cat.describe()); // მიუზი არის კატა, რომელიც არის 2 წლის.
  