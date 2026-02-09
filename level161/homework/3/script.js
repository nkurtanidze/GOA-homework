const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      if (username.value === "" || password.value === "") {
        message.textContent = "Error: Please fill in all fields.";
        message.className = "message error";
      } else {
        message.textContent = "Login successful!";
        message.className = "message success";
      }
    });