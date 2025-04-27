function checkAge() {
    var age = document.getElementById("age").value;
    if (age >= 18) {
        document.body.style.backgroundColor = "green";  // მწვანე ფერი
    } else if (age > 0) {
        document.body.style.backgroundColor = "red";  // წითელი ფერი
    } else {
        document.body.style.backgroundColor = "";  // ნეიტრალური ფერი
    }
}