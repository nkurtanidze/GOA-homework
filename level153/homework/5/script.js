const input = document.getElementById("usernameInput");
    const greeting = document.getElementById("greeting");

    input.addEventListener("input", () => {
      const name = input.value.trim();
      greeting.textContent = name ? `Hello, ${name}` : "";
    });