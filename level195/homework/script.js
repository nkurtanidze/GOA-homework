// 1
// HTTP (HyperText Transfer Protocol) არის პროტოკოლი, რომლის საშუალებითაც ბრაუზერი და სერვერი ერთმანეთს ინფორმაციას უცვლიან.
//  როდესაც ვებსაიტს ვხსნით, ბრაუზერი HTTP-ის გამოყენებით აგზავნის მოთხოვნას (Request) და სერვერი აბრუნებს პასუხს (Response).


// 2
// HTTP Request — მოთხოვნა, რომელსაც კლიენტი (ბრაუზერი) უგზავნის სერვერს.
// HTTP Response — პასუხი, რომელსაც სერვერი უბრუნებს კლიენტს.



// 3
// GET	მონაცემების მიღება (წაკითხვა)
// POST	ახალი მონაცემის დამატება
// PUT	არსებული მონაცემის განახლება/შეცვლა
// DELETE	მონაცემის წაშლა




// 4
// მოქმედება	HTTP მეთოდი
// წიგნების წამოღება	GET
// ახალი წიგნის დამატება	POST
// წიგნის შეცვლა	PUT
// წიგნის წაშლა	DELETE





// 5
const user = {
    name: "Nika",
    age: 16,
    email: "nika@example.com"
};

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => {
    console.log("Success:", data);
})
.catch(error => {
    console.error("Error:", error);
});