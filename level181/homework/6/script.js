const { useState, useEffect } = React;

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();

  return <h2>Width: {width}px</h2>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);