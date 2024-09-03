function validarDispositivos() {
    const formulario = document.querySelector('form');

    formulario.addEventListener("submit", function(event) {
        let hayErrores = false;

        // Limpiar mensajes de error anteriores
        document.querySelectorAll('.mensajeError').forEach(el => el.remove());

        // Validación de cada dispositivo
        let dispositivos = document.querySelectorAll('.informacionDispositivo');
        dispositivos.forEach((dispositivo, index) => {
            const errorContainer = document.createElement('div');
            errorContainer.classList.add('mensajeError');
            errorContainer.style.color = 'red';
            errorContainer.style.marginTop = '5px';
            let errorMessages = [];

            const nombreDispositivoInput = dispositivo.querySelector('input[name="nombreDispositivo"]');
            if (nombreDispositivoInput) {
                const nombreDispositivo = nombreDispositivoInput.value.trim();
                if (nombreDispositivo.length < 3) {
                    errorMessages.push(`El nombre del dispositivo ${index + 1} debe tener al menos 3 caracteres.`);
                } else if (nombreDispositivo.length > 80) {
                    errorMessages.push(`El nombre del dispositivo ${index + 1} no puede tener más de 80 caracteres.`);
                }
            }

            const tipoInput = dispositivo.querySelector('select[name="tipo"]');
            if (tipoInput) {
                const tipo = tipoInput.value;
                if (tipo === "") {
                    errorMessages.push(`Seleccione un tipo válido para el dispositivo ${index + 1}.`);
                }
            }

            const tiempoUsoInput = dispositivo.querySelector('input[name="tiempoUso"]');
            if (tiempoUsoInput) {
                const tiempoUso = tiempoUsoInput.value.trim();
                const tiempoUsoNumero = parseInt(tiempoUso, 10);
                if (isNaN(tiempoUsoNumero) || tiempoUsoNumero < 1 || tiempoUsoNumero > 99) {
                    errorMessages.push(`Ingrese un año de uso válido (entre 1 y 99 años) para el dispositivo ${index + 1}.`);
                }
            }

            const estadoFuncionamientoInput = dispositivo.querySelector('select[name="estadoFuncionamiento"]');
            if (estadoFuncionamientoInput) {
                const estadoFuncionamiento = estadoFuncionamientoInput.value;
                if (estadoFuncionamiento === "") {
                    errorMessages.push(`Seleccione un estado de funcionamiento válido para el dispositivo ${index + 1}.`);
                }
            }

            const fotosInput = dispositivo.querySelector('input[name="fotos[]"]');
            if (fotosInput) {
                const cantidadFotos = fotosInput.files.length;
                if (cantidadFotos < 1 || cantidadFotos > 3) {
                    errorMessages.push(`Debe subir entre 1 y 3 imágenes para el dispositivo ${index + 1}.`);
                }
            }

            // Si hay errores, mostrarlos en el contenedor correspondiente
            if (errorMessages.length > 0) {
                hayErrores = true;
                errorContainer.innerHTML = errorMessages.join('<br>');
                dispositivo.appendChild(errorContainer);
            }
        });

        // Prevenir el envío del formulario si hay errores
        if (hayErrores) {
            event.preventDefault();
        }
    });
}


