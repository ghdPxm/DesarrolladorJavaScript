window.addEventListener("resize", function () {
  var parrafo = document.createElement("p");

  var texto = document.createTextNode("La ventana ha cambiado de tamaño");

  parrafo.appendChild(texto);

  document.body.appendChild(parrafo);
});
