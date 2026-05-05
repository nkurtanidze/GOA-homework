const { useRef, useState, useEffect } = React;

function useHover() {
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onEnter = () => setIsHover(true);
    const onLeave = () => setIsHover(false);

    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return [ref, isHover];
}

function App() {
  const [ref, isHover] = useHover();

  return React.createElement("div", {
    ref,
    style: {
      width: "200px",
      height: "200px",
      background: isHover ? "green" : "gray"
    }
  }, isHover ? "Hovering" : "Hover me");
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));