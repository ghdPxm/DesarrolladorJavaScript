Number.prototype.metodoMultiplicacion = function () {
  return this * 12;
};

var valor = 65;

document.getElementById('resultado').innerHTML = valor.metodoMultiplicacion();
