    let number = 0;
    const numberElement = document.getElementById("number");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    increaseBtn.addEventListener("click", () => {
      number++;
      numberElement.textContent = number;
    });

    decreaseBtn.addEventListener("click", () => {
      number--;
      numberElement.textContent = number;
    });