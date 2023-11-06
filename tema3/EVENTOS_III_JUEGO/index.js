const gameBoard = document.querySelector('.game-board');



for (let i = 0; i < 100; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add('grid');
    gameBoard.appendChild(gridCell);
    gridCell.id = i + 1;
}



function crearBarcosAleatorios() {


}

function crearBarcosAleatorios() {
    const arrayAleatorio = [];
    for (let i = 0; i < 5; i++) {
        let numAleatorio;
        do {
            numAleatorio = Math.floor(Math.random() * 100) + 1;
        } while (arrayAleatorio.includes(numAleatorio)); // Evitar duplicados
        arrayAleatorio.push(numAleatorio);
    }
    console.log(arrayAleatorio);
    return arrayAleatorio;
}


function colocarBarcosEnTablero() {
    const casillas = document.querySelectorAll('.grid');
    const barcoPosiciones = crearBarcosAleatorios();

    casillas.forEach((casilla, index) => {
        if (barcoPosiciones.includes(index + 1)) {
            casilla.classList.add('barco');
        }
    });
}

function hacerClick(e) {
    const casilla = e.target;

    if (casilla.classList.contains('barco')) {
        alert("hundido");
        casilla.classList.add('hundido');
    } else {
        casilla.classList.add('agua');
        alert("agua");
    }
}


const casillas = document.querySelectorAll('.grid');
casillas.forEach(casilla => {
    casilla.addEventListener("click", hacerClick);
});

colocarBarcosEnTablero();


function gameOver() {

}


// TODO: hacer GameOver. 



/* HACK:  
1. Poner una imagen pequeña 
2. Poner agua en la imagen
3. que el barco ocupe 3 casillas
4. Entonces el barco tiene 3 vidas
5. 

*/