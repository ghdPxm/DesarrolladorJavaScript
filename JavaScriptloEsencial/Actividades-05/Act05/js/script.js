//Definicion de arreglos

var frutas = ["Mango", "Kiwi","Toronja"];
var colores = ["Negro", "Violeta", "Verde"];
var animales = ["Leopardo", "Vaca", "Cerdo"];
var equipos = ["River Plate", "America de Cali", "Gremio"];
var planetas = ["Jupiter", "Urano", "Saturno"];
var flores = ["Hortensi", "Margarita", "Azucena"];

//Concatenar los arreglos

var frutasColores = frutas.concat(colores);
var animalesEquipos = animales.concat(equipos);
var planetasFlores = planetas.concat(flores);

//Imprimir en pantalla los arreglos

document.getElementById('ar1').innerHTML = frutasColores;
document.getElementById('ar2').innerHTML = animalesEquipos;
document.getElementById('ar3').innerHTML = planetasFlores;
