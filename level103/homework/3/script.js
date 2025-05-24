const logos = [
  {
    name: "C",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
  },
  {
    name: "C++",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
  },
  {
    name: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  },
  {
    name: "Java",
    img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
  }
];

let current = 0;

const logoImg = document.getElementById("language-logo");
const languageName = document.getElementById("language-name");

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + logos.length) % logos.length;
  updateSlider();
});

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % logos.length;
  updateSlider();
});

function updateSlider() {
  logoImg.src = logos[current].img;
  languageName.textContent = logos[current].name;
}
