import { createStore } from 'https://esm.sh/zustand/vanilla'
import { persist } from 'https://esm.sh/zustand/middleware'

const todoStore = createStore(
    persist(
        (set) => ({
            todos: [],

            addTodo: (text) =>
                set((state) => ({
                    todos: [
                        ...state.todos,
                        {
                            id: Date.now(),
                            text
                        }
                    ]
                })),

            removeTodo: (id) =>
                set((state) => ({
                    todos: state.todos.filter(
                        todo => todo.id !== id
                    )
                }))
        }),
        { name: "todo-storage" }
    )
)

function render() {
    const ul = document.getElementById("todos")

    ul.innerHTML = ""

    todoStore.getState().todos.forEach(todo => {
        ul.innerHTML += `
            <li>
                ${todo.text}
                <button onclick="removeTodo(${todo.id})">
                    Delete
                </button>
            </li>
        `
    })
}

window.addTodo = () => {
    const text =
        document.getElementById("todoInput").value

    todoStore.getState().addTodo(text)

    render()
}

window.removeTodo = (id) => {
    todoStore.getState().removeTodo(id)

    render()
}

render()