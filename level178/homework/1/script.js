const { Component } = React;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return React.createElement("h1", null, "Something went wrong.");
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error("Error happened!");
}

function App() {
  return React.createElement(
    ErrorBoundary,
    null,
    React.createElement(BuggyComponent)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));