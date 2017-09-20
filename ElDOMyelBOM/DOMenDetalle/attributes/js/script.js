function mostrarAtributos() {
  var atributos = "";

  var miDiv = document.getElementById("miDiv");

  for (var i = 0; i < miDiv.attributes.length; i++) {
    atributos += miDiv.attributes[i].name + " : " + miDiv.attributes[i].value + "<br>";
  }

  document.getElementById("p1").innerHTML = atributos;
}
