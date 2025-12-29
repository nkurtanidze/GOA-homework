function Price(props) {
      return (
        <h2>ფასი: {props.amount + 10}</h2>
      );
    }
    function App() {
      return (
        <div>
          <Price amount={20} />
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);