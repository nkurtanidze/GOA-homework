// davaleba 2
// ფუნქცია გამარჯვებულის დასადგენად
function determineWinner(player1, player2) {
    // ინდივიდუალური ქულების გამოთვლა მოთამაშეებისთვის
    const calculateScore = ([strength, speed, intelligence]) => {
        return strength * 1 + speed * 2 + (intelligence * (strength + speed) / 10);
    };

    const score1 = calculateScore(player1);
    const score2 = calculateScore(player2);

    // გამარჯვებულის დაბრუნება
    if (score1 > score2) {
        return "Player 1 wins!";
    } else if (score2 > score1) {
        return "Player 2 wins!";
    } else {
        return "It's a tie!";
    }
}

// მაგალითის გამოყენება
const player1 = [10, 20, 30]; // Player 1: Strength = 10, Speed = 20, Intelligence = 30
const player2 = [15, 15, 25]; // Player 2: Strength = 15, Speed = 15, Intelligence = 25

console.log(determineWinner(player1, player2));