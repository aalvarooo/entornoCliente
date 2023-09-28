let valorActual = '';
let valorAnterior = '';
let operador = '';
let resultadoMostrado = false;

function actualizarDisplay() {
    const displayActual = document.getElementById('current-value');
    const displayAnterior = document.getElementById('previous-value');
    displayActual.textContent = valorActual;
    displayAnterior.textContent = valorAnterior + (operador !== '' ? ' ' + operador : '');
}

//clics en los números y operadores
function manejarClic(valor) {
    if (resultadoMostrado) {
        valorActual = '';
        resultadoMostrado = false;
    }

    if (valor === '.') {
        if (!valorActual.includes('.')) {
            valorActual += '.';
        }
    } else {
        valorActual += valor;
    }

    actualizarDisplay();
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