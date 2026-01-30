let isVisible = true;

        function toggleText() {
            const text = document.getElementById("text");

            if (isVisible === true) {
                text.style.display = "none";
                isVisible = false;
            } else {
                text.style.display = "block";
                isVisible = true;
            }
        }