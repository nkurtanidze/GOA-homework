function App() {
  const textRef = React.useRef();

  const changeColor = () => {
    textRef.current.style.color = "red";
  };

  return (
    <div>
      <p ref={textRef}>ეს არის ტექსტი</p>
      <button onClick={changeColor}>შეცვალე ფერი</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);