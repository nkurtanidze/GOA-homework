const { useState, useEffect } = React;

    function useLocalStorage(key, initialValue) {
      const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
      });

      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);

      return [value, setValue];
    }

    function App() {
      const [name, setName] = useLocalStorage("name", "");

      return (
        <div>
          <h2>LocalStorage Hook</h2>

          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name"
          />

          <p>Saved: {name}</p>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);