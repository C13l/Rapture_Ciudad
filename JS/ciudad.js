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

        document.addEventListener('DOMContentLoaded', () => {
                    // 1. Usar querySelectorAll para obtener todos los .eras
                    const eras = document.querySelectorAll('.eras');

                    eras.forEach(eras => {
                        // Obtener el botón y la respuesta dentro de cada bloque .eras
                        const boton = eras.querySelector('.unaera');
                        const respuesta = eras.querySelector('.desc');

                        // 2. Asignar event listener de "click" a cada botón
                        boton.addEventListener('click', () => {
                            const estabaOculto = respuesta.classList.contains('oculto');

                            // 3. Al hacer clic: cerrar todas las respuestas
                            document.querySelectorAll('.eras .desc').forEach(r => {
                                r.classList.add('oculto');
                            });

                            // Y luego abrir la clicada (si estaba cerrada)
                            if (estabaOculto) {
                                respuesta.classList.remove('oculto');
                            }
                        });
                    });
                });