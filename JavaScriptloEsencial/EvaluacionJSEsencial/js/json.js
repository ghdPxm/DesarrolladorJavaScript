var cadenaJSON = '{"estudiantes":['+
'{"codigo": "1001", "nombre": "Alberto Lopez", "nota": 8.5},'+
'{"codigo": "1002", "nombre": "Maria Flores", "nota": 6.0},'+
'{"codigo": "1003", "nombre": "Raul Medina", "nota": 10.0},'+
'{"codigo": "1004", "nombre": "Rubi Castro", "nota": 9.9},'+
'{"codigo": "1005", "nombre": "Anahi Martinez", "nota": 10.0},'+
'{"codigo": "1006", "nombre": "Eduardo Morales", "nota": 6.0},'+
'{"codigo": "1007", "nombre": "Rosa Edith Almaraz", "nota": 7.7},'+
'{"codigo": "1008", "nombre": "Amtonio Liborio", "nota": 8.7 },'+
'{"codigo": "1009", "nombre": "Ulises Leon", "nota": 9.9},'+
'{"codigo": "1010", "nombre": "Romario Marin", "nota": 6.0}'+
']}';

//Se pasa la cadena json a un objeto json
var objetoJSON = JSON.parse(cadenaJSON);

function leerJSON(json) {

  var salida = "------------------ Lista de estudiantes ------------------- <br> <br>";
//Se recorre el json agregando los elemtos del mismo a una variable salida
  for (var i = 0; i < json.estudiantes.length; i++) {
    salida += "Codigo: " + json.estudiantes[i].codigo + " -- " + "Nombre: " + json.estudiantes[i].nombre + " -- " + "Nota: " + json.estudiantes[i].nota + "<br>";
  }
//Se emprime directamente el resultado
  document.getElementById("resultado").innerHTML = salida + "<br> <br>";
}

function calcularPromedio(json) {
  var salida = "------------------ Promedio grupal ------------------- <br> <br>";
  var suma = 0; //variable para almacenar la suma de todas las notas
//se recorre el json y se suman las notas
  for (var i = 0; i < json.estudiantes.length; i++) {
    suma = suma + json.estudiantes[i].nota;
  }
//se imprime el resultado directamente
  document.getElementById("resultado").innerHTML = salida + (suma / 10) + "<br> <br>";
}

function buscarNotaMayor(json) {
  var salida = "------------------ Alumn@(s) con Nota(s) mas Alta(s) ------------------- <br> <br>";
  var iMayor = 0;//variable para almacenar el indicie de la nota mas alta
  var notaMayor = 0;//variable para almacenar la nota mas alta en el json

  //buscamos el indicie de la nota mas alta
  for (var i = 0; i < json.estudiantes.length; i++) {
    if (json.estudiantes[i].nota > json.estudiantes[iMayor].nota) {
      iMayor = i;
    }
  }

//recuperamos la nota mas alta
  notaMayor = json.estudiantes[iMayor].nota;

//buscamos y asignamos a la variable salida los datos de los estudiantes con la nota mas alta
  for (var j = 0; j < json.estudiantes.length; j++) {
    if (json.estudiantes[j].nota == notaMayor) {
      salida += "Codigo: " + json.estudiantes[j].codigo + " -- " + "Nombre: " + json.estudiantes[j].nombre + " -- " + "Nota: " + json.estudiantes[j].nota + "<br>";
    }

    document.getElementById("resultado").innerHTML = salida + "<br> <br>";

  }
}

function buscarNotaMenor(json) {
  var salida = "------------------ Alumn@(s) con Nota(s) mas Baja(s) ------------------- <br> <br>";
  var iMenor = 0;//variable para almacenar el indicie de la nota mas baja
  var notaMenor = 0;//variable para almacenar la nota mas baja en el json

  //buscamos el indicie de la nota mas baja
  for (var i = 0; i < json.estudiantes.length; i++) {
    if (json.estudiantes[i].nota < json.estudiantes[iMenor].nota) {
      iMenor = i;
    }
  }

//recuperamos la nota mas baja
  notaMenor = json.estudiantes[iMenor].nota;

//buscamos y asignamos a la variable salida los datos de los estudiantes con la nota mas baja
  for (var j = 0; j < json.estudiantes.length; j++) {
    if (json.estudiantes[j].nota == notaMenor) {
      salida += "Codigo: " + json.estudiantes[j].codigo + " -- " + "Nombre: " + json.estudiantes[j].nombre + " -- " + "Nota: " + json.estudiantes[j].nota + "<br>";
    }

    document.getElementById("resultado").innerHTML = salida + "<br> <br>";

  }
}


function mostrarListaEstudiantes() {
  leerJSON(objetoJSON);
}

function mostrarPromedioGeneral() {
  calcularPromedio(objetoJSON);
}

function mostrarNotaMayor() {
  buscarNotaMayor(objetoJSON);
}

function mostrarNotaMenor() {
  buscarNotaMenor(objetoJSON);
}

function limpiarResultado() {
  document.getElementById("resultado").innerHTML = "";
}
