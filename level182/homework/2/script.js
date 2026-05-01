const { useState, useEffect } = React;

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

function App() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  return (
    React.createElement("div", null,
      React.createElement("input", {
        value: text,
        onChange: e => setText(e.target.value),
        placeholder: "Search..."
      }),
      React.createElement("p", null, "Debounced: " + debouncedText)
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));