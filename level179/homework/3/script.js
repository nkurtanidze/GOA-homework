const { useState, useEffect } = React;

    function useDebounce(value, delay = 500) {
      const [debounced, setDebounced] = useState(value);

      useEffect(() => {
        const timeout = setTimeout(() => {
          setDebounced(value);
        }, delay);

        return () => clearTimeout(timeout);
      }, [value, delay]);

      return debounced;
    }

    function App() {
      const [text, setText] = useState("");
      const debouncedText = useDebounce(text, 1000);

      return (
        <div>
          <h2>Debounce</h2>

          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type..."
          />

          <p>Typing: {text}</p>
          <p>Debounced: {debouncedText}</p>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);