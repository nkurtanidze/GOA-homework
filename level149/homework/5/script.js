let numbers = [1, 2, 3, 4, 5];
const list = document.getElementById("numberList");
function render() {
    list.innerHTML = "";

    numbers.forEach((num, index) => {
        const li = document.createElement("li");
        li.textContent = num;

        const btn = document.createElement("button");
        btn.textContent = "Remove";

        btn.addEventListener("click", () => {
            removeNumber(index);
        });

        li.appendChild(btn);
        list.appendChild(li);
    });
}
function removeNumber(index) {
    numbers.splice(index, 1);
    render();
}
render();
