var jsonText = '{"ventas":[' +
'{"codigo": "4587", "valor": 299},'+
'{"codigo": "3877", "valor": 2147},'+
'{"codigo": "2214", "valor": 458},'+
'{"codigo": "8752", "valor": 258},'+
'{"codigo": "5478", "valor": 14},'+
'{"codigo": "3698", "valor": 123},'+
'{"codigo": "3547", "valor": 254},'+
'{"codigo": "2154", "valor": 874},'+
'{"codigo": "2544", "valor": 85},'+
'{"codigo": "5782", "valor": 1254}'+
']}';

var objetoJson = JSON.parse(jsonText);

function listarVentas(json) {
  var ventas = "------------- Ventas del dia -------------- <br>";

  for (var i = 0; i <  json.ventas.length; i++) {
    ventas += "Codigo de venta: " + json.ventas[i].codigo + "    --    " + "Valor: " + json.ventas[i].valor + "<br>";
  }
  document.getElementById("ventas").innerHTML = ventas;
}


function listarTotalVentas(json) {
  var salida = "------------- Monto total de ventas en el dia -------------- <br>";
  var totalventas = 0;

  for (var i = 0; i <  json.ventas.length; i++) {
    totalventas =  totalventas + json.ventas[i].valor;
  }
  document.getElementById("total-ventas").innerHTML = salida + totalventas;
}

function verVentas() {
  listarVentas(objetoJson);
}

function verTotalVentas() {
  listarTotalVentas(objetoJson);
}
