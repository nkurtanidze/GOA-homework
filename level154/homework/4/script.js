const { useEffect } = React;

    function App() {

      useEffect(() => {
        setTimeout(() => {
          console.log("Hello after 2 seconds");
        }, 2000);
      }, []);

      return (
        <h1>Check console after 2 seconds</h1>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);