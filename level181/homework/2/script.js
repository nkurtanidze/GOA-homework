const { useState } = React;

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggleValue = () => setValue(v => !v);

  return { value, toggleValue };
}

function App() {
  const { value, toggleValue } = useToggle();

  return (
    <div>
      <h2>{value ? "ON" : "OFF"}</h2>
      <button onClick={toggleValue}>Toggle</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);