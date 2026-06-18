// 1)
console.log("1) Query Parameters:");
console.log(`
Query Parameters არის URL-ის დამატებითი ნაწილი,
რომელიც გამოიყენება მონაცემების ფილტრაციის,
დალაგების ან ძიებისთვის.
`);




// 2)
const productsElectronicsURL =
"https://example.com/products?category=electronics";

console.log("2)", productsElectronicsURL);




// 3)
const usersAge18URL =
"https://example.com/users?age=18";

console.log("3)", usersAge18URL);




// 4) 
const postsUser5URL =
"https://example.com/posts?userId=5";

console.log("4)", postsUser5URL);




// 5)
const clothesNikeURL =
"https://example.com/products?category=clothes&brand=nike";

console.log("5)", clothesNikeURL);




// 6) 
fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
    .then(response => response.json())
    .then(data => {
        console.log("6) Completed Tasks:");
        console.log(data);
    })
    .catch(error => console.error(error));





// 7)
fetch("https://jsonplaceholder.typicode.com/users?id=3")
    .then(response => response.json())
    .then(data => {
        console.log("7) User ID = 3:");
        console.log(data);
    })
    .catch(error => console.error(error));




// 8)
console.log("8) განსხვავება:");

console.log(`
Path Parameter:
გამოიყენება კონკრეტული რესურსის მისაღებად.

Query Parameter:
გამოიყენება ფილტრაციისთვის ან ძიებისთვის.

`);



// 9)
const searchSortOrderURL =
"https://example.com/products?search=laptop&sort=price&order=asc";
console.log("9)", searchSortOrderURL);



// 10) 
console.log("10) Books API Query Parameters:");
const booksAPIExample =
"https://example.com/books?genre=fantasy&author=rowling&year=2020&language=english&sort=rating";
console.log(booksAPIExample);
console.log(`
Books API Query Parameters:

1. genre      -> ჟანრი
2. author     -> ავტორი
3. year       -> გამოცემის წელი
4. language   -> ენა
5. sort       -> დალაგება (rating, title და ა.შ.)

`);