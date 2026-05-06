function useToggle(initial = false) {
    const [value, setValue] = React.useState(initial);
    const toggle = () => setValue(v => !v);
    return [value, toggle];
    }

    function App() {
    const [on, toggle] = useToggle();
    return (
        <div>
        <h2>Toggle: {on ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>Toggle</button>
        </div>
    );
    }

    ReactDOM.createRoot(document.getElementById("root1")).render(<App />);