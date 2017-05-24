/*
Definicion de funcion que resta dos numeros
los cuales seon enviados como parametros
*/

function resta(a, b) {
  return a - b;
}

var resultado = resta(12, 5);

document.getElementById('resultado').innerHTML = resultado;
