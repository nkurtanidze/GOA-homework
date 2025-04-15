// davaleba 1
const button = document.getElementById('addDivBtn');

    button.addEventListener('click', function() {
      const newDiv = document.createElement('div');
      newDiv.classList.add('new-div');
      newDiv.textContent = 'ახალი ელემენტი დაემატა!';
      document.body.appendChild(newDiv);
    });



// davaleba 2
const shape = document.getElementById("shape");

    shape.addEventListener("click", () => {
      shape.classList.add("circle");

      setTimeout(() => {
        shape.classList.remove("circle");
      }, 1000); // 1 წამი შემდეგ დააბრუნოს კვადრატად
    });



// davaleba 3
const box = document.getElementById("box");
    const buton = document.getElementById("startButton");

    button.addEventListener("click", () => {
      const duration = prompt("შეიყვანეთ ანიმაციის ხანგრძლივობა წამებში:");
      const time = parseFloat(duration);

      if (isNaN(time) || time <= 0) {
        alert("გთხოვთ შეიყვანოთ სწორი რიცხვი.");
        return;
      }

      const totalTime = time * 1000;
      const partTime = totalTime / 4;

      // საწყისი პოზიცია
      box.style.transition = `none`;
      box.style.top = "100px";
      box.style.left = "100px";

      setTimeout(() => {
        // 1. მოძრაობა მარჯვნივ
        box.style.transition = `left ${partTime}ms linear`;
        box.style.left = "300px";
      }, 10);

      setTimeout(() => {
        // 2. მოძრაობა ქვემოთ
        box.style.transition = `top ${partTime}ms linear`;
        box.style.top = "300px";
      }, partTime + 10);

      setTimeout(() => {
        // 3. მოძრაობა მარცხნივ
        box.style.transition = `left ${partTime}ms linear`;
        box.style.left = "100px";
      }, partTime * 2 + 10);

      setTimeout(() => {
        // 4. მოძრაობა ზემოთ საწყის ადგილზე
        box.style.transition = `top ${partTime}ms linear`;
        box.style.top = "100px";
      }, partTime * 3 + 10);
    });




// davaleba 5
const text = "Hello World!"; // აქ შეცვალე ტექსტი სურვილისამებრ
const typingElement = document.getElementById("typing");
let index = 0;

function typeCharacter() {
  if (index <= text.length) {
    typingElement.textContent = text.substring(0, index);
    index++;
    setTimeout(typeCharacter, 150); // სიჩქარე (მილიწამებში)
  }
}

typeCharacter();