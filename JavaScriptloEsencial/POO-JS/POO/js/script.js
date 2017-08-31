function Persona(nombre, edad, ciudad, email) {//Clase Persona

  //Definicion de los atributos de la clase Persona
  this.nombre = nombre;
  this.edad = edad;
  this.ciudad = ciudad;
  this.email = email;

  //Metodo saludar() definido para la clase Persona
  this.saludar = function() {
    document.getElementById("saludo1").innerHTML = "Hola mi nombre es " + this.nombre + "Y mi edad es " + this.edad;
  };

}

//Creacion de un objeto de la case Persona

var persona = new Persona("Gerardo Hernandez", "31", "Puerto Escondido, Oax", "ghd.inf@gmail.com");

//Funcion que invoca el metodo saludar() de la clase persona
function miFuncion1(argument){
  persona.saludar();//Se invoca el metodo saludar() desde el obejto persona
}

function miFuncion2(argument) {
//Acceso a los atributos ciudad e email del objeto persona
document.getElementById("saludo2").innerHTML = "Soy de " + persona.ciudad + " Y mi E-Mail es " + persona.email;
}
