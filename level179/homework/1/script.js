const { useState, useCallback } = React;

    function useToggle(initialValue = false) {
      const [value, setValue] = useState(initialValue);

      const toggle = useCallback(() => {
        setValue(prev => !prev);
      }, []);

      const setTrue = useCallback(() => setValue(true), []);
      const setFalse = useCallback(() => setValue(false), []);

      return { value, toggle, setTrue, setFalse };
    }

    function App() {
      const { value, toggle, setTrue, setFalse } = useToggle(false);

      return (
        <div>
          <h2>useToggle</h2>
          <p>{value ? "ON" : "OFF"}</p>

          <button onClick={toggle}>Toggle</button>
          <button onClick={setTrue}>True</button>
          <button onClick={setFalse}>False</button>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);