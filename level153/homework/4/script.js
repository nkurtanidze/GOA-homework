function updateText() {
      const input = document.getElementById("textInput").value;
      document.getElementById("outputText").textContent = input || "აქ გამოჩნდება ტექსტი";
    }