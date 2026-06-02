import { useState } from "react";
import useTodoStore from "./todoStore";

function Todo() {
  const [text, setText] = useState("");

  const { todos, addTodo, removeTodo, toggleTodo } =
    useTodoStore();

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Add
      </button>

      {todos.map((t) => (
        <div key={t.id}>
          <span
            style={{
              textDecoration: t.completed
                ? "line-through"
                : "none",
            }}
          >
            {t.text}
          </span>

          <button onClick={() => toggleTodo(t.id)}>
            Toggle
          </button>

          <button onClick={() => removeTodo(t.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;