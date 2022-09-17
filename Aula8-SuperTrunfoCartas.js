var carta1 = {
  nome: "Bulbasauro",
  imagem:
    "https://thenexus.one/storage/2022/09/Pokemon-Bulbasaur-Halloween-Fan-Design-696x348.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem:
    "https://img.olhardigital.com.br/wp-content/uploads/2020/11/20201130114919.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var carta3 = {
  nome: "Shiryu de Dragão",
  imagem:
    "https://64.media.tumblr.com/648cd45a36b4faa66748f92c01541441/ba30d29544844fc9-18/s400x600/f3f884adb1351d931afde12c25012b646354e46a.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();

}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  exibirCartaMaquina();
  console.log("jogar")
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado")
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'>Venceu Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = false;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }

  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='"
      + atributo + "'>"
      + atributo + " "
      + cartaMaquina.atributos[atributo]
      + "<br>";
  }

  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}