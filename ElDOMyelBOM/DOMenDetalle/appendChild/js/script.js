function agregarElemento() {
  var encabezado = document.createElement("h1");
  var texto = document.createTextNode("Mi encabezado 4");
  encabezado.appendChild(texto);

  document.getElementById("miDiv").appendChild(encabezado);
}
