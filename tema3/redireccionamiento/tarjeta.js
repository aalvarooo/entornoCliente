const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const cicloFormativo = document.getElementById('cicloFormativo');
const curso = document.getElementById('curso');
const parametros = new URLSearchParams(window.location.search);
const parametro1 = parametros.get('nombre');
const parametro2 = parametros.get('apellido');
const parametro3 = parametros.get('cicloFormativo');
const parametro4 = parametros.get('curso');



function añadirvariables() {
    nombre.textContent = parametro1;
    apellido.textContent = parametro2;
    cicloFormativo.textContent = parametro3;
    curso.textContent = parametro4;

}
añadirvariables();