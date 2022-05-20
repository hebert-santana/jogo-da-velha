// ser capaz de reagir a algum movimento do usuário

// garantir que o documento HTML já foi carregado; vai executar a função

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})


function handleClick(event) {
       
        let square = event.target;
        let postion = square.id;

        handleMove(postion);        
        updateSquares();

}



function updateSquares() {

        let squares = document.querySelectorAll(".square");

        squares.forEach((square) => {

            let postion = squares.id;
            let symbol = board[postion];


            if(symbol != '') {
           
                square.innerHTML = `<div class='${symbol}'></div>`
            }
        })



}
 