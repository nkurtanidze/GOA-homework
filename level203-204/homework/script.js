const products = [
    { id: 1, name: "iPhone 15", category: "Phone" },
    { id: 2, name: "Samsung Galaxy S24", category: "Phone" },
    { id: 3, name: "MacBook Air", category: "Laptop" },
    { id: 4, name: "Dell XPS", category: "Laptop" },
    { id: 5, name: "Sony Headphones", category: "Accessories" }
];

const searchBtn = document.getElementById("searchBtn");
const container = document.getElementById("productsContainer");

searchBtn.addEventListener("click", () => {
    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const selectedCategory = document
        .getElementById("categorySelect")
        .value;

    const filteredProducts = products.filter(product => {
        const matchesName =
            product.name.toLowerCase().includes(searchValue);

        const matchesCategory =
            selectedCategory === "" ||
            product.category === selectedCategory;

        return matchesName && matchesCategory;
    });

    displayProducts(filteredProducts);
});

function displayProducts(productsList) {
    container.innerHTML = "";

    if (productsList.length === 0) {
        container.innerHTML = "<p>No products found.</p>";
        return;
    }

    productsList.forEach(product => {
        const div = document.createElement("div");

        div.classList.add("product");

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
        `;

        container.appendChild(div);
    });
}

displayProducts(products);