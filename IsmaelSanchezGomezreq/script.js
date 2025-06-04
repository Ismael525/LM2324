document.getElementById('registroForm').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Esto es para que no se envíe

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let genero = document.querySelectorAll('input[name="genero"]:checked');
    let interes = document.querySelectorAll('input[name="interes"]:checked');
    let aceptaTerminos = document.getElementById('aceptaTerminos').checked;
    let esValido = true;

    // Validación del nombre
    if (!validarNombre(nombre)) {
      document.getElementById('errorNombre').style.visibility = 'visible';
      esValido = false;
    } else {
      document.getElementById('errorNombre').style.visibility = 'hidden';
    }

    // Validación del correo electrónico
    if (!validarCorreoElectronico(correo)) {
      document.getElementById('errorCorreo').style.visibility = 'visible';
      esValido = false;
    } else {
      document.getElementById('errorCorreo').style.visibility = 'hidden';
    }

    // Validación de genero
    if (!validarGenero(genero)) {
      document.getElementById('errorGenero').style.visibility = 'visible';
      esValido = false;
    } else {
      document.getElementById('errorGenero').style.visibility = 'hidden';
    }

    // Validacion de intereses
    if (!validarPreferencias(interes)) {
        document.getElementById('errorIntereses').style.visibility = 'visible';
        esValido = false;
      } else {
        document.getElementById('errorIntereses').style.visibility = 'hidden';
      }

    // Validación de la frecuencia de envío
    if (!validarFrecuenciaEnvio(frecuenciaEnvio)) {
      document.getElementById('errorFrecuenciaEnvio').style.visibility = 'visible';
      esValido = false;
    } else {
      document.getElementById('errorFrecuenciaEnvio').style.visibility = 'hidden';
    }

    // Validación de términos y condiciones
    if (!validarTerminos(aceptaTerminos)) {
      document.getElementById('errorTerminos').style.visibility = 'visible';
      esValido = false;
    } else {
      document.getElementById('errorTerminos').style.visibility = 'hidden';
    }

    if (esValido) {
      alert('Formulario enviado con éxito.');
    }
  });

  // Función para validar el nombre
  function validarNombre(nombre) {
    let valido = false;
    if (nombre!="") // Ha escrito algo...
      valido = true;
    return valido;
  }

  // Función para validar el correo electrónico
  function validarCorreoElectronico(correo) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valido = false;
    if (regex.test(correo)) {
      valido = true;
    }
    return valido;
  }



  // Función para validar las preferencias
  function validarGenero(genero) {
    let almenosUna = false;
    if (preferencias.length > 0) {
      almenosUna = true;
    }
    return almenosUna;
  }

  // Función para validar la frecuencia de envío
  function validarFrecuenciaEnvio(frecuencia) {
    let valido = false;
    if (frecuencia !== "") // Ha seleccionado algo
      valido = true;
    return valido;
  }

  // Función para validar los términos y condiciones
  function validarTerminos(aceptado) {
    let valido = false;
    if (aceptado) {
      valido = true;
    }
    return valido;
  }