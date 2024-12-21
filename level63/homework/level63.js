// davaleba 1
function determineWinner() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;

    let result = '';

    if (player1 === player2) {
        result = 'It\'s a draw!';
    } else if (
        (player1 === 'rock' && player2 === 'scissors') ||
        (player1 === 'scissors' && player2 === 'paper') ||
        (player1 === 'paper' && player2 === 'rock')
    ) {
        result = 'Player 1 wins!';
    } else {
        result = 'Player 2 wins!';
    }

    document.getElementById('result').textContent = result;
}