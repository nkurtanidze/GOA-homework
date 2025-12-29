function Title(props) {
      return (
        <h1>{props.title}</h1>
      );
    }
    function App() {
      return (
        <div>
          <Title title="Welcome to React" />
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);