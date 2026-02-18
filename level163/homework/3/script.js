const { createContext, useContext, useState } = React;
    const LanguageContext = createContext();
    function Greeting() {
      const language = useContext(LanguageContext);

      return (
        React.createElement(
          "h1",
          null,
          language === "ka" ? "გამარჯობა" : "Hello"
        )
      );
    }
    function App() {
      const [language, setLanguage] = useState("ka");

      return (
        React.createElement(
          LanguageContext.Provider,
          { value: language },
          React.createElement("div", null,
            React.createElement(Greeting, null),
            React.createElement("button", {
              onClick: () => setLanguage("ka")
            }, "ქართული"),
            React.createElement("button", {
              onClick: () => setLanguage("en"),
              style: { marginLeft: "10px" }
            }, "English")
          )
        )
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(App))