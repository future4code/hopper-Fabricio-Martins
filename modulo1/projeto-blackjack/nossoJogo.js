/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// 1.Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

console.log("Boas vindas ao jogo de Blackjack!")

// 2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
let confirmacao = confirm("Quer iniciar uma nova rodada?")


// 4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.
function novaRodada(){
   

//  5 - Nós preparamos um método que permite sortear uma carta. Ele já está pronto e você só precisa invocá-lo. Cada carta sorteada é um objeto com duas propriedades: um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta. 

   console.log("Que comecem os jogos")
   const usuario  = [comprarCarta(), comprarCarta()]


 //  6 - Nós preparamos um método que permite sortear uma carta. Ele já está pronto e você só precisa invocá-lo. Cada carta sorteada é um objeto com duas propriedades: um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta. 

   console.log(`Usuario - cartas 1: ${usuario [0].texto}  ${usuario [1].texto} - pontuação ${(usuario [1].valor)+(usuario [0].valor)}}`)

   const computador = [comprarCarta(), comprarCarta()]
   console.log(`Computador - cartas 1: ${computador[0].texto}  ${computador[1].texto} - pontuação ${(computador[1].valor)+(computador[0].valor)}}`)


//7 - Além disso, deve indicar o vencedor ou um empate

   
   let pointPC = (computador[1].valor)+(computador[0].valor)
   let pointUser= (usuario [1].valor)+(usuario [0].valor)

         if (pointUser>pointPC && pointUser<=21){console.log("O usuário ganhou!")}else if(pointUser<pointPC && pointPC<=21){ console.log("O Computador ganhou!")}else if(pointUser===pointPC && pointUser<=21){console.log("É Empate")}else{console.log("Joge novamente")}
        
}


// 2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".

if (confirmacao===true){novaRodada()}else{console.log("O jogo Acabou")}


