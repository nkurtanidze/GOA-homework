let count = 0;

        function increase() {
            if (count < 10) {
                count++;
                document.getElementById("counter").textContent = count;
                document.getElementById("message").textContent = "";
            } else {
                document.getElementById("message").textContent = "Limit reached";
            }
        }