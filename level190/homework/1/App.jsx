import useThemeStore from "./themeStore";

function App() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      style={{
        backgroundColor:
          theme === "light" ? "white" : "black",
        color:
          theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      <h1>{theme} Mode</h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;