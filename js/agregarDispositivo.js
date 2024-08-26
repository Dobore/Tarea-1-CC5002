let contadorDispositivos = 2; 

function agregarDispositivo() {
    // Obtener el contenedor donde se encuentran los dispositivos
    const container = document.getElementById('containerDispositivos')

    // Crear un nuevo div para contener el nuevo dispositivo
    const newDevice = document.createElement('div');
    
    // Asignar al nuevo div el contenido del dispositivo original
    newDevice.innerHTML = `
            <br></br>
            <div>
                <b>Información del dispositivo (${contadorDispositivos})</b>
            </div>
            <br></br>
            <div>
                Nombre del dispositivo
                <input id="nombreDispositivo" name="nombreDispositivo" type="text" required, placeholder="Ingrese el nombre del dispositivo" size="80" minlength="3" maxlength="80">
            </div>
            <div>
                Descripción
                <textarea id="descripcion" name="descripcion" rows="4" cols="50" placeholder="Escribe una descripción del producto"></textarea>
            </div>
            
            <div>
                Tipo
                <select id="tipo" required"> 
                    <option value="" disabled selected>Seleccione un tipo de dispositivo</option>
                    <option value="pantalla">Pantalla</option>
                    <option value="notebook">Notebook</option>
                    <option value="tablet">Tablet</option>
                    <option value="celular">Celular</option>
                    <option value="consola">Consola</option>
                    <option value="mouse">Mouse</option>
                    <option value="teclado">Teclado</option>
                    <option value="impresora">Impresora</option>
                    <option value="parlante">Parlante</option>
                    <option value="audifonos">Audifonos</option>
                </select>
            </div>
            <div>
                Años de uso
                <input id="tiempoUso" name="tiempoUso" type="text" required size="3" maxlength="2">
            </div>
            <div>
                Estado funcionamiento
                <select id="estadoFuncionamiento" required"> 
                    <option value="" disabled selected>Seleccione el estado del dispositivo</option>
                    <option value="funciona_perfecto">Funciona perfecto</option>
                    <option value="funciona_medias">Funciona a medias</option>
                    <option value="no_funciona">No funciona</option>
                </select>
            </div>
            <div>
                Fotos de productos
                <input id="fotos" name="fotos[]" type="file" multiple required>
            </div>
    `;

    contadorDispositivos++;

    // Agregar el nuevo div al final del contenedor
    container.appendChild(newDevice);
}
   