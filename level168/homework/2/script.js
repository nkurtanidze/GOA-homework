function App() {
  const products = [
    { name: "Apple", price: 3 },
    { name: "Banana", price: 2 },
    { name: "Orange", price: 4 }
  ];

  const total = products.reduce((sum, p) => sum + p.price, 0); // derived

  return (
    <div>
      <h3>ჯამური ფასი: {total}</h3>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);