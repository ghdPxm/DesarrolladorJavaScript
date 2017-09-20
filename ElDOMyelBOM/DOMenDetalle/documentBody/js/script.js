function ponerTitulo() {
  //Obtenemos el primer elemento hijo de la etiqueta body
  var div = document.body.children[0];

  var texto = document.createTextNode("Los valores humanos");

  div.appendChild(texto);

}
