const { useState } = React;

  function PasswordInput() {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div>
        <input 
          type={isVisible ? "text" : "password"} 
          placeholder="Enter password"
        />
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<PasswordInput />);