const { useState, useEffect } = React;

function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(!document.hidden);

  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return isVisible;
}

function App() {
  const isVisible = usePageVisibility();

  return React.createElement("h1", null,
    isVisible ? "Tab is active" : "Tab is hidden"
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));