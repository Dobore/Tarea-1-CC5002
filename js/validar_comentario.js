function agregarComentario() {
    const nombreInput = document.getElementById('nombreComentario');
    const textoInput = document.getElementById('textoComentario');
    const mensajeContainer = document.getElementById('mensaje');

    // Se limpian los mensajes de error anteriores
    mensajeContainer.innerHTML = '';

    const nombre = nombreInput.value.trim();
    const texto = textoInput.value.trim();

    let errores = [];

    // Se valida el nombre
    if (nombre.length < 3 || nombre.length > 80) {
        errores.push('El nombre debe tener entre 3 y 80 caracteres.');
    }

    // Se valida el comentario
    if (texto.length < 5) {
        errores.push('El comentario debe tener al menos 5 caracteres.');
    }

    if (errores.length > 0) {
        mensajeContainer.innerHTML = errores.join('<br>');
        mensajeContainer.style.color = 'red';
    } else {
        mensajeContainer.innerHTML = 'Comentario agregado exitosamente.';
        mensajeContainer.style.color = 'green';
        // Se limpian los campos para agregar un nuevo comentario 
        nombreInput.value = '';
        textoInput.value = '';
    }
}
