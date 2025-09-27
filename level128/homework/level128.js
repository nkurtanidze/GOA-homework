// 1) Post id=1
    async function getPost() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log(data);
    }

    // 2) User-ების სახელები
    async function getUserNames() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      users.forEach(user => console.log(user.name));
    }

    // 3) User id=5 Email
    async function getUserEmail() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/5");
      const user = await response.json();
      console.log(user.email);
    }

    // 4) User list საიტზე
    async function showUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();

      const container = document.getElementById("user-list");
      container.innerHTML = ""; // გაწმენდა

      users.forEach(user => {
        const div = document.createElement("div");
        div.textContent = `${user.name} – ${user.email}`;
        container.appendChild(div);
      });
    }

    // 5) ძაღლის სურათი
    async function getDog() {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      document.getElementById("dog").src = data.message;
    }

    // 6) Fetch Example
    async function loadData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    }