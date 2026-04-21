class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
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
      <h1>Hello World</h1>
    </ErrorBoundary>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);