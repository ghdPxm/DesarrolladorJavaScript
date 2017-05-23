//Primer forma para crea un Objeto
var producto1 = {
  codigo: "0001",
  nombre: "Gorra",
  precio: 5000
}

//Segunda forma para crear un Objeto
var producto2 = new Object();
producto2.codigo = "005";
producto2.nombre = "Camiseta";
producto2.precio = 7000;


//Tercera forma para crear un Objeto
function producto3(codigo, nombre, precio) {
  this.codigo = codigo;
  this.nombre =  nombre;
  this.precio = precio;
}

var producto3 = new producto3("008", "Zapatos", 45000);

//Accediendo a las propiedades de los objetos para mostrarlas

document.getElementById('c1').innerHTML = producto1.codigo;
document.getElementById('n1').innerHTML = producto1.nombre;
document.getElementById('p1').innerHTML = producto1.precio;

document.getElementById('c2').innerHTML = producto2.codigo;
document.getElementById('n2').innerHTML = producto2.nombre;
document.getElementById('p2').innerHTML = producto2.precio;

document.getElementById('c3').innerHTML = producto3.codigo;
document.getElementById('n3').innerHTML = producto3.nombre;
document.getElementById('p3').innerHTML = producto3.precio;
