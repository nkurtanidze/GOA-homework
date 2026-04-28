function useCounter(initial = 0) {
  const [count, setCount] = React.useState(initial);
  return {
    count,
    increment: () => setCount(c => c + 1),
    decrement: () => setCount(c => c - 1)
  };
}

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);