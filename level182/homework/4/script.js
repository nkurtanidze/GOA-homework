const { useState, useEffect, useRef } = React;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useInterval(() => {
    setCount(c => c + 1);
  }, running ? 1000 : null);

  return (
    React.createElement("div", null,
      React.createElement("h2", null, count),
      React.createElement("button", { onClick: () => setRunning(!running) },
        running ? "Stop" : "Start"
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));