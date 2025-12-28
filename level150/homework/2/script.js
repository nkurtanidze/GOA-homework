const { useState } = React;

    function App() {
      const [fruits, setFruits] = useState(["apple", "banana", "kiwi"]);

      return (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);