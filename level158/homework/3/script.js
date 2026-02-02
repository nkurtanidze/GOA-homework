const toggleBtn = document.getElementById("toggleBtn");
    const postsContainer = document.getElementById("postsContainer");

    let postsLoaded = false;
    let isVisible = false;
    toggleBtn.addEventListener("click", () => {
      if (!postsLoaded) {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(posts => {
            posts.slice(0, 5).forEach(post => {
              const div = document.createElement("div");
              div.className = "post";
              div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
              `;
              postsContainer.appendChild(div);
            });

            postsLoaded = true;
            showPosts();
          });
      } else {
        isVisible ? hidePosts() : showPosts();
      }
    });
    function showPosts() {
      postsContainer.style.display = "block";
      toggleBtn.textContent = "Hide Posts";
      isVisible = true;
    }
    function hidePosts() {
      postsContainer.style.display = "none";
      toggleBtn.textContent = "Show Posts";
      isVisible = false;
    }