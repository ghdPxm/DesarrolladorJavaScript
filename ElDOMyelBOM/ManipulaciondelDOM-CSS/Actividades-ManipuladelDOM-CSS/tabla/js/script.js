function cambiar() {
  var titulos = document.getElementsByClassName("encabezado");
  var contenido = document.getElementsByClassName("contenido");

  for (var i = 0; i < titulos.length; i++) {
    titulos[i].style.backgroundColor = "red";
    titulos[i].style.fontWeight = "bold";
    titulos[i].style.textAlign = "center";
  }

  for (var i = 0; i < contenido.length; i++) {
    contenido[i].style.backgroundColor = "blue";
    contenido[i].style.fontStyle = "italic";
    contenido[i].style.fontWeight = "bold";
  }

}
