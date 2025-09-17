function racePromise(id) {
  return new Promise(resolve => {
    const rand = Math.random();
    if (rand > 0.5) {
      resolve(`Promise ${id} resolved immediately`);
    } else {
      setTimeout(() => resolve(`Promise ${id} resolved after 2s`), 2000);
    }
  });
}

Promise.race([racePromise(1), racePromise(2), racePromise(3)])
  .then(message => console.log("First to resolve:", message));