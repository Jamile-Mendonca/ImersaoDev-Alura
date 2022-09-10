var nome = "Guilherme"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2
//toFixed(x)- definir quantidade de casas decimais
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

var status = ""
if (notaFixada >= 6) {
  status = "Aprovado"
} else {
  status = "Reprovado"
}
console.log(notaFixada)

document.write("<p>" + notaFixada + "</p>")
document.write("<p>" + status + "</p>")