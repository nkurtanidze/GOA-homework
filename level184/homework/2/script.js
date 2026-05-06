function useLocalStorage(key, initial) {
        const [value, setValue] = React.useState(() => {
          const saved = localStorage.getItem(key);
          return saved ? JSON.parse(saved) : initial;
        });

        React.useEffect(() => {
          localStorage.setItem(key, JSON.stringify(value));
        }, [value]);

        return [value, setValue];
      }

      function App() {
        const [name, setName] = useLocalStorage("name", "");
        return (
          <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <p>Saved: {name}</p>
          </div>
        );
      }

      ReactDOM.createRoot(document.getElementById("root2")).render(<App />);