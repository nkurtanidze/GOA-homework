const UserContext = React.createContext();

function Greeting() {
  const username = React.useContext(UserContext);

  return (
    <h1>გამარჯობა, {username}</h1>
  );
}

function App() {
  return (
    <UserContext.Provider value="Jemaliko">
      <Greeting />
    </UserContext.Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);