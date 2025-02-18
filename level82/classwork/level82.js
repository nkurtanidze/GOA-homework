let interval;
        let isRunning = false;

        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const output = document.getElementById('output');
        
        startBtn.addEventListener('click', function() {
            if (!isRunning) {
                isRunning = true;
                const type = document.querySelector('input[name="type"]:checked').id;

                interval = setInterval(() => {
                    if (type === 'number') {
                        output.textContent = Math.floor(Math.random() * 100) + 1;
                    } else if (type === 'letter') {
                        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        output.textContent = letters[Math.floor(Math.random() * 26)];
                    }
                }, 1000);
            }
        });

        stopBtn.addEventListener('click', function() {
            if (isRunning) {
                clearInterval(interval);
                isRunning = false;
            }
        });