const express = require('express');

const app = express();

// Ruta Hola mundo

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});


// Paso 2: Ejecutar el Servidor



