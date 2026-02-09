function validateForm(event) {
      const checkbox = document.getElementById("agreeCheckbox");
      if (!checkbox.checked) {
        alert("გთხოვთ, დაეთანხმოთ პირობებს!");
        event.preventDefault();
      }
    }