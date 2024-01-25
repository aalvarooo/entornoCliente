document.addEventListener("DOMContentLoaded", function () {
    const vidasContainer = document.querySelector('.vidas-container');
    const tableroJuego = document.querySelector('.tablero-juego');
    const barcosTotales = 2;
    let barcosHundidos = 0;
    const totalCeldas = 100;
    let vidas = 5;
    let clics = 0;

    function crearCelda(id) { // Crea y devuelve un elemento de celda con un identificador único.
        const celda = document.createElement("div");
        celda.classList.add('celda');
        celda.id = id;
        return celda;
    }

    function generarBotesAleatorios() { // Genera posiciones aleatorias para los barcos en el tablero.
        const posicionesAleatorias = [];

        while (posicionesAleatorias.length < barcosTotales) {
            const numAleatorio = Math.floor(Math.random() * totalCeldas) + 1;
            if (!posicionesAleatorias.includes(numAleatorio)) {
                posicionesAleatorias.push(numAleatorio);
            }
        }
        console.log(posicionesAleatorias);
        return posicionesAleatorias;
    }

    function colocarBotesEnTablero() {  //Coloca los barcos en el tablero y establece eventos de clic en las celdas.
        const botePosiciones = generarBotesAleatorios();

        for (let i = 0; i < totalCeldas; i++) {
            const celda = crearCelda(i + 1);

            if (botePosiciones.includes(i + 1)) {
                celda.classList.add('bote');
            }

            celda.addEventListener("click", alHacerClick);
            tableroJuego.appendChild(celda);
        }
    }

    function alHacerClick(e) { // Acción que ocurre al hacer clic en una celda, verificando si hay un barco o no y actualizando el estado del juego.
        if (vidas > 0) {
            vidas--;
            actualizarVidas();
            const celda = e.target;
            if (celda.classList.contains('bote') && !celda.classList.contains('hundido')) {
                alert("¡Hundido!");
                celda.classList.add('hundido');
                barcosHundidos++;
                if (barcosHundidos === barcosTotales) {
                    finJuego();
                }
            } else {
                if (!celda.classList.contains('agua') && !celda.classList.contains('hundido')) {
                    celda.classList.add('agua');
                    alert("¡Agua!");
                }
            }

            clics++;
            if (vidas <= 0) {
                mostrarGameOver();
            }
        }
    }

    function reiniciarJuego() { //  Reinicia el juego, restableciendo todas las variables y elementos del tablero.
        tableroJuego.classList.remove("juego-terminado");
        barcosHundidos = 0;
        tableroJuego.innerHTML = '';
        colocarBotesEnTablero();
        vidas = 5;
        clics = 0;
        actualizarVidas();
    }

    function finJuego() { // Se ejecuta cuando se hunden todos los barcos, muestra un mensaje de victoria y un botón para reiniciar el juego.
        const mensajeFinJuego = document.createElement("div");
        mensajeFinJuego.classList.add("mensaje-fin-juego");
        mensajeFinJuego.innerText = "¡Has hundido todos los barcos!";

        const imagenFinJuego = document.createElement("img");
        imagenFinJuego.src = "img/gameOver.png";
        imagenFinJuego.classList.add("imagen-fin-juego");

        const botonReiniciar = document.createElement("button");
        botonReiniciar.className = "boton-reinicio";
        botonReiniciar.innerHTML = "Reiniciar juego";
        botonReiniciar.addEventListener("click", reiniciarJuego);

        tableroJuego.innerHTML = '';
        tableroJuego.classList.add("juego-terminado");
        tableroJuego.appendChild(mensajeFinJuego);
        tableroJuego.appendChild(imagenFinJuego);
        tableroJuego.appendChild(botonReiniciar);
    }

    function mostrarGameOver() { // Actualiza visualmente la cantidad de vidas en el contenedor.
        const mensajeFinJuego = document.createElement("div");
        mensajeFinJuego.classList.add("mensaje-fin-juego");
        mensajeFinJuego.innerText = "¡Prueba otra vez!";

        const imagenFinJuego = document.createElement("img");
        imagenFinJuego.src = "img/gameOver.png";
        imagenFinJuego.classList.add("imagen-fin-juego");

        const botonReiniciar = document.createElement("button");
        botonReiniciar.className = "boton-reinicio";
        botonReiniciar.innerHTML = "Reiniciar juego";
        botonReiniciar.addEventListener("click", reiniciarJuego);

        tableroJuego.innerHTML = '';
        tableroJuego.classList.add("juego-terminado");
        tableroJuego.appendChild(mensajeFinJuego);
        tableroJuego.appendChild(imagenFinJuego);
        tableroJuego.appendChild(botonReiniciar);
    }

    function actualizarVidas() {
        vidasContainer.innerHTML = '';
        for (let i = 0; i < vidas; i++) {
            const vida = document.createElement("img");
            vida.src = "img/vidas.png";
            vida.classList.add("vida-item");
            vidasContainer.appendChild(vida);
        }
    }

    colocarBotesEnTablero();
    actualizarVidas();

    //  se llaman al inicio para generar los barcos en posiciones aleatorias y mostrar las vidas disponibles.
});
