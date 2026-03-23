const products = [
  { id: 1, name: "Laptop", price: 2500 },
  { id: 2, name: "Headphones", price: 300 },
  { id: 3, name: "T-Shirt", price: 50 },
  { id: 4, name: "Sneakers", price: 200 },
  { id: 5, name: "Coffee Mug", price: 25 },
  { id: 6, name: "Backpack", price: 120 },
  { id: 7, name: "Smartphone", price: 1800 },
  { id: 8, name: "Notebook", price: 15 }
];

const initialState = { cart: [] };

function reducer(state, action) {
  switch(action.type) {
    case "ADD":
      const exist = state.cart.find(i => i.id === action.payload.id);

      if(exist){
        return {
          ...state,
          cart: state.cart.map(i =>
            i.id === action.payload.id
              ? { ...i, qty: i.qty + 1 }
              : i
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };

    case "INC":
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
        )
      };

    case "DEC":
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.payload && i.qty > 1
            ? { ...i, qty: i.qty - 1 }
            : i
        )
      };

    case "REMOVE":
      return { ...state, cart: state.cart.filter(i => i.id !== action.payload) };

    case "CLEAR":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const total = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id}>
          {p.name} - {p.price}
          <button onClick={() => dispatch({ type: "ADD", payload: p })}>
            Add
          </button>
        </div>
      ))}

      <h2>Cart</h2>

      {state.cart.map(i => (
        <div key={i.id}>
          {i.name} ({i.qty})
          <button onClick={() => dispatch({ type: "INC", payload: i.id })}>+</button>
          <button onClick={() => dispatch({ type: "DEC", payload: i.id })}>-</button>
          <button onClick={() => dispatch({ type: "REMOVE", payload: i.id })}>X</button>
        </div>
      ))}

      <h3>Total: {total}</h3>
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);