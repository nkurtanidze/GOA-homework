let state = true;

        function render() {
            document.getElementById("text").textContent =
                state ? "Hello" : "Goodbye";
        }

        function toggle() {
            state = !state;
            render();
        }

        render();