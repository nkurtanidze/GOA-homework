const { createContext, useContext } = React;
    const NumberContext = createContext();
    function NumberProvider({ children }) {
      const number = 10;

      return (
        <NumberContext.Provider value={number}>
          {children}
        </NumberContext.Provider>
      );
    }
    function ShowNumber() {
      const num = useContext(NumberContext);

      return <h1>Number is {num}</h1>;
    }
    function App() {
      return (
        <NumberProvider>
          <ShowNumber />
        </NumberProvider>
      );
    }
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);