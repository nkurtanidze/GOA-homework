const postsDiv = document.getElementById("posts");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    const firstFivePosts = data.slice(0, 5);

    firstFivePosts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";

      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body.slice(0, 50)}...</p>
      `;

      postsDiv.appendChild(postDiv);
    });
  })
  .catch(error => {
    console.error("შეცდომა:", error);
  });
