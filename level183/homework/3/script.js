const { useRef } = React;

function useFocus() {
  const ref = useRef(null);

  const focus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, focus };
}

function App() {
  const { ref, focus } = useFocus();

  return React.createElement("div", null,
    React.createElement("input", { ref }),
    React.createElement("button", { onClick: focus }, "Focus input")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));