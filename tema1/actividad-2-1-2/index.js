function cargarEjemplo() {
    const cantidadNumeros = 5;
    const max = 90;
    const textArea = this.previousElementSibling; //textarea correspondiente utilizo dom
    let numerosEjemplo = "";

    for (let j = 0; j < cantidadNumeros; j++) {
        numAleatorio = Math.floor(Math.random() * max);
        numerosEjemplo += numAleatorio;
        if (j < cantidadNumeros - 1) {
            numerosEjemplo += ",";
        }
    }

    textArea.textContent = numerosEjemplo;
}

const botones = document.getElementsByClassName("cargarBoton");
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", cargarEjemplo);
}


// Obtener la información guardada en los texareas
const textarea1 = document.getElementById("textarea1");
const textarea2 = document.getElementById("textarea2");
const resultadoDiv = document.getElementById("resultado");

// concatenar los dos arrays y mostrar el resultado
function concatenarArrays() {
    const array1 = textarea1.value;
    const array2 = textarea2.value;
    const resultado = array1 + "," + array2;

    //Muestra el resultado
    resultadoDiv.textContent = "Resultado concatenado: " + resultado;
}

const botonConcatenar = document.querySelector(".concatenar");
botonConcatenar.addEventListener("click", concatenarArrays);
