const cuadrados = document.querySelectorAll(".cuadrado");
let secuencia = [];
let indiceUsuario = 0;

function crearNumAleatorio() {
    return Math.floor(Math.random() * 4);
}

function reiniciarJuego() {
    secuencia = [];
    indiceUsuario = 0;
    mostrarSecuencia();
}

function mostrarSecuencia() {
    const nuevoColor = crearNumAleatorio();
    secuencia.push(nuevoColor);

    secuencia.forEach((color, index) => {
        setTimeout(() => {
            activarCuadrado(color);
        }, (index + 1) * 1000);
    });

    setTimeout(() => {
        permitirInputUsuario();
    }, (secuencia.length + 1) * 1000);
}

function activarCuadrado(index) {
    cuadrados[index].classList.add("activado");
    setTimeout(() => {
        cuadrados[index].classList.remove("activado");
    }, 500);
}

function permitirInputUsuario() {
    cuadrados.forEach((cuadrado) => {
        cuadrado.addEventListener("click", manejarInputUsuario);
    });
}

function manejarInputUsuario(event) {
    const cuadradoSeleccionado = event.target;
    const indiceSeleccionado = Array.from(cuadrados).indexOf(cuadradoSeleccionado);

    activarCuadrado(indiceSeleccionado);

    if (indiceSeleccionado === secuencia[indiceUsuario]) {
        indiceUsuario++;

        if (indiceUsuario === secuencia.length) {
            // El jugador ha completado la secuencia, mostrar la siguiente
            indiceUsuario = 0;
            mostrarSecuencia();
        }
    } else {
        // El jugador ha cometido un error, reiniciar el juego
        alert("¡Has perdido! Se reiniciará el juego.");
        reiniciarJuego();
    }
}

// Iniciar el juego cuando se carga la página
document.addEventListener("DOMContentLoaded", reiniciarJuego);
