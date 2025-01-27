// Array para almacenar los números introducidos
let numeros = [];

// Función para añadir un número al array
function agregarNumero() {
  const input = document.getElementById("numero").value;

  // Validar que se introduzca un número válido
  if (input === "" || isNaN(input)) {
    document.getElementById("resultado").textContent = "Por favor, introduce un número válido.";
    return;
  }

  // Convertir a número y añadir al array
  const numero = parseFloat(input);
  numeros.push(numero);

  // Limpiar el campo de entrada y mostrar el array actualizado
  document.getElementById("numero").value = "";
  document.getElementById("resultado").textContent = `Número ${numero} añadido. Números actuales: ${numeros.join(", ")}`;
}

// Función para calcular la suma de todos los números
function calcularSuma() {
  if (numeros.length === 0) {
    document.getElementById("resultado").textContent = "No hay números en la lista.";
    return;
  }

  const suma = numeros.reduce((total, num) => total + num, 0);
  document.getElementById("resultado").textContent = `La suma de todos los números es: ${suma}`;
}

// Función para encontrar el número más grande
function encontrarMayor() {
  if (numeros.length === 0) {
    document.getElementById("resultado").textContent = "No hay números en la lista.";
    return;
  }

  const mayor = Math.max(...numeros);
  document.getElementById("resultado").textContent = `El número más grande es: ${mayor}`;
}

// Función para encontrar el número más pequeño
function encontrarMenor() {
  if (numeros.length === 0) {
    document.getElementById("resultado").textContent = "No hay números en la lista.";
    return;
  }

  const menor = Math.min(...numeros);
  document.getElementById("resultado").textContent = `El número más pequeño es: ${menor}`;
}

// Función para buscar la posición de un número en el array
function encontrarPosicion() {
  const input = document.getElementById("numero").value;

  if (input === "" || isNaN(input)) {
    document.getElementById("resultado").textContent = "Por favor, introduce un número válido para buscar.";
    return;
  }

  const numero = parseFloat(input);
  const posicion = numeros.indexOf(numero);

  if (posicion !== -1) {
    document.getElementById("resultado").textContent = `El número ${numero} se encuentra en la posición: ${posicion + 1}`;
  } else {
    document.getElementById("resultado").textContent = `El número ${numero} no está en la lista.`;
  }
}

// Función para mostrar todos los números en el array
function mostrarNumeros() {
  if (numeros.length === 0) {
    document.getElementById("resultado").textContent = "No hay números en la lista.";
    return;
  }

  document.getElementById("resultado").textContent = `Números actuales: ${numeros.join(", ")}`;
}
