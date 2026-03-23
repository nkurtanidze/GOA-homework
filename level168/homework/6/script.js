function App() {
  const students = [
    { name: "Nika", score: 90 },
    { name: "Luka", score: 80 },
    { name: "Gio", score: 70 }
  ];

  const average =
    students.reduce((sum, s) => sum + s.score, 0) / students.length; // derived

  return (
    <div>
      <p>საშუალო ქულა: {average}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);