const { useState } = React;

    function AgeChecker() {
      const [age, setAge] = useState("");
      const [message, setMessage] = useState("");

      const handleChange = (e) => {
        const value = e.target.value;
        setAge(value);

        if (value === "") {
          setMessage("");
        } else if (Number(value) >= 18) {
          setMessage(<span className="green">You are adult</span>);
        } else {
          setMessage(<span className="red">You are underage</span>);
        }
      };

      return (
        <div>
          <label>
            Enter your age: 
            <input type="number" value={age} onChange={handleChange} />
          </label>
          <div>{message}</div>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AgeChecker />);