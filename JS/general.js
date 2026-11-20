 //JavaScript: efecto de letras en los títulos
        (() => {
            function dividirLetras(elemento) {
                const texto = elemento.textContent.trim();
                elemento.setAttribute('aria-label', texto);
                elemento.textContent = '';

                let n = 0;
                const palabras = texto.split(' ');

                palabras.forEach((palabra, i) => {
                    const contenedor = document.createElement('span');
                    contenedor.className = 'palabra';
                    contenedor.setAttribute('aria-hidden', 'true');

                    palabra.split('').forEach((letra) => {
                        const span = document.createElement('span');
                        span.className = 'letra';
                        span.textContent = letra;
                        span.style.setProperty('--i', n);
                        n++;
                        contenedor.appendChild(span);
                    });

                    elemento.appendChild(contenedor);

                    if (i < palabras.length - 1) {
                        elemento.appendChild(document.createTextNode(' '));
                    }
                });
            }

            const titulo = document.querySelector('.banner-container h1');
            const titulosTarjetas = document.querySelectorAll('#tarjetas .card-title');

            if (titulo) {
                dividirLetras(titulo);
                setTimeout(() => titulo.classList.add('letras-visibles'), 300);
            }

            titulosTarjetas.forEach(dividirLetras);
        })();