Number.prototype.metodoDivision = function () {
  return this / 2;
};

var valor = 48;

document.getElementById('resultado').innerHTML = valor.metodoDivision();
