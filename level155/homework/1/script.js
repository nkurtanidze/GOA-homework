const { useState } = React;

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <h1>რიცხვი: {count}</h1>
          <button onClick={() => setCount(count + 1)}>
            გაზრდა +1
          </button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Counter />);