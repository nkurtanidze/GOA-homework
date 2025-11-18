// Header კომპონენტი
    const Header = () => {
      const headerStyle = {
        backgroundColor: "#4CAF50",
        padding: "20px",
        borderRadius: "10px",
        fontSize: "24px",
        color: "white",
        textAlign: "center"
      };
      return <header style={headerStyle}>This is the Header</header>;
    };

    // MainSection კომპონენტი
    const MainSection = () => {
      const mainStyle = {
        backgroundColor: "#f2f2f2",
        padding: "30px",
        borderRadius: "8px",
        fontSize: "18px",
        color: "#333",
        margin: "20px 0"
      };
      return (
        <main style={mainStyle}>
          <p>This is the main section content.</p>
        </main>
      );
    };

    // Footer კომპონენტი
    const Footer = () => {
      const footerStyle = {
        backgroundColor: "#333",
        padding: "15px",
        borderRadius: "5px",
        fontSize: "16px",
        color: "#fff",
        textAlign: "center"
      };
      return <footer style={footerStyle}>This is the Footer</footer>;
    };

    // მთავარი App კომპონენტი
    const App = () => {
      return (
        <div style={{ maxWidth: "600px", width: "100%" }}>
          <Header />
          <MainSection />
          <Footer />
        </div>
      );
    };

    // Render
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);