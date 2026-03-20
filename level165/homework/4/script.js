const { useReducer, useState } = React;

function reducer(state, action) {
  switch(action.type) {
    case "add":
      return [...state, action.text];
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
          React.createElement("li", {key: i}, todo)
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));