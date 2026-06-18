import { createStore } from 'https://esm.sh/zustand/vanilla'
import { persist } from 'https://esm.sh/zustand/middleware'

const languageStore = createStore(
    persist(
        (set) => ({
            language: "ka",

            setLanguage: (language) =>
                set({ language })
        }),
        { name: "language-storage" }
    )
)

function render() {
    const lang = languageStore.getState().language

    document.getElementById("currentLanguage").textContent =
        "Current: " + lang

    document.getElementById("language").value = lang
}

window.changeLanguage = () => {
    const lang =
        document.getElementById("language").value

    languageStore.getState().setLanguage(lang)

    render()
}

render()