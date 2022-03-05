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
    let escolha = confirm(`Bem vindo ao jogo de Black Jack!

    Quer iniciar nova Rodada? `)

   
    
    const cartaUsuario = [comprarCarta(),comprarCarta()]
   
    const cartaPc = [comprarCarta(),comprarCarta()]   
    

//8 - Se as duas cartas iniciais do usuário ou do computador forem dois ases (A), as cartas devem ser sorteadas novamente.

    function verificaAs(){

      if (cartaPc[0].valor===11 || cartaUsuario[1].valor===11 || cartaPc[0].valoor===11 || cartaPc[1].valor===11){cartaUsuario = [comprarCarta(),comprarCarta()],cartaPc = [comprarCarta(),comprarCarta()]}
    }

    if (escolha===false){alert("O Jogo Acabou")}else{verificaAs()
  
//9 - Após o sorteio das 2 cartas para cada jogador, as duas primeiras cartas do usuário continuam sendo reveladas. A primeira carta do computador é revelada, a segunda é oculta por enquanto. Você deve perguntar ao usuário se ele deseja comprar mais uma carta. Veja abaixo:
 

     let escolha2 = confirm(`Suas cartas são ${cartaUsuario[0].texto}  -  ${cartaUsuario[1].texto} .  A carta revelada do computador é ${cartaPc[0].texto}
   
   Deseja comprar mais uma carta ? ` )
       
   let somaUsuario1 = cartaUsuario[0].valor + cartaUsuario[1].valor 
   let somaPc1 = cartaPc[0].valor + cartaPc[1].valor 
   let resultado1 = 0

if (escolha2===false){alert()}else{comprar()}


    }



   // 10 - A cada carta comprada pelo usuário, a pontuação dele será somada com o valor da nova carta. Ele poderá comprar cartas até atingir a pontuação de 21 pontos; ou até decidir parar de comprar. Assim que o usuário chegar no limite de pontuação, a mensagem de fim de jogo deve ser mostrada, indicando quem venceu. Veja abaixo, uma sequência possível de mensagens mostradas ao usuário (usando confirm e alert)

    
function comprar(){
   
   cartaUsuario.push(comprarCarta())
   let escolha3 = confirm(`Suas cartas são ${cartaUsuario[0].texto}  -  ${cartaUsuario[1].texto} -  ${cartaUsuario[2].texto} .  A carta revelada do computador é ${cartaPc[0].texto} `)
   
}
 

 let somaUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor + cartaUsuario[2].valor
 let somaPc = cartaPc[0].valor + cartaPc[1].valor 
 let resultado = 0



function result(){

if (somaUsuario>somaPc&&somaUsuario<=21){resultado="Você é Vencedor"}else if(somaUsuario===somaPc<=21){resultado="Houve empate!!!"}else{resultado="Computador é Vencedor"}
let escolha4 = confirm(`Suas cartas são ${cartaUsuario[0].texto}  -  ${cartaUsuario[1].texto} -  ${cartaUsuario[2].texto} . 



Resultado : ${resultado}`)}



   









