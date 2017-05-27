var a = 10;
var b = 8;

//De comparacion
var op1 = a < b;
var op2 = a > b;
var op3 = a <= b;
var op4 = a >= b;
var op5 = "perro" == "perro";
var op6 = "camello" == "camello";
var op7 = "casa" != "caza";

document.getElementById('op1').innerHTML = op1;
document.getElementById('op2').innerHTML = op2;
document.getElementById('op3').innerHTML = op3;
document.getElementById('op4').innerHTML = op4;
document.getElementById('op5').innerHTML = op5;
document.getElementById('op6').innerHTML = op6;
document.getElementById('op7').innerHTML = op7;


//Aritmeticos
var op8 = a + b;
var op9 = a - b;
var op10 = a * b;
var op11 = a / b;
var op12 = a % b;
var op13 = a++;
var op14 = b--;

document.getElementById('op8').innerHTML = op8;
document.getElementById('op9').innerHTML = op9;
document.getElementById('op10').innerHTML = op10;
document.getElementById('op11').innerHTML = op11;
document.getElementById('op12').innerHTML = op12;
document.getElementById('op13').innerHTML = op13;
document.getElementById('op14').innerHTML = op14;

//De asignacion
var c = 9;
var d = 4;
var e = 6;
var f = 10;
var g = 3;

c += 2;
d -= 3;
e *= 2;
f /= 2;
g %= 2;

document.getElementById('op15').innerHTML = c;
document.getElementById('op16').innerHTML = d;
document.getElementById('op17').innerHTML = e;
document.getElementById('op18').innerHTML = f;
document.getElementById('op19').innerHTML = g;

//Logicos

var h = 12;
var i = 20;

document.getElementById('op20').innerHTML = h > 5 && i < h;
document.getElementById('op21').innerHTML = h < 5 || i < h;
document.getElementById('op22').innerHTML = !(h == i);

//De concatenacion

var nombre = "Gerardo ";
var apellido = "Hernandez";
var nombre_apellido;

nombre_apellido = nombre + apellido;

var cadena1 = "";
var cadena2 = "Hola como ";
var cadena3 = "estan todos!!";

cadena1 += cadena2;
cadena1 += cadena3;

document.getElementById('op23').innerHTML = nombre_apellido;
document.getElementById('op24').innerHTML = cadena1;
