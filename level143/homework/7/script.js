function App() {
      const handleClick = () => {
        alert("Button clicked!");
      };

      return (
        <button onClick={handleClick}>Show Alert</button>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);