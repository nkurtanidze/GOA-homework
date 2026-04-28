function useToggle(initial=false) {
  const [state, setState] = React.useState(initial);
  return {
    state,
    toggle: () => setState(s => !s)
  };
}

function App() {
  const { state, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>
        {state ? "ON" : "OFF"}
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);