
let persona = {};
function ingresarDatos() {
    persona.nombre = prompt('ingresa tu nombre');
    persona.edad = parseInt(prompt('ingresa tu edad'));
    persona.ciudad = prompt('ingresa tu ciudad');

}
function saludar() {
    if (!persona.nombre || !persona.edad || !persona.ciudad){
        ingresarDatos();
    } 
    alert(`Hola, soy ${persona.nombre}, tengo ${persona.edad} y vivo en ${persona.ciudad}`)
}
 
 