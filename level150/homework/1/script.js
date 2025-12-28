const { useState } = React;

    function LivePreview() {
      const [text, setText] = useState("");

      return (
        <div>
          <input
            type="text"
            placeholder="ჩაწერე ტექსტი..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <p>Live Preview: {text}</p>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<LivePreview />);