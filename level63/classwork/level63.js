// // davaleba 1
// let counter = 0;

//         function getStepValue() {
//             const stepInput = document.getElementById('stepValue');
//             return parseInt(stepInput.value) || 1;
//         }

//         function updateDisplay() {
//             document.getElementById('counter').textContent = counter;
//         }

//         function incrementCounter() {
//             counter += getStepValue();
//             updateDisplay();
//         }

//         function decrementCounter() {
//             counter -= getStepValue();
//             updateDisplay();
//         }

//         function resetCounter() {
//             counter = 0;
//             updateDisplay();
//         }



// davaleba 2
let score = 0;
let pointsPerClick = 1;

const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');

cookie.addEventListener('click', () => {
    let previousScore = score;
    score += pointsPerClick;

    if (Math.floor(previousScore / 100) < Math.floor(score / 100)) {
        pointsPerClick *= 2;
    }

    scoreDisplay.textContent = score;
});