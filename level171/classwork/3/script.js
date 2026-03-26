const { useRef } = React;

function App() {
  const textRef = useRef(null);

  function highlightText() {
    textRef.current.style.backgroundColor = "yellow";
  }

  return (
    React.createElement("div", null,
      React.createElement("p", { ref: textRef },
        "ეს არის ტექსტი, რომელსაც მარკერს გადავუსვამთ"
      ),
      React.createElement("button", { onClick: highlightText }, "მონიშნე ტექსტი")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));