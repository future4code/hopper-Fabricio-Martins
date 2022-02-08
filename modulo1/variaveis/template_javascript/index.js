// 1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
//     ```jsx
//     let a = 10
//     let b = 10
    
//     console.log(b)
    
//     b = 5
//     console.log(a, b)
//     ```
// -------------------------------------------------------------------------------------------
// resposta 1

// >>>>>  console.log(b) = 10
// >>>>>  console.log(a, b) = 10 5


// -------------------------------------------------------------------------------------------

// 2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
//     ```jsx
//     let a = 10
//     let b = 20
//     c = a
//     b = c
//     a = b
    
//     console.log(a, b, c)
//     ```
// -------------------------------------------------------------------------------------------

// resposta 2

// >>>>>  console.log(a, b, c) = 10 10 10

// -------------------------------------------------------------------------------------------

// 3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.
    
//     ```jsx
//     let p = prompt("Quantas horas você trabalha por dia?")
//     let t = prompt("Quanto você recebe por dia?")
//     alert(`Voce recebe ${t/p} por hora`)
//     ```

// -------------------------------------------------------------------------------------------
// resposta 3


let horasTrabalhadas = Number(prompt("Quantas horas você trabalha por dia?"))
let valorDia = Number(prompt("Quanto você recebe por dia?"))
let valorHora = valorDia/horasTrabalhadas

console.log("Você recebe R$" , valorHora, " por hora ")
