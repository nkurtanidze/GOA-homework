const { useState, useEffect } = React;

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed");
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);  