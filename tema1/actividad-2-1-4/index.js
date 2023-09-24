document.addEventListener("DOMContentLoaded", function () {
    const inputArray = document.getElementById("inputArray");
    const valorAAnadir = document.getElementById("valorAAnadir");
    const posicionArray = document.getElementById("posicionArray");
    const agregarValor = document.getElementById("agregarValor");
    const agregarEjemplo = document.getElementById("agregarEjemplo");

    function obtenerArray() {
        const entrada = inputArray.value.trim();
        return entrada.split(',').map(item => parseInt(item.trim()));
    }

    function actualizarOpciones() {
        const array = obtenerArray();
        posicionArray.innerHTML = "";

        for (let i = 0; i <= array.length; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = `Posición ${i}`;
            posicionArray.appendChild(option);
        }
    }

    function agregarValorArray() {
        const array = obtenerArray();
        const valor = parseInt(valorAAnadir.value.trim());
        const posicion = parseInt(posicionArray.value);

        if (!isNaN(valor)) {
            array.splice(posicion, 0, valor);
            inputArray.value = array.join(', ');
            actualizarOpciones();
            valorAAnadir.value = "";
        }
    }

    agregarEjemplo.addEventListener("click", function () {
        inputArray.value = "1, 2, 3, 4, 5";
        actualizarOpciones();
    });

    agregarValor.addEventListener("click", agregarValorArray);
    inputArray.addEventListener("input", actualizarOpciones);

    actualizarOpciones();
});
