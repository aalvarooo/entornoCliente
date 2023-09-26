//Declaración de variables

var num1 = 0;
var num2 = 0;
var operacion;


function darNumero(numero) {
    if (num1 == 0 && num1 !== '0.') {
        num1 = numero;
    } else {
        num1 += numero;
    }
    refrescar();
}

function darComa() {
    if (num1 == 0) {
        num1 = '0.'
    } else if (num1.indexOf('.') == -1) {
        num1 += '.'
    }
    refrescar();
}

function darC() {
    num1 = 0;
    num2 = 0;
    refrescar();
}

function operar(valor) {
    if (num1 == 0) {
        num1 = parseFloat(document.getElementById("valor:numero").value)

    }
    num2 = parseFloat(num1);
    num1 = 0;
    opera = valor;
}

function esIgual() {
    switch 
        case 1:
            resultado=num1 + num2;
        case 2:
            resultado=num1 - num2;
        case 3:
            resultado=num1 / num2;
        case 4:
            resultado=num1 * num4;
    }

    function suma(array) {
        let suma = 0;
        for (let valor of array) {
            const numero = parseInt(valor);
            if (!isNaN(numero))
                suma += numero;
        }
        return suma
    }
    function restar(array) {
        let resta = 0;
        for (let valor of array) {
            const numero = parseInt(valor);
            if (!isNaN(numero))
                resta += numero;
        }
        return resta
    }

    function multiplicar(array) {
        let resta = 0;
        for (let valor of array) {
            const numero = parseInt(valor);
            if (!isNaN(numero))
                resta += numero;
        }
        return resta
    }

    function obtenerResultados() {
        const resultado = document.getElementById("resultado");

    }

