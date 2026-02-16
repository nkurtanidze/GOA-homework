const { createContext, useContext } = React;
    const MyContext = createContext();
    function MyProvider({ children }) {
      const text = "Hello Context";

      return (
        <MyContext.Provider value={text}>
          {children}
        </MyContext.Provider>
      );
    }
    function Child() {
      const value = useContext(MyContext);

      return <h1>{value}</h1>;
    }
    function App() {
      return (
        <MyProvider>
          <Child />
        </MyProvider>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);