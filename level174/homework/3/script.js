const { useState } = React;

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password) {
      console.error("All fields are required!");
    } else {
      console.log(form);
    }
  };

  return React.createElement("div", null,
    React.createElement("input", {
      name: "name",
      placeholder: "Name",
      onChange: handleChange
    }),
    React.createElement("input", {
      name: "email",
      placeholder: "Email",
      onChange: handleChange
    }),
    React.createElement("input", {
      name: "password",
      placeholder: "Password",
      onChange: handleChange
    }),
    React.createElement("button", {
      onClick: handleSubmit
    }, "Submit")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));