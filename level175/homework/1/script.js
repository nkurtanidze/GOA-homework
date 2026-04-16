const {
      BrowserRouter,
      Routes,
      Route,
      Link
    } = ReactRouterDOM;

    const { Suspense, lazy } = React;
    function Home() {
      return <h2>Home Page</h2>;
    }

    const About = lazy(() =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            default: () => <h2>About Page (Lazy Loaded)</h2>
          });
        }, 1000);
      })
    );

    function App() {
      return (
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link>
          </nav>

          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);