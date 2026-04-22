const { Component } = React;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Sending error to API:");
    console.log("Message:", error.message);
    console.log("Stack:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return React.createElement("h1", null, "Error logged!");
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error("Crash!");
}

function App() {
  return React.createElement(ErrorBoundary, null, React.createElement(BuggyComponent));
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));