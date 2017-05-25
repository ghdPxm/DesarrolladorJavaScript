Number.prototype.metodoResta = function () {
  return this - 20;
};

var valor = 80;

document.getElementById('resultado').innerHTML = valor.metodoResta();
