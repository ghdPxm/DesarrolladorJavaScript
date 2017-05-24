//Creacion de objetos de tres formas diferentes

//Forma uno
var computadora1 = {
  codigo: "1245",
  ram: "4 GB",
  discoDuro: "1 TB"
}

//imprimir los valores del objeto 1
document.getElementById('codigo1').innerHTML = computadora1.codigo;
document.getElementById('ram1').innerHTML = computadora1.ram;
document.getElementById('discoDuro1').innerHTML = computadora1.discoDuro;

//Forma dos

var computadora2 = new Object();
computadora2.codigo = "4578";
computadora2.ram = "6 GB";
computadora2.discoDuro = "250 GB";

//Imprimir los datos del objeto2
document.getElementById('codigo2').innerHTML = computadora2.codigo;
document.getElementById('ram2').innerHTML = computadora2.ram;
document.getElementById('discoDuro2').innerHTML = computadora2.discoDuro;

//Forma tres

function computadora(codigo, ram, discoDuro) {
  this.codigo = codigo;
  this.ram = ram;
  this.discoDuro = discoDuro;
}

var computadora3 = new computadora("3698", "4 GB", "750 GB");

document.getElementById('codigo3').innerHTML = computadora3.codigo;
document.getElementById('ram3').innerHTML = computadora3.ram;
document.getElementById('discoDuro3').innerHTML = computadora3.discoDuro;
