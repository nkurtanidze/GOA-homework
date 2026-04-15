const { useState } = React;

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue(prev => !prev);

  return [value, toggle];
}

function App() {
  const [isOpen, toggle] = useToggle(false);

  return React.createElement("div", null,
    React.createElement("button", { onClick: toggle }, "Toggle"),
    isOpen && React.createElement("p", null, "Now you see me 👀")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));