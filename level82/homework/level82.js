// davaleba 1
let timer;
let count = 1;
function startTimer() {
    const timeInput = document.getElementById("timeInput").value;
    const maxTime = parseInt(timeInput, 10);
    const display = document.getElementById("display");
    display.innerHTML = "";
    count = 1;

    if (isNaN(maxTime) || maxTime <= 0 || maxTime > 10000) {
        alert("Please enter a number between 1 and 10000.");
        return;
    }

    timer = setInterval(() => {
        if (count >= maxTime) {
            clearInterval(timer);
            display.innerHTML = "Time's up";
        } else {
            display.innerHTML = count;
            count++;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}




// davaleba 3
function showMessage() {
    const delay = document.getElementById("delay").value * 1000;
    const message = document.getElementById("message").value;
    const messageBox = document.getElementById("message-box");
    
    messageBox.style.display = "none";
    
    if (delay > 0 && message.trim() !== "") {
        setTimeout(() => {
            messageBox.innerText = message;
            messageBox.style.display = "block";
        }, delay);
    } else {
        alert("გთხოვთ შეიყვანოთ სწორი მონაცემები!");
    }
}