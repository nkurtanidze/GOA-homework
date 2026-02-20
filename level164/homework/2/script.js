const { useState, useContext, createContext } = React;
    const FontSizeContext = createContext();
    function TextComponent() {
      const fontSize = useContext(FontSizeContext);

      return (
        <p style={{ fontSize: fontSize + "px" }}>
          ეს ტექსტი იყენებს Context-ის fontSize მნიშვნელობას
        </p>
      );
    }
    function App() {
      const [fontSize, setFontSize] = useState(16);

      return (
        <FontSizeContext.Provider value={fontSize}>
          <div>
            <h2>Font Size: {fontSize}px</h2>

            <button onClick={() => setFontSize(fontSize + 2)}>
              გაზარდე
            </button>

            <button onClick={() => setFontSize(fontSize - 2)}>
              შეამცირე
            </button>

            <TextComponent />
          </div>
        </FontSizeContext.Provider>
      );
    }
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);