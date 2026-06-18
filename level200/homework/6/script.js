import { createStore } from 'https://esm.sh/zustand/vanilla'
import { persist } from 'https://esm.sh/zustand/middleware'

const notificationStore = createStore(
    persist(
        (set) => ({
            notificationsEnabled: true,

            toggleNotifications: () =>
                set((state) => ({
                    notificationsEnabled:
                        !state.notificationsEnabled
                }))
        }),
        { name: "notification-storage" }
    )
)

function render() {
    document.getElementById("status").textContent =
        notificationStore.getState().notificationsEnabled
            ? "Enabled"
            : "Disabled"
}

window.toggleNotifications = () => {
    notificationStore.getState().toggleNotifications()
    render()
}

render()