function mostrar_equipos() {
  var texto = "Equipos: <br>";

  var equipos = ["Liverpool", "Barcelona", "Juventus", "Real Madrid", "Roma"];

  for (var i = 0; i < equipos.length; i++) {
    texto += equipos[i] + "<br>";
  }

  document.getElementById('salida').innerHTML = texto;

}
