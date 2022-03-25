// // 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// //_____________________________________________________________________________________________________//
// //     ```jsx
// //    console.log('a. ', array)
  
// //resposta>>> variavel não possui valor

// //_____________________________________________________________________________________________________//
//     //  array = null
//     //  console.log('b. ', array)

// // resposta>>>   b. null

// //_____________________________________________________________________________________________________//

// //     array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// //     console.log('c. ', array.length)
    

// // resposta>>> c. 11

// //_____________________________________________________________________________________________________//

// //   let i = 0
// //    console.log('d. ', array[i])
    

// // resposta>>> d. variavel array nao foi declarada

// //_____________________________________________________________________________________________________//

// //     array[i+1] = 19
// //     console.log('e. ', array)

// // resposta>>> variavel definida de forma incorreta   

// //_____________________________________________________________________________________________________//
    
// //     const valor = array[i+6]
// //     console.log**('f. ', valor)**
// //     ```


// // resposta>>> variavel array não foi definida   

// //_____________________________________________________________________________________________________//

// // 2. Leia o código abaixo com atenção 
    
// //     ```jsx
// //    const frase = prompt("Digite uma frase")


    
// //    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// //     ```
    
// //     Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?


// // resposta>>> SUBI NUM ÔNIBUS EM MIRROCOS 27

// //_____________________________________________________________________________________________________//

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
    
//     - 💡  Dica
        
//         <aside>
//         ⭐ Você pode fazer isso de duas formas:
//         - Concatenando as strings (com o sinal de +)
//         - Utilizando template strings (e envelopando a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
        
//         </aside>

let nomeDoUsuario = prompt("Qual seu nome ? :")
let emailDoUsuario= prompt("Qual seu endereço de e-mail : ")
console.log(` O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario} !`)



// //_____________________________________________________________________________________________________//        
// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//     a) Imprima no console o array completo
    
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista


let comida1 = prompt("DIGITE SUA COMIDA PREDILETA N°1: ")
const lista = [comida1]

let comida2 = prompt("DIGITE SUA COMIDA PREDILETA N°2: ")
lista.push(comida2)

let comida3 = prompt("DIGITE SUA COMIDA PREDILETA N°3: ")
lista.push(comida3)

let comida4 = prompt("DIGITE SUA COMIDA PREDILETA N°4: ")
lista.push(comida4)

let comida5 = prompt("DIGITE SUA COMIDA PREDILETA N°5: ")
lista.push(comida5)
    
//     a) Imprima no console o array completo
console.log(`Esta é a lista completa de comidas que você gosta ${lista} !`)
    
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
console.log(`Esta é a lista completa de comidas que você gosta ${lista} !`)

//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

comida2 = prompt("Qaul sua comida preferida: ")
lista[2]=comida2
console.log(`Esta é a lista completa de comidas que você gosta ${lista} !`)





// //_____________________________________________________________________________________________________//  
// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

   let listaDeTarefas = []



//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let tarefa1 = prompt("DIGITE SUA TAREFA N°1: ")
listaDeTarefas = [tarefa1]

let tarefa2 = prompt("DIGITE SUA TAREFA N°2: ")
listaDeTarefas.push(tarefa2)

let tarefa3 = prompt("DIGITE SUA TAREFA N°3: ")
listaDeTarefas.push(tarefa3)


//     c) Imprima o array no console

console.log(listaDeTarefas)
    
//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
let indice=Number(prompt("Digite tarefa foi concluida para retiar da lista:"))


//     e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(indice,1)
    
//     f) Imprima o array no console

console.log(`Segue as pendencias da lista ${listaDeTarefas}`)


// //_____________________________________________________________________________________________________//
//     - 💡  Dica
        
//         <aside>
//         ⭐ Para remover um item de um array, você pode utilizar a função splice!
//         Caso não se lembre como ela funciona, não tem nenhum problema: uma breve pesquisa no google te trará vários exemplos.
        
//         </aside>