const { useState } = React;

    function App() {
      const [show, setShow] = useState(false);

      const toggleText = () => {
        setShow(!show);
      };

      return (
        <div>
          <button onClick={toggleText}>Show</button>
          {show && <p>Hello World</p>}
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);