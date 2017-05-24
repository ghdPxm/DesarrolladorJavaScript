//Creacion de objetos de tres formas diferentes

//Forma uno
var vehiculo1 = {
  placa: "R1-JJ",
  marca: "Ford",
  modelo: 2010
}

//imprimir los valores del objeto 1
document.getElementById('placa1').innerHTML = vehiculo1.placa;
document.getElementById('marca1').innerHTML = vehiculo1.marca;
document.getElementById('modelo1').innerHTML = vehiculo1.modelo;

//Forma dos

var vehiculo2 = new Object();
vehiculo2.placa = "RT-AH";
vehiculo2.marca = "Tsuru";
vehiculo2.modelo = 2019;

//Imprimir los datos del objeto2
document.getElementById('placa2').innerHTML = vehiculo2.placa;
document.getElementById('marca2').innerHTML = vehiculo2.marca;
document.getElementById('modelo2').innerHTML = vehiculo2.modelo;

//Forma tres

function vehiculo(placa, marca, modelo) {
  this.placa = placa;
  this.marca = marca;
  this.modelo = modelo;
}

var vehiculo3 = new vehiculo("RQ-2F", "Honda", 2016);

document.getElementById('placa3').innerHTML = vehiculo3.placa;
document.getElementById('marca3').innerHTML = vehiculo3.marca;
document.getElementById('modelo3').innerHTML = vehiculo3.modelo;
