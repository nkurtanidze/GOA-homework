// შექმნა Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful!");
  }, 2000); // 2 წამი
});

myPromise.then((message) => {
  console.log(message);
});
