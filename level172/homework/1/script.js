const { useState, useEffect } = React;

function App() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      <h2>Debounce Input</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type fast..."
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);