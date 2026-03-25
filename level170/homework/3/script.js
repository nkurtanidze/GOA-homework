function App() {
  const boxRef = React.useRef();

  const changeWidth = () => {
    boxRef.current.style.width = "300px";
  };

  return (
    <div>
      <div ref={boxRef} style={{width:"100px", height:"100px", background:"blue"}}></div>
      <button onClick={changeWidth}>გადიდება</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);