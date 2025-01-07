function changeToZeros(number) {
    let strNumber = number.toString();
    if (strNumber.length === 1) {
        return number;
    }
    let newNumber = strNumber[0] + '0'.repeat(strNumber.length - 1);
    return parseInt(newNumber);
}

let inputNumber = prompt("შეიყვანეთ რიცხვი:");
let result = changeToZeros(inputNumber);
alert("შეცვლილი რიცხვი: " + result + 1);
