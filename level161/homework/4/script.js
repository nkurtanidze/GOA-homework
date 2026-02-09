const formData = {
      name: "",
      email: "",
      age: ""
    };

    const form = document.getElementById("userForm");
    function handleChange(event) {
      const { name, value } = event.target;
      formData[name] = value;
      console.log(formData);
    }
    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => input.addEventListener("input", handleChange));
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert(`Submitted data:\nName: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}`);
    });