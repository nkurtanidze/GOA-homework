function App() {
  const inputRef = React.useRef();

  const clearInput = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={clearInput}>გასუფთავება</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);