
        // Lee los datos de cada lugar desde las tarjetas de #datos-lugares
        const datos = document.querySelectorAll('#datos-lugares .col');
        const lugares = [];

        for (let i = 0; i < datos.length; i++) {
            const foto = datos[i].querySelector('img');
            const boton = datos[i].querySelector('button');
            const items = datos[i].querySelectorAll('li');

            lugares.push({
                nombre: boton ? boton.textContent.trim() : '',
                imagen: foto ? foto.getAttribute('src') : '',
                alt: foto ? foto.getAttribute('alt') : '',
                dato1: items[0] ? items[0].textContent : '',
                dato2: items[1] ? items[1].textContent : ''
            });
        }

        const grilla = document.getElementById('grilla-lugares');
        const msgError = document.getElementById('msg-error');

        // Crea una tarjeta por cada lugar
        for (let i = 0; i < lugares.length; i++) {
            const lugar = lugares[i];

            // Valida que no falte ningún dato
            if (lugar.nombre.trim() === '' || lugar.imagen.trim() === '' || lugar.alt.trim() === '' || lugar.dato1.trim() === '' || lugar.dato2.trim() === '') {
                msgError.textContent = 'Hay lugares con datos incompletos.';
                continue;
            }

            // Columna y tarjeta
            const col = document.createElement('div');
            col.className = 'col faq';

            const card = document.createElement('div');
            card.className = 'card shadow-sm overflow-hidden';

            // Imagen
            const img = document.createElement('img');
            img.src = lugar.imagen;
            img.alt = lugar.alt;
            img.className = 'card-img-top card-img-index w-100';
            img.style.height = '200px';
            img.style.objectFit = 'cover';
            img.style.display = 'block';

            const body = document.createElement('div');
            body.className = 'card-body flex-grow-0';

            // Botón con el nombre del lugar
            const boton = document.createElement('button');
            boton.type = 'button';
            boton.className = 'btn btn-outline-warning pregunta w-100 d-flex align-items-center justify-content-center text-center';
            boton.style.height = '5.5rem';
            boton.style.overflow = 'hidden';
            boton.textContent = lugar.nombre;

            // Información del lugar (empieza oculta, se despliega hacia abajo)
            const respuesta = document.createElement('div');
            respuesta.className = 'respuesta oculto';

            const lista = document.createElement('ul');
            lista.className = 'card-text small ps-3 mb-0 mt-3';

            const li1 = document.createElement('li');
            li1.textContent = lugar.dato1;

            const li2 = document.createElement('li');
            li2.textContent = lugar.dato2;

            // Arma la tarjeta de adentro hacia afuera
            lista.appendChild(li1);
            lista.appendChild(li2);
            respuesta.appendChild(lista);
            body.appendChild(boton);
            body.appendChild(respuesta);
            card.appendChild(img);
            card.appendChild(body);
            col.appendChild(card);
            grilla.appendChild(col);
        }

        // Al hacer clic en un lugar se cierran los demás y se abre el clicado
        const botones = document.querySelectorAll('.pregunta');
        const respuestas = document.querySelectorAll('.respuesta');

        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener('click', function () {
                const estabaOculto = respuestas[i].classList.contains('oculto');

                // Cierra todos
                for (let j = 0; j < respuestas.length; j++) {
                    respuestas[j].classList.add('oculto');
                }

                // Abre el clicado (si estaba cerrado)
                if (estabaOculto) {
                    respuestas[i].classList.remove('oculto');
                }
            });
        }