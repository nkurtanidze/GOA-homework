// davaleba 1
const person1 = {
  name: "Giorgi",
  lastname: "Beridze",
  age: 25,
  height: 180,
  weight: 75,
  nationality: "Georgian",
  isStudent: false
};

console.log(person1);


// davaleba 2
// metodi 1
const calculator = {
  add: function(a, b) {
    return a + b;
  }
};

console.log(calculator.add(3, 4)); // 7

// metodi 2
class Calculator {
  subtract(a, b) {
    return a - b;
  }
}

const myCalc = new Calculator();
console.log(myCalc.subtract(10, 3)); // 7



// davaleba 3
// „this“ კლავიშს (keyword) პროგრამირებაში იყენებენ ობიექტზე ან მიმდინარე კონტექსტზე მითითებისთვის.
//  მისი მნიშვნელობა იცვლება იმ საფუძველზე, თუ სად და როგორ გამოიყენება.