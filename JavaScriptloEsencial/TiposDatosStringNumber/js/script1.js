var saludo1 = "Saludo con comillas dobles!!";
var saludo2 = 'Saludo con comillas simples!!';

var tamayoString  = saludo2.length;

var objetoString =  new String("Objeto String");

document.getElementById('s1').innerHTML = saludo1;
document.getElementById('s2').innerHTML = saludo2;
document.getElementById('s3').innerHTML =  tamayoString;
document.getElementById('s4').innerHTML =  objetoString;

//Metodos String

var string1 = "Esta es";
var string2 = " una cadena de";
var string3 = " texto concatenada!";

//El metodo concat() permite concatenar strings
var stringConcact = string1.concat(string2, string3);

document.getElementById('s5').innerHTML = stringConcact;

var mensaje1 = "Programanto en .NET";
document.getElementById('s6').innerHTML = mensaje1;

//El metodo replace() nos permite reemplazar una parte de una cadena
var mensaje2 = mensaje1.replace(".NET", "JavaScript");

document.getElementById('s7').innerHTML = mensaje2;

var mensaje3 = "Luchar, reir y vivir; Esa es la clave";

document.getElementById('s8').innerHTML = mensaje3;

//El metodo substring() para taer parte de una cadena
document.getElementById('s9').innerHTML = mensaje3.substring(8, 20);


var mensaje4 = "EL IGNORANTE AFIRMA; EL SABIO DUDA Y REFLEXIONA";

document.getElementById('s10').innerHTML = mensaje4;

//El metodo toLowerCase() permite convertir a minusculas una cadena
document.getElementById('s11').innerHTML = mensaje4.toLowerCase();


var mensaje5 = "La verdadera vida tiene lugar en nuestro interior";

document.getElementById('s12').innerHTML = mensaje5;

//El metodo
document.getElementById('s13').innerHTML = mensaje5.toUpperCase();
