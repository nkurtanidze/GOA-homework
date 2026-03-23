function App() {
  const [todos, setTodos] = React.useState([
    { text: "Study", completed: true },
    { text: "Workout", completed: false },
    { text: "Code", completed: true }
  ]);

  const completedCount = todos.filter(t => t.completed).length; // derived

  return (
    <div>
      <p>შესრულებული: {completedCount}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);