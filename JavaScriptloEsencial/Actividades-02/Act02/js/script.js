//Creacion de objetos de tres formas diferentes

//Forma uno
var estudiante1 = {
  codigo: "001",
  nombre: "Raul",
  telefono: 9998887766
}

//imprimir los valores del objeto 1
document.getElementById('codigo1').innerHTML = estudiante1.codigo;
document.getElementById('nombre1').innerHTML = estudiante1.nombre;
document.getElementById('telefono1').innerHTML = estudiante1.telefono;

//Forma dos

var estudiante2 = new Object();
estudiante2.codigo = "002";
estudiante2.nombre = "Julian";
estudiante2.telefono = 1112223344;

//Imprimir los datos del objeto2
document.getElementById('codigo2').innerHTML = estudiante2.codigo;
document.getElementById('nombre2').innerHTML = estudiante2.nombre;
document.getElementById('telefono2').innerHTML = estudiante2.telefono;

//Forma tres

function estudiante(cod, nom, tel) {
  this.codigo = cod;
  this.nombre = nom;
  this.telefono = tel;
}

var estudiante3 = new estudiante("003", "Martin", 4445556677);

document.getElementById('codigo3').innerHTML = estudiante3.codigo;
document.getElementById('nombre3').innerHTML = estudiante3.nombre;
document.getElementById('telefono3').innerHTML = estudiante3.telefono;
