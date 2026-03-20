const { useReducer, createContext, useContext, useState } = React;
const TodoContext = createContext();
const initialState = {
  todos: []
};
function reducer(state, action) {
  switch(action.type) {

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
          category: action.payload.category
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
          t.id === action.payload
            ? { ...t, completed: !t.completed }
            : t
        )
      };

    default:
      return state;
  }
}
function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}
function TodoApp() {
  const { state, dispatch } = useContext(TodoContext);

  const [text, setText] = useState("");
  const [category, setCategory] = useState("study");

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: { text, category }
    });

    setText("");
  };

  return (
    <div>
      <h1>Todo App (Global State)</h1>

      <input
        placeholder="Enter todo..."
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="study">Study</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>

      <button onClick={handleAdd}>Add</button>

      <h3>Total: {state.todos.length}</h3>

      <ul>
        {state.todos.map(todo => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.text} - ({todo.category})

            <button onClick={() => dispatch({
              type:"TOGGLE_TODO",
              payload:todo.id
            })}>
              Toggle
            </button>

            <button onClick={() => dispatch({
              type:"DELETE_TODO",
              payload:todo.id
            })}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);