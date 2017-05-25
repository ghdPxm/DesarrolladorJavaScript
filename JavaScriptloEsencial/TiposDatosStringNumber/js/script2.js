//Numero sin decimales
var numero1 = 2500;

//Numero con decimales
var numero2 = 34.290;

document.getElementById('n1').innerHTML =numero1;
document.getElementById('n2').innerHTML =numero2;

//Propiedades de los numbers
var numero3 = 23434;

//Propiedad Constructor
document.getElementById('n3').innerHTML =numero3.constructor;

//Propiedad MAX_VALUE retorna el valor maximo que se puede usar en js
document.getElementById('n4').innerHTML = Number.MAX_VALUE;

//Propiedad MIN_VALUE retorna el valor minimo que se puede usar en js
document.getElementById('n5').innerHTML = Number.MIN_VALUE;

//Propiedad NEGATIVE_INIFINIY retorna el valor negativo
//infinito que se puede usar en js
document.getElementById('n6').innerHTML = Number.NEGATIVE_INFINITY;


//Propiedad NaN retorna el valor ILEGAL NO DEFINIDO
//que se puede usar en js
document.getElementById('n7').innerHTML = Number.NaN;

//Propiedad POSITIVE_INIFINIY retorna el valor positivo
//infinito que se puede usar en js
document.getElementById('n8').innerHTML = Number.POSITIVE_INIFINITY;

//La Propiedad Prototype permite crear un nuevo metodo para manipular
//numeros
Number.prototype.metodoNumerico = function() {
  return this * 4 / 2;
}

var numero4 = 25;
document.getElementById('n9').innerHTML = numero4.metodoNumerico();

//Metodos de Number

//Convierte un numero a una expresion exponencial
var numero5 = 26.57;
document.getElementById('n10').innerHTML = numero5.toExponential();

//Recorta el numero de digitos de un numero y lo Convierte a string
var numero6 = 14.7854243;
document.getElementById('n11').innerHTML = numero6.toFixed(3);

//Da formato a un numero para una longitud de numeros n
var numero7 = 23.5567;
document.getElementById('n12').innerHTML = numero7.toPrecision(2);

//Convierte un numero en cadena
var numero8 = 3.1416;
document.getElementById('n13').innerHTML = numero8.toString();

//Devuelve el valor simple de un numero
var numero9 = 5000;
document.getElementById('n14').innerHTML = numero9.valueOf();
