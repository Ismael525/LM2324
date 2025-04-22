function GetCardType(numero) {
    numero = numero.replace(/\s+/g, '');

    if (/^4/.test(numero)) return "Visa";
    if (/^(5[1-5][0-9]{14}|2(22[1-9]|2[3-9]|[3-6]|7[0-1]|720)[0-9]{12})$/.test(numero)) return "Mastercard";
    if (/^3[47]/.test(numero)) return "American Express";
    if (/^(6011|65|64[4-9]|622(12[6-9]|1[3-9]|[2-8][0-9]|9[0-1]|92[0-5]))/.test(numero)) return "Discover";
    if (/^36/.test(numero)) return "Diners";
    if (/^30[0-5]/.test(numero)) return "Diners - Carte Blanche";
    if (/^3(?:0[0-59]|[689])/.test(numero)) return "Diners";
    if (/^35(2[89]|[3-8][0-9])/.test(numero)) return "JCB";
    if (/^(2131|1800|35)/.test(numero)) return "JCB";
    if (/^30/.test(numero)) return "JCB";
    if (/^(4026|417500|4508|4844|491[37])/.test(numero)) return "Visa Electron";
    if (/^(5018|5020|5038|5612|5893|6304|6759|676[1-3]|0604|6390)/.test(numero)) return "Maestro";
    if (/^(5[06789]|6)/.test(numero)) return "Maestro";
    if (/^5019/.test(numero)) return "Dankort";
    if (/^636/.test(numero)) return "Interpayment";
    if (/^(62|88)/.test(numero)) return "UnionPay";

    return "";
  }

  function actualizarTipoTarjeta() {
    const numero = document.getElementById('tarjeta').value;
    const tipo = GetCardType(numero);
    document.getElementById('tipo-tarjeta').textContent = tipo ? `Tipo de tarjeta: ${tipo}` : "";
  }

  function manejarEnvio(evento) {
    evento.preventDefault(); // Evita recarga
    document.getElementById('formulario-pago').style.display = 'none';
    document.getElementById('mensaje-exito').style.display = 'block';
  }