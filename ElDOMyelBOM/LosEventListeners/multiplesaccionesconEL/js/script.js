document.getElementById("btnMostrarMensaje").addEventListener("click", mensajeUno);
document.getElementById("btnMostrarMensaje").addEventListener("click", mensajeDos);

function mensajeUno() {
  alert("Alerta uno");
}

function mensajeDos(){
  alert("Alerta dos");
}

//Esta forma es con la funcion incluida dentro de los parametros
/*
document.getElementById("btnMostrarMensaje").addEventListener("click", function () {
  alert("Alerta uno");
  alert("Alerta dos");
});*/
