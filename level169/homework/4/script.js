function App() {
  const students = [
    { name: "Nika", score: 80 },
    { name: "Luka", score: 40 },
    { name: "Ana", score: 90 },
    { name: "Gio", score: 50 }
  ];

  const passed = students.filter(s => s.score > 51);
  const count = passed.length;

  return (
    <div>
      <h2>Students</h2>

      <ul>
        {passed.map((s, i) => (
          <li key={i}>{s.name} - {s.score}</li>
        ))}
      </ul>

      <p>Passed: {count}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);