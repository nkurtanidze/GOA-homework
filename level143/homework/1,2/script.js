// 1)
// useState — არის React-ის Hook, რომელიც საშუალებას გაძლევს ფუნქციურ კომპონენტში შექმნა და მართო სტეიტი (state).
// useState არის ფუნქცია, რომელიც აბრუნებს:
// 1)სტეიტის მიმდინარე მნიშვნელობას
// 2)ფუნქციას ამ სტეიტის გასანახლებლად
// React-ში სტეიტი გამოიყენება მონაცემების შესანახად, რომლებიც დროთა განმავლობაში იცვლება.



// 2)
const { useState } = React;

      function App() {
        const [text, setText] = useState("Hello!");

        const handleClick = () => {
          setText("Goodbye!");
        };

        return (
          <div>
            <h1>{text}</h1>
            <button onClick={handleClick}>Change Text</button>
          </div>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);