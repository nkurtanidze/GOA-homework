// davaleba 1
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function nearestLeapYear(year) {
    let nextYear = year + 1;
    let prevYear = year - 1;
    while (true) {
        if (isLeapYear(nextYear)) return nextYear;
        if (isLeapYear(prevYear)) return prevYear;
        nextYear++;
        prevYear--;
    }
}

function checkLeapYear(year) {
    if (isLeapYear(year)) {
        console.log(year + " - Yes");
    } else {
        let closestLeap = nearestLeapYear(year);
        console.log(year + " - No, closest leap year: " + closestLeap);
    }
}

const years = [2100, 2104, 2400];
years.forEach(checkLeapYear);



// davaleba 2
function sumOfDigits(number) {
    if (number < 100 || number > 999) {
        console.log("გთხოვთ, შეიყვანოთ სამნიშნა რიცხვი.");
        return;
    }
    
    let sum = 0;
    let temp = number;
    
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    
    return sum;
}
