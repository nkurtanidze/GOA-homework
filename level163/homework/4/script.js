const { createContext, useState, useContext } = React;
    const AuthContext = createContext();
    function AuthProvider({ children }) {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          {children}
        </AuthContext.Provider>
      );
    }
    function Status() {
      const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

      return (
        <div>
          <h1>
            {isLoggedIn ? "მომხმარებელი შესულია" : "გთხოვ დალოგინდე"}
          </h1>

          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      );
    }
    function App() {
      return (
        <AuthProvider>
          <Status />
        </AuthProvider>
      );
    }
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);