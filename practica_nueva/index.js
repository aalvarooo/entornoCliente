let libro = {};
let divBiblioteca = document.getElementById("biblioteca");
let librosInicialesPantalla = false;

function biblioteca(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;

}

console.log(divBiblioteca);

function obtenerDatosLibro() {
    libro.titulo = prompt("nombre del libro");
    libro.autor = prompt("nombre del auto");
    libro.año = prompt("año cúando se escribío");
    libro.genero = prompt("genero del libro");
}

function crearElementoParrafo() {
}

function mostrarInfoLibro() {
    let parrafo = document.createElement("p");
    obtenerDatosLibro();
    parrafo.textContent = `Título : ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}, Género: ${libro.genero}`;
    divBiblioteca.appendChild(parrafo);
}

function agregarLibro() {
    mostrarInfoLibro();
    biblioteca.push(libro);
}

function librosIniciales() {
    if (!librosIniciales) {
        new biblioteca['julio', 'perez', 1906, 'novela']
        new biblioteca['julio', 'perez', 1906, 'novela']
        new biblioteca['julio', 'perez', 1906, 'novela']

        for (let i = 0; i < 3; i++) {
            parrafo.textContent = "";
        }


    }

}

function eliminarLibro() {

}