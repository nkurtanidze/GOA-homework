import { createStore } from 'https://esm.sh/zustand/vanilla'
import { persist } from 'https://esm.sh/zustand/middleware'

const cartStore = createStore(
    persist(
        (set) => ({
            cart: [],

            addProduct: (product) =>
                set((state) => ({
                    cart: [
                        ...state.cart,
                        {
                            id: Date.now(),
                            product
                        }
                    ]
                })),

            removeProduct: (id) =>
                set((state) => ({
                    cart: state.cart.filter(
                        item => item.id !== id
                    )
                })),

            clearCart: () =>
                set({ cart: [] })
        }),
        { name: "cart-storage" }
    )
)

function render() {
    const cart =
        document.getElementById("cart")

    cart.innerHTML = ""

    cartStore.getState().cart.forEach(item => {
        cart.innerHTML += `
            <li>
                ${item.product}
                <button onclick="removeProduct(${item.id})">
                    Delete
                </button>
            </li>
        `
    })
}

window.addProduct = () => {
    const product =
        document.getElementById("productInput").value

    cartStore.getState().addProduct(product)

    render()
}

window.removeProduct = (id) => {
    cartStore.getState().removeProduct(id)

    render()
}

window.clearCart = () => {
    cartStore.getState().clearCart()

    render()
}

render()