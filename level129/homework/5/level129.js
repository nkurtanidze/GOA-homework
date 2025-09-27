document.getElementById("imgBtn").addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("imgResult").innerHTML = `
        <img src="${data.message}" alt="Dog" width="300">
      `;
    });
});