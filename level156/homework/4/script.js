const btn = document.getElementById("toggleBtn");

        btn.addEventListener("click", () => {
            if (btn.textContent === "OFF") {
                btn.textContent = "ON";
                btn.style.backgroundColor = "green";
            } else {
                btn.textContent = "OFF";
                btn.style.backgroundColor = "red";
            }
        });