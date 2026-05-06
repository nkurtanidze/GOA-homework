function usePrevious(value) {
        const ref = React.useRef();
        React.useEffect(() => {
          ref.current = value;
        }, [value]);
        return ref.current;
      }

      function App() {
        const [count, setCount] = React.useState(0);
        const prev = usePrevious(count);

        return (
          <div>
            <h2>Now: {count}</h2>
            <h3>Previous: {prev}</h3>
            <button onClick={() => setCount(c => c + 1)}>+</button>
          </div>
        );
      }

      ReactDOM.createRoot(document.getElementById("root4")).render(<App />);