# Tarea 1 CC5002: Desarrollo de Aplicaciones Web

**Nombre**: Diego Orellana Vidal

## Distribución de archivos

Cada uno de los componentes de la aplicación (CSS, HTML, JS) se encuentran separados en directorios distintos. Adicionalmente, los recursos utilizados (imágenes) fueron ubicadas en su propio directorio.

## Decisiones tomadas

- Al momento de realizar las validaciones en la vista "agregar-donacion.html", se decidió que en primera instancia se realizaría la validación de la información de contacto, y luego la validación de cada uno de los dispositivos. Esto significa que si un usuario llena incorrectamente todos los campos, la aplicación solo le avisará al usuario por errores de la información de contacto, y luego que estos hayan sido arreglados, la aplicación le avisará al usuario por errores de la información de los dispositivos.

- Se decidió no realizar validaciones en el front-end, teniendo en cuenta que esto es una facilidad pero no una medida de seguridad.

- Por temas estéticos, se decidió que el botón que te lleva de vuelta a index.html estaría siempre visible en todas las vistas, a pesar de que el enunciado especifica que, en el caso de agregar-donacion.html, este botón solo se mostaría una vez que el usuario enviase correctamente el formulario.

- La validación del número celular del donante debe estar en el formato (+569XXXXXXXX), en donde el primer dígito luego del 9 tiene que ser mayor a 1.

- Al seleccionar una región, automáticamente se selecciona la primera comuna de la lista.

- Las imágenes utilizadas para mostrar como ejemplo fueron creadas utilizando Meta IA.