document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formularioRegistro");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita envío si hay errores
      let valido = true;
  
      // Obtener elementos
      const nombre = document.getElementById("nombre");
      const apellidos = document.getElementById("apellidos");
      const telefono = document.getElementById("telefono");
      const email = document.getElementById("email");
      const contrasena1 = document.getElementById("contrasena1");
      const contrasena2 = document.getElementById("contrasena2");
      const terminos = document.getElementById("aceptarTerminos");
  
      // Borrar errores anteriores
      limpiarErrores();
  
      // Validaciones
      if (nombre.value.trim() === "") {
        mostrarError("error-nombre", "El nombre no puede estar vacío.");
        valido = false;
      }
  
      if (apellidos.value.trim() === "") {
        mostrarError("error-apellidos", "Los apellidos no pueden estar vacíos.");
        valido = false;
      }
  
      if (!/^\d{9,13}$/.test(telefono.value.trim())) {
        mostrarError("error-telefono", "Introduce un teléfono válido entre 9 y 13 dígitos.");
        valido = false;
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        mostrarError("error-email", "Introduce un correo electrónico válido.");
        valido = false;
      }
  
      if (contrasena1.value.length < 8) {
        mostrarError("error-contrasena1", "La contraseña debe tener al menos 8 caracteres.");
        valido = false;
      }
  
      if (contrasena1.value !== contrasena2.value) {
        mostrarError("error-contrasena2", "Las contraseñas no coinciden.");
        valido = false;
      }
  
      if (!terminos.checked) {
        mostrarError("error-terminos", "Debes aceptar los términos de uso.");
        valido = false;
      }
  
      if (valido) {
        form.submit(); // Enviar si todo está bien
      }
    });
  
    function mostrarError(idElemento, mensaje) {
      const error = document.getElementById(idElemento);
      if (error) {
        error.textContent = mensaje;
      }
    }
  
    function limpiarErrores() {
      document.querySelectorAll(".error").forEach(el => {
        el.textContent = "";
      });
    }
  });
  