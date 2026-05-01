const { useEffect, useState } = React;

function useKeyPress(targetKey) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    function downHandler(e) {
      if (e.key === targetKey) setPressed(true);
    }

    function upHandler(e) {
      if (e.key === targetKey) setPressed(false);
    }

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return pressed;
}

function App() {
  const enterPressed = useKeyPress("Enter");

  return (
    React.createElement("div", null,
      React.createElement("h2", null, enterPressed ? "Enter pressed!" : "Press Enter")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));