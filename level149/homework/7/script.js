const items = [];

    function render() {
      const list = document.getElementById('shoppingList');
      list.innerHTML = '';
      items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${item.name} 
          <button onclick="decreaseQuantity(${index})">-</button>
          ${item.quantity}
          <button onclick="increaseQuantity(${index})">+</button>
          <button onclick="removeItem(${index})" style="color:red">Remove</button>
        `;
        list.appendChild(li);
      });
    }

    function addItem() {
      const input = document.getElementById('itemInput');
      const name = input.value; // trim–ს აღარ ვიყენებთ
      if (name === '') return;
      items.push({ name, quantity: 1 });
      input.value = '';
      render();
    }

    function increaseQuantity(index) {
      items[index].quantity++;
      render();
    }

    function decreaseQuantity(index) {
      if (items[index].quantity > 1) items[index].quantity--;
      render();
    }

    function removeItem(index) {
      items.splice(index, 1);
      render();
    }