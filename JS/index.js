//JavaScript: hace aparecer las tarjetas al llegar a ellas       
      const columnas = document.querySelectorAll('#tarjetas .row > div');

        columnas.forEach((columna) => {
            columna.classList.add('aparece');
        });

        const observador = new IntersectionObserver((entradas) => {
            entradas
                .filter((entrada) => entrada.isIntersecting)
                .forEach((entrada, n) => {
                    entrada.target.style.transitionDelay = (n * 120) + 'ms';
                    entrada.target.classList.add('en-vista');
                    observador.unobserve(entrada.target);
                });
        }, { threshold: 0.15 });

        columnas.forEach((columna) => observador.observe(columna));   