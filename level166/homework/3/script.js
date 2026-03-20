const { useReducer, useState, useEffect } = React;

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all"
};

function reducer(state, action) {
  switch(action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        )
      };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const filtered = state.todos.filter(t => {
    if (state.filter === "completed") return t.completed;
    if (state.filter === "active") return !t.completed;
    return true;
  });

  return (
    <div>
      <h2>Step 3 Todo</h2>

      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => {
        dispatch({type:"ADD_TODO", payload:input});
        setInput("");
      }}>Add</button>

      <div>
        <button onClick={() => dispatch({type:"SET_FILTER", payload:"all"})}>All</button>
        <button onClick={() => dispatch({type:"SET_FILTER", payload:"completed"})}>Completed</button>
        <button onClick={() => dispatch({type:"SET_FILTER", payload:"active"})}>Active</button>
      </div>

      <ul>
        {filtered.map(todo => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => dispatch({type:"TOGGLE_TODO", payload:todo.id})}>
              Toggle
            </button>

            <button onClick={() => dispatch({type:"DELETE_TODO", payload:todo.id})}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(root).render(<App />);
