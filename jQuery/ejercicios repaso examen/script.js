$(document).ready(function () {
    const mensajeDiv = $('#mensajeBienvenida');

    // Mostrar mensaje si ya hay un nombre guardado
    const nombreGuardado = localStorage.getItem('nombre');
    if (nombreGuardado) {
        mensajeDiv.text(`¡Hola, ${nombreGuardado}! Bienvenido de nuevo.`)
                  .removeClass('oculto')
                  .addClass('visible');
    }

    // Guardar nuevo nombre al enviar el formulario
    $('#formularioNombre').on('submit', function (e) {
        e.preventDefault();
        const nombre = $('#nombre').val().trim();

        if (nombre !== '') {
            localStorage.setItem('nombre', nombre);
            mensajeDiv.text(`¡Hola, ${nombre}! Bienvenido de nuevo.`)
                      .removeClass('oculto')
                      .addClass('visible');
        }
    });
});
