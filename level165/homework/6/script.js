const { useReducer, useState } = React;

function reducer(state, action) {
  switch(action.type) {
    case "add":
      return [...state, {text: action.text, completed: false}];
    case "delete":
      return state.filter((_, i) => i !== action.index);
    case "toggle":
      return state.map((todo, i) =>
        i === action.index
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  return (
    React.createElement("div", null,
      React.createElement("input", {
        value: input,
        onChange: e => setInput(e.target.value)
      }),
      React.createElement("button", {
        onClick: () => {
          dispatch({type: "add", text: input});
          setInput("");
        }
      }, "Add"),
      React.createElement("ul", null,
        todos.map((todo, i) =>
          React.createElement("li", {
            key: i,
            onClick: () => dispatch({type: "toggle", index: i}),
            style: {
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer"
            }
          },
            todo.text,
            React.createElement("button", {
              onClick: (e) => {
                e.stopPropagation();
                dispatch({type: "delete", index: i});
              }
            }, "X")
          )
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));