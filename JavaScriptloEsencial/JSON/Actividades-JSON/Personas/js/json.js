var jsonText = '{"personas":['+
'{"nombre": "Jaun", "edad": 22 },' +
'{"nombre": "Raul", "edad": 45},' +
'{"nombre": "Pedro", "edad": 17 },' +
'{"nombre": "Maria", "edad": 12},' +
'{"nombre": "Ramiro", "edad": 22},' +
'{"nombre": "Alberto", "edad": 32},' +
'{"nombre": "Miguel", "edad": 16},' +
'{"nombre": "Angel", "edad": 18},' +
'{"nombre": "Maurilio", "edad": 19},' +
'{"nombre": "Eduardo", "edad": 14}' +
']}';

var jsObj = JSON.parse(jsonText);

function listaPersonas(json) {
  var lista = "------------ Lista de Personas ---------- <br>";

  for (var i = 0; i < json.personas.length; i++) {
    lista += "Nombre: " + json.personas[i].nombre + " -- " + "Edad: " + json.personas[i].edad + "<br>";
  }
  document.getElementById("personas").innerHTML = lista;
}

function listaPersonasMayores(json) {
  var lista = "------------ Lista de Personas Mayores---------- <br>";

  for (var i = 0; i < json.personas.length; i++) {
    if (json.personas[i].edad >= 18) {
          lista += "Nombre: " + json.personas[i].nombre + " -- " + "Edad: " + json.personas[i].edad + "<br>";
    }
  }
  document.getElementById("personas-mayores").innerHTML = lista;
}

function verPersonas() {
  listaPersonas(jsObj);
}

function verMayores() {
  listaPersonasMayores(jsObj);
}
