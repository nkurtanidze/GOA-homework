import { createStore } from 'https://esm.sh/zustand/vanilla'
import { persist } from 'https://esm.sh/zustand/middleware'

const counterStore = createStore(
    persist(
        (set) => ({
            count: 0,

            increment: () =>
                set((state) => ({ count: state.count + 1 })),

            decrement: () =>
                set((state) => ({ count: state.count - 1 })),

            reset: () =>
                set({ count: 0 })
        }),
        { name: "counter-storage" }
    )
)

function render() {
    document.getElementById("count").textContent =
        counterStore.getState().count
}

window.increment = () => {
    counterStore.getState().increment()
    render()
}

window.decrement = () => {
    counterStore.getState().decrement()
    render()
}

window.resetCounter = () => {
    counterStore.getState().reset()
    render()
}

render()