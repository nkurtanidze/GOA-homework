const usersContainer = document.getElementById("users");
    const loadingText = document.getElementById("loading");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        loadingText.style.display = "none";
        usersContainer.innerHTML = data.map(user => `
          <div class="user" key="${user.id}">
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
          </div>
        `).join("");
      })
      .catch(error => {
        loadingText.innerText = "შეცდომა მონაცემების ჩატვირთვისას";
        console.error(error);
      });