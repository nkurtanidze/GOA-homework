const { useState, useId } = React;

function FruitList() {
  const baseId = useId();
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [newItem, setNewItem] = useState("");

  function addItem() {
    if (newItem.trim() === "") return;

    setItems([...items, newItem]);
    setNewItem("");
  }

  return (
    <div>
      <h2>Fruit List</h2>

      <input
        type="text"
        value={newItem}
        placeholder="Add new fruit"
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => {
          const id = `${baseId}-${index}`;

          return (
            <li key={id}>
              <input type="checkbox" id={id} />
              <label htmlFor={id}> {item}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FruitList />);