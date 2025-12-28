const products = [];

        function addProduct() {
            const input = document.getElementById("productInput");
            const productName = input.value.trim();

            if (productName === "") return;

            const product = {
                id: Date.now(),
                name: productName,
                count: 1
            };

            products.push(product);
            input.value = "";
            renderProducts();
        }

        function removeProduct(id) {
            const index = products.findIndex(p => p.id === id);
            products.splice(index, 1);
            renderProducts();
        }

        function renderProducts() {
            const list = document.getElementById("productList");
            list.innerHTML = "";

            products.forEach(product => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${product.name} (x${product.count})
                    <button onclick="removeProduct(${product.id})">Remove</button>
                `;
                list.appendChild(li);
            });
        }