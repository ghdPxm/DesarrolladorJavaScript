function registrarAlumno() {
  var encabezado = document.createElement("h4");
  var texto = document.createTextNode("Alumno Registrado");

  encabezado.appendChild(texto);

  document.body.appendChild(encabezado);

  document.getElementById("nombres").focus();
}

function cambiarTitulo() {
document.body.children[0].innerHTML = "Registro de Docentes";
}

function cambiarColor() {
var labels = document.getElementsByTagName("label");

var heads = document.getElementsByTagName("h1");

heads[0].style.color = "red";

for (var i = 0; i < labels.length; i++) {
  labels[i].style.color = "red";
}
}
