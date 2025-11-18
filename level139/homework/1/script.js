const App = () => {
        const [text, setText] = React.useState("ეს არის საწყისი ტექსტი მთავარი სექციაში");

        const changeText = () => {
          setText("ტექსტი შეიცვალა! 🎉");
        };

        return (
          <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
            <header style={{ background: "#4a90e2", color: "white", padding: "20px" }}>
              <h1>ეს არის ჰედერი</h1>
            </header>

            <main style={{ padding: "40px" }}>
              <p>{text}</p>
              <img
                src="https://placekitten.com/300/200"
                alt="მაგალითი სურათი"
                style={{ borderRadius: "10px", margin: "20px 0" }}
              />
              <br />
              <button
                onClick={changeText}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                  background: "#4a90e2",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                ტექსტის შეცვლა
              </button>
            </main>

            <footer style={{ background: "#222", color: "white", padding: "10px" }}>
              <p>ეს არის ფუთერი © 2025</p>
            </footer>
          </div>
        );
      };

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);