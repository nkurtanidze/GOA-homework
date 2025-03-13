// davaleba 1
function changeLogo(language) {
    let logo = document.getElementById('logo');
    let logos = {
        react: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        javascript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        html: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        css: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
    };
    logo.src = logos[language];
}


// davaleba 2
const input = prompt("შეიყვანეთ ტექსტი:");
const x = parseInt(prompt("შეიყვანეთ გამეორების რაოდენობა:"), 10);

if (!isNaN(x) && x > 0) {
    console.log(input.repeat(x));
} else {
    console.log("გთხოვთ, შეიყვანოთ სწორი რაოდენობა.");
}




// davaleba 3
function calculateSum() {
    const input = document.getElementById("numbersInput").value;
    const numbersArray = input.split(",").map(num => parseFloat(num.trim())); 

    let sum = 0;
    numbersArray.forEach(number => {
        if (!isNaN(number)) {
            sum += number;
        }
    });

    document.getElementById("result").innerText = `ჯამი: ${sum}`;
}
