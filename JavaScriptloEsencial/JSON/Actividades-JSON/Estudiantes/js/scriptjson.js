var jsonText = '{"estudiantes":['+
'{"codigo": "001", "nombre": "Maria"},'+
'{"codigo": "002", "nombre": "Pedro"},'+
'{"codigo": "003", "nombre": "Raul"}'+
']}';

 var jsObj = JSON.parse(jsonText);

function leerJSON(json) {
  var salida = "-------------------------------------- <br>";

  for (var i = 0; i < json.estudiantes.length; i++) {
    salida += "Codigo: " + json.estudiantes[i].codigo + " == " + "Nombre: " + json.estudiantes[i].nombre + "<br>";
  }

  document.getElementById("datos").innerHTML = salida;
  
}

function verLista() {
  leerJSON(jsObj);
}
