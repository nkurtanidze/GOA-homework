let hourState = new Date().getHours();
    let text = document.getElementById("text");
    if (hourState < 12) {
        text.textContent = "Good Morning";
    } else {
         text.textContent = "Good Evening";
    }