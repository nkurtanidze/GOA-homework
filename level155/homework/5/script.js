function generateNumber() {
            let randomNumber = Math.floor(Math.random() * 10) + 1;

            let result = document.getElementById("result");

            if (randomNumber === 7) {
                result.textContent = randomNumber + " → You won!";
            } else {
                result.textContent = randomNumber;
            }
        }