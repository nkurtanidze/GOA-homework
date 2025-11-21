function App() {
        const [visible, setVisible] = React.useState(true);

        const toggleVisibility = () => {
          setVisible(prev => !prev);
        };

        return (
          <div>
            <button onClick={toggleVisibility}>
              Show / Hide
            </button>
            {visible && <p>Welcome to React!</p>}
          </div>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);