const { useEffect, useRef } = React;

function useEventListener(eventType, callback, element = window) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!element) return;

    const handler = (e) => savedCallback.current(e);

    element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

function App() {
  const boxRef = React.useRef();

  useEventListener("click", () => {
    alert("Clicked anywhere!");
  });

  return React.createElement("div", null,
    React.createElement("h1", null, "Click anywhere")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));