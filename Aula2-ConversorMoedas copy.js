/*function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  var elementovalorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementovalorConvertido.innerHTML = valorConvertido;
  }*/
/*var valorEmReal = [];
var valorEmBitcoin = valorEmReal / 109782.57.toFixed(2)
var valorEmDolar = valorEmReal / 5.15.toFixed(2)
var valorEmEuro = valorEmReal / 5.23.toFixed(2)
var valorEmLibra = valorEmReal / 5.97.toFixed(2)

function 

function Converter() {
  var valorElemento = document.getElementById("valor")
  var valor = valorElemento.value
  var elementovalorConvertido = document.getElementById("valorConvertido")
  elementovalorConvertido.innerHTML = valorConvertido;
  if (valorEmBitcoin) {
    var valorConvertido = "O resultado em Bitcoin é BTC " + valorEmBitcoin
  } else if (valorEmDolar) {
    var valorConvertido = "O resultado em Dolar é $ " + valorEmBitcoin
  } else if (valorEmEuro) {
    var valorConvertido = "O resultado em Euro é € " + valorEmBitcoin
    //símbolo euro tecla alt pressionada + 0128
  } else if (valorEmLibra) {
    var valorConvertido = "O resultado em Libra é £ " + valorEmBitcoin
    //simbolo libra alt pressionado + 156
  } else {
    console.error("Moeda Inválida")
  }
}*/

function Converter() {
  var valorElemento = document.getElementById("valor").value
  var valor = ""
  var valorConvertido = document.getElementById("valorConvertido")

  if (parseInt(valorElemento) > 0) {
    var moedaSelecionada = Moedas()



    switch (moedaSelecionada) {
      case "bitcoin":
        valor = ("O resultado em Bitcoin é BTC " + valorElemento / 109782.57)
        break;
      case "dolar":
        valor = ("O resultado em Dolar é $ " + (valorElemento / 5.15).toFixed(2))
        break;
      case "euro":
        valor = (`O resultado em Euro é € ${(valorElemento / 5.23).toFixed(2)}`)
        break;
      case "libra":
        valor = ("O resultado em Libra é £ " + (valorElemento / 5.97).toFixed(2))
        break;

      default: valor = "O valor digitado é inválido"
        break;
    }
  } else {
    valor = "O valor digitado deve ser maior do que zero"
  }

  valorConvertido.innerText = valor
}

function Moedas() {
  var listaDeMoedas = document.getElementsByName("moeda")
  var moedaSelecionada = ""

  for (var i = 0; i < listaDeMoedas.length; i++) {
    if (listaDeMoedas[i].checked == true) {
      moedaSelecionada = listaDeMoedas[i].value
    }
  }
  return moedaSelecionada;
}