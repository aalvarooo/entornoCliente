
function mostrarGrande(imagen) {
    const imagen_container= document.getElementById('imagen_container');
    imagenNueva = imagen_container.lastElementChild;
    console.log("lelgo aquí");
    console.log(imagenNueva);
    imagenNueva.src = `${imagen}`;
    console.log(imagenNueva.src);
    imagen_container.appendChild(imagenNueva);
    
}