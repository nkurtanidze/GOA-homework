async function loadPost() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error("მონაცემი ვერ მოიძებნა");
        const post = await res.json();
        document.getElementById("post").innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
      } catch (err) {
        console.error("შეცდომა:", err.message);
      }
    }
    loadPost();