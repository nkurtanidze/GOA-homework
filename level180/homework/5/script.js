function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();

  return <h1>Width: {width}</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);