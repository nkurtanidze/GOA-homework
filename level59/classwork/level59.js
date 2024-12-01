// davaleba 1
console.log(5 > 3);   // true
console.log(4 < 7);   // true
console.log(10 === 10); // true
console.log(8 !== 9); // true
console.log(6 >= 5);  // true

console.log(2 > 5);   // false
console.log(3 < 1);   // false
console.log(7 === 8); // false
console.log(4 !== 4); // false
console.log(5 <= 3);  // false


// davaleba 2
function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const isChecked = document.getElementById('agree').checked;

    console.log('სახელი:', firstName);
    console.log('გვარი:', lastName);
    console.log('checkbox სტატუსი:', isChecked);}