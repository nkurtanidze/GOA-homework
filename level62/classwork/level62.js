// davaleba 4
let count = 0;
        const counterElement = document.getElementById('counter');

        function updateCounter() {
            counterElement.textContent = count;
            if (count > 0) {
                counterElement.style.color = 'green';
            } else if (count < 0) {
                counterElement.style.color = 'red';
            } else {
                counterElement.style.color = 'black';
            }
        }

        function incrementCounter() {
            count++;
            updateCounter();
        }

        function decrementCounter() {
            count--;
            updateCounter();
        }

        function resetCounter() {
            count = 0;
            updateCounter();
        }



// davaleba 5
let isVisible = true;

        function toggleMessage() {
            const messageElement = document.getElementById('message');

            if (isVisible) {
                // Change to "ნახვამდის" and hide
                messageElement.textContent = "ნახვამდის";
                setTimeout(() => {
                    messageElement.classList.add('hidden');
                    setTimeout(() => {
                        messageElement.textContent = "გამარჯობა";
                        messageElement.classList.remove('hidden');
                    }, 500); // Wait for transition to complete
                }, 500);
            } else {
                // Show "გამარჯობა"
                messageElement.classList.remove('hidden');
            }

            isVisible = !isVisible;
        }