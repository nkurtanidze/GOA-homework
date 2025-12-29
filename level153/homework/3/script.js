function OnOff() {
      const [isOn, setIsOn] = React.useState(false);

      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
          
          <h1 className={`text-5xl font-bold ${
            isOn ? "text-green-600" : "text-red-600"
          }`}>
            {isOn ? "ON" : "OFF"}
          </h1>

          <button
            onClick={() => setIsOn(!isOn)}
            className="px-6 py-3 text-white text-xl rounded-lg transition
                       bg-blue-500 hover:bg-blue-600"
          >
            Toggle
          </button>

        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<OnOff />);