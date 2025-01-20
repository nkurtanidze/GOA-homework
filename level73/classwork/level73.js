// დავალება 1
// ადამიანის ობიექტი
const person = {
    name: "გიორგი",
    age: 30,
    gender: "კაცი",
    occupation: "პროგრამისტი",
    city: "თბილისი"
};

// თვისების გამოტანა კონსოლში
console.log(person.name); // გამოჩნდება: გიორგი


// დავალება 2
// ობიექტის შექმნა
let obj = {
    'რიგი_0': [2, 4, 6, 8, 10],  // ლუწი რიცხვები
    'რიგი_1': [1, 3, 5, 7, 9]    // კენტი რიცხვები
  };
  
  // ციკლი ორივე მასივის გადასაყვანად და თითოეული ელემენტის ერთდროულად გამოტანას
  for (let i = 0; i < obj['რიგი_0'].length; i++) {
    console.log(obj['რიგი_0'][i], obj['რიგი_1'][i]);
  }
  
// დავალება 3
function createArray(obj) {
    const quantity = obj.quantity;
    const element = obj.element;
    const result = new Array(quantity).fill(element);

    return result;
}