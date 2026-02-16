const { createContext, useContext } = React;
    const MyContext = createContext();
    function Text() {
      const value = useContext(MyContext);
      return <h1>{value}</h1>;
    }
    function Box() {
      return (
        <div style={{ border: "2px solid black", padding: "20px" }}>
          <Text />
        </div>
      );
    }
    function App() {
      return (
        <MyContext.Provider value="Hello">
          <Box />
        </MyContext.Provider>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);