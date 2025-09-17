function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Soso", age: 20 });
        }, 2000);
    });
}

getUser().then(user => {
    console.log(user.name);
});
