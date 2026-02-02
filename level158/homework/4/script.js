const postsContainer = document.getElementById("posts");
        const userFilter = document.getElementById("userFilter");

        let allPosts = [];
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                allPosts = data;
                renderPosts(allPosts);
            });
        userFilter.addEventListener("change", () => {
            const value = userFilter.value;

            if (value === "all") {
                renderPosts(allPosts);
            } else {
                const filteredPosts = allPosts.filter(
                    post => post.userId === Number(value)
                );
                renderPosts(filteredPosts);
            }
        });
        function renderPosts(posts) {
            postsContainer.innerHTML = "";

            posts.forEach(post => {
                const div = document.createElement("div");
                div.className = "post";

                div.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <small>User ID: ${post.userId}</small>
                `;
                postsContainer.appendChild(div);
            });
        }