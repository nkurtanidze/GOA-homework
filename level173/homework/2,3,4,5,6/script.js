const { useState, useEffect } = React;

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);
  return 
  { count, increment, decrement, reset };
}

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue(prev => !prev);

  return { value, toggle };
}

function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function ShowHide() {
  const { value, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>
        {value ? "Hide" : "Show"}
      </button>

      {value && <p>Visible text 👀</p>}
    </div>
  );
}

function DarkMode() {
  const { value, toggle } = useToggle();

  useEffect(() => {
    document.body.className = value ? "dark" : "";
  }, [value]);

  return (
    <button onClick={toggle}>
      Toggle Dark Mode
    </button>
  );
}

function Sidebar() {
  const { value, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>
        {value ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {value && (
        <div className="sidebar">
          <h3>Sidebar</h3>
          <p>Menu content</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Tasks 2-6</h1>

      <Counter />
      <hr />

      <ShowHide />
      <hr />

      <DarkMode />
      <hr />

      <Sidebar />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);