const App = () => {
    const [role, setRole] = React.useState("");
    const Student = () => <div>გამარჯობა, სტუდენტი!</div>;
    const Teacher = () => <div>გამარჯობა, მასწავლებელო!</div>;
    return (
        <div>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">აირჩიეთ როლი</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <div style={{ marginTop: "20px" }}>
            {role === "student" && <Student />}
            {role === "teacher" && <Teacher />}
          </div>
        </div>
      );
    };
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);