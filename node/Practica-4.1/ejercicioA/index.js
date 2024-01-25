const { error } = require('console');
const fs = require('fs');
const filePath = './archivo.txt';

// Leer el archivo 
fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
        console.error('Error al leer el archivo', error);
        return;
    }
    console.log('Contenido del archivo');
    console.log(data);
})