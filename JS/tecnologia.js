 document.addEventListener('DOMContentLoaded', () => {
            
            const Babosa = document.querySelectorAll('.Babosa');

            Babosa.forEach(Babosa => {
                
                const boton = Babosa.querySelector('.ADAM');
                const respuesta = Babosa.querySelector('.EVE');

              
                boton.addEventListener('click', () => {
                    const estabaOculto = respuesta.classList.contains('oculto');

                   
                    document.querySelectorAll('.Babosa .EVE').forEach(r => {
                        r.classList.add('oculto');
                    });

                 
                    if (estabaOculto) {
                        respuesta.classList.remove('oculto');
                    }
                });
            });
        });