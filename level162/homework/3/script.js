const { createContext, useContext } = React;
    const ColorContext = createContext();

    function App() {
      return (
        <ColorContext.Provider value="red">
          <Box />
        </ColorContext.Provider>
      );
    }

    function Box() {
      return (
        <div>
          <Text />
        </div>
      );
    }

    function Text() {
      const color = useContext(ColorContext);

      return (
        <h1 style={{ color: color }}>
          This text is red using useContext!
        </h1>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);