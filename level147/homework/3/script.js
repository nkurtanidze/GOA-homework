const { useState } = React;
    function App() {
      const [showText, setShowText] = useState(false);

      return (
        <div>
          <button onClick={() => setShowText(!showText)}>Click me</button>
          {showText && <p>Welcome, user!</p>}
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);