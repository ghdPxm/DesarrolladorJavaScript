var elementosLabel = document.getElementsByTagName("label");

var elementosInput = document.getElementsByTagName("input");

var elementosTextarea =  document.getElementsByTagName("textarea");

var elementosParrafo = document.getElementsByTagName("p");

var salida = "Este documento cueta con: \n " +
elementosLabel.length + " elementos de tipo <label> \n " +
elementosInput.length + " elementos de tipo <input> \n " +
elementosTextarea.length + " elementos de tipo <textarea> y \n " +
elementosParrafo.length + " elementos de tipo <p> ";

alert(salida);
