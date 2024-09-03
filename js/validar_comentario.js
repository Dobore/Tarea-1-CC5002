function agregarComentario() {
    const nombreInput = document.getElementById('nombreComentario');
    const textoInput = document.getElementById('textoComentario');
    const mensajeContainer = document.getElementById('mensaje');

    // Limpia mensajes de error anteriores
    mensajeContainer.innerHTML = '';

    const nombre = nombreInput.value.trim();
    const texto = textoInput.value.trim();

    let errores = [];

    // Validación del nombre
    if (nombre.length < 3 || nombre.length > 80) {
        errores.push('El nombre debe tener entre 3 y 80 caracteres.');
    }

    // Validación del texto del comentario
    if (texto.length < 5) {
        errores.push('El comentario debe tener al menos 5 caracteres.');
    }

    if (errores.length > 0) {
        mensajeContainer.innerHTML = errores.join('<br>');
        mensajeContainer.style.color = 'red'; // Color rojo para mensajes de error
    } else {
        mensajeContainer.innerHTML = 'Comentario agregado exitosamente.';
        mensajeContainer.style.color = 'green'; // Color verde para mensajes de éxito
        // Aquí puedes agregar lógica para manejar el comentario, como enviarlo a un servidor
        // o actualizar la lista de comentarios en la página.
        nombreInput.value = '';
        textoInput.value = '';
    }
}
