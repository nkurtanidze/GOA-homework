const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 3000);
});

myPromise
    .catch(error => {
        console.log("Error:", error);
    });
