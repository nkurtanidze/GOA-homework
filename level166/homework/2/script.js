const { useReducer, useState } = React;

function reducer(state, action) {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload, completed: false }];

    case "DELETE_TODO":
      return state.filter((_, i) => i !== action.payload);

    case "CLEAR_TODOS":
      return [];

    case "TOGGLE_TODO":
      return state.map((t, i) =>
        i === action.payload ? { ...t, completed: !t.completed } : t
      );

    case "EDIT_TODO":
      return state.map((t, i) =>
        i === action.payload.index ? { ...t, text: action.payload.text } : t
      );

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Step 2 Todo</h2>

      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => {
        dispatch({ type: "ADD_TODO", payload: input });
        setInput("");
      }}>Add</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i} className={todo.completed ? "completed" : ""}>
            {todo.text}

            <button onClick={() => dispatch({type:"TOGGLE_TODO", payload:i})}>
              Toggle
            </button>

            <button onClick={() => {
              const newText = prompt("Edit:", todo.text);
              if (newText) {
                dispatch({
                  type:"EDIT_TODO",
                  payload:{ index:i, text:newText }
                });
              }
            }}>
              Edit
            </button>

            <button onClick={() => dispatch({type:"DELETE_TODO", payload:i})}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch({type:"CLEAR_TODOS"})}>
        Clear All
      </button>
    </div>
  );
}

ReactDOM.createRoot(root).render(<App />);