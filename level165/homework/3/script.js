const { useReducer } = React;

function reducer(state, action) {
  switch(action.type) {
    case "add":
      return state + action.value;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    React.createElement("div", null,
      React.createElement("h1", null, count),
      React.createElement("button", {onClick: () => dispatch({type: "add", value: 5})}, "+5"),
      React.createElement("button", {onClick: () => dispatch({type: "add", value: 10})}, "+10")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));