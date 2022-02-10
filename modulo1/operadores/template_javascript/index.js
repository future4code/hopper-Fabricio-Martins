// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
    
   
    // const bool1 = true
    // const bool2 = false
    // const bool3 = !bool2
    
    // let resultado = bool1 && bool2
    // console.log("a. ", resultado)
    
    // resultado = bool1 && bool2 && bool3 
    // console.log("b. ", resultado) 
    
    // resultado = !resultado && (bool1 || bool2) 
    // console.log("c. ", resultado)
    
    // console.log("d. ", typeof resultado)




    // Valor a ser impresso:

    // a.  false 
    // b.  false 
    // c.  true 
    // d.  boolean

// 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
    
//     ```jsx
//     let primeiroNumero = prompt("Digite um numero!")
//     let segundoNumero = prompt("Digite outro numero!")
    
//     const soma = primeiroNumero + segundoNumero
    
//     console.log(soma)
//     ```

// Vamos ajudá-lo: consegue perceber algum problema? 
//  necessitamos converter para Number

// O que será impresso no console? 

// // "primeiroNumero + segundoNumero"

// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

//     let primeiroNumero = Number(prompt("Digite um numero!"))
//     let segundoNumero = Number(prompt("Digite outro numero!"))


// Exercícios de escrita de código


// 1. Faça um programa que:
    
//     a) Pergunte a idade do usuário
    
//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
    
//     - 💡  Dica
        
//         <aside>
//         ☝ Dica: não se esqueça de converter as respostas para o tipo **número**
        
//         </aside>

let idadeUsuario = Number(prompt("Qual seu Idade: "))

let idadeAmiga = Number(prompt("Qual idade do seu melhor amigo ou da sua melhor amiga: "))

let resposta = idadeUsuario > idadeAmiga

console.log("Sua idade é maior do que a do seu melhor amigo?" , resposta)

        
    
// 2. Faça um programa que:
    
//     a) Peça ao usuário que insira um número **par**
    
//     b) Imprima na console **o resto da divisão** desse número por 2.
    
//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
    
//     - 💡  Dica
        
//         <aside>
//         ☝ Dica: não se esqueça de converter as respostas para o tipo número
        
//         </aside>

let numeroPar = Number(prompt("Digite um numero PAR: "))
let resto = numeroPar%2
console.log("*o resto da divisão** desse número por 2 é :" , resto)

// quando digitamos numeros pares o resto resulta em 0, quando digitamos um valor impar resulta em valores acima de zero!!


    
// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
//     a) A idade do usuário em meses
    
//     b) A idade do usuário em dias
    
//     c) A idade do usuário em horas
    

let idadeUsuario2 = Number(prompt("Qual seu Idade: "))
let meses = idadeUsuario2*12
let dias = idadeUsuario2*365
let horas = dias*24
console.log("Voce viveu :" ,meses," meses" )
console.log("Voce viveu :" ,dias," dias" )
console.log("Voce viveu :" ,horas," horas" )

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
    
// //     ```html
// //     O primeiro numero é maior que segundo? true
// //     O primeiro numero é igual ao segundo? false
// //     O primeiro numero é divisível pelo segundo? true
// //     O segundo numero é divisível pelo primeiro? true

let n1 = Number(prompt("Digite primeiro numero: "))
let n2 = Number(prompt("Digite segundo numero: "))
let res1 = n1 > n2
let res2 = n1 == n2
let res3 = n1 > (n1%n2)
let res4 = n2 > (n2%n1)


console.log("O primeiro numero é maior que segundo?" ,res1 )
console.log("O primeiro numero é igual ao segundo?" ,res2 )
console.log("O primeiro numero é divisível pelo segundo?" ,res3 )
console.log("O segundo numero é divisível pelo primeiro?" ,res4 )