function App() {
  const todos = [
    { text: "Learn JS", priority: "high" },
    { text: "Watch movie", priority: "low" },
    { text: "Do homework", priority: "high" },
    { text: "Clean room", priority: "medium" }
  ];

  const highTasks = todos.filter(t => t.priority === "high");
  const countHigh = highTasks.length;

  return (
    <div>
      <h2>All Tasks</h2>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t.text} ({t.priority})
          </li>
        ))}
      </ul>

      <h2>High Priority</h2>

      <ul>
        {highTasks.map((t, i) => (
          <li key={i}>{t.text}</li>
        ))}
      </ul>

      <p>High priority count: {countHigh}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);