const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');  // Agrega esta línea
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let tareas = require('./tareas.json') || [];

// Endpoint para obtener las tareas
app.get('/api/tareas', (req, res) => {
    res.json(tareas);
});

// Endpoint para agregar una tarea
app.post('/api/tareas', (req, res) => {
    const nuevaTarea = {
        id: Date.now(),
        nombre: req.body.nombre,
    };
    tareas.push(nuevaTarea);
    guardarTareas();
    res.json(nuevaTarea);
});

// Endpoint para eliminar una tarea
app.delete('/api/tareas/:id', (req, res) => {
    const idTarea = parseInt(req.params.id);
    tareas = tareas.filter(tarea => tarea.id !== idTarea);
    guardarTareas();
    res.json({ message: 'Tarea eliminada exitosamente' });
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

function guardarTareas() {
    fs.writeFileSync('./tareas.json', JSON.stringify(tareas), 'utf-8');
}

