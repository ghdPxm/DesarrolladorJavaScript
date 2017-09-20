function crearElemento() {
  var encabezado = document.createElement("h1");

  //createTextNode permite crear un nodo de tipo texto
  var texto = document.createTextNode("Mi nuevo encabezado!!!");

  //creamos el nuevo elemento y se le asigna el valor del texto
  encabezado.appendChild(texto);

  //Agregamos el nuevo elemento creado al body para ser renderizado
  document.body.appendChild(encabezado);

}
