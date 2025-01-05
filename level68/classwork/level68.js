while (true) {
    // მომხმარებლის მიერ ორი რიცხვის შეყვანა
    let num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
    let num2 = prompt("შეიყვანეთ მეორე რიცხვი:");
    
    // მონაცემების გადამოწმება და ნამრავლის გამოთვლა
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = Number(num1) * Number(num2);
        alert(`რიცხვების ნამრავლი არის: ${result}`);
    } else {
        alert("გთხოვთ, შეიყვანეთ მხოლოდ რიცხვები.");
        continue; // თავიდან იწყებს ციკლს
    }
    
    // გამოსვლის ან გაგრძელების შემოწმება
    let command = prompt("გსურთ გაგრძელება? თუ არა, შეიყვანეთ 'exit':").trim().toLowerCase();
    if (command === "exit") {
        alert("პროგრამიდან გამოსვლა...");
        break;
    }
}
