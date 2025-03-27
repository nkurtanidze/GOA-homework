// davaleba 2
// მომხმარებლისგან ამოჭრის საწყისი და ბოლო ინდექსები
let userString = prompt("შეიტანეთ სტრინგი:");
let startIndex = parseInt(prompt("შეიტანეთ საწყისი ინდექსი:"));
let endIndex = parseInt(prompt("შეიტანეთ ბოლო ინდექსი:"));

// ამოჭრა სტრინგის
let slicedString = userString.slice(startIndex, endIndex);

// შედეგის გამოჩენა
console.log("ამოჭრილი სტრინგი:", slicedString);






// davaleba 5
function reverseWords(sentence) {
    // წინადადების გაყოფა სიტყვებად
    let words = sentence.split(' ');

    // თითოეული სიტყვა შემოტრიალება
    let reversedWords = words.map(word => word.split('').reverse().join(''));

    // სიტყვების დაბრუნება ერთიან წინადადებად
    return reversedWords.join(' ');
}

// გამოსაყენებელი მაგალითი
let sentence = "amis kodi damiwere";
let result = reverseWords(sentence);
console.log(result);
