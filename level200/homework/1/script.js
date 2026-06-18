import { createStore } from 'https://esm.sh/zustand/vanilla'
        import { persist } from 'https://esm.sh/zustand/middleware'

        const themeStore = createStore(
            persist(
                (set) => ({
                    theme: "light",
                    toggleTheme: () =>
                        set((state) => ({
                            theme: state.theme === "light" ? "dark" : "light"
                        }))
                }),
                { name: "theme-storage" }
            )
        )

        const updateUI = () => {
            document.getElementById("themeText").textContent =
                "Theme: " + themeStore.getState().theme
        }

        window.toggleTheme = () => {
            themeStore.getState().toggleTheme()
            updateUI()
        }

        updateUI()