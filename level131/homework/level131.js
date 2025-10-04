// 1) localStorage – გამოიყენება ბრაუზერში მონაცემების შესანახად (მუდმივად). 
// მონაცემები არ იშლება გვერდის გადატვირთვის ან დახურვის შემდეგაც.

// 2) localStorage-ს მეთოდები:
// setItem(key, value)   -> მონაცემის შენახვა
// getItem(key)          -> მონაცემის წამოღება
// removeItem(key)       -> კონკრეტული მონაცემის წაშლა
// clear()               -> ყველა მონაცემის წაშლა
// key(index)            -> დაბრუნებს კონკრეტულ key-ს ინდექსის მიხედვით

// 3) მეთოდების ახსნა:
// setItem()   -> ინახავს მონაცემს key-value ფორმატში
// getItem()   -> აბრუნებს მნიშვნელობას key-ს მიხედვით
// removeItem()-> შლის კონკრეტულ key-ს
// clear()     -> შლის მთელ localStorage-ს
// key()       -> აბრუნებს კონკრეტულ key-ს სახელწოდებას

// 4) როგორ შევინახოთ მონაცემი localStorage-ში:
localStorage.setItem("age", 20);

// 5) როგორ წამოვიღოთ მონაცემი localStorage-დან:
let age = localStorage.getItem("age");
console.log(age); // 20

// 6) სად შეგვიძლია ვნახოთ შენახული მონაცემები?
// Chrome -> Inspect -> Application -> Local Storage

// 7) ისევ მაგალითი წამოღებაზე:
let myAge = localStorage.getItem("age");
console.log(myAge);

// 8) შენახე localStorage-ში შენი სახელი, key–ს სახელად "name".
localStorage.setItem("name", "Nika");
// წამოიღე ეს მნიშვნელობა და გამოიტანე კონსოლში
let myName = localStorage.getItem("name");
console.log(myName); // "Nika"

// 9) შექმენი 2 input და შეინახე localStorage-ში
// (HTML კოდი):
/*
<input id="input1" placeholder="Write something">
<input id="input2" placeholder="Write something else">
<button onclick="saveData()">Save</button>
*/

function saveData() {
  let val1 = document.getElementById("input1").value;
  let val2 = document.getElementById("input2").value;

  localStorage.setItem("input1", val1);
  localStorage.setItem("input2", val2);
}

// როდესაც დაარეფრეშებ საიტს, localStorage-ში მონაცემი დარჩება
// შეგიძლია input ველებში ჩასვა ისევ
document.getElementById("input1").value = localStorage.getItem("input1") || "";
document.getElementById("input2").value = localStorage.getItem("input2") || "";

// 10) array შენახვა და წამოღება
let numbers = [1, 2, 3, 4, 5];

// array შენახვა JSON სტრინგად
localStorage.setItem("numbers", JSON.stringify(numbers));

// array წამოღება და parse обратно
let savedNumbers = JSON.parse(localStorage.getItem("numbers"));
console.log(savedNumbers); // [1, 2, 3, 4, 5]
