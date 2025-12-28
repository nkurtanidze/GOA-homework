let tasks = [];

        function addTask() {
            const input = document.getElementById("taskInput");
            const task = input.value.trim();

            if (task === "") return;

            tasks.push(task);
            input.value = "";

            renderTasks();
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

        function renderTasks() {
            const list = document.getElementById("taskList");
            list.innerHTML = "";

            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${task}
                    <button onclick="deleteTask(${index})">Delete</button>
                `;
                list.appendChild(li);
            });
        }