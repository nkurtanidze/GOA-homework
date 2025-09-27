// davaleba 4
document.getElementById("loadBtn").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
      `;
    });
});