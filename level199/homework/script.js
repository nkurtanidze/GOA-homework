const books = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 2,
        title: "The Hobbit",
        author: "J.R.R. Tolkien"
    }
];

// 1) GET - ყველა წიგნის მიღება
function getBooks() {
    console.log("All Books:");
    console.log(books);
}



// 2) POST - ახალი წიგნის დამატება
function addBook() {
    const newBook = {
        id: books.length + 1,
        title: "New Book",
        author: "New Author"
    };

    books.push(newBook);

    console.log("Book Added:");
    console.log(newBook);
    console.log(books);
}



// 3) PUT - არსებული წიგნის განახლება
function updateBook() {
    const id = 1;

    const book = books.find(book => book.id === id);

    if (book) {
        book.title = "Updated Title";
        book.author = "Updated Author";

        console.log("Book Updated:");
        console.log(book);
    } else {
        console.log("Book Not Found");
    }
}



// 4) DELETE - წიგნის წაშლა
function deleteBook() {
    const id = 1;

    const index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1);

        console.log("Book Deleted:");
        console.log(deletedBook);
        console.log(books);
    } else {
        console.log("Book Not Found");
    }
}



// 5)
// GET მეთოდით მონაცემის დამატებას თუ ვეცდებით:
// - მონაცემი არ დაემატება, რადგან GET მხოლოდ მონაცემების მიღებისთვის გამოიყენება.

// DELETE მეთოდით მონაცემის მიღებას თუ ვეცდებით:
// - მონაცემი არ დაგვიბრუნდება, რადგან DELETE მხოლოდ მონაცემის წაშლისთვის გამოიყენება.



// 6)
// GET    -> მონაცემის მიღება
// POST   -> მონაცემის დამატება
// PUT    -> მონაცემის განახლება
// DELETE -> მონაცემის წაშლა