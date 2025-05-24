// 1. სკოპი (Scope)
// var – აქვს ფუნქციის სკოპი (მხოლოდ function {} ბლოკშია ხილული)

// let და const – აქვთ ბლოკის სკოპი (ნებისმიერ {} ბლოკში მოქმედებს)

// 2. ხელახალი მინიჭება (Reassignment)
// var და let – შესაძლებელია

// const – შეუძლებელია

// 3. ხელახალი გამოცხადება (Redeclaration)
// var – შესაძლებელია იმავე სკოპში

// let და const – შეუძლებელია იმავე სკოპში

// 4. ჰოისტინგი (Hoisting)
// სამივე ცვლადი „ჰოისტდება“ (გადის ზემოთ),
// მაგრამ:

// var → განისაზღვრება როგორც undefined

// let და const → ReferenceError, თუ გამოცხადებამდე გამოიძახებ


// 1. var
function varExample() {
  if (true) {
    var name = "Giorgi"; // 'var' აქვს ფუნქციის სკოპი
  }
  console.log(name); // Giorgi - ჩანს ფუნქციის მთელ შიგნით
}
varExample();


// 2. let
function letExample() {
  if (true) {
    let age = 25; // 'let' აქვს ბლოკის სკოპი
    console.log(age); // 25
  }
  // console.log(age); // ReferenceError: age is not defined
}
letExample();


// 3. const
function constExample() {
  if (true) {
    const country = "Georgia"; // 'const' არ იცვლება მინიჭების შემდეგ
    console.log(country); // Georgia

    // country = "USA"; // TypeError: Assignment to constant variable.
  }
}
constExample();


// 4. ხელახალი გამოცხადება
var a = 10;
var a = 20; // შესაძლებელია

let b = 10;
// let b = 20; // შეცდომა: Identifier 'b' has already been declared

const c = 10;
// const c = 20; // შეცდომა: Identifier 'c' has already been declared

// 5. ხელახალი მინიჭება
let x = 5;
x = 10; // ნებადართულია

const y = 7;
// y = 15; // შეცდომა: Assignment to constant variable.
