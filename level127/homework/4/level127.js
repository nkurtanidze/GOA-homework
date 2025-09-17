const r1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const r2 = new Promise((_, reject) => setTimeout(() => reject("Promise failed"), 2000));
const r3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), 3000));

Promise.race([r1, r2, r3])
  .then(result => console.log("First resolved:", result))
  .catch(err => console.log("First rejected:", err));
