const productsData = [
  { id: 1, name: "Laptop", price: 2500, category: "Electronics", rating: 4.7, stock: 10 },
  { id: 2, name: "Headphones", price: 300, category: "Electronics", rating: 4.3, stock: 25 },
  { id: 3, name: "T-Shirt", price: 50, category: "Clothing", rating: 4.0, stock: 50 },
  { id: 4, name: "Sneakers", price: 200, category: "Clothing", rating: 4.5, stock: 0 },
  { id: 5, name: "Coffee Mug", price: 25, category: "Home", rating: 4.2, stock: 100 },
  { id: 6, name: "Backpack", price: 120, category: "Accessories", rating: 4.6, stock: 15 },
  { id: 7, name: "Smartphone", price: 1800, category: "Electronics", rating: 4.8, stock: 5 },
  { id: 8, name: "Notebook", price: 15, category: "Stationery", rating: 4.1, stock: 200 }
];

const initialState = {
  products: productsData,
  showInStock: false,
  category: "All"
};

function reducer(state, action) {
  switch(action.type) {
    case "TOGGLE_STOCK":
      return { ...state, showInStock: !state.showInStock };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const filtered = state.products
    .filter(p => state.showInStock ? p.stock > 0 : true)
    .filter(p => state.category === "All" ? true : p.category === state.category);

  return (
    <div>
      <h2>Products</h2>

      <button onClick={() => dispatch({ type: "TOGGLE_STOCK" })}>
        In Stock Only
      </button>

      <br /><br />

      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "All" })}>All</button>
      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Electronics" })}>Electronics</button>
      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Clothing" })}>Clothing</button>
      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Home" })}>Home</button>
      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Accessories" })}>Accessories</button>
      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "Stationery" })}>Stationery</button>

      {filtered.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>Price: {p.price}</p>
          <p>Category: {p.category}</p>
          <p>Rating: {p.rating}</p>
          <p>{p.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);