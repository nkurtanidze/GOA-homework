function UserInfo(props) {
      return (
        <div className="user-card">
          <h3>სახელი: {props.name}</h3>
          <p>ასაკი: {props.age}</p>
        </div>
      );
    }
    function App() {
      return (
        <div>
          <UserInfo name="Nika" age={15} />
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);