function mostrar_impares() {
var contador = 1;
var texto = "";

  while (contador <= 100) {

    if (contador%2 != 0) {
        texto += contador + "<br>";
    }
    contador ++;
  }

document.getElementById("salida").innerHTML = texto;

}
