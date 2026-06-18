import { createStore } from 'https://esm.sh/zustand/vanilla'
import { persist } from 'https://esm.sh/zustand/middleware'

const favoritesStore = createStore(
    persist(
        (set) => ({
            favorites: [],

            addFavorite: (item) =>
                set((state) => ({
                    favorites: [...state.favorites, item]
                })),

            removeFavorite: (id) =>
                set((state) => ({
                    favorites: state.favorites.filter(
                        (_, index) => index !== id
                    )
                }))
        }),
        { name: "favorites-storage" }
    )
)

function render() {
    const list = document.getElementById("list")

    list.innerHTML = ""

    favoritesStore.getState().favorites.forEach((item, index) => {
        list.innerHTML += `
            <li>
                ${item}
                <button onclick="removeFavorite(${index})">
                    Delete
                </button>
            </li>
        `
    })
}

window.addFavorite = () => {
    const value = document.getElementById("favInput").value
    favoritesStore.getState().addFavorite(value)
    render()
}

window.removeFavorite = (id) => {
    favoritesStore.getState().removeFavorite(id)
    render()
}

render()