const { useState } = React;

    function App() {
      const [tasks, setTasks] = useState([]);

      function addTask() {
        setTasks([...tasks, "New Task"]);
      }

      return (
        <div>
          <h2>Tasks</h2>

          <button onClick={addTask}>
            Add Task
          </button>

          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);