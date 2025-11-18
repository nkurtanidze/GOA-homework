// davaleba 2
// React-ში .render() გამოიყენება კომპონენტის გამოსატანად (დასარენდერებლად) DOM-ში.


// davaleba 3
// JSX ნიშნავს — ეს არის სინტაქსური გაფართოება JavaScript-ისთვის, რომელიც გამოიყენება React-ში.
// ის საშუალებას გაძლევს დაწერო HTML-ის მსგავსი კოდი JavaScript-ის შიგნით, რაც ამარტივებს UI-ს აღწერას.




// davaleba 1
const root = ReactDOM.createRoot(document.getElementById("root"));

function Header() {
    return React.createElement(
        "header",
        { style: { backgroundColor: "#eee", padding: "10px", textAlign: "center" } },
        React.createElement('h1', null, "Welcome to React"),
        React.createElement('p', null, "lorem ipsum... wedpiwepid")
    );
}
function Main() {
    return React.createElement(
        "main",
        { style: { padding: "20px" } },
        React.createElement("h2", null, "Good things about right"),
        React.createElement(
            "ul",
            null,
            React.createElement("li", null, "reactivity"),
            React.createElement("li", null, "reactivity"),
            React.createElement("li", null, "reactivity"),
        )
    );
}

function Footer() {
    return React.createElement(
        "footer",
        { style: { background: "#e62020ff", padding: "10px", textAlign: "center" } },
        React.createElement("small", null, "© 2025 My First React Project")
    );
}

function App() {
    return React.createElement(
        "div",
        null,
        Header(),
        Main(),
        Footer(),
    );
}

root.render(App());