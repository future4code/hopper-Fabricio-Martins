// ```jsx
// const respostaDoUsuario = prompt("Digite o número que você quer testar")

// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// ```

// a) Explique o que o código faz. Qual o teste que ele realiza?

//ele verifica se numero passado pelo usuario tem resto zero divido por dois ou seja se ele for par ele é aprovado se for impar é negativo 

// b) Para que tipos de números ele imprime no console "Passou no teste"? 

// numeros pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?

//impares




// 2)

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
   
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?
// para determinar preço da fruta emitida pelo usuarioa


// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta maça é R$ 2.25




// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço da fruta  pera  é  R$  5






// ```jsx
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Esse número passou no teste"
// }

// console.log(mensagem)
// ```

// a) O que a primeira linha está fazendo?
//armazenando um numero do tipo number

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// 10 = Esse número passou no teste
// Esse número passou no teste


// undefine


// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// havera erro pois se resultado meno que 0 codigo entre chaves nao sera executado com isso console log  a baixo não ira reconhecer varial chamada.




//Exercícios de escrita de código


// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).


    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`



//const idade = Number(prompt("Qual sua idade:"))

//if (idade<18) {console.log(`Você é de maior pode dirigir`)} else {console.log("Você é menor de idade precisa crescer para dirigir")}


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
//     - 💡 Dica
        
//         <aside>
//         ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
//         Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)
        
//         </aside>
        
//         Se o usuário digitar "V", a saída deve ser:
        
//         ```
//         "Boa Tarde!"
//         ```

//const turno = prompt("Digite **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno):")
 //       turno = turno.toLocaleUpperCase
//    if (turno === "M"){console.log("Bom dia")}else if(turno === "V"){console.log("Boa tarde")}else{console.log("Boa tarde")}


// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
//     - 💡 Dica
        
//         <aside>
//         ⭐ Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)
        
//         </aside>
//        switch (turno){
 //           case "M": console.log("Bom dia")
 //           break
//            case "V": console.log("Boa Tarde")
 //           break
 ///           case "N": console.log("Boa Noite")
 ///           break
 //           default : console.log("Por favor digite conforme enunciado")
               

//        }


    
// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

//<<<<<<< projeto-blackjack
//const filme = {genero:"FANTASIA"} 
//=======
// filme = {genero:"fantasia"} 
//>>>>>>> master

//let generoDoFilme = prompt("Qual Genero do filme? :")
//let valorDoFilme = Number(prompt("Qual Valor do filme? :"))
//generoDoFilme = generoDoFilme.toLocaleUpperCase

//<<<<<<< projeto-blackjack
//if (generoDoFilme===filme.genero && valorDoFilme<=15){console.log("Bom Filme!")}else{console.log("Escolha outro Filme")}
///=======
//if (generoDoFilme==="FANTASIA" && valorDoFilme<=15){console.log("Bom Filme!")}else{console.log("Escolha outro Filme")}
//>>>>>>> master
