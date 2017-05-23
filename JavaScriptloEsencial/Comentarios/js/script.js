//Comentarios de una linea

var t = 20; //Declaramos una variable de tipo numerica con valor a 20.

document.getElementById('var1').innerHTML = t; //Imprimimos la variable t

//Comentarios de multiples lineas

/*
La funcion suma permite sumar
dos numeros y retorna
el resultado
*/
function suma() {
  return 4 + 10;
}

var resultado = suma();

document.getElementById('resultado').innerHTML = resultado;
