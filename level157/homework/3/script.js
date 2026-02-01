const loadBtn = document.getElementById("loadBtn");
const output = document.getElementById("output");
loadBtn.addEventListener("click", () => {
    output.textContent = "იტვირთება...";
    output.className = "result loading";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("სერვერის შეცდომა: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            output.className = "result";
            output.textContent = `სათაური: ${data.title}`;
        })
        .catch(error => {
            output.className = "result error";
            output.textContent = "შეცდომა მოხდა: მონაცემების წამოღება ვერ მოხერხდა";
            console.error(error);
        });
});
