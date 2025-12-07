function HelloWorldToggle() {
        const [text, setText] = React.useState("Hello");

        function handleClick() {
          setText(text === "Hello" ? "World" : "Hello");
        }

        return (
          <div>
            <h1>{text}</h1>
            <button onClick={handleClick}>შეცვალე ტექსტი</button>
          </div>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<HelloWorldToggle />);