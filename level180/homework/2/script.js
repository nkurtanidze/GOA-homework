function useInput(initial="") {
  const [value, setValue] = React.useState(initial);
  return {
    value,
    onChange: e => setValue(e.target.value)
  };
}

function App() {
  const input = useInput();

  return (
    <div>
      <input {...input} />
      <p>{input.value}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);