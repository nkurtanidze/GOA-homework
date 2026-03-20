const { useReducer, useState } = React;

function reducer(state, action) {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((_, i) => i !== action.payload);

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => {
        dispatch({type:"ADD_TODO", payload: input});
        setInput("");
      }}>Add</button>

      <h3>Total: {todos.length}</h3>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => dispatch({type:"DELETE_TODO", payload:i})}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(root).render(<App />);