const button = document.getElementById('toggleButton');
        const image = document.getElementById('myImage');

        button.addEventListener('click', () => {
            if (image.style.display === 'none') {
                image.style.display = 'block'; // სურათის გამოჩენა
            } else {
                image.style.display = 'none'; // სურათის დამალვა
            }
        });