// Obtener elementos del DOM
const thumbnails = document.querySelectorAll(".thumbnails img");
const featuredImage = document.getElementById("featured-image");

// Asignar eventos a las miniaturas
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        // Cambiar la imagen destacada al hacer clic en una miniatura
        featuredImage.src = thumbnail.src;
        featuredImage.alt = thumbnail.alt;
    });
});

// Mostrar la primera imagen como destacada al cargar la página
if (thumbnails.length > 0) {
    featuredImage.src = thumbnails[0].src;
    featuredImage.alt = thumbnails[0].alt;
}
