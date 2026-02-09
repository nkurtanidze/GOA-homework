function App() {
      const [name, setName] = React.useState("");

      function handleChange(e) {
        setName(e.target.value);
      }

      return (
        <div>
          <h1>შეიყვანე სახელი:</h1>

          <input 
            type="text"
            placeholder="მაგ: ნიკა"
            value={name}
            onChange={handleChange}
          />

          <h2>შენი სახელია: {name}</h2>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);