const { createContext, useContext } = React;
    const ColorContext = createContext();
    function ColorProvider({ children }) {
      const color = "blue";

      return (
        <ColorContext.Provider value={color}>
          {children}
        </ColorContext.Provider>
      );
    }
    function ColoredText() {
      const color = useContext(ColorContext);

      return (
        <h1 style={{ color: color }}>
          ეს ტექსტი არის {color} ფერის
        </h1>
      );
    }
    function App() {
      return (
        <ColorProvider>
          <ColoredText />
        </ColorProvider>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);