function numbers(num1, num2) {
    if (num1 % 2 !== 0 && num1 > num2 && num2 % 2 === 0) {
        return true;
    }
    return false;
}
// num1 % 2 !== 0  რიცხვი კენტია.
// num1 > num2 პირველი რიცხვი მეტია მეორე რიცხვზე.
// num2 % 2 === 0  მეორე რიცხვი ლუწია.
