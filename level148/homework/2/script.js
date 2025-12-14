const { createRoot } = ReactDOM;

      function BlogCard() {
        return React.createElement(
          "div",
          { className: "card" },

          React.createElement("img", {
            className: "header",
            src: "https://i.imgur.com/yGQ4RkU.jpg",
            alt: "Blog header",
          }),

          React.createElement(
            "div",
            { className: "content" },

            React.createElement("div", { className: "tag" }, "Learning"),

            React.createElement(
              "div",
              { className: "date" },
              "Published 21 Dec 2023"
            ),

            React.createElement(
              "h1",
              null,
              "HTML & CSS foundations"
            ),

            React.createElement(
              "p",
              null,
              "These languages are the backbone of every website, defining structure, content, and presentation."
            ),

            React.createElement(
              "div",
              { className: "author" },

              React.createElement("img", {
                src: "https://i.imgur.com/4ZQZ4Zy.png",
                alt: "Author avatar",
              }),

              React.createElement("span", null, "Greg Hooper")
            )
          )
        );
      }

      const root = createRoot(document.getElementById("root"));
      root.render(React.createElement(BlogCard));