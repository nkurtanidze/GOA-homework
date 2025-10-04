async function loadPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("მონაცემი ვერ მოიძებნა");
        const posts = await res.json();

        const container = document.getElementById("container");

        posts.slice(0, 10).forEach((post, i) => {
          const card = document.createElement("div");
          card.className = "card";
          card.style.animationDelay = `${i * 0.2}s`;

          card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;

          container.appendChild(card);
        });

      } catch (err) {
        console.error("შეცდომა:", err.message);
      }
    }

    loadPosts();