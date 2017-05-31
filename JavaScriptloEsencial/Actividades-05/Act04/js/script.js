//Definicion de arreglos

var estaturas = [1.74, 1.53 , 1.43 ];
var edades = [24, 50, 19];
var torneos = ["PES2014", "FIFA2014", "Gears of War"];
var organos = ["Higado", "Pulmones", "Cerebro"];
var redesSociales = ["Facebook", "Twitter", "Instagram"];
var planetas = ["Venus", "Mercurio", "Pluton"];

//Imprimir en pantalla los arreglos

document.getElementById('ar1').innerHTML = estaturas.sort();
document.getElementById('ar2').innerHTML = edades.sort();
document.getElementById('ar3').innerHTML = torneos.sort();
document.getElementById('ar4').innerHTML = organos.sort();
document.getElementById('ar5').innerHTML = redesSociales.sort();
document.getElementById('ar6').innerHTML = planetas.sort();
