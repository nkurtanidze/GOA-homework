const { useRef } = React;

function App() {
  const boxRef = useRef(null);

  function changeColor() {
    boxRef.current.style.backgroundColor = "red";
  }

  return (
    React.createElement("div", null,
      React.createElement("div", {
        ref: boxRef,
        style: {
          width: "100px",
          height: "100px",
          backgroundColor: "gray",
          marginBottom: "10px"
        }
      }),
      React.createElement("button", { onClick: changeColor }, "შეცვალე ფერი")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));