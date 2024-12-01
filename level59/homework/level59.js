function submitForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const terms = document.getElementById('terms').checked;
    const errorMessage = document.getElementById('errorMessage');

    if (!firstName || !lastName || !email || !password || !terms) {
        errorMessage.textContent = "გთხოვთ, შეავსოთ ყველა ველი.";
        return;
    }

    errorMessage.textContent = "";

    // ვალიდური მონაცემების გამოყვანა კონსოლში
    console.log("სახელი:", firstName);
    console.log("გვარი:", lastName);
    console.log("ელფოსტა:", email);
    console.log("პაროლი:", password);
    console.log("ეთანხმება წესებს და პირობებს:", terms);
}