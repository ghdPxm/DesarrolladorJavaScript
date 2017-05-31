//Objetos globales

var a; //Undefined
var b = a +2; //NaN

document.getElementById('g1').innerHTML = a;
document.getElementById('g2').innerHTML = b;

//Metodos

//ParseInt para convertir un string a numero entero

var c = parseInt("2.25"); //2
var d = parseInt("1 Next U"); //1
var e = parseInt("Next U 10"); //NaN

//parseFloat para convertir un string a numero con punto decimal

var f = parseFloat("3.1416"); //3.1416
var g = parseFloat("2.2332 Hola a todos"); //2.2332
var h = parseFloat("I Love JS 32.434"); //NaN

//Codificar y decodificar una url
var uri = "http://nextuniversity.com/es_extra_info/index.html";
var uriEnc = encodeURIComponent(uri);
var uriDec = decodeURIComponent(uriEnc);



document.getElementById('g3').innerHTML = c;
document.getElementById('g4').innerHTML = d;
document.getElementById('g5').innerHTML = e;
document.getElementById('g6').innerHTML = f;
document.getElementById('g7').innerHTML = g;
document.getElementById('g8').innerHTML = h;
document.getElementById('g9').innerHTML = uriEnc;
document.getElementById('g10').innerHTML = uriDec;
