function App() {
  const [todos, setTodos] = React.useState([
    "Study",
    "Workout",
    "Code"
  ]);

  const count = todos.length; // derived

  return (
    <div>
      <p>სულ დავალებები: {count}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);