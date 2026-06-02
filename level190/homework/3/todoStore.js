import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],

      addTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text,
              completed: false,
            },
          ],
        })),

      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter(
            (t) => t.id !== id
          ),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id
              ? { ...t, completed: !t.completed }
              : t
          ),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);

export default useTodoStore;