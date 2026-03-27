const { useState, useEffect } = React;

function App() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const users = ["Nika", "Giorgi", "Luka", "Ana", "Nino", "Dato"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const result = users.filter(user =>
        user.toLowerCase().includes(query.toLowerCase())
      );

      console.log(result);
      setFiltered(result);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      <h2>Filter Users</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {filtered.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);