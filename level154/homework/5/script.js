const { useEffect, useState } = React;

    function App() {
      const [show, setShow] = useState(true);

      return (
        <div>
          <button onClick={() => setShow(!show)}>
            Toggle Component
          </button>

          {show && <Test />}
        </div>
      );
    }

    function Test() {
      useEffect(() => {
        console.log("Component mounted");

        return () => {
          console.log("Component unmounted");
        };
      }, []);

      return <h2>Open console 👀</h2>;
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);