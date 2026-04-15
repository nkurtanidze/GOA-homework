const { useState } = React;

function App() {
  const [user, setUser] = useState({
    name: "Nika",
    age: 16,
    city: "Tbilisi"
  });

  const updateCity = () => {
    setUser(prev => ({
      ...prev,
      city: "Batumi"
    }));
  };

  return React.createElement("div", null,
    React.createElement("h2", null, user.name),
    React.createElement("p", null, "Age: " + user.age),
    React.createElement("p", null, "City: " + user.city),

    React.createElement("button", {
      onClick: updateCity
    }, "Update City")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));