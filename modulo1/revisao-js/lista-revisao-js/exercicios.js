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

let numerosPares = []
let i = 0
while (i<n) {
    let pares = i*2
    numerosPares.push(pares)
    i++
}
return numerosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
let resposta = ["Escaleno","Isósceles","Equilátero"]
let retorno = 0
if(ladoA===ladoB&&ladoB===ladoC){retorno=resposta[2]}else if(ladoA!==ladoB&&ladoB!==ladoC&&ladoA!==ladoC){retorno=resposta[0]}else{retorno=resposta[1]}
    
return retorno
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b);
    let resultado=[];
    
    resultado.push(array[(array.length)-2]);
    resultado.push(array[1]);

    return resultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   


    let retorno = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${ filme.atores}.`

    return retorno
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
let retorno = pessoa
retorno.nome = "ANÔNIMO";

return retorno
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    pessoasAutorizadas = []
    pessoasNaoAutorizadas = []
   for (let i = 0; i < pessoas.length; i++) {
      if (pessoas[i].idade>14&&pessoas[i].idade<60&&pessoas[i].altura>1.5) {
          
           pessoasAutorizadas.push(pessoas[i])
      }else{pessoasNaoAutorizadas.push(pessoas[i])}
        
   }


    return pessoasAutorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    pessoasAutorizadas = []
    pessoasNaoAutorizadas = []
   for (let i = 0; i < pessoas.length; i++) {
      if (pessoas[i].idade>14&&pessoas[i].idade<60&&pessoas[i].altura>1.5) {
          
           pessoasAutorizadas.push(pessoas[i])
      }else{pessoasNaoAutorizadas.push(pessoas[i])}
        
   }


    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
let resposta = [...consultas.nome.sort()]

return resposta

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}