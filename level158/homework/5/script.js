const API_URL = "https://jsonplaceholder.typicode.com/posts";
        let postsState = [];
        const postsContainer = document.getElementById("posts");
        const searchInput = document.getElementById("searchInput");
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                postsState = data;
                renderPosts(postsState);
            });
        function renderPosts(posts) {
            postsContainer.innerHTML = "";

            posts.forEach(post => {
                postsContainer.innerHTML += `
                    <div class="post">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                `;
            });
        }
        searchInput.addEventListener("input", () => {
            const searchValue = searchInput.value.toLowerCase();

            const filteredPosts = postsState.filter(post =>
                post.title.toLowerCase().includes(searchValue)
            );
            renderPosts(filteredPosts);
        });