// davaleba 1
const names = ["Nino", "Giorgi", "Tamar", "Lasha", "Anano", "Sandro", "Megi"];

names.forEach(function(name) {
  if (name.length > 5) {
    console.log(name);
  }
});



// davaleba 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // საწყისი მასივი
const evenNumbers = []; // აქ შევინახავთ ლუწ რიცხვებს

numbers.forEach(function(number) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]



// davaleba 3
const products = {
  "ვაშლი": 5,
  "ბანანი": 12,
  "ფორთოხალი": 8,
  "ანანასი": 15,
  "მანგო": 20
};

for (const product in products) {
  if (products[product] > 10) {
    console.log(product);
  }
}




// davaleba 4
const studentScores = {
  math: 85,
  physics: 45,
  chemistry: 50,
  history: 72,
  geography: 40
};

let failedSubjects = 0;

for (let subject in studentScores) {
  if (studentScores[subject] < 51) {
    failedSubjects++;
  }
}

console.log("ჩაჭრილი საგნების რაოდენობაა:", failedSubjects);
