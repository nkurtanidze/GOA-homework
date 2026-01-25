const { useState } = React;

    function App() {
      const [users, setUsers] = useState([]);

      function addUser() {
        const newUser = {
          id: Date.now(),
          name: "User"
        };

        setUsers([...users, newUser]);
      }

      return (
        <div>
          <h1>Users</h1>

          <button onClick={addUser}>
            Add User
          </button>

          {users.map(user => (
            <div className="user" key={user.id}>
              ID: {user.id} <br />
              Name: {user.name}
            </div>
          ))}
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);