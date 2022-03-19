// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
        return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayordenado = array.sort()

 

    return arrayordenado 
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
    ie=0

    const numerosPares = []

      while (ie<=array.length) {

          if (array[ie]%2===0){

              numerosPares.push(array[ie])

}

          ie ++}
    return numerosPares 
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    ie=0

    const numerosPares = []

      while (ie<=array.length) {

          if (array[ie]%2===0){

              numerosPares.push(array[ie]*array[ie])

}

          ie ++}
    return numerosPares 

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    i = 0

    let maior = 0
   
   while (i<=array.length) {
   
     if (maior<array[i]){
   
       maior = array[i]
   
   }
   
     i ++
   
   }
   
   return maior 
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objetoMaior = 0
let objetoMenor = 0
    if (num1>num2){objetoMaior = num1 ;objetoMenor = num2 }else{objetoMaior = num2 ; objetoMenor = num1}
if (objetoMaior%objetoMenor===0){maiorDivisivelMenor=true}else{maiorDivisivelMenor=false}
const diferenca = objetoMaior-objetoMenor
const objetoGeral = {"maiorNumero":objetoMaior,"maiorDivisivelPorMenor":maiorDivisivelMenor,"diferenca":diferenca}

return  objetoGeral
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 



}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}