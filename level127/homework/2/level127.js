function randomPromise(id) {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand > 0.5) {
      resolve(`Promise ${id} resolved`);
    } else {
      reject(`Promise ${id} rejected`);
    }
  });
}

Promise.all([randomPromise(1), randomPromise(2), randomPromise(3)])
  .then(results => console.log("All resolved:", results))
  .catch(err => console.log("One failed:", err));
