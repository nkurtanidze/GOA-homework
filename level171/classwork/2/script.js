const { useRef } = React;

function App() {
  const inputRef = useRef(null);

  function selectText() {
    inputRef.current.select();
  }

  return (
    React.createElement("div", null,
      React.createElement("input", {
        ref: inputRef,
        defaultValue: "Hello World"
      }),
      React.createElement("br"),
      React.createElement("button", { onClick: selectText }, "მონიშნე ყველაფერი")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));