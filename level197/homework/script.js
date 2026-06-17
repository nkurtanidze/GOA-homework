// 1) GET - ყველა მომხმარებლის მიღება
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

        console.log(users);
         alert("Users received! Check the console.");
}

// 2) POST - ახალი პროდუქტის დამატება
async function addProduct() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
    },
        body: JSON.stringify({
            name: "Laptop",
                price: 2500
        })
});

const product = await response.json();
console.log(product);
alert("Product added!");
}



// 3) PUT - მომხმარებლის ინფორმაციის განახლება
async function updateUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        headers: {
                "Content-Type": "application/json"
             },
            body: JSON.stringify({
                id: 1,
                name: "Nika",
                email: "nika@gmail.com"
            })
        });

        const updatedUser = await response.json();

        console.log(updatedUser);
        alert("User updated!");
    }



// 4) DELETE - პოსტის წაშლა
async function deletePost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    });

    if (response.ok) {
        alert("Post deleted!");
     }
}


// 5) განსხვავება

// GET – გამოიყენება ინფორმაციის მისაღებად.

// POST – გამოიყენება ახალი ინფორმაციის დასამატებლად.

// PUT – გამოიყენება არსებული ინფორმაციის შესაცვლელად.

// DELETE – გამოიყენება ინფორმაციის წასაშლელად.




// 6) რომელი მეთოდი გამოიყენება?

// ინფორმაციის მიღებისთვის → GET
// ინფორმაციის დამატებისთვის → POST
// ინფორმაციის შეცვლისთვის → PUT
// ინფორმაციის წაშლისთვის → DELETE