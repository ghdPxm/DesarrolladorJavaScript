function miFuncion() {
  try {
    var numero = -40;
    if (isNaN(Math.sqrt(numero))) {
      throw "No es posible calcular una raiz negativa";
    }
  } catch (e) {
    alert("Existe un error " + " - " + e);
  }
}
