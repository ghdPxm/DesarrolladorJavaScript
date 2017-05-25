Number.prototype.metodoSuma = function() {
    return this + 10;
}

var valor = 47;

document.getElementById('resultado').innerHTML = valor.metodoSuma();
