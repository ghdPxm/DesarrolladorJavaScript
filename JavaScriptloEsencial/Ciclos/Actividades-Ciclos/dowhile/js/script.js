function mostrar_equipos() {

var texto = "<h2 id=\"titulo\">Equipos:</h2>";
var contador = 0;
var equipos = ["Milan", "Liverpool", "Barcelona", "Chealsea", "Bayern"];

do {
  texto += equipos[contador] + "<br>";
  contador ++;
} while (contador <= equipos.length);
  document.getElementById("salida").innerHTML = texto;
  document.getElementById("titulo").style.color = 'red';
}
