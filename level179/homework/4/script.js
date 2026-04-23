const { useState, useEffect } = React;

    function useScrollPosition() {
      const [scrollY, setScrollY] = useState(window.scrollY);

      useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return scrollY;
    }

    function App() {
      const scrollY = useScrollPosition();

      return (
        <div style={{ height: "2000px" }}>
          <h2>Scroll Tracker</h2>
          <p>Scroll Y: {scrollY}px</p>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);