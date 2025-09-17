function checkWord() {
      const value = document.getElementById("wordInput").value.trim();
      const result = document.getElementById("result");

      if (value.toLowerCase() === "hello") {
        result.textContent = "Welcome!";
      } else {
        result.textContent = "Try again!";
      }
    }