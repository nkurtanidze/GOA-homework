const { useState, useId } = React;

function CheckboxList() {
  const colors = ["Red", "Green", "Blue", "Yellow"];

  const [selected, setSelected] = useState([]);

  function toggleColor(color) {
    setSelected(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  }

  return (
    <div>
      <h2>Favorite Colors</h2>

      {colors.map(color => {
        const id = useId();

        return (
          <div key={color}>
            <input
              type="checkbox"
              id={id}
              checked={selected.includes(color)}
              onChange={() => toggleColor(color)}
            />
            <label htmlFor={id}>{color}</label>
          </div>
        );
      })}

      <h3>
        Selected: {selected.length > 0 ? selected.join(", ") : "None"}
      </h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CheckboxList />);