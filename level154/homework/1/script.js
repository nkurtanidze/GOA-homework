const { useEffect } = React;

    function App() {
      useEffect(() => {
        console.log("Component mounted");
      }, []);

      return <h1>Hello</h1>;
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);