function Estudiante(codigo, nombre, nota1, nota2) {
//Atributos
  this.codigo = codigo;
  this.nombre = nombre;
  this.nota1 =  nota1;
  this.nota2 = nota2;

//Metodo promedio()

this.promedio = function() {
    var promedio = (this.nota1 + this.nota2) / 2;

    var datos = "";

    datos += "Estudiante: " + this.codigo + " - " + this.nombre + " - <br>";
    datos += "Promedio actual: " + promedio;

    document.getElementById("promedio").innerHTML = datos;
    };
}

//Objeto Estudiante
var estudiante = new Estudiante(05730296, "Gerardo Hernandez", 7.5, 8.2);

function miFuncion(argument) {
  estudiante.promedio();
}
