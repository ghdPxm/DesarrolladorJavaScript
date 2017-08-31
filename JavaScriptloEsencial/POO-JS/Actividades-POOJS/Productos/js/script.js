function Producto(codigo, nombre, cantidad, precio) {

  this.codigo = codigo;
  this.nombre = nombre;
  this.cantidad =  cantidad;
  this.precio = precio;

  //Metodo mostrar()
  this.mostrar = function() {

    /*
    Otra solucion

    var propiedades="";

		    	propiedades+="Codigo: "+this.codigo+"<br>";
		    	propiedades+="Nombre: "+this.nombre+"<br>";
		    	propiedades+="Cantidad: "+this.cantidad+"<br>";
		    	propiedades+="Precio: "+this.precio+"<br>";

          document.getElementById("datos-productos").innerHTML =propiedades;


    */

    document.getElementById("datos-productos").innerHTML = "Codigo: <strong>" + this.codigo + "</strong> <br> Nombre: " + this.nombre + "<br> Cantidad: " + this.cantidad + "<br> Precio: $ " + this.precio;
  };

}

//Obeto producto de la clase Producto
var producto = new Producto(4512, "Papas sabrita", 21, 7.50);

//Funcion miFuncion para invocar el metodo mostrar de la clase Producto
function miFuncion(argument) {
  producto.mostrar();
}
