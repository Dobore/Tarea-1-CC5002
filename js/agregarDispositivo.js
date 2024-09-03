document.getElementById('agregarDispositivo').addEventListener('click', function() {
    const containerDispositivos = document.getElementById('containerDispositivos');
    const dispositivos = containerDispositivos.getElementsByClassName('informacionDispositivo');
    const ultimoDispositivo = dispositivos[dispositivos.length - 1];
    
    // Se clona el último dispositivo
    const nuevoDispositivo = ultimoDispositivo.cloneNode(true);
    
    // Se actualiza el número en el título, para poder diferenciar los dispositivos entre sí
    const nuevoNumero = dispositivos.length + 1;
    nuevoDispositivo.querySelector('h2 b').textContent = `Información del dispositivo (${nuevoNumero})`;

    // Se limpian los campos de texto y selección en el nuevo dispositivo clonado
    nuevoDispositivo.querySelectorAll('input').forEach(input => input.value = '');
    nuevoDispositivo.querySelectorAll('textarea').forEach(textarea => textarea.value = '');
    nuevoDispositivo.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
    
    // Finalmente, se agrega el nuevo dispositivo al contenedor
    containerDispositivos.appendChild(nuevoDispositivo);
});
