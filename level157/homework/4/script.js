const button = document.getElementById("loadPostsBtn");
        const postsContainer = document.getElementById("posts");

        button.addEventListener("click", loadPosts);

        function loadPosts() {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => {
                    postsContainer.innerHTML = ""; // გასუფთავება

                    data.slice(0, 5).forEach(post => {
                        const postDiv = document.createElement("div");
                        postDiv.classList.add("post");

                        postDiv.innerHTML = `
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        `;

                        postsContainer.appendChild(postDiv);
                    });
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }