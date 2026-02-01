const posts = [
            {
                title: "პოსტი #1",
                body: "ეს არის პირველი პოსტის ტექსტი."
            },
            {
                title: "პოსტი #2",
                body: "აქ წერია მეორე პოსტის body."
            },
            {
                title: "პოსტი #3",
                body: "მესამე პოსტის აღწერა."
            }
        ];

        const postsContainer = document.getElementById("posts");

        posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.className = "post";

            const titleDiv = document.createElement("div");
            titleDiv.className = "post-title";
            titleDiv.textContent = post.title;

            const bodyDiv = document.createElement("div");
            bodyDiv.className = "post-body";
            bodyDiv.textContent = post.body;

            postDiv.addEventListener("click", () => {
                bodyDiv.style.display =
                    bodyDiv.style.display === "none" ? "block" : "none";
            });

            postDiv.appendChild(titleDiv);
            postDiv.appendChild(bodyDiv);
            postsContainer.appendChild(postDiv);
        });