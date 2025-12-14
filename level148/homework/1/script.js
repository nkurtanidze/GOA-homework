function App() {
        const links = [
          { name: "GitHub"},
          { name: "Frontend Mentor"},
          { name: "LinkedIn"},
          { name: "Twitter"},
          { name: "Instagram"},
        ];

        return (
          <div className="card">
            <img
              src="https://i.pravatar.cc/150"
              alt="avatar"
              className="avatar"/>

            <h1>Jessica Randall</h1>
            <p className="location">London, United Kingdom</p>
            <p className="bio">"Front-end developer and coding enthusiast."</p>

            <div className="links">
              {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);