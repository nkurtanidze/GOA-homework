const ThemeContext = React.createContext();

    function Header() {
      const theme = React.useContext(ThemeContext);

      return (
        <h2>მიმდინარე თემა არის: {theme}</h2>
      );
    }

    function Button() {
      const theme = React.useContext(ThemeContext);

      return (
        <p>მიმდინარე თემა არის: {theme}</p>
      );
    }

    function App() {
      const [theme, setTheme] = React.useState("light");

      function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light");
      }

      return (
        <ThemeContext.Provider value={theme}>
          <div>
            <h1>Theme Context App</h1>

            <Header />
            <Button />

            <button onClick={toggleTheme}>
              თემის შეცვლა
            </button>
          </div>
        </ThemeContext.Provider>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);