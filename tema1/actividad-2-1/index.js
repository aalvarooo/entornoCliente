function cargarEjemplo() {
    const numerosEjemplo = "63,45,58,56"; // Números de ejemplo
    const textarea = document.getElementById("textarea");
    textarea.value = numerosEjemplo;
    console.log(textarea.value);
}

function obtenerResultados() {
    const inputText = document.getElementById("textarea").value;
    const array = inputText.split(',');

    let todosSonNumeros = true;

    for (let valor of array) {
        if (isNaN(valor)) {
            todosSonNumeros = false;
            break; // Condición para ver si todos son números
        }
    }
    console.log(array);
    if (!todosSonNumeros) {
        alert("Por favor, ingrese solo números separados por comas.");
        return;
    }

    const sumaResultado = suma(array);
    const mediaResultado = calcularMedia(array);
    const mayorResultado = obtenerMayor(array);
    const menorResultado = obtenerMenor(array);

    const parrafo = document.createElement("p");
    const formulario = document.getElementById("formulario");
    parrafo.textContent = "Suma: " + sumaResultado.toString() +
        ", Media: " + mediaResultado.toString() +
        ", Mayor: " + mayorResultado.toString() +
        ", Menor: " + menorResultado.toString();
    formulario.appendChild(parrafo);
}

function suma(array) {
    let suma = 0;
    for (let valor of array) {
        const numero = parseInt(valor);
        if (!isNaN(numero))
            suma += numero;
    }
    return suma;
}

function calcularMedia(array) {
    let suma = 0;
    for (let valor of array) {
        const numero = parseInt(valor);
        if (!isNaN(numero))
            suma += numero;
    }
    return suma / array.length;
}

function obtenerMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        const valor = array[i];
        if (valor > mayor) {
            mayor = valor;
        }
    }
    return mayor;
}

function obtenerMenor(array) {
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
        const valor = array[i];
        if (valor < menor) {
            menor = valor;
        }
    }
    return menor;
}

const boton = document.getElementById("cargarBoton");
boton.addEventListener("click", cargarEjemplo);
boton.addEventListener("click", obtenerResultados);
