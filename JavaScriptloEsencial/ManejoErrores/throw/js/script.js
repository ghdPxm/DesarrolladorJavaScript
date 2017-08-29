function miFuncion1() {
  try {
    var mensaje = "Esto es un mensaje desde javascript";

    if (isNaN(parseInt(mensaje))) {
      throw "Parametro pasado al metodo parseInt no es un numero";
    }
  } catch (e) {
      alert("Existe un error!" + " - " + e );
  }
}

function miFuncion2() {
  try {
    var res = 45/0;

if (res == Infinity) {
  throw "Division entre cero no es valida!";
}
  } catch (e) {
    alert("Existe un error!" + " - " + e );
  }

}
