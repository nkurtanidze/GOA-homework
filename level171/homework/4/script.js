const { useState, useRef, useEffect } = React;

function ColorTracker() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const color = count % 2 === 0 ? "blue" : "green";

  return (
    <div>
      <h2>Color Tracker</h2>
      <p style={{ color }}>Current: {count}</p>
      <p style={{ background: "lightgray" }}>
        Previous: {prevCount.current}
      </p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ColorTracker />);