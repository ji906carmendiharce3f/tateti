var board = [['', '', ''], ['', '', ''], ['', '', '']];
var currentPlayer = 'X';

function playMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById(`cell${row}${col}`).src = `${currentPlayer}.png`;
        document.getElementById(`cell${row}${col}`).style.display = 'inline';
        
        if (checkWinner(currentPlayer)) {
            alert(`Felicitaciones, ganaste!`);
            resetBoard();
        } else if (board.every(row => row.every(cell => cell !== ''))) {
            alert('¡Es un empate!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner(player) {
    for (var i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true; // Filas
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true; // Columnas
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true; // Diagonal
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true; // Diagonal inversa
    return false;
}

function resetBoard() {
    board = [['', '', ''], ['', '', ''], ['', '', '']];
    currentPlayer = 'X';
    var cells = document.querySelectorAll('.cell img');
    cells.forEach(cell => {
        cell.style.display = 'none';
    });
}
