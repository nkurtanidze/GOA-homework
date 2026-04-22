const { Component } = React;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, key: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false, key: this.state.key + 1 });
  };

  render() {
    if (this.state.hasError) {
      return React.createElement("div", null,
        React.createElement("h1", null, "Error occurred"),
        React.createElement("button", { onClick: this.handleRetry }, "Retry")
      );
    }

    return React.createElement(
      React.Fragment,
      { key: this.state.key },
      this.props.children
    );
  }
}

function BuggyComponent() {
  if (Math.random() > 0.5) {
    throw new Error("Random error!");
  }
  return React.createElement("h2", null, "Works fine!");
}

function App() {
  return React.createElement(ErrorBoundary, null, React.createElement(BuggyComponent));
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));