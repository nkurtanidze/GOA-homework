const { useState } = React;

function App() {
  const [cart] = useState([
    { name: "Laptop", price: 1000, qty: 1 },
    { name: "Phone", price: 500, qty: 2 }
  ]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  );

  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty, 0
  );

  return (
    <div>
      <h2>Cart</h2>

      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ${item.price} x {item.qty}
          </li>
        ))}
      </ul>

      <p>Total: ${totalPrice}</p>
      <p>Total items: {totalQty}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);