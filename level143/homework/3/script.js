const { useState } = React;

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);