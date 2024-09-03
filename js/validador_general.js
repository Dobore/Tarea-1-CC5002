document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('form');

    formulario.addEventListener("submit", function(event) {
        let hayErrores = false;

        // Limpiar mensajes de error anteriores
        document.querySelectorAll('.mensajeError').forEach(el => el.remove());
        document.getElementById('errorContainer').innerHTML = "";

        // Validación de la información de contacto
        const errorMessages = [];
        const nombreDonante = document.getElementById("nombreDonante").value.trim();
        if (nombreDonante.length < 3) {
            errorMessages.push("El nombre del donante debe tener al menos 3 caracteres.");
        } else if (nombreDonante.length > 80) {
            errorMessages.push("El nombre del donante no puede tener más de 80 caracteres.");
        }

        const emailDonante = document.getElementById("emailDonante").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailDonante)) {
            errorMessages.push("Ingrese un correo electrónico válido.");
        }

        const numeroCelular = document.getElementById("numeroCelular").value.trim();
        const celularRegex = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
        if (numeroCelular !== "" && !celularRegex.test(numeroCelular)) {
            errorMessages.push("Ingrese un número de teléfono móvil válido.");
        }

        const regionSelect = document.getElementById("regiones");
        if (regionSelect.value === "") {
            errorMessages.push("Seleccione una región válida.");
        }

        const comunaSelect = document.getElementById("comunas");
        if (comunaSelect.value === "") {
            errorMessages.push("Seleccione una comuna válida.");
        }

        if (errorMessages.length > 0) {
            document.getElementById('errorContainer').innerHTML = errorMessages.join('<br>');
            event.preventDefault(); // Prevenir el envío del formulario
            return; // Terminar la ejecución si hay errores
        }

        // Validación de dispositivos
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

            if (errorMessages.length > 0) {
                hayErrores = true;
                errorContainer.innerHTML = errorMessages.join('<br>');
                dispositivo.appendChild(errorContainer);
            }
        });

        if (hayErrores) {
            event.preventDefault(); // Prevenir el envío del formulario
            return; // Terminar la ejecución si hay errores
        }

        // Si no hay errores, mostrar mensaje de confirmación
        event.preventDefault(); // Prevenir el envío del formulario
        mostrarConfirmacion();
    });

    function mostrarConfirmacion() {
        const mensajeConfirmacion = document.createElement('div');
        mensajeConfirmacion.id = 'mensajeConfirmacion';
        mensajeConfirmacion.innerHTML = `
            <p>¿Confirma que desea publicar esta donación?</p>
            <button id="confirmarEnvio">Sí, confirmo</button>
            <button id="volverFormulario">No, quiero volver al formulario</button>
        `;
        formulario.parentNode.appendChild(mensajeConfirmacion);

        document.getElementById('confirmarEnvio').addEventListener('click', function() {
            mensajeConfirmacion.remove();
            const mensajeExito = document.createElement('div');
            mensajeExito.innerHTML = `
                <p>Hemos recibido la información de su donación. Muchas gracias.</p>
                <a href="index.html"><button>Volver a la portada</button></a>
            `;
            formulario.parentNode.appendChild(mensajeExito);
        });

        document.getElementById('volverFormulario').addEventListener('click', function() {
            mensajeConfirmacion.remove();
            formulario.style.display = 'block';
        });
    }
});
