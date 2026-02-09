const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
      name: document.getElementById("nameInput").value,
      email: document.getElementById("emailInput").value,
      password: document.getElementById("passwordInput").value,
      age: document.getElementById("ageInput").value
    };

    console.log(data);
    alert("Form submitted! Check console.");
  });