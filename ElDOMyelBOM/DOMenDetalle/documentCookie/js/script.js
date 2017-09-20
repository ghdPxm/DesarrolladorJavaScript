function cookies() {
  var miDiv = document.getElementById("midiv");

  document.cookie = "Usuario = Gerardo"; //Se crea la cookie

  miDiv.innerHTML = "El valor de la Cookie es: " + document.cookie;
}
