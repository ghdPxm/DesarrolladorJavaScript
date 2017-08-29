function miFuncion1() {
  try {
    var numero1 = 50;
    var numero = numero1 + numero2;//La variable numero2 no esta definida

  } catch (e) {
    alert("Existe un error" + "-" + e.message);
  }
}

function miFuncion2(){
  try {
    var persona =  null;
    var nombre = persona.nombre;//Se esta tratando de acceder a un objeto null
  } catch (e) {
    alert("Existe un error" + "-" + e.message);
  }
}
