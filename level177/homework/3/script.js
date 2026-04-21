class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h2>⚠️ რაღაც შეცდა</h2>
          <p>გვერდი ვერ ჩაიტვირთა</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <h1>UI OK</h1>
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
