//Conversion de Number a String

var string1 = String(15);
var string2 = String(3 + 4);

var number1 = 20;


var string3 = number1.toString();
var string4 = (30).toString();

//Conversion de Boolean a String

var string5 = String(true);
var string6 = String(false);

var string7 = true.toString();
var string8 = false.toString();


//Conversion de Date a String

var string9 = String(Date());
var string10 = Date().toString();

//Conversion de String a Number

var number2 = Number("6.5");
var number3 = Number("");

var number4 = parseInt("2014");
var number5 = parseFloat("3.1416");

//Conversion de Boolean a Number

var number6 = Number(true);
var number7 = Number(false);

//Imprimir los valores en los p
document.getElementById("ctd1").innerHTML = string1;
document.getElementById("ctd2").innerHTML = string2;
document.getElementById("ctd3").innerHTML = string3;
document.getElementById("ctd4").innerHTML = string4;
document.getElementById("ctd5").innerHTML = string5;
document.getElementById("ctd6").innerHTML = string6;
document.getElementById("ctd7").innerHTML = string7;
document.getElementById("ctd8").innerHTML = string8;
document.getElementById("ctd9").innerHTML = string9;
document.getElementById("ctd10").innerHTML = string10;

document.getElementById("ctd11").innerHTML = number2;
document.getElementById("ctd12").innerHTML = number3;
document.getElementById("ctd13").innerHTML = number4;
document.getElementById("ctd14").innerHTML = number5;
document.getElementById("ctd15").innerHTML = number6;
document.getElementById("ctd16").innerHTML = number7;
