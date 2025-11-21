function ColorToggle() {
        const [color, setColor] = React.useState("lightblue");

        const toggleColor = () => {
          setColor(prevColor => prevColor === "lightblue" ? "lightcoral" : "lightblue");
        };

        return (
          <div>
            <div id="colorBox" style={{ backgroundColor: color }}>
              {color}
            </div>
            <button onClick={toggleColor}>ფერის შეცვლა</button>
          </div>
        );
      }

      ReactDOM.createRoot(document.getElementById("root")).render(<ColorToggle />);