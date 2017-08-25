var nota = 4.5;

if (nota > 3.0 && nota < 4.0) {
  document.getElementById('mensaje').innerHTML = "Su nota es de nivel medio";
} else if (nota > 4.0 && nota < 5.0) {
  document.getElementById('mensaje').innerHTML = "Su nota es de nivel alto";
} else{
  document.getElementById('mensaje').innerHTML = "Su nota es de nivel bajo";

}
