let posts = [
            { id: 1, title: "პირველი პოსტი" },
            { id: 2, title: "მეორე პოსტი" },
            { id: 3, title: "მესამე პოსტი" }
        ];

        const postsContainer = document.getElementById("posts");
        function renderPosts() {
            postsContainer.innerHTML = "";

            posts.forEach(post => {
                const div = document.createElement("div");
                div.className = "post";

                div.innerHTML = `
                    <span>${post.title}</span>
                    <button onclick="deletePost(${post.id})">Delete</button>
                `;

                postsContainer.appendChild(div);
            });
        }
        function deletePost(id) {
            posts = posts.filter(post => post.id !== id);
            renderPosts();
        }
        renderPosts();