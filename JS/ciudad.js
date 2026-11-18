const btnCurioso = document.getElementById("btn-curioso");
const contenidoCurioso = document.getElementById("contenido-curioso");

btnCurioso.addEventListener("click", function () {
    // Alterna la clase 'oculto' (si está la saca para mostrar, si no está la pone para ocultar)
    contenidoCurioso.classList.toggle("oculto");

    // Cambia el texto del botón según si quedó oculto o visible
    if (contenidoCurioso.classList.contains("oculto")) {
        btnCurioso.textContent = "Leer más";
    } else {
        btnCurioso.textContent = "Leer menos";
    }
});