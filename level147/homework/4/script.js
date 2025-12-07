const { useState } = React;
    function App() {
      const [theme, setTheme] = useState("light");

      const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
      };

      return (
        React.createElement("div", { className: "container" },
          React.createElement("div", { className: `box ${theme}` }, theme.toUpperCase()),
          React.createElement("button", { onClick: toggleTheme }, "Toggle Theme")
        )
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(App));