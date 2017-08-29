function miFuncion1() {

try {
  var edad = 60;

  calcular(edad);
  
} catch (e) {
  alert("Existe un Error" + " - " + e.message);
} finally {
   document.getElementById("mensaje").innerHTML = "Seguimos pese al error";
}


}
