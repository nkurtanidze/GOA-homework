async function getPost() {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) throw new Error("ვერ მოიძებნა მონაცემი");
    const data = await response.json();
    document.getElementById("post").innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `;
    } catch (error) {
    console.error("შეცდომა:", error.message);
    }
}
getPost();