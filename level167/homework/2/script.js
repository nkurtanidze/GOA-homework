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
  search: "",
  price: "ALL"
};

function reducer(state, action) {
  switch(action.type) {
    case "ADD":
      return { ...state, products: [...state.products, action.payload] };

    case "DELETE":
      return { ...state, products: state.products.filter(p => p.id !== action.payload) };

    case "TOGGLE_STOCK":
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload ? { ...p, stock: p.stock > 0 ? 0 : 10 } : p
        )
      };

    case "SEARCH":
      return { ...state, search: action.payload };

    case "PRICE":
      return { ...state, price: action.payload };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const filtered = state.products
    .filter(p => p.name.toLowerCase().includes(state.search.toLowerCase()))
    .filter(p => {
      if(state.price === "0-100") return p.price <= 100;
      if(state.price === "100-500") return p.price <= 500 && p.price > 100;
      if(state.price === "500+") return p.price > 500;
      return true;
    });

  return (
    <div>
      <h2>Advanced</h2>

      <input
        placeholder="Search"
        onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value })}
      />

      <select onChange={(e) => dispatch({ type: "PRICE", payload: e.target.value })}>
        <option value="ALL">All</option>
        <option value="0-100">0-100</option>
        <option value="100-500">100-500</option>
        <option value="500+">500+</option>
      </select>

      {filtered.map(p => (
        <div key={p.id}>
          {p.name} - {p.price}
          <button onClick={() => dispatch({ type: "DELETE", payload: p.id })}>
            Delete
          </button>
          <button onClick={() => dispatch({ type: "TOGGLE_STOCK", payload: p.id })}>
            Toggle Stock
          </button>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);