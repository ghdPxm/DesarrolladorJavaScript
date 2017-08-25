function mostrar_pares() {
  var texto =  "";

  for (var i = 1; i <= 100; i++) {
    if (i%2 == 0) {
      texto += i + "<br>";
    }
  }

document.getElementById("salida").innerHTML =  texto;

}
