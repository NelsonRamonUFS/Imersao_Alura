var dollarValor = parseFloat(prompt("Qual valor em dolar que você quer converter"))

var valorEmReal = dollarValor * 5.54

var vlrRealFilter = valorEmReal.toFixed(2)
var Valor = document.getElementById('Valor')

Valor.textContent = vlrRealFilter;