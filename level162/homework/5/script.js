let context = true;
        function render() {
            const status = document.getElementById("status");

            if (context === true) {
                status.textContent = "ON";
            } else {
                status.textContent = "OFF";
            }
        }
        function toggleContext() {
            context = !context;
            render();
        }
        render();