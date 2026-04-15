const { useState, useEffect } = React;

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

function App() {
  const [username, setUsername] = useLocalStorage("username", "");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return React.createElement("div", {
    style: {
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      height: "100vh",
      padding: "20px"
    }
  },
    React.createElement("input", {
      value: username,
      onChange: e => setUsername(e.target.value),
      placeholder: "Username"
    }),
    React.createElement("p", null, "Hello: " + username),

    React.createElement("button", {
      onClick: toggleTheme
    }, "Toggle Theme")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));