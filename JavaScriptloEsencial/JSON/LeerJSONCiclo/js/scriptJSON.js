var jsonText = '{"empresas":['+
'{"nit": "3432-1", "nombre": "TCC", "telefono": "3324993", "email": "tcc@hotmail.com"},'+
'{"nit": "5567-1", "nombre": "Movistar", "telefono": "3556566", "email": "movistar@hotmail.com"},'+
'{"nit": "67657-1", "nombre": "Nokia", "telefono": "345667", "email": "nokia@hotmail.com"},'+
'{"nit": "77887-1", "nombre": "Exito", "telefono": "378789", "email": "exito@hotmail.com"},'+
'{"nit": "90923-1", "nombre": "Postobon", "telefono": "3435346", "email": "postobon@hotmail.com"},'+
'{"nit": "89889-1", "nombre": "Puma", "telefono": "323446", "email": "puma@hotmail.com"},'+
'{"nit": "69079-1", "nombre": "Mexichen", "telefono": "456566", "email": "mexichen@hotmail.com"},'+
'{"nit": "88966-1", "nombre": "Compaq", "telefono": "565787", "email": "compaq@hotmail.com"},'+
'{"nit": "344355-1", "nombre": "Alacatel", "telefono": "698790", "email": "alcatel@hotmail.com"},'+
'{"nit": "880909-1", "nombre": "Sony", "telefono": "88989898", "email": "sony@hotmail.com"}'+
']}';


var jsObj = JSON.parse(jsonText);

function leerJSON(json) {
  var salida = "------------- Empresas ------------ <br>";
  var i;

  for (i = 0; i < json.empresas.length; i++) {
    salida += "Nit: " + json.empresas[i].nit + " - " + "Nombre: " + json.empresas[i].nombre + " - " + "Telefono: " + json.empresas[i].telefono + " - " + "E-mail: " + json.empresas[i].email + "<br>";
  }

  document.getElementById("empresas").innerHTML =  salida;
}

leerJSON(jsObj);
