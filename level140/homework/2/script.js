import figlet from "figlet";

const name = process.argv.slice(2).join(" ") || "Nika Nika";

figlet.text(
  name,
  {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
  },
  (err, data) => {
    if (err) {
      console.error("Figlet error:", err);
      process.exit(1);
    }
    console.log(data);
  }
);
