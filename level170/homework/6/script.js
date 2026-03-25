function App() {
  const boxRef = React.useRef();

  const scrollDown = () => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  };

  return (
    <div>
      <div ref={boxRef} style={{width:"200px", height:"100px", overflow:"auto", border:"1px solid black"}}>
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
        <p>Line 4</p>
        <p>Line 5</p>
        <p>Line 6</p>
        <p>Line 7</p>
        <p>Line 8</p>
      </div>

      <button onClick={scrollDown}>Scroll Down</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);