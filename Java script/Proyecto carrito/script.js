let precios = {
    raton: 15.99,
    teclado: 11.49,
    monitor: 119.00,
    grafica: 299.00
  };
  
  let nombres = {
    raton: "Uineer Ratón Inalámbrico",
    teclado: "Logitech K120 Teclado",
    monitor: "Monitor LG 22MR410-B",
    grafica: "MSI GeForce RTX 4060"
  };
  
  let cantidades = {
    raton: 0,
    teclado: 0,
    monitor: 0,
    grafica: 0
  };
  
  function modificarCantidad(producto, cambio) {
    cantidades[producto] = Math.max(0, cantidades[producto] + cambio);
    document.getElementById(`${producto}-cantidad`).textContent = cantidades[producto];
    guardarEnLocalStorage();
    actualizarTotal();
    actualizarResumen();
    actualizarBotonCheckout();  // Verifica si el botón de checkout debe desbloquearse
  }
  
  function actualizarTotal() {
    let total = 0;
    for (let producto in cantidades) {
      total += cantidades[producto] * precios[producto];
    }
    document.getElementById('total-precio').textContent = total.toFixed(2) + ' €';
  }
  
  function actualizarResumen() {
    let contenedor = document.getElementById('detalle-productos');
    contenedor.innerHTML = '';
    let hayProductos = false;
  
    for (let producto in cantidades) {
      let cantidad = cantidades[producto];
      if (cantidad > 0) {
        hayProductos = true;
        let item = document.createElement('div');
        item.classList.add('summary-item');
        item.textContent = `${nombres[producto]} — ${cantidad} unidad(es) — ${precios[producto].toFixed(2)} € c/u`;
        contenedor.appendChild(item);
      }
    }
  
    if (!hayProductos) {
      contenedor.innerHTML = '<p>No hay productos añadidos aún.</p>';
    }
  }
  
  function guardarEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(cantidades));
  }
  
  function cargarConfiguracion() {
    let almacenado = localStorage.getItem("carrito");
    if (almacenado) {
      cantidades = JSON.parse(almacenado);
      for (let producto in cantidades) {
        document.getElementById(`${producto}-cantidad`).textContent = cantidades[producto];
      }
      actualizarTotal();
      actualizarResumen();
    }
  }
  
  function actualizarBotonCheckout() {
 
    let botonCheckout = document.getElementById('checkout-button');
    let hayProductos = false;
  
    for (let producto in cantidades) {
      if (cantidades[producto] > 0) {
        hayProductos = true;
        break;
      }
    }
  
    if (hayProductos) {
      botonCheckout.disabled = false; 
    } else {
      botonCheckout.disabled = true;
    }
  }
  
  function irACompra() {
    window.location.href = "Carro-Pago.html";
  }
  
  window.onload = cargarConfiguracion;  