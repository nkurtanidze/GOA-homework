const { useState, useEffect } = React;

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const filtered = data.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );

      console.log(filtered);
      setUsers(filtered);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      <h2>API Search</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);