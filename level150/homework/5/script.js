const shoppingList = [];

    function addProduct() {
        const input = document.getElementById("productInput");
        const name = input.value.trim();

        if (name === "") return;

        shoppingList.push({
            name: name,
            count: 1
        });

        input.value = "";
        renderList();
    }

    function increase(index) {
        shoppingList[index].count++;
        renderList();
    }

    function decrease(index) {
        if (shoppingList[index].count > 0) {
            shoppingList[index].count--;
        }
        renderList();
    }

    function removeProduct(index) {
        shoppingList.splice(index, 1);
        renderList();
    }

    function renderList() {
        const list = document.getElementById("list");
        list.innerHTML = "";

        shoppingList.forEach((item, index) => {
            const li = document.createElement("li");

            li.innerHTML = `
                <span>${item.name} (Count: ${item.count})</span>
                <div class="controls">
                    <button onclick="increase(${index})">+</button>
                    <button onclick="decrease(${index})">-</button>
                    <button onclick="removeProduct(${index})">Remove</button>
                </div>
            `;

            list.appendChild(li);
        });
    }