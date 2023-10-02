let libros = [];
function Biblioteca(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
}

let libro1 = new Biblioteca("Trajano", "Santiago Posteguillo", 2010, "Nóvela");
let libro2 = new Biblioteca("Africanus", "Santiago Posteguillo", 2008, "Nóvela");
let libro3 = new Biblioteca("Yo Julia", "Santiago Posteguillo", 2021, "Nóvela");


libros.push(libro1, libro2, libro3)



console.log(Biblioteca);
function ingresarDatos() {
    let titulo = prompt("Introduce el nombre del libro");
    let autor = prompt("Introduce el nombre del autor");
    let año = parseInt(prompt("Introduce la fecha del libro"));
    let genero = prompt("Introduce el género de la novela");

    let nuevoLibro = new Biblioteca(titulo, autor, año, genero);
    libros.push(nuevoLibro);

    mostrarLibros();
}

function agregarLibro() {

    ingresarDatos();



}


function mostrarLibros() {
    let divBiblioteca = document.getElementById("biblioteca");

    // Limpiar el contenido previo
    divBiblioteca.innerHTML = "";

    // Iterar sobre los libros y mostrar la información en el div
    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        let libroInfo = document.createElement("p");
        libroInfo.textContent = `Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}, Género: ${libro.genero}`;
        divBiblioteca.appendChild(libroInfo);
    }
}

mostrarLibros();
function eliminarLibro() {
    let tituloAEliminar = prompt("dame el título");
    for (let i = 0; i < libros.length; i++) {
        if (libros[i] == tituloAEliminar) {
            libros.pop(libros[i]);
            console.log(libros);
        }
    }
}
