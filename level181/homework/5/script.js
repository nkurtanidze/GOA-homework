const { useState } = React;

function useInput(initial = "") {
  const [value, setValue] = useState(initial);

  const onChange = e => setValue(e.target.value);

  return { value, onChange };
}

function App() {
  const input = useInput();

  return (
    <div>
      <input {...input} />
      <h2>{input.value}</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);