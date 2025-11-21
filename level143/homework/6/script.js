function EmojiToggle() {
      const [emoji, setEmoji] = React.useState("😀");

      const toggleEmoji = () => {
        setEmoji(prev => (prev === "😀" ? "😢" : "😀"));
      };

      return (
        <div>
          <h1>{emoji}</h1>
          <button onClick={toggleEmoji}>Toggle Emoji</button>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<EmojiToggle />);