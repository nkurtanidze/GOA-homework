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
      return <h2>Error მოხდა</h2>;
    }

    return this.props.children;
  }
}

function Navbar() {
  return <div>Navigation</div>;
}

function Posts() {
  return <div>Posts</div>;
}

function Profile() {
  return <div>Profile</div>;
}

function App() {
  return (
    <div>
      <ErrorBoundary><Navbar /></ErrorBoundary>
      <ErrorBoundary><Posts /></ErrorBoundary>
      <ErrorBoundary><Profile /></ErrorBoundary>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);