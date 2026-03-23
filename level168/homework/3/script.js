function App() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");

  const sum = Number(num1) + Number(num2); // derived

  return (
    <div>
      <input type="number" onChange={(e) => setNum1(e.target.value)} />
      <input type="number" onChange={(e) => setNum2(e.target.value)} />
      <p>ჯამი: {sum}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);