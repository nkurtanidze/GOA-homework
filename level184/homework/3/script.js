function useFetch(url) {
        const [data, setData] = React.useState(null);
        const [loading, setLoading] = React.useState(true);

        React.useEffect(() => {
          fetch(url)
            .then(res => res.json())
            .then(setData)
            .finally(() => setLoading(false));
        }, [url]);

        return { data, loading };
      }

      function App() {
        const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

        return (
          <div>
            {loading ? "Loading..." : JSON.stringify(data)}
          </div>
        );
      }

      ReactDOM.createRoot(document.getElementById("root3")).render(<App />);