// davaleba 1
function textInputSystem() {
    const enteredTexts = new Set(); // აქ ინახება შეყვანილი ტექსტები

    while (true) {
        const userText = prompt("შეიყვანეთ ტექსტი (ან 'გასვლა' დასასრულებლად):").trim();

        if (userText.toLowerCase() === "გასვლა") {
            alert("პროგრამა დასრულდა.");
            break;
        }

        if (enteredTexts.has(userText)) {
            alert("ეს ტექსტი უკვე გაქვთ შეყვანილი.\nმირჩევთ პროგრამა: 'es dawere js'");
        } else {
            enteredTexts.add(userText);
            alert(`ახალი ტექსტი '${userText}' წარმატებით შეინახა.`);
        }
    }
}

// ფუნქციის გამოძახება
textInputSystem();



// davaleba 2
function roundToZeros(inputNumber) {
    if (typeof inputNumber !== "number" || inputNumber < 0) {
        return "გთხოვთ, შეიყვანეთ პოზიტიური რიცხვი.";
    }

    let numberStr = inputNumber.toString();
    let firstDigit = numberStr[0];
    let targetNumber = parseInt(firstDigit + "0".repeat(numberStr.length - 1), 10);

    while (inputNumber < targetNumber) {
        inputNumber++;
    }

    return inputNumber;
}
let userInput = prompt("შეიყვანეთ რიცხვი:");
let number = parseInt(userInput, 10);

if (!isNaN(number)) {
    let result = roundToZeros(number);
    alert(`შედეგი: ${result}`);
} else {
    alert("გთხოვთ, შეიყვანეთ ვალიდური რიცხვი.");
}



// davaleba 3
let correctPassword = "12348765";
let userinput;

do {
    userinput = prompt("შეიყვანეთ პაროლი:");
} while (userinput !== correctPassword);

alert("პაროლი სწორია!");
