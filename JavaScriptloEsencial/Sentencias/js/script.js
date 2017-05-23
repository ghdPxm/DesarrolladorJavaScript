//Sentencias

var u = 8 - 4;
var p = 3 * u;

document.getElementById('resultado1').innerHTML = p;


//Sentencias agrupadas en bloque a traves de una funcion

function miFuncion() {
  var hola = "I love JS";
  document.getElementById('mensaje').innerHTML = hola;
}

miFuncion();
