
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Usar querySelectorAll para obtener todos los .faq
            const faqs = document.querySelectorAll('.faq');

            faqs.forEach(faq => {
                // Obtener el botón y la respuesta dentro de cada bloque .faq
                const boton = faq.querySelector('.pregunta');
                const respuesta = faq.querySelector('.respuesta');

                // 2. Asignar event listener de "click" a cada botón
                boton.addEventListener('click', () => {
                    const estabaOculto = respuesta.classList.contains('oculto');

                    // 3. Al hacer clic: cerrar todas las respuestas
                    document.querySelectorAll('.faq .respuesta').forEach(r => {
                        r.classList.add('oculto');
                    });

                    // Y luego abrir la clicada (si estaba cerrada)
                    if (estabaOculto) {
                        respuesta.classList.remove('oculto');
                    }
                });
            });
        });


        const formConsulta = document.getElementById('formConsulta');
        const inputNombre = document.getElementById('nombre');
        const inputEmail = document.getElementById('email');
        const selectEntidad = document.getElementById('entidad');
        const inputMensaje = document.getElementById('mensaje');
        const msgError = document.getElementById('msg-error');

        formConsulta.addEventListener('submit', (e) => {
            e.preventDefault();
            msgError.textContent = '';

            const nombre = inputNombre.value.trim();
            const email = inputEmail.value.trim();
            const entidad = selectEntidad.value;
            const mensaje = inputMensaje.value.trim();

            if (nombre === '' || email === '' || mensaje === '') {
                msgError.textContent = 'Por favor, completá todos los campos obligatorios.';
                return;
            }

            console.log('Datos válidos:', { nombre, email, entidad, mensaje });
            alert(`¡Gracias, ${nombre}! Tu consulta fue enviada con éxito.`);
            formConsulta.reset();
        });

        const mensaje = document.getElementById('mensaje');
        const contador = document.getElementById('contador');
        const maxLength = mensaje.getAttribute('maxlength');

        mensaje.addEventListener('input', () => {
            const currentLength = mensaje.value.length;
            contador.textContent = `${currentLength} / ${maxLength}`;

            // Si quedan menos de 20 caracteres disponibles (y no llegó al límite exacto)
            const caracteresRestantes = maxLength - currentLength;

            if (currentLength === 0) {
                contador.style.color = ''; // Vuelve al color por defecto
            } else if (caracteresRestantes === 0) {
                contador.style.color = 'red';
            } else if (caracteresRestantes < 20) {
                contador.style.color = 'orange';
            } else {
                contador.style.color = ''; // Color por defecto cuando hay margen
            }
        });
