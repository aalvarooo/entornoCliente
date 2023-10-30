const listaTareas = document.getElementById("lista_tareas");
const nuevaTareaInput = document.getElementById("nuevaTarea");
const agregarTareaBtn = document.getElementById("agregarTarea");
const eliminarTareaBtn = document.getElementById("eliminarTarea");
const moverTareaArribaBtn = document.getElementById("moverTareaArriba");

agregarTareaBtn.addEventListener("click", agregarTarea);
eliminarTareaBtn.addEventListener("click", eliminarTarea);
moverTareaArribaBtn.addEventListener("click", moverTareaArriba);
listaTareas.addEventListener("click", selecionarTarea);

function agregarTarea(){
    const tareaTexto = nuevaTareaInput.value;
    if(tareaTexto.trim() !== ""){
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tareaTexto;
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
}

function eliminarTarea(){
    const tareaSeleccionada = listaTareas.querySelector(".resaltar");
    if(tareaSeleccionada){
        listaTareas.removeChild(tareaSeleccionada);
    }
}

function moverTareaArriba(){
    const tareaSeleccionada = listaTareas.querySelector(".resaltar");
    if(tareaSeleccionada && tareaSeleccionada.previousElementSibling){
        listaTareas.insertBefore(tareaSeleccionada, tareaSeleccionada.previousElementSibling);
    }
}

function selecionarTarea(event){
    const tareaSeleccionada = event.target;
    if(tareaSeleccionada.tagName === "LI"){
        tareaSeleccionada.classList.toggle("resaltar");
    }
}