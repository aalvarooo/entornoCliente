let valorActual = '';
let valorAnterior = '';
let operador = '';
let resultadoMostrado = false;

function actualizarDisplay() {
    const displayActual = document.getElementById('current-value');
    const displayAnterior = document.getElementById('previous-value');
    displayActual.textContent = arrayToString(valorActual);   
    displayAnterior.textContent = valorAnterior + (operador !== '' ? ' ' + operador : '');
}

// Función para convertir un array en una cadena
function arrayToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

// Resto del código...

function calcularResultado() {
    if (valorActual.length === 0) return;
    const actual = parseFloat(arrayToString(valorActual));  // Convertimos el array a una cadena y luego a un número
    const anterior = parseFloat(valorAnterior);
}


// clics en operadores
function manejarClicOperador(valor) {
    if (valorActual !== '') {
        valorAnterior = valorActual;
        valorActual = '';
        operador = valor;
        actualizarDisplay();
    }
}

function calcularResultado() {
    let resultado;
    const actual = parseFloat(valorActual);
    const anterior = parseFloat(valorAnterior);

    switch (operador) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*': // Cambia 'x' a '*'
            resultado = anterior * actual;
            break;
        case '/':
            resultado = anterior / actual;
            break;
        case '%':
            resultado = anterior / 100;
            break;
        default:
            resultado = actual;
            break;
    }

    valorActual = resultado.toString();
    valorAnterior = '';
    operador = '';
    resultadoMostrado = true;

    actualizarDisplay();
}

//borra el último número
function borrarUltimo() {
    if (resultadoMostrado) {
        return;
    }
    valorActual = valorActual.slice(0, -1);
    actualizarDisplay();
}

//borra todo
function borrarTodo() {
    valorActual = '';
    valorAnterior = '';
    operador = '';
    resultadoMostrado = false;
    actualizarDisplay();
}