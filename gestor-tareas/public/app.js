document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-tarea');
    const listaTareas = document.getElementById('lista-tareas');

    formulario.addEventListener('submit', agregarTarea);

    function agregarTarea(evento) {
        evento.preventDefault();
        const nuevaTarea = formulario.elements['nombre'].value;
        if (nuevaTarea.trim() === '') {
            alert('Por favor, ingresa un nombre de tarea válido.');
            return;
        }

        fetch('/api/tareas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: nuevaTarea }),
        })
            .then(response => response.json())
            .then(tarea => {
                // Agregar la tarea a la lista en el cliente
                const nuevaTareaElemento = document.createElement('li');
                nuevaTareaElemento.textContent = tarea.nombre;
                listaTareas.appendChild(nuevaTareaElemento);

                // Limpiar el formulario
                formulario.elements['nombre'].value = '';
            })
            .catch(error => console.error('Error al agregar tarea:', error));
    }

    // Puedes continuar con la lógica para eliminar tareas, editar, etc.
});
