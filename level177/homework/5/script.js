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
      return <h2>⚠️ Error მოხდა</h2>;
    }

    return this.props.children;
  }
}

function BuggyComponent({ crash }) {
  if (crash) {
    throw new Error("Crash!");
  }
  return <div>OK</div>;
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent crash={true} />
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);