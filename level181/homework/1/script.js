const { useState } = React;

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return { count, increment, decrement };
}

function CounterA() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h2>Counter A: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function CounterB() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <h2>Counter B: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function App() {
  return (
    <>
      <CounterA />
      <CounterB />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);