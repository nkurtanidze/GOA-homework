const { useState } = React;

function App() {
  const [search, setSearch] = useState("");

  const products = [
    { name: "Laptop", price: 1500, category: "Tech" },
    { name: "Phone", price: 800, category: "Tech" },
    { name: "Shoes", price: 120, category: "Fashion" },
    { name: "T-shirt", price: 30, category: "Fashion" }
  ];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Products</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((p, i) => (
          <li key={i}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);