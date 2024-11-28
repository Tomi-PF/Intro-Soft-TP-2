function mostrarContenido(seccion) {
    // Oculta todas las secciones
    document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
    });

    // Muestra la sección seleccionada
    const seccionElegida = document.getElementById(seccion.toLowerCase());
    if (seccionElegida) {
        seccionElegida.style.display = "block";
    }
}

let currentIndex = 0;

function cambiarImagen(direccion) {
    const images = document.querySelector('.carousel-images');
    const totalImages = images.children.length;

    // Calcula el nuevo índice
    currentIndex += direccion;

    // Ciclo infinito: vuelve al inicio/final
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Mueve el contenedor de imágenes
    const offset = -currentIndex * 100; // 100% por imagen
    images.style.transform = `translateX(${offset}%)`;
}

setInterval(() => cambiarImagen(1), 5000); // Cambia cada 5 segundos
