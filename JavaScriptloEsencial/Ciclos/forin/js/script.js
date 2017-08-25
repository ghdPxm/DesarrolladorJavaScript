function mostrar_productos() {

  var texto = "Productos: <br>";

  var productos = {
    codigo: "1012",
    nombre: "Lapiz",
    precio: 2.50
  };

  var x;

  for (x in productos) {
    texto += productos[x] + "<br>";
  }
  document.getElementById("salida").innerHTML = texto;
}
