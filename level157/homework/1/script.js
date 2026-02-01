const { useState, useEffect } = React;

    function Post() {
      const [post, setPost] = useState(null);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
          .then(response => response.json())
          .then(data => {
            setPost(data);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);

      if (!post) {
        return <p>იტვირთება...</p>;
      }

      return (
        <div className="card">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Post />);