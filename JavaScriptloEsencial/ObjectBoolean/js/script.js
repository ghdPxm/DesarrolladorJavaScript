//Variables booleanas

var b1 = 5 > 3;
var b2 = 5 > 3;
var b3 = (10 == 10);
var b4 = 20 < 15;
var b5 = 1 > 100;


document.getElementById('b1').innerHTML = b1;
document.getElementById('b2').innerHTML = b2;
document.getElementById('b3').innerHTML = b3;
document.getElementById('b4').innerHTML = b4;
document.getElementById('b5').innerHTML = b5;

//Metodos toString y valueOf
document.getElementById('b6').innerHTML = b1.toString();
document.getElementById('b7').innerHTML = b1.valueOf();
