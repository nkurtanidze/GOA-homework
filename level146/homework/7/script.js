const { useState } = React;

    function App() {
      const [isVisible, setIsVisible] = useState(true);

      const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

      return (
        <div>
          <button onClick={toggleVisibility}>
            {isVisible ? "დამალე" : "აჩვენე"} ტექსტი
          </button>
          {isVisible && <p>ეს არის ნაჩვენები ტექსტი!</p>}
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);