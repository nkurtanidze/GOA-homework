const input = document.getElementById('textInput');
        const button = document.getElementById('addButton');
        const list = document.getElementById('myList');

        button.addEventListener('click', function() {
            const text = input.value.trim();
            if (text !== "") {
                const li = document.createElement('li'); // შექმენი ახალი li ელემენტი
                li.textContent = text; // ტექსტის ჩასმა
                list.appendChild(li); // დამატება ul-ში
                input.value = ""; // ფილდს წმენდს
                input.focus(); // კურსორი ბრუნდება input-ში
            }
        });