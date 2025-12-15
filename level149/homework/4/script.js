let state = {
            searchText: ""
        };
        const names = [
            "ნიკა",
            "გიორგი",
            "დათო",
            "ლუკა",
            "მარიამი",
            "ანა",
            "ნინო",
            "საბა"
        ];

        const listElement = document.getElementById("nameList");
        function render() {
            listElement.innerHTML = "";

            const filteredNames = names.filter(name =>
                name.toLowerCase().includes(state.searchText.toLowerCase())
            );

            filteredNames.forEach(name => {
                const li = document.createElement("li");
                li.textContent = name;
                listElement.appendChild(li);
            });
        }
        function handleInput(event) {
            state.searchText = event.target.value;
            render();
        }
        render();