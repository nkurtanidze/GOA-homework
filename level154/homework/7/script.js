const { useState } = React;

    function App() {
      const [numbers, setNumbers] = useState([1, 2, 3, 4]);

      function removeLast() {
        setNumbers(prev => prev.slice(0, -1));
      }

      return (
        <div>
          <h2>რიცხვების მასივი</h2>

          <p>{numbers.join(", ")}</p>

          <button onClick={removeLast}>
            ბოლო ელემენტის წაშლა
          </button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);