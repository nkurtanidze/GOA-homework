const { useState, useEffect, useRef } = React;

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const controllerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        if (controllerRef.current) {
          controllerRef.current.abort();
        }

        const controller = new AbortController();
        controllerRef.current = controller;

        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        const data = await res.json();

        const filtered = data.filter(user =>
          user.name.toLowerCase().includes(query.toLowerCase())
        );

        console.log(filtered);

        setUsers(filtered);
        setError("");

      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Cancelled");
        } else {
          console.error(err);
          setError("Error fetching data");
        }
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      <h2>Advanced Search</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);