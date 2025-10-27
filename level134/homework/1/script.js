const users = [
  { name: "Giga", age: 20, score: 50 },
  { name: "Nino", age: 25, score: 80 },
  { name: "Tiko", age: 22, score: 90 },
];

function topScorers(users, minScore) {
  return users
    .filter(user => user.score >= minScore)    
    .sort((a, b) => b.score - a.score)             
    .map(user => user.name);                       
}
