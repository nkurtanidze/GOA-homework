const { useEffect, useRef } = React;

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

function App() {
  const boxRef = useRef();

  useOutsideClick(boxRef, () => {
    alert("Clicked outside!");
  });

  return (
    React.createElement("div", null,
      React.createElement("div", {
        ref: boxRef,
        style: { width: "200px", height: "200px", background: "lightblue" }
      }, "Click outside me")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));