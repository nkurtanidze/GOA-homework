document.getElementById("submitButton").addEventListener("click", function() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = parseInt(document.getElementById("age").value);
    const result = document.getElementById("result");

    if (!firstName || !lastName || isNaN(age)) {
        result.textContent = "გთხოვთ შეავსოთ ყველა ველი სწორად!";
        result.style.color = "red";
        return;
    }

    if (age >= 18) {
        result.textContent = `მოგესალმებით, ${firstName} ${lastName}. თქვენ სრულწლოვანი ხართ.`;
        result.style.color = "green";
    } else {
        result.textContent = `ბოდიში, ${firstName} ${lastName}, თქვენ არ შეგიძლიათ ამ პროგრამის გამოყენება.`;
        result.style.color = "orange";
    }
});

