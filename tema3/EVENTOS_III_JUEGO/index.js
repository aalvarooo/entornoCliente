const gameBoard = document.querySelector('.game-board');
const barcosTotales = 2;
let barcosHundidos = 0;

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
    for (let i = 0; i < 2; i++) {
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
            casilla.style.backgroundColor = "blue";
        }
    });
}

function hacerClick(e) {
    const casilla = e.target;

    if (casilla.classList.contains('barco')) {
        alert("hundido");
        casilla.classList.add('hundido');
        barcosHundidos++;
        if (barcosHundidos === barcosTotales) {
            gameOver();
        }

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
    const botonReiniciar = crearBotonReiniciar();
    const gameBoard = document.querySelector(".game-board");
    gameBoard.classList.add("game-over");

    const gameOverMessage = document.createElement("div");
    gameOverMessage.classList.add("game-over-message");
    gameOverMessage.innerText = "¡Has hundido todos los barcos! ¡Ganaste!";

    const gameOverImage = crearImagen();
    gameOverImage.classList.add("game-over-image");
    gameBoard.appendChild(gameOverMessage);

    gameBoard.appendChild(gameOverImage);
    gameBoard.appendChild(botonReiniciar);

    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function crearImagen() {
    const img = document.createElement("img");
    img.src = "img/gameOver.png";
    return img;
    console.log(img);
}

function crearBotonReiniciar() {
    const botonReiniciar = document.createElement("button");
    botonReiniciar.className = "reiniciar-juego";
    botonReiniciar.innerHTML = "reiniciar juego";
    return botonReiniciar;
}


function reiniciarJuego() {
    gameBoard.classList.remove("game-over");
    //eliminar los mensajes
    reiniciarTablero();
}
function reiniciarTablero() {

    //reiniciar las clases de hundido y todo
    const casillas = document.querySelectorAll('grid');
    casillas.forEach((casilla) => {
        if (casilla.className === 'barco') {
            casilla.classList.remove('barco');
        }
        if (casilla.className === 'agua') {
            casilla.classList.remove('agua');

        }
    })

}


/* TODO: hacer GameOver. 
    - terminar el game over
    - poner un boton en el que reinice el jueg
    - hacer una función reseteando todo lo que he reiniciando poniendolo desde 0

*/


