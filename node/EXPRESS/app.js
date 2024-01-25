
//2.2. Importar Express y Crear Instancia:


const express = require('express');
const app = express();

// 2.3.Definir Rutas y Manejadores:


//Define rutas y acciones. Agrega las siguientes líneas para una ruta GET en la raíz del servidor:

app.get('/', (request, response) => {
    response.send('Respuesta de la llamada a la ruta');
});
// 2.4.Iniciar el Servidor:

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express inciado en el puerto ${PORT}`);
})

//3.2. Verificar en el Navegador:
/* Abre tu navegador y visita http://localhost:3000 (o el puerto que hayas especificado).
Deberías ver la respuesta de la llamada a la ruta.*/

