//Definicion del arreglo

//Primera forma
var futbol = ["Balon", "Jugadores", "Cancha"];
//Segunda forma
var animales = new Array("Oso", "Aguila", "Ballena");

document.getElementById('a1').innerHTML = futbol;
document.getElementById('a2').innerHTML = animales;

//Operaciones
futbol[1] = "Arbitros"; //Reemplanzando un valor del arreglo
document.getElementById('a3').innerHTML = futbol;

//Obtener la longitud del arreglo
document.getElementById('a4').innerHTML = futbol.length;

//Agregar un nuevo elemento al arreglo futbol
futbol[futbol.length] = "Porterias";
document.getElementById('a5').innerHTML = futbol;

//Invertir el orden de los elementos
futbol.reverse();
document.getElementById('a6').innerHTML = futbol;

//Ordenar alfabeticamente el arreglo de animales
animales.sort();
document.getElementById('a7').innerHTML = animales;

//Concatenar los arreglos de animales y de futbol
var arregloConcatenado = animales.concat(futbol);
document.getElementById('a8').innerHTML = arregloConcatenado;
