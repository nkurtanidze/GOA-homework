const { useState } = React;

    function LoadDataButton() {
      const [status, setStatus] = useState("");

      const handleClick = () => {
        setStatus("Loading...");
        setTimeout(() => {
          setStatus("Data loaded!");
        }, 3000);
      };

      return (
        <div>
          <button onClick={handleClick}>Load data</button>
          {status && <p>{status}</p>}
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<LoadDataButton />);