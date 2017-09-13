function calcularSubtotal() {
  var elementosPrecio = document.getElementsByName("precio");

  var elementosCantidad = document.getElementsByName("cantidad");

  var elementosSubtotal = document.getElementsByName("subtotal");

  for (var i = 0; i < elementosPrecio.length; i++) {
          elementosSubtotal[i].value = parseFloat(elementosPrecio[i].value * elementosCantidad[i].value);
  }
}

function calcularTotal() {
  var elementosSubtotal = document.getElementsByName("subtotal");
  var suma = 0;

  for (var i = 0; i < elementosSubtotal.length; i++) {
          suma = suma + parseFloat(elementosSubtotal[i].value);
  }

  document.getElementById("totalventa").value = suma;
}
