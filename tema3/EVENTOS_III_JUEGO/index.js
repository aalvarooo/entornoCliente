const gameBoard = document.querySelector('.game-board');
console.log(gameBoard);

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add('grid');
        gameBoard.appendChild(gridCell);
    }
}

function crearBarcosAleatorios() {

}
