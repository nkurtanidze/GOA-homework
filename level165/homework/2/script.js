const { useReducer } = React;

function reducer(state, action) {
  switch(action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    React.createElement("div", null,
      React.createElement("h1", null, count),
      React.createElement("button", {onClick: () => dispatch({type: "inc"})}, "+"),
      React.createElement("button", {onClick: () => dispatch({type: "dec"})}, "-"),
      React.createElement("button", {onClick: () => dispatch({type: "reset"})}, "Reset")
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));