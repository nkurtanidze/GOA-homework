const { createContext, useContext } = React;
    const UserContext = createContext();
    function Child() {
      const user = useContext(UserContext);

      return (
        React.createElement("h1", null, user.name)
      );
    }
    function App() {
      return (
        React.createElement(
          UserContext.Provider,
          { value: { name: "Giga" } },
          React.createElement(Child)
        )
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(App));