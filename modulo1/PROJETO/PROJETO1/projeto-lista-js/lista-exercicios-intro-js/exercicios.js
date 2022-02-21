// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let larguraRetangulo=Number(prompt("Digite a largura do retangulo: "))
  let alturaRetangulo=Number(prompt("Digite a altura do retangulo: "))
  let resultadoDaArea = larguraRetangulo*alturaRetangulo
  console.log(resultadoDaArea)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  
  let anoHoje =Number(prompt("Digite o ano que estamos atualmente: "))
  let anoNascimento=Number(prompt("Digite o ano de seu nacimento: "))
  let idade = anoHoje-anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso/(altura*altura)

}



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let NOME =prompt("digite seu nome:")
let IDADE = prompt("digite sua idade:")
let EMAIL = prompt("digite seu email:")

  console.log(`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}.`)



}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 =prompt("digite sua cor favorita:")
  let cor2 = prompt("digite mais uma cor favorita:")
  let cor3 = prompt("digite outra cor favorita:")
  array = [cor1,cor2,cor3]
  console.log(array)
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui


return string.toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return custo/valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length== string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 
 let primeiro = array[0]
 
  array[0]=array[array.length -1]
  array[array.length -1]=primeiro


  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  string1=string1.toUpperCase()
  string2=string2.toUpperCase()


  return string1==string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Qual ano atual:"))
let anoNacsimento = Number(prompt("qual ano voce nasceu ? "))
let anoIndentidade = Number(prompt("Qual ano voce tirou carteira indentidade"))
let idade = anoAtual - anoNacsimento
let tempoCarteira = anoAtual - anoIndentidade
let jovens =  tempoCarteira>=5
let adultos = tempoCarteira>=10
let idosos =  tempoCarteira>=15
let retorno=0

//não conseguir fazer exercicio sem utilizar  if 
if ((idade<=20)) {retorno=jovens}else if((idade>20&&idade<=50)){retorno=adultos}else if((idade>50)){retorno=idosos}

return  console.log(retorno)

}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 != 0)
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos")
  let ensinoMedio = prompt("tem ensino médio completo?")
  let disponibilidadeHorário = prompt("tem disponibilidade de horários?")
  let idede1 = idade.includes("sim")
  let ensinoMedio1 = ensinoMedio.includes("sim")
  
  let disponibilidadeHorário1 = disponibilidadeHorário.includes("sim")
  let idadeEnsino = idede1 && ensinoMedio1
  console.log(idadeEnsino && disponibilidadeHorário1)
}