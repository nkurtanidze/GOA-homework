const { useState, useEffect } = React;

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttledValue;
}

function App() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScroll = useThrottle(scrollY, 500);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return React.createElement("div", { style: { height: "2000px" } },
    React.createElement("h1", null, "Scroll: " + throttledScroll)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));