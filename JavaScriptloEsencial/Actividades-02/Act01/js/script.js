//Creacion de objetos de tres formas diferentes

//Forma uno
var articulo1 = {
  codigo: "001",
  nombre: "Teclado",
  precio: 120
}

//imprimir los valores del objeto 1
document.getElementById('codigo1').innerHTML = articulo1.codigo;
document.getElementById('nombre1').innerHTML = articulo1.nombre;
document.getElementById('precio1').innerHTML = articulo1.precio;

//Forma dos

var articulo2 = new Object();
articulo2.codigo = "002";
articulo2.nombre = "Impresora";
articulo2.precio = 2500;

//Imprimir los datos del objeto2
document.getElementById('codigo2').innerHTML = articulo2.codigo;
document.getElementById('nombre2').innerHTML = articulo2.nombre;
document.getElementById('precio2').innerHTML = articulo2.precio;

//Forma tres

function articulo(cod, nom, prec) {
  this.codigo = cod;
  this.nombre = nom;
  this.precio = prec;
}

var articulo3 = new articulo("003", "pantalla", 450);

document.getElementById('codigo3').innerHTML = articulo3.codigo;
document.getElementById('nombre3').innerHTML = articulo3.nombre;
document.getElementById('precio3').innerHTML = articulo3.precio;
