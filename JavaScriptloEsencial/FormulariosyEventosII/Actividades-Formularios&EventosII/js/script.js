function vienvenida() {
  alert("Bienvenid@ al sistema de registro...");
  document.getElementById("codigo").focus();
}

function evento_onfocus(elemento) {
  elemento.style.background = "#00aaff";
}

function evento_onblur(elemento) {
  elemento.style.background = "#ffffff";
}

function evento_onclick() {
 alert("Los datos seran enviados al servidor.");
}
