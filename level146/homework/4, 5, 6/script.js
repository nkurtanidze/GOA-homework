const { useState } = React;

    function Counter() {
      const [count, setCount] = useState(0);

      return React.createElement(
        "div",
        null,
        React.createElement("h1", null, count),

        React.createElement(
          "button",
          { onClick: () => setCount(count + 1) },
          "+"
        ),

        React.createElement(
          "button",
          { onClick: () => setCount(count - 1) },
          "-"
        ),

        React.createElement(
          "button",
          { onClick: () => setCount(0) },
          "Reset"
        )
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(Counter));