$(document).ready(function() {
    // Asegurarse de que el div de información del producto esté oculto al inicio
    $('#info_producto').hide();

    $('#boton_buscar').click(function() {
        let codigoProducto = $('#codigo_producto').val();
        if (codigoProducto) {
            // Limpiar información previa y ocultar el div
            limpiarInfoProducto();
            $('#info_producto').hide();

            $.get(`https://fakestoreapi.com/products/${codigoProducto}`, undefined, undefined, 'json')
                .done(function(datos) {
                    // Mostrar la información del producto
                    $('#titulo_producto').text(datos.title || 'No disponible');
                    $('#precio_producto').text(datos.price !== undefined ? `${datos.price} €` : 'No disponible');
                    $('#imagen_producto').attr('src', datos.image || '').attr('alt', datos.title || 'Imagen no disponible');
                    $('#descripcion_producto').text(datos.description || 'No disponible');
                    $('#categoria_producto').text(datos.category || 'No disponible');
                    
                    let puntuacionTasa = 'No disponible';
                    let puntuacionConteo = 'N/A';
                    if (datos.rating) {
                        puntuacionTasa = datos.rating.rate !== undefined ? datos.rating.rate : 'No disponible';
                        puntuacionConteo = datos.rating.count !== undefined ? datos.rating.count : 'N/A';
                    }
                    $('#puntuacion_producto_tasa').text(puntuacionTasa);
                    $('#puntuacion_producto_conteo').text(puntuacionConteo);

                    // Mostrar el div de información del producto
                    $('#info_producto').show();
                })
                .fail(function(jqXHR, estadoTexto, errorLanzado) {
                    // Mostrar mensaje de error
                    alert('Error cargando datos del servidor.');
                    console.error("Error en la solicitud AJAX:", estadoTexto, errorLanzado);
                    // Ocultar el div de información si estaba visible
                    $('#info_producto').hide();
                });
        } else {
            alert('Por favor, introduce un código de producto.');
        }
    });

    // Función para limpiar la información del producto mostrada previamente
    function limpiarInfoProducto() {
        $('#titulo_producto').text('');
        $('#precio_producto').text('');
        $('#imagen_producto').attr('src', '').attr('alt', 'Imagen del producto');
        $('#descripcion_producto').text('');
        $('#categoria_producto').text('');
        $('#puntuacion_producto_tasa').text('');
        $('#puntuacion_producto_conteo').text('');
    }
});
