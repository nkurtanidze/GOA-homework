function App() {
  const [name, setName] = React.useState("");

  const length = name.length; // derived state

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>სიმბოლოების რაოდენობა: {length}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);