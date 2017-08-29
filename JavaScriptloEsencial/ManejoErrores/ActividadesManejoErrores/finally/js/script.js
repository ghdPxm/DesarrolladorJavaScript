function miFuncion() {
  try {
    var estudiante = null;

   alert(estudiante.nombre);
  } catch (e) {
    alert("Existe un error " + " - " + e);
  }finally{
    document.getElementById("mensaje").innerHTML = "Estamos en la sentencia FINALLY!!";
  }
}
