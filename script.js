let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function playMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById(`cell${row}${col}`).src = currentPlayer === 'X' ? 'X.png' : 'O.png';
        if (checkWinner()) {
            if (currentPlayer === 'X') {
                alert('¡Ganaste!');
            } else {
                alert('¡Perdiste! Intentá nuevamente');
            }
            resetGame();
            return;
        }
        if (checkDraw()) {
            alert('¡Es un empate!');
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            computerMove();
        }
    }
}


function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return true;
        }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== '' && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
            return true;
        }
    }
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`cell${i}${j}`).src = '';
        }
    }

}

function computerMove() {
    // Implementación simple: elegir una casilla vacía al azar
    let emptyCells = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                emptyCells.push([i, j]);
            }
        }
    }
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let [row, col] = emptyCells[randomIndex];
    playMove(row, col);
}
