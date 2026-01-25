const { useEffect } = React;

    function App() {

      useEffect(() => {
        document.title = "My First useEffect";
      }, []);

      return (
        <h1>Hello React 👋</h1>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);