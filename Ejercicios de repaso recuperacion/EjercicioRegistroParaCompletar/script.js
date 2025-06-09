// Declaración de variables globales para elementos del DOM
let formulario;
let campoCorreo;
let campoDni;
let campoContrasena;
let campoConfirmarContrasena;
let casillaPoliticaPrivacidad;
let divInfoUsuario;
let elementoIdUsuarioGenerado;
let divMensajeExito; // Para el mensaje de éxito

// Referencias a mensajes de error
let errorCorreo;
let errorDni;
let errorContrasena;
let errorConfirmarContrasena;
let errorPoliticaPrivacidad;

// Función de inicialización que se asignará a window.onload
 function inicializarPagina(){ ;
    // Inicializar referencias a elementos del DOM
    formulario = document.getElementById('formularioRegistro');
    campoCorreo = document.getElementById('correo');
    campoDni = document.getElementById('dni');
    campoContrasena = document.getElementById('contrasena');
    campoConfirmarContrasena = document.getElementById('confirmarContrasena');
    casillaPoliticaPrivacidad = document.getElementById('politicaPrivacidad');
    divInfoUsuario = document.getElementById('infoUsuario');
    elementoIdUsuarioGenerado = document.getElementById('idUsuarioGenerado');
    divMensajeExito = document.getElementById('mensajeExito'); // Nuevo div de éxito
    
    // Inicializar referencias a mensajes de error
    errorCorreo = document.getElementById('errorCorreo');
    errorDni = document.getElementById('errorDni');
    errorContrasena = document.getElementById('errorContrasena');
    errorConfirmarContrasena = document.getElementById('errorConfirmarContrasena');
    errorPoliticaPrivacidad = document.getElementById('errorPoliticaPrivacidad');
    
    // Cargar datos del localStorage si existen
    cargarDesdeLocalStorage()
 }
// Asignar la función de inicialización a window.onload
window.onload = inicializarPagina;

// Función principal para procesar el formulario, llamada por onclick
function procesarFormulario(evento) {
    evento.preventDefault(); // Prevenir el envío tradicional del formulario
    
    // Limpiar mensajes de error previos
    limpiarErrores();
    
    // Validar todos los campos
    if (validarTodo()) {
        // Generar identificador de usuario
        let idUsuario = generarIdUsuario(campoCorreo.value, campoDni.value);
        
        // Mostrar el identificador generado
        elementoIdUsuarioGenerado.textContent = idUsuario;
        divInfoUsuario.style.display = 'block'; // Mostrar el div
        
        // Guardar datos en localStorage
        guardarEnLocalStorage()

        // Mostrar mensaje de éxito en el div
        divMensajeExito.textContent = '¡Registro exitoso! Tu identificador de usuario es: ' + idUsuario;
        divMensajeExito.style.display = 'block';
    }
}

// Función para validar todos los campos
function validarTodo() {
    let esValido = true;
    
    // Validar email
    if (!campoCorreo.value.trim()) {
        mostrarError(errorCorreo, 'El correo electrónico es obligatorio');
        esValido = false;
    } else if (!validarCorreo(campoCorreo.value)) {
        mostrarError(errorCorreo, 'Formato de correo inválido o no pertenece al dominio iesamachado.org');
        esValido = false;
    }
    
    // Validar DNI
    if (!campoDni.value.trim()) {
        mostrarError(errorDni, 'El DNI es obligatorio');
        esValido = false;
    } else if (!validarDNI(campoDni.value)) {
        mostrarError(errorDni, 'El DNI no es válido');
        esValido = false;
    }
    
    // Validar contraseña
    if (!campoContrasena.value) {
        mostrarError(errorContrasena, 'La contraseña es obligatoria');
        esValido = false;
    } else if (!validarContrasena(campoContrasena.value)) {
        mostrarError(errorContrasena, 'La contraseña debe tener al menos 12 caracteres y contener solo números');
        esValido = false;
    }
    
    // Validar confirmación de contraseña
    if (!campoConfirmarContrasena.value) {
        mostrarError(errorConfirmarContrasena, 'Debes confirmar la contraseña');
        esValido = false;
    } else if (campoContrasena.value !== campoConfirmarContrasena.value) {
        mostrarError(errorConfirmarContrasena, 'Las contraseñas no coinciden');
        esValido = false;
    }
    
    // Validar política de privacidad
    if (!casillaPoliticaPrivacidad.checked) {
        mostrarError(errorPoliticaPrivacidad, 'Debes aceptar la política de privacidad');
        esValido = false;
    }
    
    return esValido;
}

// Función para validar formato de correo y dominio
function validarCorreo(direccionCorreo) {
    let expresionRegularCorreo = /^[^\s@]+@iesamachado\.org$/;
    return expresionRegularCorreo.test(direccionCorreo);
}

// Función para validar DNI español
function validarDNI(numeroDni) {
    // Formato del DNI: 8 números seguidos de una letra
    let expresionRegularDni = /^[0-9]{8}[A-Z]$/i;
    
    if (!expresionRegularDni.test(numeroDni)) {
        return false;
    }
    
    // Extraer el número y la letra
    let numeros = numeroDni.substring(0, 8);
    let letraProporcionada = numeroDni.charAt(8).toUpperCase();
    
    // Calcular la letra correcta
    let letraCalculada = calcularLetraDNI(numeros);
    
    // Comparar la letra proporcionada con la calculada
    return letraProporcionada === letraCalculada;
}

// Función para calcular la letra del DNI (proporcionada en el enunciado)
function calcularLetraDNI(numerosDni) {
    let cadenaLetras = "TRWAGMYFPDXBNJZSQVHLCKET";
    let dniParseado = parseInt(numerosDni);
    let posicion = dniParseado % 23;
    return cadenaLetras[posicion];
}

// Función para validar contraseña (solo números, mínimo 12 caracteres)
function validarContrasena(contrasena) {
    let expresionRegularContrasena = /^[0-9]{12,}$/;
    return expresionRegularContrasena.test(contrasena);
}

// Función para generar el ID de usuario
function generarIdUsuario(direccionCorreo, numeroDni) {
    // Obtener las 3 primeras letras del email
    let parteCorreo = direccionCorreo.substring(0, 3).toLowerCase();
    
    // Obtener los 3 primeros números del DNI
    let parteNumerosDni = numeroDni.substring(0, 3);
    
    // Obtener la letra del DNI
    let letraDni = numeroDni.charAt(8).toUpperCase();
    
    // Combinar para formar el ID de usuario
    return parteCorreo + parteNumerosDni + letraDni;
}

// Función para mostrar mensajes de error
function mostrarError(elemento, mensaje) {
    *************************
}

// Función para limpiar todos los mensajes de error
function limpiarErrores() {
    errorCorreo.textContent = '';
    errorDni.textContent = '';
    errorContrasena.textContent = '';
    errorConfirmarContrasena.textContent = '';
    errorPoliticaPrivacidad.textContent = '';
    if (divMensajeExito) {
        divMensajeExito.style.display = 'none'; // Ocultar mensaje de éxito también
        divMensajeExito.textContent = ''; // Limpiar contenido
    }
}

// Función para guardar en localStorage
function guardarEnLocalStorage(idUsuario) {
    let datosUsuario = {
        userId: idUsuario,
        email: campoCorreo.value,
        dni: campoDni.value,
        password: campoContrasena.value,
        privacyPolicy: casillaPoliticaPrivacidad.checked
    };
    
    *************************
}

// Función para cargar datos desde localStorage
function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem('datosUsuario');
    
    if (datosGuardados) {
        let datosUsuario = JSON.parse(datosGuardados);
        
        // Asegurarse de que los elementos del DOM estén disponibles
        if (campoCorreo) campoCorreo.value = datosUsuario.email || '';
        if (campoDni) campoDni.value = datosUsuario.dni || '';
        if (campoContrasena) campoContrasena.value = datosUsuario.password || '';
        if (campoConfirmarContrasena) campoConfirmarContrasena.value = datosUsuario.password || ''; // Asume que se quiere rellenar con la contraseña original
        if (casillaPoliticaPrivacidad) casillaPoliticaPrivacidad.checked = datosUsuario.privacyPolicy || false;
        
        if (datosUsuario.userId) {
            if (elementoIdUsuarioGenerado) elementoIdUsuarioGenerado.textContent = datosUsuario.userId;
            if (divInfoUsuario) divInfoUsuario.style.display = 'block'; // Mostrar el div
        }
    }
}
