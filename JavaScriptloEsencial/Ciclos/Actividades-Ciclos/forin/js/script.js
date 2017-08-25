function mostrar_datos() {
var texto = "Datos clientes: <br>";
var clientes = {
  nombre: "Edgar",
  apellidos: "Ruiz Lopez",
  edad: 28,
  direccion: "Av. los Almendros",
};

var x;

for (x in clientes) {
 texto += clientes[x] + "<br>";
}
  document.getElementById("salida").innerHTML = texto;
}
