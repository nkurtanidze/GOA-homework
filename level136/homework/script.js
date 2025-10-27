// 1) რა არის TypeScript
// TypeScript (TS) არის JavaScript-ის სუპერ-სეტზე შექმნილი ენა, რომელიც კონტროლირებს ტიპებს.
//  ის საშუალებას გვაძლევს გვქონდეს სტატიკური ტიპები, რაც თავიდან გვიცავს შეცდომებს.


// 2) განსხვავება JavaScript-სა და TypeScript-ს შორის
// JavaScript	TypeScript
// დინამიური ტიპები	სტატიკური ტიპები
// შეცდომები ირკვევა მხოლოდ রান-ტაიმში	შეცდომები ირკვევა კომპილაციის დროს
// ენა უბრალოდ ტექსტური	ენა უზრუნველყოფს type checking-ს
// გამოიყენება ვებ-პროგრამირებაში	გამოიყენება ვებ-პროგრამირებაში + დიდი პროექტების მართვაში


// 3) ტიპები TypeScript-ში
// number – რიცხვი (let a: number = 10;)
// string – ტექსტი (let name: string = "Nika";)
// boolean – true/false (let isActive: boolean = true;)
// any – ნებისმიერი ტიპი (let x: any = 5;
// array – ელემენტების სია (let nums: number[] = [1,2,3];)
// tuple – ფიქსირებული ტიპების და სიგრძის მასივი (let user: [string, number] = ["Nika", 25];)
// enum – კოორდინირებული კონსტანტები (enum Colors {Red, Green, Blue})
// void – ფუნქცია არ აბრუნებს მნიშვნელობას (function log(): void { console.log("Hi"); })
// null / undefined – არვნება (let x: null = null; let y: undefined = undefined;)


// 4)
// let age: number = 25;   // ცვლადი, ტიპი number
// const name: string = "Nika";  // ფინალური ცვლადი, string ტიპი


// 5)
let num1 = 5;
let num2 = 10;
console.log(num1 + num2); // 15


// 6)
let text = "გამარჯობა";
text = 10;
console.log(text);


// 7)
function sayHello() {
    console.log("გამარჯობა");
}
sayHello();



// 8)
function logMessage() {
    console.log("ეს ფუნქცია არაფერს არ აბრუნებს");
}


// 9)
function sumFive(a, b, c, d, e) {
    return a + b + c + d + e;
}
console.log(sumFive(1, 2, 3, 4, 5)); // 15



// 10)
let numbers = [1, 2, 3, 4, 5]; // ეს არის array



// 11)
let numberList = [10, 20, 30, 40, 50];


// 12)
let names = ["Nika", "Luka", "Tiko", "Mariam"];


// 13)
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray(names);


// 14)
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1,2,3], [4,5,6])); 


// 15)
let userTuple = ["Nika", 25, true];


// 16)
let user = ["Nika", 12345, 2000];
console.log(user);
