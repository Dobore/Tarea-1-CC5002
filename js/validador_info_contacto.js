function validarInfoContacto() {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = ""; // Limpia cualquier mensaje de error anterior

    const errorMessages = [];
    const mensajeError = document.createElement('div');
    mensajeError.style.color = 'red';
    mensajeError.style.marginTop = '5px';

    // Validación del nombre del donante
    const nombreDonante = document.getElementById("nombreDonante").value.trim();
    if (nombreDonante.length < 3) {
        errorMessages.push("El nombre del donante debe tener al menos 3 caracteres.");
    } else if (nombreDonante.length > 80) {
        errorMessages.push("El nombre del donante no puede tener más de 80 caracteres.");
    }

    // Validación del email usando regex
    const emailDonante = document.getElementById("emailDonante").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailDonante)) {
        errorMessages.push("Ingrese un correo electrónico válido.");
    }

    // Validación del número de celular usando regex
    const numeroCelular = document.getElementById("numeroCelular").value.trim();
    const celularRegex = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
    if (numeroCelular !== "" && !celularRegex.test(numeroCelular)) {
        errorMessages.push("Ingrese un número de teléfono móvil válido.");
    }

    // Validación de la región
    const regionSelect = document.getElementById("regiones");
    if (regionSelect.value === "") {
        errorMessages.push("Seleccione una región válida.");
    }

    // Validación de la comuna
    const comunaSelect = document.getElementById("comunas");
    if (comunaSelect.value === "") {
        errorMessages.push("Seleccione una comuna válida.");
    }

    if (errorMessages.length > 0) {
        mensajeError.innerHTML = errorMessages.join('<br>');
        errorContainer.appendChild(mensajeError);
        return false; // Hay errores, se cancela el submit
    }
    
    return true; // No hay errores, se permite el submit
}
