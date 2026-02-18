const { createContext, useContext } = React;
    const CounterContext = createContext();
    function CounterProvider({ children }) {
      const count = 0;

      return (
        <CounterContext.Provider value={count}>
          {children}
        </CounterContext.Provider>
      );
    }
    function ComponentOne() {
      const count = useContext(CounterContext);

      return <h2>Component One Count: {count}</h2>;
    }
    function ComponentTwo() {
      const count = useContext(CounterContext);

      return <h2>Component Two Count: {count}</h2>;
    }
    function App() {
      return (
        <CounterProvider>
          <h1>Counter from Context</h1>
          <ComponentOne />
          <ComponentTwo />
        </CounterProvider>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);