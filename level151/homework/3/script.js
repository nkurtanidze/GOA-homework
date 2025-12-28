function Message(props) {
      return (
        <h1>{props.text}</h1>
      );
    }
    function App() {
      return (
        <div>
          <Message text="Hello Kocho!" />
        </div>
      );
    }

    // Render
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);