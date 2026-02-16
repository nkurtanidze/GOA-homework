const ButtonContext = React.createContext()
    function App() {
      return (
        <ButtonContext.Provider value="Click me">
          <Main />
        </ButtonContext.Provider>
      )
    }
    function Main() {
      return (
        <div>
          <MyButton />
        </div>
      )
    }
    function MyButton() {
      const text = React.useContext(ButtonContext)
      return (
        <button style={{padding: "10px 20px", fontSize: "18px"}}>
          {text}
        </button>
      )
    }
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(<App />)