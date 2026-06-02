import { useState } from "react";
import useUserStore from "./userStore";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user, login, logout } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(name, email);

    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          <button onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;