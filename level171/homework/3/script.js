const { useState, useRef } = React;

function ClickTracker() {
  const [count, setCount] = useState(0);
  const totalClicks = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    totalClicks.current++;
    console.log("Total clicks:", totalClicks.current);
  };

  return (
    <div>
      <h2>Click Tracker</h2>
      <p>Visible Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ClickTracker />);