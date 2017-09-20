//=============Agregamos contenido de manera dinamica======

document.getElementById("mensaje1").innerHTML = "NEXTUNIVERSITY";
document.getElementById("mensaje2").innerHTML = "Programa de Certificacion de JavaScript";
document.getElementById("mensaje3").innerHTML = "Alumno: Gerardo Hernandez Diaz";
document.getElementById("mensaje4").innerHTML = "Demo: Manipulacion completa del DOM";
document.getElementById("mensaje5").innerHTML = "Continuemos!...";

//=============Agregamos estilo al los elementos =========

document.getElementById("mensaje1").style.backgroundColor = "green";
document.getElementById("mensaje2").style.backgroundColor = "red";
document.getElementById("mensaje3").style.backgroundColor = "orange";
document.getElementById("mensaje4").style.backgroundColor = "cyan";
document.getElementById("mensaje5").style.backgroundColor = "blue";

//=====creamos elementos de tipo h1 y le agregamos valores==========

//Creamos el elemento h1
var encabezado = document.createElement("h1");
//Asignamos atributos
encabezado.setAttribute("id", "mensaje6");
//Creamos un nodo texto
var texto =  document.createTextNode("Nuevo encabezado creado !!!");
//Se agrega al elemento h1 creando anteriormente
encabezado.appendChild(texto);
//Agregamos el elemento h1 al body
document.body.appendChild(encabezado);

//============= modicar un par de elementos del documento ============

document.getElementById("mensaje6").style.backgroundColor = "black";
document.getElementById("mensaje6").style.color = "white";
