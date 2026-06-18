import { createStore } from 'https://esm.sh/zustand/vanilla'
import { persist } from 'https://esm.sh/zustand/middleware'

const userStore = createStore(
    persist(
        (set) => ({
            username: "",

            setUsername: (name) =>
                set({ username: name }),

            clearUsername: () =>
                set({ username: "" })
        }),
        { name: "user-storage" }
    )
)

function render() {
    document.getElementById("userText").textContent =
        userStore.getState().username
}

window.saveUser = () => {
    const name = document.getElementById("usernameInput").value
    userStore.getState().setUsername(name)
    render()
}

window.clearUser = () => {
    userStore.getState().clearUsername()
    render()
}

render()