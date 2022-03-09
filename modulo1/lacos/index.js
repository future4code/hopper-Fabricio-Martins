

// // 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

 

 let quantidadePets = prompt("Quantos animais você tem ? ")

let nomePets = []    

// //     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

 

 if (quantidadePets <= 0) { console.log("Que pena! Você pode adotar um pet!")}else if(quantidadePets>=1){

 

   

// //     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

   
 for (nomePets = []; quantidadePets > nomePets.length; nomePets.push(prompt(`Qual nome do seu pet n°${nomePets.length+1}`))) {

   


 }

// //     c) Por fim, imprima o array com os nomes dos bichinhos no console

 

 console.log(nomePets)
 }else{console.log("Era pra digita um numero!!!")}




   

// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//     a) Escreva um programa que **imprime** cada um dos valores do array original.

let i=0
while (i<=arrayOriginal.length-1) {console.log(arrayOriginal[i])
    i++
}
 

// //     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

let    i=0
while (i<=arrayOriginal.length-1) {console.log(arrayOriginal[i]/10)
    i++
}

//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

const newArrey = []


for (let i = 0; i < arrayOriginal.length; i++) {
    
    if (arrayOriginal[i]%2===0){
    newArrey.push(arrayOriginal[i]);
    
    }
 
}
console.log(newArrey)






//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

const novoArray = []


for (let i = 0; i < arrayOriginal.length; i++) {
    
   
     novoArray.push(arrayOriginal[i]);
    
    
    console.log(`O elemento do índex ${i} é ${novoArray[i]}`)
}


   

//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    let maiorNumero = 0;
    let menorNumero = 1000000000000;
    


   for (let index = 0; index < arrayOriginal.length; index++) {
    let numeroDaVez = arrayOriginal[index];
    
    if (numeroDaVez<=menorNumero){menorNumero = numeroDaVez}else if (numeroDaVez>=maiorNumero){maiorNumero=numeroDaVez};


   }
    
   console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)



