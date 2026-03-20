const { useReducer } = React;

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    React.createElement("div", null,
      React.createElement("h1", null, count),
      React.createElement("button", {onClick: () => dispatch({type: "increment"})}, "+1"),
      React.createElement("button", {onClick: () => dispatch({type: "decrement"})}, "-1")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));