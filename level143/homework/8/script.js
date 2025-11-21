function App() {
      const [text, setText] = React.useState("Hello!");

      const handleChangeText = () => {
        setText("Hi there!");
      };

      return (
        <div>
          <h1>{text}</h1>
          <button onClick={handleChangeText}>Change Text</button>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);