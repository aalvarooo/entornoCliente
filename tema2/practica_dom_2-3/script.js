const listaTareas = document.getElementById("lista_tareas");

const lista_li = listaTareas.children;

for (let i = 0; i < lista_li.length; i++) {
    lista_li[i].addEventListener(‘click’, function () {


        lista_li[i].className = "resaltar";

    });
}

function resaltarTarea() {


}



function agregarTarea() {
    let textArea = document.getElementById("textarea").value;
    const ultimo_li = listaTareas.lastChild;
    const lista_nueva = document.createElement("li");
    lista_nueva.textContent = textArea;
    listaTareas.appendChild(lista_nueva);
    textArea.textContent = "";
}

function eliminarTarea() {
    let listaSelecionada = false;
    for (let i = 0; i < lista_li.length; i++) {
        if (lista_li[i].classList.contains('resaltado')) { // Hacer algo si la clase está presente } 
            listaTareas.removeChild(lista_li[i]);
        }
    }
}
function moverTareaArriba() {

}

document.addEventListener("click", eliminarTarea);
document.readyState