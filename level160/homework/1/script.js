const { useId } = React;

    function FormOne() {
      const id = useId();

      return (
        <form>
          <h2>Form One</h2>

          <label htmlFor={id + "-name"}>Name</label>
          <input id={id + "-name"} type="text" />

          <label htmlFor={id + "-email"}>Email</label>
          <input id={id + "-email"} type="email" />

          <label htmlFor={id + "-age"}>Age</label>
          <input id={id + "-age"} type="number" />
        </form>
      );
    }

    function FormTwo() {
      const id = useId();

      return (
        <form>
          <h2>Form Two</h2>

          <label htmlFor={id + "-username"}>Username</label>
          <input id={id + "-username"} type="text" />

          <label htmlFor={id + "-password"}>Password</label>
          <input id={id + "-password"} type="password" />

          <label htmlFor={id + "-city"}>City</label>
          <input id={id + "-city"} type="text" />
        </form>
      );
    }

    function App() {
      return (
        <div>
          <FormOne />
          <FormTwo />
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);