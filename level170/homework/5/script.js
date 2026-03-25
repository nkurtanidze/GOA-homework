function App() {
  const paraRef = React.useRef();

  const hidePara = () => {
    paraRef.current.style.display = "none";
  };

  return (
    <div>
      <p ref={paraRef}>ეს პარაგრაფია</p>
      <button onClick={hidePara}>დამალე</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);