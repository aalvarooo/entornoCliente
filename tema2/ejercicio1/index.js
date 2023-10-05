let biblioteca = [];
let libro1 = {
    Titulo: "Africanus",
    Autor: "Santiago Posteguillo",
    Año: 2012,
    Genero: "Novela"
};
let libro2 = {
    Titulo: "Hijos del emperador",
    Autor: "Santiago Posteguillo",
    Año: 2019,
    Genero: "Novela"
};
let libro3 = {
    Titulo: "Yo Julia",
    Autor: "Santiago Posteguillo",
    Año: 2020,
    Genero: "Novela"
};
biblioteca.push(libro1, libro2, libro3);
function ingresarDatos() {
    let libro = {};
    libro.Titulo = prompt("Escribe el nombre del título");
    libro.Autor = prompt("Escribe el nombre del autor");
    libro.Año = parseInt(prompt("Escribe el año en que se escribió"));
    libro.Genero = prompt("Dinos de qué género es el libro");
    return libro;
}
function mostrarInfo(libro) {
    console.log(`Título: ${libro.Titulo}, Autor: ${libro.Autor}, Año:
${libro.Año}, Género: ${libro.Genero}`);
}
function agregarLibro() {
    let nuevoLibro = ingresarDatos();
    biblioteca.push(nuevoLibro);
    mostrarInfo(nuevoLibro);
    mostrarBiblioteca();
}
function mostrarBiblioteca() {

    let divBiblioteca = document.getElementById("biblioteca");
    divBiblioteca.innerHTML = "";
    for (let i = 0; i < biblioteca.length; i++) {
        let parrafo = document.createElement("p");
        parrafo.textContent = `Título: ${biblioteca[i].Titulo}, Autor:${biblioteca[i].Autor}, Año: ${biblioteca[i].Año}, Género:${biblioteca[i].Genero}`;
        divBiblioteca.appendChild(parrafo);
    }
}
function eliminarLibro() {
    let libroEliminar = prompt("Ingresa el nombre del título a eliminar");
    for (let i = 0; i < biblioteca.length; i++) {
        if (biblioteca[i].Titulo === libroEliminar) {
            biblioteca.splice(i, 1);
            mostrarBiblioteca();
            return;
        }
    }
    alert("No coinncide con ningún libro");
}