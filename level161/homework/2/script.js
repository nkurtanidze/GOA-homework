const form = document.getElementById("emailForm");
    const emailInput = document.getElementById("emailInput");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = emailInput.value;
            alert("Your email is: " + email);
        });