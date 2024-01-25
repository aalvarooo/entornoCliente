const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let ruta = req.url;

    if (ruta === '/saludo') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>¡Hola! Bienvenido a la página de saludos.</h1>');
    } else if (ruta === '/despedida') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>¡Hasta luego! Gracias por visitar la página de despedida.</h1>');
    } else {
        // Ruta principal o cualquier otra ruta
        const rutaCompleta = path.join(__dirname, 'public', 'index.html');
        fs.readFile(rutaCompleta, 'utf-8', (error, contenido) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Error 404: No encontrado</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(contenido);

            }
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
