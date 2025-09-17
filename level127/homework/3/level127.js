function numberPromise(id) {
  return new Promise(resolve => {
    const delay = Math.floor(Math.random() * 3000);
    const num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => resolve(num), delay);
  });
}

Promise.all([numberPromise(1), numberPromise(2), numberPromise(3)])
  .then(numbers => {
    console.log("Numbers:", numbers);
    const sum = numbers.reduce((a, b) => a + b, 0);
    console.log("Sum:", sum);
  });