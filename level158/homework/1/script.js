const { useState, useEffect } = React;
    function TodoList() {
      const [todos, setTodos] = useState([]);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(res => res.json())
          .then(data => {
            const incompleteTodos = data.filter(todo => todo.completed === false);
            setTodos(incompleteTodos);
            setLoading(false);
          })
          .catch(error => {
            console.error("შეცდომა:", error);
            setLoading(false);
          });
      }, []);
      if (loading) {
        return <h2 style={{textAlign: "center"}}>იტვირთება...</h2>;
      }
      return (
        <div>
          <h1>❌ დაუსრულებელი Todo-ები</h1>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                <strong>{todo.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<TodoList />);