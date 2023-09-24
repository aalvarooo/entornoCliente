function cargarEjemplo() {
    const cantidadNumeros = 5;
    const max = 90;
    const textArea = this.previousElementSibling; // Usamos previousElementSibling para apuntar al textarea correspondiente
    let numerosEjemplo = [];

    for (let j = 0; j < cantidadNumeros; j++) {
        numAleatorio = Math.floor(Math.random() * max);
        numerosEjemplo.push(numAleatorio);
    }

    textArea.textContent = numerosEjemplo.join(', ');
}

const botones = document.querySelectorAll(".cargarBoton");
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", cargarEjemplo);
}

function obtenerArray() {
    const textarea1 = document.getElementById("textarea1").value;
    const subcadenas = textarea1.split(',');

    const numeros = [];

    subcadenas.forEach(item => {
        const numero = parseInt(item.trim());
        if (!isNaN(numero)) {
            numeros.push(numero);
        }
    });

    return numeros;
}

// Función para ordenar el array en orden ascendente
function ordenarAscendente() {
    const array = obtenerArray();
    array.sort((a, b) => a - b); // Orden ascendente
    mostrarResultado(array, "resultadoAscendente");
}
// Función para ordenar el array en orden descendente
function ordenarDescendente() {
    const array = obtenerArray();
    array.sort((a, b) => b - a); // Orden descendente
    mostrarResultado(array, "resultadoDescendente");
}
// Función para mostrar el resultado
function mostrarResultado(arrayOrdenado, elementoResultado) {
    const resultadoDiv = document.getElementById(elementoResultado);
    resultadoDiv.textContent = "Ordenado: " + arrayOrdenado.join(', ');
}

// Asociar los eventos click a los botones correspondientes
const botonAscendente = document.querySelector(".ascendente");
const botonDescendente = document.querySelector(".descendente");

botonAscendente.addEventListener("click", ordenarAscendente);
botonDescendente.addEventListener("click", ordenarDescendente);
