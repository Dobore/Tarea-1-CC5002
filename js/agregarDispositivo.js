let contadorDispositivos = 2; 
document.addEventListener("DOMContentLoaded", () => {
    const agregarDispositivoButton = document.getElementById("agregarDispositivo");
    const containerDispositivos = document.getElementById("containerDispositivos");

    agregarDispositivoButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Crea un elemento <br> para separar los dispositivos
        const saltoLinea = document.createElement('br');

        // Clona el contenedor del dispositivo
        const nuevoDispositivo = document.querySelector(".informacionDispositivo").cloneNode(true);

        // Limpia los valores de los campos clonados y elimina los IDs duplicados
        nuevoDispositivo.querySelectorAll('input, textarea').forEach(input => {
            input.value = '';
            input.removeAttribute('id');
        });

        // Actualiza el título del dispositivo para reflejar el nuevo número
        const titulo = nuevoDispositivo.querySelector("div > b");
        if (titulo) {
            titulo.textContent = `Información del dispositivo (${contadorDispositivos})`;
        }

        // Incrementa el contador de dispositivos
        contadorDispositivos++;

        // Agrega el salto de línea y el nuevo dispositivo al contenedor
        containerDispositivos.appendChild(saltoLinea);
        containerDispositivos.appendChild(nuevoDispositivo);
    });
});



   