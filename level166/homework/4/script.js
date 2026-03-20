const { useReducer, useState } = React;

const initialState = {
  todos: [],
  loading: false,
  error: null
};

function reducer(state, action) {
  switch(action.type) {

    case "ADD_TODO":
      if (!action.payload.trim()) {
        return { ...state, error: "Todo cannot be empty!" };
      }
      return { ...state, loading: true, error: null };

    case "ADD_SUCCESS":
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch({ type:"ADD_TODO", payload:input });

    setTimeout(() => {
      if (input.trim()) {
        dispatch({
          type:"ADD_SUCCESS",
          payload:{ text: input }
        });
        setInput("");
      }
    }, 500);
  };

  return (
    <div>
      <h2>Step 4 Todo</h2>

      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{color:"red"}}>{state.error}</p>}

      <ul>
        {state.todos.map((todo, i) => (
          <li key={i}>
            {todo.text}
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