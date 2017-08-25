function conteo() {

  var texto = "";
  var contador = 50;

  do {
    texto += contador + "<br>";
    contador ++;

  } while (contador <= 100);

document.getElementById("salida").innerHTML = texto;

}
