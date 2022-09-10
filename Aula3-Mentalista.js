var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value)

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou"
  } else if (isNaN(chute) || (chute > 10 || chute < 0)) {
    elementoResultado.innerHTML = ("Você deve digitar um número de 0 a 10")
  }
  else {
    elementoResultado.innerHTML = "Errou, o número secreto era " + numeroSecreto
  }


  console.log(chute);



}