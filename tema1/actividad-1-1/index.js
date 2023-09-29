function calcularOperaciones(a, b) {
    const sumaResultado = suma(a, b);
    const restaResultado = resta(a, b);
    const multiplicacionResultado = multiplicacion(a, b);
    const divisionResultado = division(a, b);

    // "literales de  plantilla" que es una forma de crear cadenas de texto
    alert(`El resultado de sumar ${a} + ${b} es igual a ${sumaResultado}`);
    alert(`El resultado de restar ${a} - ${b} es igual a ${restaResultado}`);
    alert(`El resultado de multiplicar ${a} x ${b} es igual a ${multiplicacionResultado}`);
    alert(`El resultado de dividir ${a} / ${b} es igual a ${divisionResultado}`);
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// Llamo a la función para realizar los cálculos
calcularOperaciones(5, 4);