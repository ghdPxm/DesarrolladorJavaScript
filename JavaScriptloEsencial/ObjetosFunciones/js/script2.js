//llamando a una funcion desde el codigo que recibe dos
//parametros y retorna un valor

function division(p, q) {
  return p / q;
}

var resultado1 =  division(10, 2);

document.getElementById('resultado1').innerHTML = resultado1;


//llamando de una funcion desde si misma
 (function functionName() {
   document.getElementById('resultado2').innerHTML = "Esta es una funcion que se invoca a si misma";
 })();

//Asignacion de una funcion a una variable
var z = function (x, y) {
  return x - y;
}

var w = z(15, 6);

document.getElementById('resultado3').innerHTML = w;
