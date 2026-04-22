const { Component } = React;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return React.createElement("h2", null, this.props.name + " caught error");
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error("Nested error!");
}

function App() {
  return React.createElement(
    ErrorBoundary,
    { name: "Outer Boundary" },
    React.createElement(
      ErrorBoundary,
      { name: "Inner Boundary" },
      React.createElement(BuggyComponent)
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));