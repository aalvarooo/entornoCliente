var ejemploCargado = false; // Variable para rastrear si el ejemplo se ha cargado

function cargarEjemplo() {
    if (!ejemploCargado) {
        var numerosEjemplo = "63, 45, 58, 56"; // Números de ejemplo
        textarea = document.getElementById("textarea");
        textarea.value = numerosEjemplo;
        console.log(textarea.value);

        ejemploCargado = true; // Marcamos que el ejemplo ha sido cargado
    }
}

function obtenerResultados() {
    resultado = document.getElementById("textarea").value.split(/,/);
    console.log(resultado);
}




// function suma(array) {

//     let suma = 0;

//     for (let valor of array) {
//         suma += valor;
//     }
//     // for (let i = 0; i < array.length; i++) {
//     //     suma += array[i];
//     // }
//     return suma;
// }
// function calcularMedia(array) {
//     let suma = 0;


//     for (let valor of array)
//         suma += valor;
//     return suma / array.length;

// }
// function obtenerMayor(array) {
//     let mayor = array[0];
//     for (i = 0; i <= array.length; i++) {
//         valor = array[i];

//         if (valor > mayor) {
//             mayor = valor;
//         }
//     }
//     return mayor;

// }
// function obtenerMenor(array) {
//     let menor = array[0];
//     for (i = 0; i <= array.length; i++) {
//         valor = array[i];
//         if (valor < menor) {
//             menor = valor;
//         }
//     }
//     return menor;
// }


// let array = [9, 3, 4, 5];
// console.log(suma(array)
// );

// console.log(calcularMedia(array)
// );


// console.log(obtenerMayor(array)
// );
// console.log(obtenerMenor(array)
// );