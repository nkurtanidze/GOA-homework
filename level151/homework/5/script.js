function Counter(props) {
      const [count, setCount] = React.useState(props.initial);

      function increase() {
        setCount(count + 5);
      }

      return (
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={increase}>+5</button>
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Counter initial={10} />);