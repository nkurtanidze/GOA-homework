const { useState, useEffect } = React;

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(
        data.filter(u =>
          u.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      <h2>API UI</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);