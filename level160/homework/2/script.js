const { useId } = React;
function FormField({ id, label, type }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}
function App() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <div>
      <h2>Registration Form</h2>

      <FormField
        id={nameId}
        label="Name"
        type="text"
      />

      <FormField
        id={emailId}
        label="Email"
        type="email"
      />

      <FormField
        id={passwordId}
        label="Password"
        type="password"
      />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);