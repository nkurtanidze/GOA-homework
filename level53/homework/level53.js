function countArea() {
    const shape = document.getElementById("shape").value;
    let area = 0;

    if (shape === "circle") {
        const radius = parseFloat(document.getElementById("radius").value);
        area = Math.PI * Math.pow(radius, 2);
    } else if (shape === "rectangle") {
        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);
        area = width * height;
    } else if (shape === "triangle") {
        const a = parseFloat(document.getElementById("sideA").value);
        const b = parseFloat(document.getElementById("sideB").value);
        const c = parseFloat(document.getElementById("sideC").value);
        const s = (a + b + c) / 2;
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    document.getElementById("result").textContent = "ფართობი: " + area.toFixed(2);
}

function updateInputs() {
    const shape = document.getElementById("shape").value;
    document.getElementById("circleInputs").style.display = shape === "circle" ? "block" : "none";
    document.getElementById("rectangleInputs").style.display = shape === "rectangle" ? "block" : "none";
    document.getElementById("triangleInputs").style.display = shape === "triangle" ? "block" : "none";
}

// Initialize with circle as default
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("shape").value = "circle";
    updateInputs();
});
