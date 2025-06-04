function validarFormulario() {
  limpiarMensajes();

  let esValido = true;

  // Validar nombre
  let nombreInput = document.getElementById('nombre');
  let nombre = nombreInput.value.trim();
  if (nombre === '') {
    mostrarError('errorNombre', 'El nombre es obligatorio.');
    esValido = false;
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) || nombre.length < 3) {
    mostrarError('errorNombre', 'Nombre inválido. Solo letras y espacios, mínimo 3 caracteres.');
    esValido = false;
  }

  // Validar correo
  let correoInput = document.getElementById('correo');
  let correo = correoInput.value.trim();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo === '') {
    mostrarError('errorCorreo', 'El correo es obligatorio.');
    esValido = false;
  } else if (!emailRegex.test(correo)) {
    mostrarError('errorCorreo', 'Correo electrónico no válido.');
    esValido = false;
  }

  // Validar contraseña
  let contrasenaInput = document.getElementById('contrasena');
  let contrasena = contrasenaInput.value;
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (contrasena === '') {
    mostrarError('errorContrasena', 'La contraseña es obligatoria.');
    esValido = false;
  } else if (!passwordRegex.test(contrasena)) {
    mostrarError('errorContrasena', 'La contraseña debe tener al menos 8 caracteres, una letra y un número.');
    esValido = false;
  }

  // Confirmar contraseña
  let confirmarInput = document.getElementById('confirmar');
  let confirmar = confirmarInput.value;
  if (confirmar !== contrasena) {
    mostrarError('errorConfirmar', 'Las contraseñas no coinciden.');
    esValido = false;
  }

  // Validar género
  let generoInputs = document.getElementsByName('genero');
  let generoSeleccionado = false;
  for (let i = 0; i < generoInputs.length; i++) {
    if (generoInputs[i].checked) {
      generoSeleccionado = true;
      break;
    }
  }
  if (!generoSeleccionado) {
    mostrarError('errorGenero', 'Debe seleccionar un género.');
    esValido = false;
  }

  // Validar intereses
  let interesesInputs = document.getElementsByClassName('interes');
  let interesSeleccionado = false;
  for (let i = 0; i < interesesInputs.length; i++) {
    if (interesesInputs[i].checked) {
      interesSeleccionado = true;
      break;
    }
  }
  if (!interesSeleccionado) {
    mostrarError('errorIntereses', 'Seleccione al menos un interés.');
    esValido = false;
  }

  // Validar aceptación de términos (ahora es radio)
  let terminosInputs = document.getElementsByName('aceptaTerminos');
  let terminosAceptados = false;
  for (let i = 0; i < terminosInputs.length; i++) {
    if (terminosInputs[i].checked && terminosInputs[i].value === 'si') {
      terminosAceptados = true;
      break;
    }
  }
  if (!terminosAceptados) {
    mostrarError('errorTerminos', 'Debe aceptar los términos y condiciones.');
    esValido = false;
  }

  // Mostrar mensaje de éxito si todo es válido
  if (esValido) {
    let mensajeExito = document.getElementById('mensajeExito');
    mensajeExito.textContent = '✅ Registro exitoso. ¡Bienvenido!';
  }
}

// Función para mostrar errores
function mostrarError(id, mensaje) {
  let elementoError = document.getElementById(id);
  if (elementoError) {
    elementoError.textContent = mensaje;
  }
}

// Función para limpiar mensajes de error
function limpiarMensajes() {
  let errores = document.getElementsByClassName('error');
  for (let i = 0; i < errores.length; i++) {
    errores[i].textContent = '';
  }
}