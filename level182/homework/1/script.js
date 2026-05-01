const { useState, useEffect, useRef } = React;

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function App() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);

  return (
    React.createElement("div", null,
      React.createElement("h2", null, "Current: " + count),
      React.createElement("h3", null, "Previous: " + prev),
      React.createElement("button", { onClick: () => setCount(count + 1) }, "Increment")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));