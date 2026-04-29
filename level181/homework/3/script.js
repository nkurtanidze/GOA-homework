const { useState, useEffect } = React;

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <h2>Hello {name}</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);