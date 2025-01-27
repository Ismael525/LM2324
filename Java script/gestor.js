// Array para almacenar los números introducidos
let numeros = [];

// Función para agregar un número al array
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
  document.getElementById("resultado").textContent = `Números en el array: ${numeros.join(", ")}`;
}

// Función para ordenar el array y calcular la media aritmética
function ordenarArray() {
  if (numeros.length === 0) {
    document.getElementById("resultado").textContent = "El array está vacío. Añade números primero.";
    return;
  }

  // Ordenar el array de menor a mayor
  numeros.sort((a, b) => a - b);

  // Calcular la media aritmética
  const suma = numeros.reduce((total, num) => total + num, 0);
  const media = suma / numeros.length;

  // Mostrar el array ordenado y la media
  document.getElementById("resultado").textContent =
    `Números ordenados: ${numeros.join(", ")}\nMedia aritmética: ${media.toFixed(2)}`;
}
