const { useState } = React;

    function Counter() {
      // state
      const [number, setNumber] = useState(0);

      return (
        <div className="container">
          <h1>Counter</h1>

          <div className="number">{number}</div>

          <button
            className="minus"
            onClick={() => setNumber(number - 1)}
          >
            -
          </button>

          <button
            className="plus"
            onClick={() => setNumber(number + 1)}
          >
            +
          </button>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root"))
    .render(<Counter />);