const { Component } = React;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      let message = "Unknown error";

      if (this.state.error instanceof TypeError) {
        message = "Type Error occurred!";
      } else if (this.state.error instanceof ReferenceError) {
        message = "Reference Error occurred!";
      }

      return React.createElement("h1", null, message);
    }

    return this.props.children;
  }
}

function BuggyComponent() {
  throw new TypeError("Wrong type!");
}

function App() {
  return React.createElement(ErrorBoundary, null, React.createElement(BuggyComponent));
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));