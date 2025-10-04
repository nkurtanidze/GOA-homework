let arr = [1, 2, 3];

localStorage.setItem("arr", JSON.stringify(arr));
let savedArr = JSON.parse(localStorage.getItem("arr")) || [];

console.log(savedArr);
