const AppTitleContext = React.createContext();
    function Header() {
      const title = React.useContext(AppTitleContext);

      return (
        <header>
          <h1>{title}</h1>
        </header>
      );
    }
    function App() {
      return (
        <AppTitleContext.Provider value="My App">
          <Header />
        </AppTitleContext.Provider>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
