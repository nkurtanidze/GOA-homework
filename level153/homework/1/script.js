let count = 0;
        const counterEl = document.getElementById("counter");

        function increase() {
            count++;
            counterEl.textContent = count;
        }

        function decrease() {
            count--;
            counterEl.textContent = count;
        }