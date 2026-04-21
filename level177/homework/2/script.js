class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Stack:", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h2>რაღაც შეცდა</h2>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <h1>Test</h1>
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);