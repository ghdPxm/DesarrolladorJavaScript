var mensaje ="";

  mensaje += String(15) + '<br>';
  mensaje += String(3 + 4) + '<br>';
  mensaje += String(true) + '<br>';
  mensaje += String(false) + '<br>';
  mensaje += String(Date()) + '<br>';
  mensaje += String(30) + '<br>';
  mensaje += String(40 * 8) + '<br>';
  mensaje += String(4 > 5) + '<br>';
  mensaje += String(6 < 9) + '<br>';


  document.getElementById("valores").innerHTML = mensaje;
