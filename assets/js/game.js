// Iniciar as minhas variáveis
// Cada espaço do tabuleiro terá 3 possibilidades

// criando o tabuleiro com a princípio todas as 9 posições vazias


let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];


function handleMove(position){
    
    board[position] = symbols[playerTime];

    if (playerTime == 0) {
        playerTime = 1;
    } else {
        playerTime = 0;
    }

}


