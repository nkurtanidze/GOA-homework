const { Suspense, lazy, useState } = React;
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to Home!</p>
    </div>
  );
}
const Products = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: () => (
          <div>
            <h2>Products Page</h2>
            <p>Here are our products.</p>
          </div>
        )
      });
    }, 1000);
  })
);

const Contact = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: () => (
          <div>
            <h2>Contact Page</h2>
            <p>Contact us here.</p>
          </div>
        )
      });
    }, 1000);
  })
);

// ✅ App
function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>My App</h1>

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("products")}>Products</button>
      <button onClick={() => setPage("contact")}>Contact</button>

      <hr />

      <Suspense fallback={<h2>Loading...</h2>}>
        {page === "home" && <Home />}
        {page === "products" && <Products />}
        {page === "contact" && <Contact />}
      </Suspense>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);