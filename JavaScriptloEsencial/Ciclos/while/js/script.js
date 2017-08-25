function conteo() {

  var contador =  1;
  var texto = "";

  while (contador <= 50) {
    texto += contador + "<br>";
    contador ++;
  }
  document.getElementById("salida").innerHTML = texto;
}
