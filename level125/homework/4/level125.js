function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000)
  .then(() => {
    console.log("Hello");
    return delay(3000);
  })
  .then(() => {
    console.log("World");
  });
