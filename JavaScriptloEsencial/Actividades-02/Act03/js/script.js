//Creacion de objetos de tres formas diferentes

//Forma uno
var persona1 = {
  id: "001",
  nombre: "Raul",
  edad: 20
}

//imprimir los valores del objeto 1
document.getElementById('id1').innerHTML = persona1.id;
document.getElementById('nombre1').innerHTML = persona1.nombre;
document.getElementById('edad1').innerHTML = persona1.edad;

//Forma dos

var persona2 = new Object();
persona2.id = "002";
persona2.nombre = "Julian";
persona2.edad = 19;

//Imprimir los datos del objeto2
document.getElementById('id2').innerHTML = persona2.id;
document.getElementById('nombre2').innerHTML = persona2.nombre;
document.getElementById('edad2').innerHTML = persona2.edad;

//Forma tres

function persona(id, nom, edad) {
  this.id = id;
  this.nombre = nom;
  this.edad = edad;
}

var persona3 = new persona("003", "Martin", 21);

document.getElementById('id3').innerHTML = persona3.id;
document.getElementById('nombre3').innerHTML = persona3.nombre;
document.getElementById('edad3').innerHTML = persona3.edad;
