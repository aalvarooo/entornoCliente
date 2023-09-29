let valorActual = [];
let valorAnterior = '';
let operador = '';
let resultadoMostrado = false;

function actualizarDisplay() {
    const displayActual = document.getElementById('current-value');
    const displayAnterior = document.getElementById('previous-value');
    displayActual.textContent = arrayToString(valorActual);  //Convierte array a string se puede utilizar Joins
    displayAnterior.textContent = valorAnterior + (operador !== '' ? ' ' + operador : '');
}

// convierte array en una cadena
function arrayToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function manejarClic(valor) {
    if (resultadoMostrado) {
        valorActual = [];
        resultadoMostrado = false;
    }

    valorActual.push(valor);
    actualizarDisplay();
}

function manejarClicOperador(valor) {
    if (valorActual.length > 0) {
        valorAnterior = arrayToString(valorActual);  // Unimos el array para obtener el número anterior
        valorActual = [];
        operador = valor;
        actualizarDisplay();
    }
}

function calcularResultado() {
    if (valorActual.length === 0) return;

    const actual = parseFloat(arrayToString(valorActual));  // Convertimos el array a una cadena y luego a un número
    const anterior = parseFloat(valorAnterior);

    let resultado;
    switch (operador) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = anterior / actual;
            break;
        default:
            resultado = actual;
            break;
    }

    valorActual = resultado.toString().split('');
    valorAnterior = '';
    operador = '';
    resultadoMostrado = true;

    actualizarDisplay();
}

// Borrar el último número
function borrarUltimo() {
    if (resultadoMostrado) {
        return;
    }
    valorActual.pop();
    actualizarDisplay();
}

function borrarTodo() {
    valorActual = [];
    valorAnterior = '';
    operador = '';
    resultadoMostrado = false;
    actualizarDisplay();
}
