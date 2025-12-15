const { useState } = React;

    function TodoApp() {
      const [task, setTask] = useState("");
      const [tasks, setTasks] = useState([]);
      const addTask = () => {
        if (task.trim() !== "") {
          setTasks([...tasks, task]);
          setTask("");
        }
      };
      const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
      };
      const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          addTask();
        }
      };

      return (
        React.createElement('div', { style: { padding: "20px", maxWidth: "400px", margin: "auto" } },
          React.createElement('h2', null, 'To-Do List'),
          React.createElement('input', {
            type: "text",
            value: task,
            onChange: (e) => setTask(e.target.value),
            onKeyPress: handleKeyPress,
            placeholder: "შეიყვანე ახალი task",
            style: { padding: "5px", width: "70%" }
          }),
          React.createElement('button', {
            onClick: addTask,
            style: { padding: "5px", marginLeft: "10px" }
          }, 'დამატება'),
          React.createElement('ul', { style: { marginTop: "20px" } },
            tasks.map((t, index) =>
              React.createElement('li', { key: index, style: { marginBottom: "10px" } },
                t,
                React.createElement('button', {
                  onClick: () => deleteTask(index),
                  style: { marginLeft: "10px" }
                }, 'წაშლა')
              )
            )
          )
        )
      );
    }
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(TodoApp));