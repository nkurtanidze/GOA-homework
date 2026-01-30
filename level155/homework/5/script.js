function App() {
    const [text, setText] = React.useState("");

    return (
        <div>
            <h2>ჩაწერე ტექსტი:</h2>

            <input
                type="text"
                placeholder="აქ ჩაწერე..."
                onChange={(e) => setText(e.target.value)}
            />

            <p>შეყვანილი ტექსტი: {text}</p>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);