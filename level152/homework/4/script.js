function Profile(props) {
      return (
        <h2>
          User: {props.username} from {props.country}
        </h2>
      );
    }
    function App() {
      return (
        <div>
          <Profile username="Nika" country="Georgia" />
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);