function mensajeBienvenida() {
  alert("Bienvenido a su formato de Hoja de Vida");
  document.getElementById("textNombre").focus();
}

function aMayusNombre() {
  var mayusculas = document.getElementById("textNombre");
  mayusculas.value = mayusculas.value.toUpperCase();

}

function aMayusApellidos() {
  var mayusculas = document.getElementById("textApellidos");
  mayusculas.value = mayusculas.value.toUpperCase();
}

function seleccionTexto() {
  alert("Texto seleccionado!!");
}

function enviar() {
  alert("Su Hoja de Vida ha Sido Guardada Correctamente");
}

function restablecer() {
  alert("Se ha restablecido el Texto!!!");

}
