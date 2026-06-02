// davaleba 1
const fs = require("fs");

fs.writeFile("test.txt", "Hello FS Module", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("ფაილი წარმატებით შეიქმნა!");
});



// davaleba 2
const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});





// davaleba 3
const fs = require("fs");

fs.appendFile("test.txt", " - დამატებული ტექსტი", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("ტექსტი დაემატა!");
});




// davaleba 4
const fs = require("fs");

const person = {
    name: "Nika",
    age: 16
};

fs.writeFile("info.txt", JSON.stringify(person), (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("info.txt წარმატებით შეიქმნა!");
});




// davaleba 5
const fs = require("fs");

fs.readFile("info.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    const person = JSON.parse(data);

    console.log(person.name);
});




// davaleba 6
const fs = require("fs");

fs.rename("test.txt", "newTest.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("ფაილს სახელი შეეცვალა!");
});




// davaleba 7
const fs = require("fs");

fs.unlink("newTest.txt", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("ფაილი წაიშალა!");
});