const { useState, useRef } = React;

function InputTracker() {
  const [text, setText] = useState("");
  const prevText = useRef("");

  const handleChange = (e) => {
    prevText.current = text;
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Input Tracker</h2>
      <input value={text} onChange={handleChange} />
      <p>Current: {text}</p>
      <p>Previous: {prevText.current}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<InputTracker />);