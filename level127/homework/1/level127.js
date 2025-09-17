const p1 = Promise.resolve("Promise 1 resolved");
const p2 = new Promise((_, reject) => setTimeout(() => reject("Promise failed"), 2000));
const p3 = Promise.resolve("Promise 3 resolved");

Promise.all([p1, p2, p3])
  .then(results => console.log("All resolved:", results))
  .catch(err => console.log("Error:", err));