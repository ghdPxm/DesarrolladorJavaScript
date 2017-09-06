function sumar() {

  //Recuperamos los valores desde cada uno de los elementos
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  //1ro se valida y 2o se realiza la operacion
  if (validar(num1, num2)) {
    var res = num1 + num2;
    alert("La suma es: " + res);
  }else{
    alert("La suma es: " + res);
  }
}

function restar() {
  //Recuperamos los valores desde cada uno de los elementos
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  //1ro se valida y 2o se realiza la operacion
  if (validar(num1, num2)) {
    var res = num1 - num2;
    alert("La resta es: " + res);
  }else{
    alert("Formato incorrecto de numeros!!!");
  }
}

function multiplicar() {
  //Recuperamos los valores desde cada uno de los elementos
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  //1ro se valida y 2o se realiza la operacion
  if (validar(num1, num2)) {
    var res = num1 * num2;
    alert("La multiplicacion es: " + res);
  }else{
    alert("Formato incorrecto de numeros!!!");
  }
}

function dividir() {
  //Recuperamos los valores desde cada uno de los elementos
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  if (validar(num1, num2)) {
    var res = num1 / num2;

    if (res == Infinity) {
      alert("Division entre cero!");
      document.getElementById("res").value = "";
    }else{
      alert("La division es: " + res);
    }
  }else {
    alert("Formato incorrecto de numeros");
  }
}

function validar(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }else {
    return true;
  }
}

function hacerTabla() {
  var tabla = "";
  var num = parseFloat(document.getElementById("num").value);

  if (isNaN(num) == false) {
    tabla += 'TABLA DE ' + num + '<br>';
    for (var i = 0; i <= 10; i++) {
      tabla += num + ' x ' + i + ' = ' + num * i + '<br>';
    }
    document.getElementById("tabla").innerHTML = tabla;
  }else {
    alert("Formato incorrecto de numeros!!!")
  }

}
