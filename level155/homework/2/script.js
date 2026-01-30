const { useState } = React;

    function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
                <h1>{count}</h1>

                <button onClick={() => setCount(count + 1)}>
                    ➕ გაზრდა
                </button>

                <button onClick={() => setCount(count - 1)}>
                    ➖ შემცირება
                </button>
            </div>
        );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Counter />);