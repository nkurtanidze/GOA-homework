const { useState } = React;

function App() {
  const [password, setPassword] = useState("");

  const length = password.length;
  const isLong = length > 8;
  const hasNumber = /\d/.test(password);

  return (
    <div>
      <h2>Password Checker</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p>Length: {length}</p>
      <p>More than 8 chars: {isLong.toString()}</p>
      <p>Contains number: {hasNumber.toString()}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);