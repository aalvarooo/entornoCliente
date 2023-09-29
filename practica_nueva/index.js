let arrayEjemplo = [];

function devolverEjemplo() {
    let resultado = [];
    arrayEjemplo = [63, 45, 58, 56];

    arrayEjemplo.forEach(numero => {
        resultado.push(numero + ',');
    });

    let textArea = document.getElementById("ejemplo");
    return textArea.value = resultado;
}

function calcularOperaciones(){

}
function suma(array){

}




